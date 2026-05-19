import { createHash } from "node:crypto";

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Daily-rotating salt so an IP can be counted-as-unique within a day but
 * not linked across days. Derived from a server-side secret + the UTC day
 * number. Falls back to a fixed string in dev so behaviour is deterministic
 * without env wiring.
 */
function dailySalt(): string {
  const secret = process.env.TRACKING_SALT ?? "nootropicpeptides-default-salt";
  const day = Math.floor(Date.now() / DAY_MS);
  return `${secret}:${day}`;
}

export function hashIp(ip: string | null | undefined): string | null {
  if (!ip) return null;
  return createHash("sha256").update(`${ip}:${dailySalt()}`).digest("hex").slice(0, 32);
}

const BROWSER_PATTERNS: Array<[RegExp, string]> = [
  [/Edg\//, "Edge"],
  [/OPR\//, "Opera"],
  [/Chrome\//, "Chrome"],
  [/Firefox\//, "Firefox"],
  [/Safari\//, "Safari"],
  [/curl\//i, "curl"],
  [/wget/i, "wget"],
  [/bot|crawler|spider/i, "Bot"],
];

export function uaShort(ua: string | null | undefined): string | null {
  if (!ua) return null;
  for (const [re, name] of BROWSER_PATTERNS) {
    if (re.test(ua)) return name;
  }
  return "Other";
}

export function clientIp(headers: Headers): string | null {
  return (
    headers.get("cf-connecting-ip") ??
    headers.get("x-real-ip") ??
    headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null
  );
}

export function refererPath(referer: string | null | undefined): string | null {
  if (!referer) return null;
  try {
    return new URL(referer).pathname;
  } catch {
    return null;
  }
}
