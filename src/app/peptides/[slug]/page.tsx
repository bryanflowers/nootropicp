import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { PeptidePageContent } from "@/components/peptide/PeptidePageContent";
import { RelatedResearch } from "@/components/peptide/RelatedResearch";
import { NewsletterSignup } from "@/components/layout/NewsletterSignup";
import { peptides, getPeptideBySlug, getAllSlugs } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { estimateReadingTime } from "@/lib/utils";

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

  const fullText = [
    peptide.tagline,
    ...peptide.overview,
    ...peptide.history,
    ...peptide.mechanism,
    ...peptide.benefits,
    ...peptide.studies.map((s) => `${s.title} ${s.summary}`),
    ...peptide.faqs.map((f) => `${f.q} ${f.a}`),
  ].join(" ");
  const readingMinutes = estimateReadingTime(fullText);

  const url = `${SITE.url}/peptides/${peptide.slug}`;

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: peptide.name,
    url,
    description: peptide.tagline,
    lastReviewed: peptide.lastReviewed,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    audience: { "@type": "MedicalAudience", audienceType: "MedicalResearcher" },
    about: {
      "@type": "MedicalSubstance",
      name: peptide.name,
      alternateName: peptide.aliases,
      description: peptide.overview[0],
      activeIngredient: peptide.sequence ?? peptide.name,
      mechanismOfAction: peptide.mechanism.join(" "),
      legalStatus: peptide.ukStatus,
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${peptide.name} — Research Peptide Profile`,
    description: peptide.tagline,
    keywords: peptide.keywords.join(", "),
    url,
    datePublished: peptide.lastReviewed,
    dateModified: peptide.lastReviewed,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/og-default.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
      <JsonLd data={[medicalWebPage, articleSchema, faqSchema]} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Peptides", href: "/peptides" },
          { label: peptide.name },
        ]}
      />
      <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
        <span>{readingMinutes} min read</span>
        {peptide.lastReviewed && (
          <>
            <span aria-hidden>·</span>
            <span>
              Last reviewed{" "}
              {new Date(peptide.lastReviewed).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </>
        )}
      </div>
      <PeptidePageContent peptide={peptide} />
      <Section eyebrow="Further reading" title="Related research summaries" className="mt-4">
        <RelatedResearch peptideSlug={peptide.slug} />
      </Section>
      <div className="mt-10">
        <NewsletterSignup />
      </div>
    </Container>
  );
}

export const _peptideCount = peptides.length;
