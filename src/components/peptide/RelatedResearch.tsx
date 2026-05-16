import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { researchSummaries } from "@/data/research";

const PEPTIDE_TO_RESEARCH: Record<string, string[]> = {
  semax: ["bdnf-and-cognitive-peptides", "intranasal-peptide-delivery"],
  selank: ["peptides-and-anxiety-research", "intranasal-peptide-delivery"],
  dihexa: ["neurogenesis-research-overview", "bdnf-and-cognitive-peptides"],
  pinealon: ["neurogenesis-research-overview"],
  cerebrolysin: ["bdnf-and-cognitive-peptides", "neurogenesis-research-overview"],
  dsip: ["sleep-cognition-dsip-review"],
  noopept: ["bdnf-and-cognitive-peptides"],
  "n-acetyl-semax": ["bdnf-and-cognitive-peptides", "intranasal-peptide-delivery"],
  "n-acetyl-selank": ["peptides-and-anxiety-research", "intranasal-peptide-delivery"],
  "fgl-peptide": ["neurogenesis-research-overview"],
};

const RESEARCH_TO_PEPTIDES: Record<string, string[]> = {
  "intranasal-peptide-delivery": ["semax", "selank", "dsip"],
  "bdnf-and-cognitive-peptides": ["semax", "noopept", "cerebrolysin"],
  "neurogenesis-research-overview": ["dihexa", "fgl-peptide", "cerebrolysin"],
  "peptides-and-anxiety-research": ["selank", "n-acetyl-selank"],
  "sleep-cognition-dsip-review": ["dsip"],
};

export function getResearchForPeptide(slug: string): string[] {
  return PEPTIDE_TO_RESEARCH[slug] ?? [];
}

export function getPeptidesForResearch(slug: string): string[] {
  return RESEARCH_TO_PEPTIDES[slug] ?? [];
}

export function RelatedResearch({ peptideSlug }: { peptideSlug: string }) {
  const slugs = getResearchForPeptide(peptideSlug);
  if (slugs.length === 0) return null;
  const items = slugs
    .map((s) => researchSummaries.find((r) => r.slug === s))
    .filter((r): r is (typeof researchSummaries)[number] => Boolean(r));
  if (items.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((r) => (
        <Card key={r.slug}>
          <CardBody>
            <BookOpen className="mb-2 h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden />
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{r.title}</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{r.excerpt}</p>
            <Link
              href={`/research/${r.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              Read research summary <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
