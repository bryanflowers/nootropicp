// Server-side Sentry bootstrap. Re-imports the existing config files; does
// NOT pull any auto-instrumentation packages (Prisma/MongoDB/etc.) that
// previously broke builds. Added by migration/rollout_instrumentation.js.

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

export const onRequestError = async (
  err: unknown,
  request: unknown,
  context: unknown,
) => {
  const Sentry = await import("@sentry/nextjs");
  // Sentry.captureRequestError exists on @sentry/nextjs >= 8.43 (paired
  // with Next 15's onRequestError hook). Guard for older versions so we
  // don't throw at runtime on Next 14 sites.
  if (typeof (Sentry as any).captureRequestError === "function") {
    (Sentry as any).captureRequestError(err, request, context);
  }
};
