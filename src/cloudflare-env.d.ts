declare global {
  interface CloudflareEnv {
    DB?: D1Database;
    TURNSTILE_SECRET_KEY?: string;
    SHEETS_SYNC_SECRET?: string;
  }
}

export {};
