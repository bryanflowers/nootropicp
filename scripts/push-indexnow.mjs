#!/usr/bin/env node
// One-shot script to push every site URL to IndexNow (Bing + Yandex + Naver).
// Pulls the URL list from the live sitemap.xml so it stays in sync with the
// generated Next.js sitemap. Run from repo root: `node scripts/push-indexnow.mjs`.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nootropicpeptides.co.uk";
const KEY = process.env.INDEXNOW_KEY ?? "b8e3c2a4f1d94d7e9a5c8b6f3e1d2a7c";
const HOST = new URL(SITE_URL).host;

async function main() {
  console.log(`Fetching sitemap from ${SITE_URL}/sitemap.xml ...`);
  const res = await fetch(`${SITE_URL}/sitemap.xml`);
  if (!res.ok) {
    console.error(`Failed to load sitemap: ${res.status}`);
    process.exit(1);
  }
  const xml = await res.text();
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g))
    .map((m) => m[1].trim())
    .filter(Boolean);

  console.log(`Found ${urls.length} URLs. Submitting to IndexNow...`);

  // IndexNow accepts up to 10,000 URLs per request; we're well under that.
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `${SITE_URL}/${KEY}.txt`,
    urlList: urls,
  };

  const submitRes = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await submitRes.text().catch(() => "");
  console.log(`IndexNow response: ${submitRes.status} ${submitRes.statusText}`);
  if (text) console.log(text);

  if (!submitRes.ok && submitRes.status !== 202) {
    process.exit(1);
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
