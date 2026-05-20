import { SITE } from "./site";

export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ?? "b8e3c2a4f1d94d7e9a5c8b6f3e1d2a7c";

const HOST = new URL(SITE.url).host;

interface IndexNowSubmitResult {
  ok: boolean;
  status: number;
  body?: string;
}

/**
 * Submit URLs to IndexNow (Bing + Yandex + Naver). Up to 10,000 URLs per call.
 * The IndexNow key file must already be reachable at https://<HOST>/<KEY>.txt
 * containing the key as its only content.
 */
export async function submitToIndexNow(urls: string[]): Promise<IndexNowSubmitResult> {
  if (urls.length === 0) return { ok: true, status: 0, body: "no urls" };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE.url}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  const body = await res.text().catch(() => "");
  return { ok: res.ok, status: res.status, body };
}
