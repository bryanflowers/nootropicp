import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { studies, getStudyBySlug } from "@/data/studies";
import { getPeptideBySlug } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { estimateReadingTime } from "@/lib/utils";

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const study = getStudyBySlug(slug);
  if (!study) return {};
  return buildMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/research/studies/${study.slug}`,
    type: "article",
    keywords: study.keywords,
  });
}

export default async function StudyDeepDivePage({ params }: Params) {
  const { slug } = await params;
  const study = getStudyBySlug(slug);
  if (!study) notFound();
  const peptide = getPeptideBySlug(study.peptideSlug);

  const fullText = study.sections.flatMap((sec) => [sec.heading, ...sec.body]).join(" ");
  const readingMinutes = estimateReadingTime(fullText);
  const url = `${SITE.url}/research/studies/${study.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: study.title,
    description: study.excerpt,
    keywords: study.keywords.join(", "),
    url,
    inLanguage: "en-GB",
    isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/og-default.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    about: peptide
      ? { "@type": "MedicalSubstance", name: peptide.name, description: peptide.tagline }
      : undefined,
  };

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={articleSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Study deep dives", href: "/research/studies" },
          { label: study.shortTitle },
        ]}
      />
      <article className="max-w-3xl">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="brand">{study.designType}</Badge>
          <Badge variant="muted">{study.yearRange}</Badge>
          <Badge variant="info">{study.jurisdiction}</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          {study.title}
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">{study.excerpt}</p>
        <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          {readingMinutes} min read{peptide ? <> · Subject: <Link href={`/peptides/${peptide.slug}`} className="font-medium text-brand-600 hover:underline dark:text-brand-400">{peptide.name}</Link></> : null}
        </div>

        <div className="mt-10 space-y-10">
          {study.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-slate-700 leading-relaxed dark:text-slate-300">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>

      {peptide && (
        <Section eyebrow="The subject peptide" title={`Full ${peptide.name} profile`} className="mt-8">
          <Card>
            <CardBody>
              <Badge variant="brand" className="mb-2">{peptide.category}</Badge>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{peptide.name}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{peptide.tagline}</p>
              <ButtonLink href={`/peptides/${peptide.slug}`} size="sm" className="mt-4">
                Read the {peptide.name} profile
              </ButtonLink>
            </CardBody>
          </Card>
        </Section>
      )}

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/research/studies">More study deep dives</ButtonLink>
        <ButtonLink href="/research" variant="outline">Research summaries</ButtonLink>
      </div>
    </Container>
  );
}
