import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nootropic Peptide Stacks — Research-grade combinations of cognitive peptides",
  description:
    "Documented combinations of nootropic research peptides — Semax+Selank, focus stacks, anxiety+mood stacks. Mechanism rationale and timing for research protocols.",
  path: "/stacks",
  keywords: ["nootropic peptide stack", "Semax Selank stack", "best nootropic peptide stacks 2026"],
});

const STACKS = [
  {
    slug: "best-nootropic-peptide-stacks-2026",
    title: "The best nootropic peptide stacks of 2026",
    body: "An evidence-led survey of the most-studied combinations across cognitive, mood, and neuroprotective endpoints.",
  },
  {
    slug: "focus-and-productivity-stack",
    title: "Focus & productivity stack",
    body: "A combination aimed at sustained-attention and mental-fatigue endpoints, built around Semax with adjuncts.",
  },
  {
    slug: "anxiety-and-mood-stack",
    title: "Anxiety & mood stack",
    body: "A Selank-led combination for stress-resilience and anxiolytic endpoints, with sleep-architecture support.",
  },
];

export default function StacksIndex() {
  return (
    <Container>
      <Section
        eyebrow="Stacks"
        title="Documented peptide combinations"
        description="The Russian research literature has explored several multi-peptide protocols. These pages summarise the rationale, mechanism overlap, and timing patterns most commonly reported."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {STACKS.map((s) => (
            <Link key={s.slug} href={`/stacks/${s.slug}`} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{s.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Read stack <ArrowRight className="h-3.5 w-3.5" aria-hidden />
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
