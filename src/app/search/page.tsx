import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SearchPageClient } from "@/components/search/SearchPageClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Search — Find peptides, studies, mechanisms, and definitions",
  description:
    "Full-text search across the entire Nootropic Peptides reference — 15 peptides, 37 glossary terms, study deep dives, mechanism hubs, guides, comparisons, and use-case hubs.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <div className="py-6 lg:py-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Search</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Full-text search across peptides, glossary terms, studies, mechanism hubs, and guides.
        </p>
        <Suspense fallback={<p className="mt-8 text-sm text-slate-500">Loading…</p>}>
          <SearchPageClient />
        </Suspense>
      </div>
    </Container>
  );
}
