import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Anxiety & Mood Peptide Stack — Selank-led research combination",
  description:
    "A Selank-led research stack targeting anxiolytic, anti-asthenic, and stress-resilience endpoints alongside sleep-architecture support.",
  path: "/stacks/anxiety-and-mood-stack",
  keywords: ["anxiety peptide stack", "Selank stack", "mood peptide research"],
});

export default function MoodStack() {
  return (
    <Container className="py-10 lg:py-14">
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Anxiety + mood stack</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Anxiety & mood peptide stack
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Selank-led, targeting anxiolytic and anti-asthenic endpoints without sedation, with
          DSIP-mediated sleep-architecture support to address the bidirectional sleep-anxiety
          relationship.
        </p>
      </header>

      <Section title="The components">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Selank", slug: "selank", role: "Core anxiolytic — enkephalinase inhibition, non-sedating." },
            { name: "DSIP", slug: "dsip", role: "Sleep architecture — addresses the sleep-anxiety feedback loop." },
            { name: "Semax", slug: "semax", role: "Cognitive adjunct — preserves attention while reducing anxiety." },
          ].map((c) => (
            <Card key={c.slug}>
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{c.role}</p>
                <ButtonLink href={`/peptides/${c.slug}`} size="sm" variant="outline" className="mt-3">
                  Read profile
                </ButtonLink>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="The case for the combination">
        <Card>
          <CardBody className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Anxiety and sleep architecture are bidirectionally coupled — poor sleep amplifies
            anxiety reactivity; elevated anxiety degrades sleep continuity. A stack that targets
            both endpoints has stronger mechanistic rationale than either component alone. Selank
            addresses the daytime anxiolytic endpoint via enkephalin-system modulation without
            sedation. DSIP addresses the night-time slow-wave consolidation endpoint. Semax is an
            optional cognitive-attentional adjunct for protocols where preserving attention
            performance is part of the design.
          </CardBody>
        </Card>
      </Section>
    </Container>
  );
}
