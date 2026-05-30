// Server-side Sentry bootstrap. Re-imports the existing config files; does
// NOT pull any auto-instrumentation packages (Prisma/MongoDB/etc.) that
// previously broke builds. Added by migration/rollout_instrumentation.js.
import type { Instrumentation } from "next";

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError: Instrumentation.onRequestError = async (err, request, context) => {
  const Sentry = await import("@sentry/nextjs");
  Sentry.captureRequestError(err, request, context);
};
