# Cloudflare registration form setup

The application code, D1 migration, API endpoint, Turnstile validation, and Târgu Jiu form integration are already implemented. Complete the account-level steps below before enabling live submissions.

## 1. Sign in to Cloudflare from Wrangler

```bash
npx wrangler login
```

## 2. Create the D1 database

```bash
npx wrangler d1 create swr-submissions
```

Add the returned database ID to `wrangler.toml`:

```toml
[[d1_databases]]
binding = "DB"
database_name = "swr-submissions"
database_id = "PASTE_DATABASE_ID_HERE"
migrations_dir = "migrations"
```

Apply the migration locally and remotely:

```bash
npx wrangler d1 migrations apply swr-submissions --local
npx wrangler d1 migrations apply swr-submissions --remote
```

## 3. Create the Turnstile widget

In the Cloudflare dashboard, create a Turnstile widget for `startupweekendromania.com`. Copy its site key and secret key.

Store the public site key in an uncommitted `.env.production.local` file so Next.js can include it in the browser bundle during the build:

```dotenv
NEXT_PUBLIC_TURNSTILE_SITE_KEY=PASTE_SITE_KEY_HERE
```

Store the secret key as a Worker secret:

```bash
npx wrangler secret put TURNSTILE_SECRET_KEY
```

For local testing, create an uncommitted `.dev.vars` file with Cloudflare's Turnstile test secret and put the matching test site key in `.env.local`.

## 4. Generate binding types and test

```bash
npx wrangler types
npm run preview
```

Submit one Târgu Jiu registration and verify it locally:

```bash
npx wrangler d1 execute swr-submissions --local --command "SELECT * FROM event_registrations;"
```

## 5. Deploy and verify

```bash
npm run deploy
```

Submit one registration on the live Târgu Jiu page, then verify it remotely:

```bash
npx wrangler d1 execute swr-submissions --remote --command "SELECT * FROM event_registrations ORDER BY created_at DESC LIMIT 5;"
```

The API rejects duplicate email addresses for the same city. The `status` column supports `new`, `contacted`, `accepted`, and `rejected`.
