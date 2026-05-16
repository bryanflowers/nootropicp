import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PeptidePageContent } from "@/components/peptide/PeptidePageContent";
import { peptides, getPeptideBySlug, getAllSlugs } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) return {};
  const title = `${peptide.name} — Mechanism, Research & UK Regulatory Status`;
  const description = `${peptide.tagline} Mechanism of action, clinical studies summary, safety profile, dosing, and UK/EU regulatory context.`;
  return buildMetadata({
    title,
    description,
    path: `/peptides/${peptide.slug}`,
    type: "article",
    keywords: peptide.keywords,
  });
}

export default async function PeptidePage({ params }: Params) {
  const { slug } = await params;
  const peptide = getPeptideBySlug(slug);
  if (!peptide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${peptide.name} — Research Peptide Profile`,
    description: peptide.tagline,
    about: peptide.name,
    keywords: peptide.keywords.join(", "),
    url: `${SITE.url}/peptides/${peptide.slug}`,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    mainEntity: {
      "@type": "MedicalSubstance",
      name: peptide.name,
      alternateName: peptide.aliases,
      description: peptide.overview[0],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: peptide.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Container className="py-10 lg:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PeptidePageContent peptide={peptide} />
    </Container>
  );
}

// Type-only assertion so TS knows peptides is imported (re-exported via getAllSlugs)
export const _peptideCount = peptides.length;
