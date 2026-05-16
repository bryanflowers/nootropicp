import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { researchSummaries } from "@/data/research";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Research Summaries — Nootropic peptide mechanism and pharmacology",
  description:
    "Plain-English summaries of the published research on intranasal delivery, BDNF mechanisms, neurogenesis pathways, peptide anxiolytics, and sleep-cognition coupling.",
  path: "/research",
  keywords: ["nootropic peptide research", "BDNF research", "peptide mechanism summaries"],
});

export default function ResearchIndex() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Research" }]} />
      <Section
        eyebrow="Research"
        title="Research summaries"
        description="Topic-level overviews of the mechanisms, delivery routes, and pharmacological themes that recur across the nootropic peptide literature."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {researchSummaries.map((r) => (
            <Link key={r.slug} href={`/research/${r.slug}`} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{r.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{r.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Read summary <ArrowRight className="h-3.5 w-3.5" aria-hidden />
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
