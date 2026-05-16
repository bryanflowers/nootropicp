import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { getPeptidesBySlugs } from "@/lib/cluster";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Peptides for sleep research — DSIP and the sleep-cognition link",
  description:
    "Research peptides studied for sleep architecture, slow-wave consolidation, and the HPA-axis–sleep relationship. DSIP, Selank, and the broader stress-resilience pharmacology.",
  path: "/use-cases/peptides-for-sleep-research",
  keywords: [
    "peptides for sleep research",
    "sleep peptide UK",
    "DSIP sleep research",
    "slow wave sleep peptide",
    "sleep cognition peptide",
    "HPA axis sleep peptide",
  ],
});

const FAQS = [
  {
    q: "Is DSIP a sleep-inducing drug?",
    a: "The name is partly historical and partly misleading. DSIP — delta sleep-inducing peptide — was named for the conditions of its discovery (isolated from the cerebral venous blood of sleeping rabbits). Its acute sedative effects in modern research are modest. The peptide is better understood as a modulator of sleep architecture and HPA-axis stress responses than as a sedative-hypnotic.",
  },
  {
    q: "Why does this hub include Selank?",
    a: "Selank does not directly induce sleep, but it preserves sleep architecture better than benzodiazepine-class anxiolytics. Where research is studying anxiety that disrupts sleep, an anxiolytic that does not suppress REM or distort slow-wave activity is a useful tool. Selank's enkephalinase mechanism is sleep-architecture-neutral.",
  },
  {
    q: "How are these compounds different from melatonin?",
    a: "Melatonin is a circadian-phase shifter that aligns the sleep cycle with the dark phase. It does not directly modulate sleep architecture once sleep has begun. DSIP works further downstream — it modulates the slow-wave and stress-response systems that determine sleep quality and consolidation rather than its timing. Different roles, different research questions.",
  },
  {
    q: "What is the link between sleep and cognitive research?",
    a: "Memory consolidation occurs predominantly during slow-wave sleep. Daytime cognitive performance depends on prior-night sleep continuity. A research protocol studying cognitive endpoints that ignores sleep architecture risks attributing to the daytime intervention what is actually the night-time consolidation step. DSIP-class peptides support that consolidation step and are often included in cognitive stacks for that reason.",
  },
  {
    q: "Are these peptides safe for long-term research use?",
    a: "Published research on chronic dosing is sparser than for the better-characterised cognitive peptides. DSIP has a long history in Russian research but limited Western long-term data. Conservative protocol design uses cyclical rather than continuous administration.",
  },
];

const PEPTIDE_SLUGS = ["dsip", "selank", "semax", "pinealon"];

export default function SleepHub() {
  const items = getPeptidesBySlugs(PEPTIDE_SLUGS);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Use cases", href: "/use-cases" },
          { label: "Sleep & circadian research" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Use case</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides for sleep & circadian research
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Sleep architecture is causally upstream of next-day cognitive performance. Peptides that
          modulate slow-wave sleep, attenuate stress-induced sleep disruption, or preserve sleep
          continuity through anxiolytic action have a coherent — if subtle — place in cognitive
          research designs. This hub collects the relevant peptides and explains how each one
          interacts with the sleep system.
        </p>
      </header>

      <Section eyebrow="The endpoint" title="What 'sleep research' covers in this context">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Sleep is a multidimensional outcome. Sleep latency (how quickly sleep begins), sleep
              continuity (how often awakenings occur), sleep architecture (how the
              stages partition across the night), and sleep efficiency (proportion of time in bed
              actually asleep) are distinct measurable variables. A compound that affects one
              does not necessarily affect the others, and the cognitive consequences of each are
              different.
            </p>
            <p>
              The peptide compounds in this cluster act principally on the slow-wave architecture
              and the HPA-axis system that gates stress-induced sleep disruption. They are not
              sedatives in the conventional sense — they do not produce acute sleep onset on a
              dose-titratable basis the way a benzodiazepine or Z-drug does. Their effects are
              subtler and operate over longer timeframes.
            </p>
            <p>
              This makes them appropriate for research designs studying sleep architecture and the
              sleep-cognition relationship, less appropriate for research designs studying acute
              sleep induction. The compound choice should follow the research question.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The candidates" title="Peptides relevant to sleep research">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link key={p.slug} href={`/peptides/${p.slug}`} className="group block rounded-2xl">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <Badge variant="brand" className="mb-2">{p.category}</Badge>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.tagline}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="The sleep-cognition link" title="Why this matters for cognitive research">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Daytime learning is transferred to long-term storage during sleep. Declarative
              memory consolidation occurs predominantly during the slow-wave (N3) sleep that
              dominates the first half of the night; procedural memory consolidation depends on
              the REM sleep that grows longer toward morning. A research protocol probing memory
              consolidation that ignores sleep architecture is leaving an important upstream
              variable uncontrolled.
            </p>
            <p>
              For this reason DSIP and similar peptides are often paired with daytime cognitive
              peptides in research stacks. The daytime peptide drives encoding; the night-time
              peptide supports consolidation. The combined effect on long-term cognitive
              performance is stronger than either component alone in published research. The
              dedicated focus-and-productivity stack on this site is built around exactly this
              logic.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </Accordion>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/dsip">DSIP profile</ButtonLink>
        <ButtonLink href="/research/sleep-cognition-dsip-review" variant="outline">Sleep-cognition research summary</ButtonLink>
        <ButtonLink href="/stacks/focus-and-productivity-stack" variant="outline">Focus stack with sleep support</ButtonLink>
      </div>
    </Container>
  );
}
