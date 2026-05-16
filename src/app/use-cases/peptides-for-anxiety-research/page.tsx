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
  title: "Peptides for anxiety research — Selank, N-Acetyl Selank, DSIP",
  description:
    "Research peptides studied for anxiolytic effects without GABA-A binding — Selank's enkephalinase inhibition, DSIP's stress-resilience modulation. Mechanism, evidence, and contrast with benzodiazepines.",
  path: "/use-cases/peptides-for-anxiety-research",
  keywords: [
    "peptides for anxiety research",
    "anxiolytic peptide",
    "Selank anxiety",
    "DSIP anxiety",
    "peptide alternative to benzodiazepine research",
    "non-sedating anxiolytic peptide",
  ],
});

const FAQS = [
  {
    q: "How do these peptides compare with benzodiazepines on anxiolytic effect?",
    a: "In Russian clinical research on anxiety populations, Selank has been reported to reduce anxiety scores comparably to a benzodiazepine comparator, without sedation, motor impairment, or amnestic effects. The mechanism is fundamentally different — enkephalinase inhibition rather than GABA-A potentiation — and the side-effect profile is correspondingly different. This is research-context data, not a recommendation to substitute one for the other clinically.",
  },
  {
    q: "Why is the mechanism better than direct GABA-A binding for some research questions?",
    a: "Direct GABA-A modulation is non-selective for the anxiety pathway: the same mechanism that quiets the limbic system also slows motor control, blunts new memory formation, and adapts toward dependence. Enkephalinase inhibition is upstream in a different circuit — it extends endogenous enkephalin tone without binding GABA-A — so research designs probing anxiety in the context of preserved attention or memory can use it without confounding the cognitive measure.",
  },
  {
    q: "What is the typical onset?",
    a: "Acute anxiolytic effects of Selank have been reported within 30–60 minutes of intranasal dosing in research subjects, with cumulative effects building across a 10–14 day course. DSIP's effects are more gradual and operate principally through HPA-axis attenuation rather than acute anxiolysis.",
  },
  {
    q: "Is DSIP an anxiolytic?",
    a: "Not in the conventional sense. DSIP modulates the stress-response system — HPA axis attenuation, slow-wave sleep support — rather than producing acute anxiolysis. Where anxiety has a substantial stress-driven or sleep-disruption component, addressing those upstream factors can reduce anxiety reactivity over time. The mechanism is indirect compared with Selank.",
  },
  {
    q: "Do these peptides cause dependence?",
    a: "There is no evidence of dependence liability in the published research for any of the peptides in this cluster. The enkephalin-modulation mechanism is upstream of the direct receptor-binding pathways that drive opioid or benzodiazepine dependence. Comprehensive long-term human data outside Russia is limited, however, so the absence of evidence is not the same as evidence of absence.",
  },
];

const PEPTIDE_SLUGS = ["selank", "n-acetyl-selank", "dsip", "semax"];

export default function AnxietyHub() {
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
          { label: "Anxiety research" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Use case</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides for anxiety & stress-resilience research
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The research peptides studied for anxiety endpoints operate upstream of the GABA-A
          receptor — through enkephalin-system modulation, HPA-axis attenuation, and slow-wave
          sleep support. This produces a different research-tool profile from the
          benzodiazepine-class drugs that dominate clinical anxiety pharmacology.
        </p>
      </header>

      <Section eyebrow="The endpoint" title="Why look beyond GABA-A for anxiety research">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              GABA-A positive allosteric modulation has been the dominant anxiolytic mechanism for
              60 years. The benzodiazepines, Z-drugs, and most clinical anxiolytics work this way.
              The effect is robust and dose-titratable, but it is not selective for anxiety: the
              same mechanism that quiets the limbic anxiety circuitry also slows motor control,
              impairs new memory formation, produces sedation, and adapts toward dependence with
              chronic use.
            </p>
            <p>
              Research designs probing the relationship between anxiety and cognition — anxiety
              under cognitive load, anxiety's effect on attention, anxiety in the context of
              memory consolidation — cannot use a GABA-A drug without confounding the cognitive
              measure. The peptides in this cluster address that gap. They produce anxiolytic
              effects through mechanisms that leave cognition intact, allowing the anxiety
              variable to be probed in isolation.
            </p>
            <p>
              This makes them tools for a specific kind of anxiety research, not replacements for
              clinical anxiolytic pharmacology. Their advantage is mechanistic separation, not
              greater potency or broader effect.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The candidates" title="Peptides relevant to anxiety research">
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

      <Section eyebrow="Mechanisms compared" title="How each peptide approaches the anxiety endpoint">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Selank — direct anxiolysis via enkephalin system</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Selank inhibits the enzymes that degrade endogenous enkephalin peptides, raising
              endogenous opioid tone. The resulting anxiolytic effect is the most direct in the
              cluster — comparable in magnitude to benzodiazepine action in published Russian
              comparative trials, without the sedation. N-Acetyl Selank is the extended-duration
              analogue with the same pharmacology.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>DSIP — stress-resilience and sleep support</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              DSIP modulates the HPA axis and supports slow-wave sleep architecture. Where anxiety
              is amplified by sleep disruption or chronic stress, addressing those upstream
              factors produces an indirect but durable reduction in anxiety reactivity. Slower
              onset, less acute effect, more relevant for sustained-stress research models.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Semax — secondary anxiolytic effect</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Semax's primary effect is cognitive, but it also inhibits enkephalinase to some
              degree and shows measurable anxiolytic effects in animal stress models. Where a
              research design needs both cognitive and anxiolytic effects from a single compound,
              Semax is one option; the cleaner pairing is Semax plus Selank with the cognitive
              and anxiolytic effects from each component.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Combinations</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The published Russian research includes substantial work on Selank plus Semax
              stacks. The mechanistic logic — different upstream effectors, overlapping
              downstream cognitive and anxiolytic effects, no GABA-A involvement — supports
              combination work in research protocols where both endpoints matter.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </Accordion>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/mechanisms/enkephalinase-inhibiting-peptides">Enkephalinase mechanism hub</ButtonLink>
        <ButtonLink href="/stacks/anxiety-and-mood-stack" variant="outline">Anxiety stack guide</ButtonLink>
        <ButtonLink href="/research/peptides-and-anxiety-research" variant="outline">Anxiety research summary</ButtonLink>
      </div>
    </Container>
  );
}
