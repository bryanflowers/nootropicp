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
  title: "Peptides for neuroprotection research — Cerebrolysin, Pinealon, FGL, Semax",
  description:
    "Research peptides studied in ischaemic, oxidative, and excitotoxic injury models — Cerebrolysin, Pinealon, FGL, Semax. Mechanism, evidence, and how researchers select between them.",
  path: "/use-cases/peptides-for-neuroprotection-research",
  keywords: [
    "peptides for neuroprotection",
    "neuroprotective peptide research",
    "Cerebrolysin neuroprotection",
    "stroke peptide research",
    "Pinealon neuroprotection",
    "FGL neuroprotection",
    "Semax stroke recovery",
  ],
});

const FAQS = [
  {
    q: "Which peptide has the strongest clinical neuroprotection evidence?",
    a: "Cerebrolysin has the largest body of randomised clinical trials in stroke recovery and vascular dementia. Semax has the strongest single-peptide clinical-research record in post-stroke rehabilitation, primarily from Russian work. The two are mechanistically distinct — Cerebrolysin is a multi-component preparation; Semax is a defined heptapeptide — and the evidence bases are largely complementary rather than overlapping.",
  },
  {
    q: "Why are several research peptides studied in stroke models?",
    a: "Ischaemic stroke produces a well-characterised injury cascade — excitotoxic glutamate release, oxidative stress, microglial activation, apoptotic neuronal death — that is responsive to interventions at multiple points. The neuroprotective peptide candidates target different points in the cascade: Cerebrolysin's multi-factor neurotrophic mimicry, Semax's BDNF induction and antioxidant effects, Pinealon's oxidative-stress attenuation, FGL's pro-survival signalling. The diversity of mechanisms is itself the research interest.",
  },
  {
    q: "Is neuroprotection the same as cognitive enhancement?",
    a: "No, although they overlap. Neuroprotection means reducing neuronal injury in response to a stressor — ischaemia, oxidative challenge, excitotoxicity. Cognitive enhancement means improving cognitive performance in non-injury contexts. The same compound can do both (Semax has strong evidence in both endpoints) but the research designs are different and the clinical relevance is different.",
  },
  {
    q: "What about chronic neurodegeneration?",
    a: "The peptides on this page are studied principally in acute injury models. Chronic neurodegenerative disease (Alzheimer's, Parkinson's, motor neuron disease) is a different research challenge — the timescale is years not hours, the pathology is multifactorial, and the translational distance from animal models is greater. Cerebrolysin has the most substantial chronic-disease clinical record; the other peptides on this page are more relevant to acute neuroprotection research.",
  },
];

const PEPTIDE_SLUGS = ["cerebrolysin", "pinealon", "fgl-peptide", "semax", "dihexa"];

export default function NeuroprotectionHub() {
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
          { label: "Neuroprotection research" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Use case</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides for neuroprotection research
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The peptides studied in ischaemic, oxidative, and excitotoxic injury models form a
          mechanistically diverse cluster, with the strongest clinical evidence base in the
          cognitive-peptide field. This hub collects them, distinguishes acute neuroprotection
          from cognitive enhancement, and orients researchers to the mechanism that fits the
          particular injury model being studied.
        </p>
      </header>

      <Section eyebrow="The injury cascade" title="What neuroprotection is protecting against">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The standard ischaemic injury model involves a cascade of damaging events. Within
              minutes of vascular occlusion, affected neurons depolarise and release glutamate.
              Persistent NMDA receptor activation drives calcium influx beyond cellular buffering
              capacity — the excitotoxic event. Mitochondria fail; reactive oxygen species
              accumulate; microglia activate and release pro-inflammatory cytokines. Hours later,
              the apoptotic machinery engages and neurons in the penumbra die.
            </p>
            <p>
              A neuroprotective intervention can in principle act at any point in this cascade.
              Compounds that attenuate excitotoxicity protect the early window; antioxidants
              address the oxidative phase; anti-inflammatory agents address microglial activation;
              anti-apoptotic agents address the late cell-death phase. The peptides in this hub
              act on different combinations of these points, which is why head-to-head comparisons
              between them tend not to identify a clean winner.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The candidates" title="Peptides relevant to neuroprotection research">
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

      <Section eyebrow="Mechanism mapping" title="Which peptide acts where in the cascade">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Cerebrolysin — multi-component, all phases</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Cerebrolysin contains bioactive fragments mimicking multiple neurotrophic factors
              (BDNF, NGF, GDNF) and acts across the injury cascade — anti-excitotoxic,
              antioxidant, anti-apoptotic, neurotrophic. The clinical-trial record in acute
              ischaemic stroke is the strongest in the cluster.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Semax — BDNF induction and antioxidant</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Semax raises hippocampal and cortical BDNF/NGF expression and reduces lipid
              peroxidation markers in ischaemia models. Russian clinical research on post-stroke
              rehabilitation has reported faster recovery of neurological function with Semax
              adjunct therapy.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Pinealon — oxidative-stress attenuation</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Pinealon's mechanism centres on upregulation of endogenous antioxidant enzyme
              expression — superoxide dismutase, catalase — and direct attenuation of glutamate
              excitotoxicity in cell-culture work. Khavinson-school bioregulator pharmacology.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>FGL — pro-survival and synaptogenic</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              FGL activates FGFR1 downstream signalling (PI3K-Akt, MAPK), which is both anti-apoptotic
              in the acute phase and pro-synaptogenic in the recovery phase. Studied principally
              in animal models of CNS injury.
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
        <ButtonLink href="/peptides/cerebrolysin">Cerebrolysin profile</ButtonLink>
        <ButtonLink href="/compare/dihexa-vs-cerebrolysin" variant="outline">Dihexa vs Cerebrolysin</ButtonLink>
        <ButtonLink href="/mechanisms/synaptogenic-peptides" variant="outline">Synaptogenic hub</ButtonLink>
      </div>
    </Container>
  );
}
