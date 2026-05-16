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
  title: "Peptides for focus and attention research — Semax, Noopept, N-Acetyl Semax",
  description:
    "Research peptides studied for sustained attention, vigilance, and mental-fatigue endpoints. Mechanism, evidence base, and the contrast with stimulant-based attention research.",
  path: "/use-cases/peptides-for-focus-research",
  keywords: [
    "peptides for focus research",
    "peptides for attention research",
    "Semax focus",
    "Noopept attention",
    "sustained attention peptide",
    "mental fatigue peptide research",
  ],
});

const FAQS = [
  {
    q: "How is 'focus' operationalised in peptide research?",
    a: "Different paradigms probe different facets. Continuous performance tests measure sustained attention. Stroop, flanker, and switching tasks measure attentional control. Vigilance tasks measure resistance to mental fatigue under monotonous load. Most peptide research on focus uses sustained-attention or vigilance endpoints because the published cognitive-peptide compounds — particularly Semax and Noopept — have been characterised primarily on those measures in Russian research.",
  },
  {
    q: "Are these peptides similar to stimulants?",
    a: "Mechanistically no. Stimulants (caffeine, modafinil, amphetamines) act through monoaminergic effects that increase arousal and acutely boost attention. The peptides on this page act through BDNF/NGF induction with downstream monoamine effects that are smaller and slower. The acute experience is different — peptides do not produce the alertness lift of a stimulant — but cumulative effects on sustained-attention performance build over days to weeks.",
  },
  {
    q: "Can a peptide replace caffeine for focus?",
    a: "No, in the sense that the pharmacology is different. Caffeine produces acute, dose-titratable arousal lasting hours; peptides produce gradual cumulative effects measurable across a research protocol. They are not substitutes for each other. Researchers studying chronic attentional capacity rather than acute alertness reach for peptides; researchers studying acute alertness reach for the stimulant class.",
  },
  {
    q: "Why do these peptides not show large young-healthy effects?",
    a: "Cognitive performance in healthy young subjects is close to ceiling on most attention paradigms; baseline BDNF expression is also high. The room for improvement from a BDNF-inducing peptide is correspondingly limited. Effects are most visible in older subjects, stressed subjects, or post-injury populations where baseline is depressed. The pharmacology has not changed; the test conditions have.",
  },
  {
    q: "What is the typical onset?",
    a: "Acute subjective effects (mild clarity, reduced mental fatigue) have been reported within hours of intranasal Semax. The substantive sustained-attention effects develop over a 1–3 week course, consistent with BDNF-mediated mechanisms requiring repeated dosing to reach cumulative effect.",
  },
];

const PEPTIDE_SLUGS = ["semax", "noopept", "n-acetyl-semax", "selank"];

export default function FocusHub() {
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
          { label: "Focus & attention" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Use case</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides for focus & attention research
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Sustained attention, vigilance under load, and resistance to mental fatigue are the
          endpoints most often probed by the cognitive research-peptide family. This hub collects
          the relevant compounds, distinguishes them from stimulant-class attention enhancers, and
          summarises the evidence and practical considerations for research protocols.
        </p>
      </header>

      <Section eyebrow="The endpoint" title="Three things 'focus' can mean">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Sustained attention</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The capacity to hold a cognitive set on a single task for an extended period without
              attentional lapses. Probed by continuous performance tasks. Semax and Noopept have
              been characterised most on this endpoint.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Attentional control</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The capacity to direct attention selectively, suppress distractors, and switch
              between cognitive sets. Probed by Stroop, flanker, and task-switching paradigms.
              Less differentiated peptide data on this endpoint specifically.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Mental fatigue resistance</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The capacity to maintain cognitive performance across prolonged effortful work
              without decline. Probed by vigilance tasks. The Russian literature describes this as
              the "anti-asthenic" effect and reports it consistently across the cognitive-peptide
              family.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The candidates" title="Peptides relevant to focus research">
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

      <Section eyebrow="Mechanism contrast" title="Why these aren't stimulants">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The classical attention-enhancing pharmacology is stimulant-driven. Caffeine
              antagonises adenosine receptors and disinhibits dopaminergic activity. Modafinil
              raises histamine, dopamine, and noradrenaline. Amphetamines directly drive
              monoamine release. All produce acute, dose-titratable arousal that lifts attentional
              performance on the same day.
            </p>
            <p>
              The peptide pharmacology is upstream of monoamine systems. BDNF and NGF induction
              produces gradual changes in synaptic capacity in attention-relevant brain regions
              (prefrontal cortex, anterior cingulate) over days to weeks. The acute effect of a
              single dose is modest; the cumulative effect across a 1–3 week course is more
              substantial.
            </p>
            <p>
              For a research design, the implication is that peptides and stimulants probe
              different things. A study asking "what is the acute effect of arousal on attention"
              wants a stimulant; a study asking "what is the cumulative effect of synaptic
              plasticity support on attention capacity" wants a peptide. They are not
              interchangeable tools.
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
        <ButtonLink href="/stacks/focus-and-productivity-stack">Focus stack guide</ButtonLink>
        <ButtonLink href="/mechanisms/bdnf-inducing-peptides" variant="outline">BDNF inducer hub</ButtonLink>
        <ButtonLink href="/peptides/semax" variant="outline">Semax profile</ButtonLink>
      </div>
    </Container>
  );
}
