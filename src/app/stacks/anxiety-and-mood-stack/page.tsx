import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Stacks", href: "/stacks" },
          { label: "Anxiety & mood" },
        ]}
      />
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
            <p>
              Anxiety and sleep architecture are bidirectionally coupled. The published literature
              is unambiguous on this: poor sleep amplifies next-day anxiety reactivity (through HPA
              axis sensitisation and reduced prefrontal regulation of limbic responses), while
              elevated anxiety in turn degrades sleep continuity and slow-wave depth. A research
              protocol that targets only one half of that loop leaves the other half as a feedback
              source that can undo the intervention.
            </p>
            <p className="mt-3">
              Selank addresses the daytime anxiolytic endpoint via enkephalin-system modulation.
              The mechanism is indirect — inhibition of the enzymes that degrade endogenous
              enkephalins — so the anxiolytic effect occurs without direct GABA-A receptor binding
              and without the sedation, motor impairment, and amnestic effects that characterise
              benzodiazepine-class anxiolytics. That mechanistic separation is what makes Selank a
              practical anxiolytic to study alongside cognitive endpoints: you can probe anxiety
              reduction without confounding the attention measure.
            </p>
            <p className="mt-3">
              DSIP addresses the night-time end of the loop. Published research shows modest but
              consistent effects on slow-wave sleep duration and on HPA-axis stress responses. The
              peptide is not a sedative-hypnotic in the conventional sense; it is better understood
              as a stress-resilience and sleep-architecture modulator. Used at the evening boundary
              of the daily protocol, it improves the consolidation window that anxiety would
              otherwise compress.
            </p>
            <p className="mt-3">
              Semax is the optional cognitive-attentional adjunct. The case for including it
              depends on the research design: if the protocol is studying anxiety reduction in
              isolation, Semax is unnecessary; if it is studying anxiety in the context of cognitive
              performance under load (the more common applied research setting), Semax preserves
              the attention measure that pure anxiolytic intervention would not address.
            </p>
            <p className="mt-3">
              Timing patterns in published Russian research: Selank is typically administered
              either spread through the day or pre-stressor (before an anticipated anxiogenic
              event), DSIP is given at the evening boundary roughly two to three hours before
              intended sleep, and Semax — when included — is administered earlier in the day to
              overlap with peak cognitive load. Co-administration of all three at one timepoint is
              not the dominant pattern.
            </p>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              As with any multi-peptide research configuration, the combined long-term safety
              profile is sparser than the single-peptide data. Treat the rationale above as a
              framework for thinking about mechanism overlap, not as a recommended protocol.
            </p>
          </CardBody>
        </Card>
      </Section>
    </Container>
  );
}
