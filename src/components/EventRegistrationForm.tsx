"use client";

import { FormEvent, useState } from "react";
import Script from "next/script";
import { DoodleButton } from "@/components/DoodleButton";

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string };

export function EventRegistrationForm({ city }: { city: "targu-jiu" }) {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submission.status === "submitting" || !turnstileSiteKey) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmission({ status: "submitting" });

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city,
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          role: formData.get("role"),
          consent: formData.get("consent") === "yes",
          turnstileToken: formData.get("cf-turnstile-response"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Registration failed. Please try again.");
      }

      form.reset();
      setSubmission({ status: "success" });
    } catch (error) {
      window.turnstile?.reset();
      setSubmission({
        status: "error",
        message: error instanceof Error ? error.message : "Registration failed. Please try again.",
      });
    }
  }

  if (submission.status === "success") {
    return (
      <div className="rounded-2xl border-2 border-black bg-[#FEF9C3] p-6 text-center" role="status">
        <h4 className="font-heading font-bold text-2xl mb-2">You&apos;re registered!</h4>
        <p className="font-medium text-foreground/70">We&apos;ll contact you with the next steps.</p>
      </div>
    );
  }

  return (
    <>
      {turnstileSiteKey && (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor={`${city}-full-name`} className="block font-bold mb-2">Full Name</label>
          <input
            id={`${city}-full-name`}
            name="fullName"
            type="text"
            autoComplete="name"
            minLength={2}
            maxLength={120}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white"
          />
        </div>

        <div>
          <label htmlFor={`${city}-email`} className="block font-bold mb-2">Email Address</label>
          <input
            id={`${city}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white"
          />
        </div>

        <div>
          <label htmlFor={`${city}-phone`} className="block font-bold mb-2">Phone Number</label>
          <input
            id={`${city}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            minLength={6}
            maxLength={40}
            required
            placeholder="+40 123 456 780"
            className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 transition-all hover:bg-gray-50 bg-white"
          />
        </div>

        <div>
          <label htmlFor={`${city}-role`} className="block font-bold mb-2">Your Role</label>
          <select
            id={`${city}-role`}
            name="role"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl border-2 border-black focus:outline-none focus:ring-4 focus:ring-sw-blue/30 appearance-none bg-white transition-all hover:bg-gray-50 cursor-pointer"
          >
            <option value="" disabled>Select your role</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="business">Business / Marketing</option>
            <option value="other">Other</option>
          </select>
        </div>

        <label className="flex items-start gap-3 text-sm font-medium text-foreground/70">
          <input name="consent" value="yes" type="checkbox" required className="mt-1 h-4 w-4 accent-sw-blue" />
          <span>I agree that Startup Weekend Romania may use these details to manage my event registration.</span>
        </label>

        {turnstileSiteKey ? (
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="light" />
        ) : (
          <p className="rounded-xl border-2 border-yellow-500 bg-yellow-50 p-3 text-sm font-medium text-foreground/70">
            Registration will open after the security check is configured.
          </p>
        )}

        {submission.status === "error" && (
          <p className="rounded-xl border-2 border-red-500 bg-red-50 p-3 text-sm font-medium text-red-700" role="alert">
            {submission.message}
          </p>
        )}

        <div className="pt-4">
          <DoodleButton
            type="submit"
            variant="cta"
            disabled={submission.status === "submitting" || !turnstileSiteKey}
            className="w-full justify-center disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submission.status === "submitting" ? "Registering..." : "Register Now"}
          </DoodleButton>
        </div>
      </form>
    </>
  );
}
