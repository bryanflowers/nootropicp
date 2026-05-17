import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ALL_TAGS, TAG_LABELS, getPeptidesByTag } from "@/lib/cluster";
import type { PeptideTag } from "@/types/peptide";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return ALL_TAGS.map((t) => ({ tag: t }));
}

export const dynamicParams = false;

interface Params {
  params: Promise<{ tag: string }>;
}

function isValidTag(t: string): t is PeptideTag {
  return (ALL_TAGS as readonly string[]).includes(t);
}

export async function generateMetadata({ params }: Params) {
  const { tag } = await params;
  if (!isValidTag(tag)) return {};
  const label = TAG_LABELS[tag];
  return buildMetadata({
    title: `${label.name} peptides — Research peptides by mechanism tag`,
    description: label.description,
    path: `/peptides/tag/${tag}`,
    keywords: [label.name.toLowerCase(), `${label.name.toLowerCase()} peptide`, "peptide mechanism"],
  });
}

export default async function TagPage({ params }: Params) {
  const { tag } = await params;
  if (!isValidTag(tag)) notFound();
  const label = TAG_LABELS[tag];
  const items = getPeptidesByTag(tag);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label.name} peptides`,
    url: `${SITE.url}/peptides/tag/${tag}`,
    description: label.description,
    isPartOf: { "@type": "WebSite", url: SITE.url, name: SITE.name },
    hasPart: items.map((p) => ({
      "@type": "MedicalWebPage",
      name: p.name,
      url: `${SITE.url}/peptides/${p.slug}`,
      description: p.tagline,
    })),
  };

  return (
    <Container>
      <JsonLd data={collectionSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Peptides", href: "/peptides" },
          { label: label.name },
        ]}
      />
      <Section
        eyebrow="Mechanism tag"
        title={`${label.name} peptides`}
        description={label.description}
      >
        {items.length === 0 ? (
          <p className="text-sm text-slate-600 dark:text-slate-400">
            No peptides in the library carry this tag currently.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <Link
                key={p.slug}
                href={`/peptides/${p.slug}`}
                className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                <Card className="h-full transition-shadow group-hover:shadow-lg">
                  <CardBody>
                    <Badge variant="brand" className="mb-2">{p.category}</Badge>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.tagline}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                      Read profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-2">
          {ALL_TAGS.filter((t) => t !== tag).map((t) => (
            <Link
              key={t}
              href={`/peptides/tag/${t}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {TAG_LABELS[t].name}
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
