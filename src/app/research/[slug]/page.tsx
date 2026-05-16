import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { researchSummaries, getResearchBySlug } from "@/data/research";
import { getPeptidesForResearch } from "@/components/peptide/RelatedResearch";
import { getPeptideBySlug } from "@/data/peptides";
import { ArrowRight } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
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

  const linkedPeptides = getPeptidesForResearch(r.slug)
    .map((s) => getPeptideBySlug(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: r.title },
        ]}
      />
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
      {linkedPeptides.length > 0 && (
        <Section eyebrow="Discussed in this summary" title="Related peptide profiles" className="mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {linkedPeptides.map((p) => (
              <Card key={p.slug}>
                <CardBody>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{p.name}</h4>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.tagline}</p>
                  <Link
                    href={`/peptides/${p.slug}`}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
                  >
                    Read profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                </CardBody>
              </Card>
            ))}
          </div>
        </Section>
      )}
    </Container>
  );
}
