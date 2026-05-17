import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  CATEGORIES,
  CATEGORY_BLURBS,
  categoryToSlug,
  slugToCategory,
  getPeptidesByCategory,
} from "@/lib/cluster";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: categoryToSlug(c) }));
}

export const dynamicParams = false;

interface Params {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { category } = await params;
  const cat = slugToCategory(category);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat} peptides — Research peptide library by category`,
    description: CATEGORY_BLURBS[cat],
    path: `/peptides/category/${category}`,
    keywords: [`${cat.toLowerCase()} peptides`, `research peptides ${cat.toLowerCase()}`],
  });
}

export default async function CategoryPage({ params }: Params) {
  const { category } = await params;
  const cat = slugToCategory(category);
  if (!cat) notFound();
  const items = getPeptidesByCategory(cat);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat} peptides`,
    url: `${SITE.url}/peptides/category/${category}`,
    description: CATEGORY_BLURBS[cat],
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
          { label: cat },
        ]}
      />
      <Section
        eyebrow="Category"
        title={`${cat} peptides`}
        description={CATEGORY_BLURBS[cat]}
      >
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
        <div className="mt-8 flex flex-wrap gap-3">
          {CATEGORIES.filter((c) => c !== cat).map((c) => (
            <Link
              key={c}
              href={`/peptides/category/${categoryToSlug(c)}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              Browse {c} →
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
