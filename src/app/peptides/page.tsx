import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { peptides } from "@/data/peptides";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import type { PeptideCategory } from "@/types/peptide";

export const metadata = buildMetadata({
  title: "Nootropic Peptide Library — 10 research peptides profiled",
  description:
    "Index of nootropic and brain-health research peptides — Semax, Selank, Dihexa, Pinealon, Cerebrolysin, DSIP, Noopept, N-Acetyl Semax, N-Acetyl Selank, FGL. Filter by category.",
  path: "/peptides",
  keywords: ["nootropic peptide list", "cognitive research peptides UK", "research peptide directory"],
});

const CATEGORIES: PeptideCategory[] = [
  "Cognitive Enhancement",
  "Neuroprotection",
  "Anxiolytic / Mood",
  "Sleep & Recovery",
  "Neurogenesis",
];

export default function PeptidesIndexPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Peptides" }]} />
      <Section
        eyebrow="Peptide library"
        title="All research peptides"
        description="Ten peptides covering cognitive enhancement, neuroprotection, anxiolytic effects, sleep modulation, and neurogenesis. All entries are for laboratory research reference only."
      >
        {CATEGORIES.map((category) => {
          const items = peptides.filter((p) => p.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category} className="mb-10">
              <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-100">{category}</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/peptides/${p.slug}`}
                    className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                  >
                    <Card className="h-full transition-shadow group-hover:shadow-lg">
                      <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                          <Badge variant="brand">{p.category}</Badge>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{p.halfLife.split(";")[0]}</span>
                        </div>
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
            </div>
          );
        })}
      </Section>
    </Container>
  );
}
