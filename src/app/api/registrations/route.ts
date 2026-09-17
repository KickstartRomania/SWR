import { getCloudflareContext } from "@opennextjs/cloudflare";

const ALLOWED_CITIES = new Set(["targu-jiu"]);
const ALLOWED_ROLES = new Set(["developer", "designer", "business", "other"]);

type RegistrationPayload = {
  city?: unknown;
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  role?: unknown;
  consent?: unknown;
  turnstileToken?: unknown;
};

type TurnstileResult = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function jsonError(message: string, status: number) {
  return Response.json({ ok: false, message }, { status });
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return jsonError("Unsupported request format.", 415);
  }

  let payload: RegistrationPayload;
  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const city = text(payload.city, 40);
  const fullName = text(payload.fullName, 120);
  const email = text(payload.email, 254).toLowerCase();
  const phone = text(payload.phone, 40);
  const role = text(payload.role, 40);
  const turnstileToken = text(payload.turnstileToken, 2048);

  if (!ALLOWED_CITIES.has(city)) {
    return jsonError("This event is not accepting registrations.", 400);
  }

  if (fullName.length < 2 || !/^\S+@\S+\.\S+$/.test(email) || phone.length < 6 || !ALLOWED_ROLES.has(role)) {
    return jsonError("Please complete all required fields with valid information.", 400);
  }

  if (payload.consent !== true) {
    return jsonError("Please accept the privacy notice.", 400);
  }

  const { env } = await getCloudflareContext({ async: true });
  if (!env.DB || !env.TURNSTILE_SECRET_KEY) {
    return jsonError("Registration is not configured yet. Please try again later.", 503);
  }

  if (!turnstileToken) {
    return jsonError("Please complete the security check.", 400);
  }

  const verificationBody = new FormData();
  verificationBody.set("secret", env.TURNSTILE_SECRET_KEY);
  verificationBody.set("response", turnstileToken);
  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) verificationBody.set("remoteip", remoteIp);

  let verification: TurnstileResult;
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: verificationBody,
    });
    verification = await response.json();
  } catch {
    return jsonError("The security check is temporarily unavailable. Please try again.", 503);
  }

  if (!verification.success) {
    return jsonError("The security check expired or failed. Please try again.", 400);
  }

  try {
    await env.DB.prepare(
      `INSERT INTO event_registrations
        (id, event_city, full_name, email, phone, role, consent_version, created_at, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        crypto.randomUUID(),
        city,
        fullName,
        email,
        phone,
        role,
        "2026-09",
        new Date().toISOString(),
        "new",
      )
      .run();
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.toLowerCase().includes("unique")) {
      return jsonError("This email is already registered for the event.", 409);
    }
    console.error("Registration insert failed", error);
    return jsonError("We could not save your registration. Please try again.", 500);
  }

  return Response.json({ ok: true });
}
