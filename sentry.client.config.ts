import * as Sentry from "@sentry/nextjs";
const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
if (dsn) {
  Sentry.init({
  release: process.env.VERCEL_GIT_COMMIT_SHA ?? process.env.NEXT_PUBLIC_GIT_SHA ?? "unknown",
    dsn,
    tracesSampleRate: 0.1,
    environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT ?? "production",
    sendDefaultPii: false,
  });
}
