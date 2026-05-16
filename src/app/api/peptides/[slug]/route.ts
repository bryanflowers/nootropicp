import { getPeptideBySlug, peptides } from "@/data/peptides";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return new Response("Not found", { status: 404 });
  return Response.json(
    { ...peptide, url: `${SITE.url}/peptides/${peptide.slug}` },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
