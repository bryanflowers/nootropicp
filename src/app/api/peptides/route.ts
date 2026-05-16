import { peptides } from "@/data/peptides";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const data = peptides.map((p) => ({
    ...p,
    url: `${SITE.url}/peptides/${p.slug}`,
  }));
  return Response.json(data, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
