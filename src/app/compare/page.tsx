import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nootropic Peptide Comparisons — Semax vs Selank, Dihexa vs Cerebrolysin",
  description:
    "Head-to-head comparisons of the most-studied nootropic research peptides — mechanism, evidence base, and use case differences.",
  path: "/compare",
  keywords: ["nootropic peptide comparison", "Semax vs Selank", "Dihexa vs Cerebrolysin"],
});

const COMPARISONS = [
  { slug: "semax-vs-selank", title: "Semax vs Selank", body: "Cognitive-attentional vs anxiolytic — the two flagship Russian heptapeptides head-to-head." },
  { slug: "dihexa-vs-cerebrolysin", title: "Dihexa vs Cerebrolysin", body: "Modern single-molecule synaptogenic agent vs the established multi-component clinical preparation." },
  { slug: "noopept-vs-semax", title: "Noopept vs Semax", body: "Oral peptidomimetic vs intranasal heptapeptide — different routes, overlapping endpoints." },
];

export default function ComparePage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
      <Section
        eyebrow="Compare"
        title="Peptide comparison guides"
        description="When two peptides cover overlapping endpoints, the right choice for a research protocol depends on mechanism, route, evidence base, and tolerability."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {COMPARISONS.map((c) => (
            <Link key={c.slug} href={`/compare/${c.slug}`} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{c.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Compare <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
