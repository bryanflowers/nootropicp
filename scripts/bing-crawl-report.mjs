#!/usr/bin/env node
// Pulls a daily Bing Webmaster diagnostic snapshot and writes it to ./reports/.
// Alerts to stdout when any crawl threshold is breached. Run nightly via
// Windows Task Scheduler or the `/loop` skill.
//
// Reads: BING_API_KEY env var (or falls back to inline default for this account)
// Writes: ./reports/bing-YYYY-MM-DD.json
//
// Run: `node scripts/bing-crawl-report.mjs`

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const KEY = process.env.BING_API_KEY ?? "d974bbfd4af94b87a0c30430e73e219d";
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nootropicpeptides.co.uk/";
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPORTS_DIR = resolve(ROOT, "reports");

const ALERT_THRESHOLDS = {
  Code4xx: 0,
  Code5xx: 0,
  CrawlErrors: 3,
  DnsFailures: 0,
  ConnectionTimeout: 0,
};

const ENDPOINTS = [
  "GetCrawlStats",
  "GetCrawlIssues",
  "GetRankAndTrafficStats",
  "GetQueryStats",
  "GetUrlSubmissionQuota",
  "GetFeeds",
];

async function call(endpoint) {
  const url = `https://ssl.bing.com/webmaster/api.svc/json/${endpoint}?apikey=${KEY}&siteUrl=${encodeURIComponent(SITE)}`;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    const body = await res.json().catch(() => ({ error: "non-json" }));
    return { endpoint, ok: res.ok, status: res.status, body };
  } catch (err) {
    return { endpoint, ok: false, status: 0, body: { error: String(err) } };
  }
}

function findAlerts(stats) {
  if (!Array.isArray(stats)) return [];
  const today = stats[0];
  if (!today || typeof today !== "object") return [];
  const out = [];
  for (const [k, threshold] of Object.entries(ALERT_THRESHOLDS)) {
    const v = today[k];
    if (typeof v === "number" && v > threshold) {
      out.push(`${k}=${v} (>${threshold})`);
    }
  }
  return out;
}

async function main() {
  console.log(`Bing crawl report for ${SITE} @ ${new Date().toISOString()}`);
  const snapshot = { siteUrl: SITE, fetchedAt: new Date().toISOString(), endpoints: {} };

  for (const ep of ENDPOINTS) {
    const r = await call(ep);
    snapshot.endpoints[ep] = r;
    const count = Array.isArray(r.body?.d) ? r.body.d.length : "n/a";
    console.log(`  ${ep}: ${r.status} ok=${r.ok} count=${count}`);
  }

  const crawlStats = snapshot.endpoints.GetCrawlStats?.body?.d ?? [];
  const alerts = findAlerts(crawlStats);
  snapshot.alerts = alerts;

  if (alerts.length > 0) {
    console.log("");
    console.log("⚠️  ALERTS:");
    for (const a of alerts) console.log(`  - ${a}`);
  } else {
    console.log("✓ No threshold alerts");
  }

  const date = new Date().toISOString().slice(0, 10);
  await mkdir(REPORTS_DIR, { recursive: true });
  const out = resolve(REPORTS_DIR, `bing-${date}.json`);
  await writeFile(out, JSON.stringify(snapshot, null, 2));
  console.log(`Snapshot written: ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
