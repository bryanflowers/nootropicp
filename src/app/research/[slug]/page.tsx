import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { researchSummaries, getResearchBySlug } from "@/data/research";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return researchSummaries.map((r) => ({ slug: r.slug }));
}

export const dynamicParams = false;

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const r = getResearchBySlug(slug);
  if (!r) return {};
  return buildMetadata({
    title: r.title,
    description: r.excerpt,
    path: `/research/${r.slug}`,
    type: "article",
    keywords: r.keywords,
  });
}

export default async function ResearchSummaryPage({ params }: Params) {
  const { slug } = await params;
  const r = getResearchBySlug(slug);
  if (!r) notFound();

  return (
    <Container className="py-10 lg:py-14">
      <Link href="/research" className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
        ← Back to research
      </Link>
      <article className="mt-6 max-w-3xl">
        <Badge variant="brand" className="mb-3">Research summary</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">{r.title}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{r.excerpt}</p>
        <div className="prose mt-8 max-w-none">
          {r.body.map((p, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/peptides">Browse all peptides</ButtonLink>
          <ButtonLink href="/research" variant="outline">More research summaries</ButtonLink>
        </div>
      </article>
    </Container>
  );
}
