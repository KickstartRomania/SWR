import { getCloudflareContext } from "@opennextjs/cloudflare";

type RegistrationRow = {
  id: string;
  event_city: string;
  full_name: string;
  email: string;
  phone: string;
  role: string;
  created_at: string;
  status: string;
};

export async function GET(request: Request) {
  const { env } = await getCloudflareContext({ async: true });
  const authorization = request.headers.get("authorization");

  if (!env.SHEETS_SYNC_SECRET || authorization !== `Bearer ${env.SHEETS_SYNC_SECRET}`) {
    return Response.json(
      { ok: false, message: "Unauthorized." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!env.DB) {
    return Response.json(
      { ok: false, message: "Database unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  const result = await env.DB.prepare(
    `SELECT id, event_city, full_name, email, phone, role, created_at, status
     FROM event_registrations
     ORDER BY created_at ASC
     LIMIT 1000`,
  ).all<RegistrationRow>();

  return Response.json(
    {
      ok: true,
      registrations: result.results.map((row: RegistrationRow) => ({
        id: row.id,
        createdAt: row.created_at,
        city: row.event_city,
        fullName: row.full_name,
        email: row.email,
        phone: row.phone,
        role: row.role,
        status: row.status,
      })),
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
