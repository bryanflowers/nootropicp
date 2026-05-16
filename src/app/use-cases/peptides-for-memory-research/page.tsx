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
  title: "Peptides for memory research — Semax, Cerebrolysin, Dihexa, Noopept",
  description:
    "Research peptides studied for memory encoding, consolidation, and recall. Mechanism overlap (BDNF/NGF, synaptogenesis, LTP), evidence bases, and how researchers choose between them.",
  path: "/use-cases/peptides-for-memory-research",
  keywords: [
    "peptides for memory research",
    "memory peptide UK",
    "Semax memory",
    "Cerebrolysin memory",
    "Dihexa memory",
    "Noopept memory research",
    "BDNF memory peptide",
  ],
});

const FAQS = [
  {
    q: "Which peptide has the strongest evidence for memory effects?",
    a: "It depends on whether you weight clinical or preclinical data. Cerebrolysin has the largest body of randomised clinical trials in memory-related indications (vascular dementia, post-stroke recovery). Semax has the strongest published clinical evidence among single-peptide compounds, primarily in Russian post-stroke trials. Dihexa has the strongest preclinical synaptogenic data in aged-animal models but no human trials. Noopept has both Russian clinical data and a large body of preclinical mechanistic work.",
  },
  {
    q: "Why are BDNF-inducing peptides relevant to memory?",
    a: "BDNF is the master regulator of activity-dependent synaptic plasticity — the cellular substrate of memory formation. Peptides that raise hippocampal BDNF expression are aiming directly at the mechanism by which experience becomes durable memory. The translational distance from molecular induction to behavioural improvement is non-trivial, but the mechanistic logic is clean.",
  },
  {
    q: "Is synaptogenesis the same as memory enhancement?",
    a: "Synaptogenesis creates new structural substrate for connections to form; memory enhancement requires that substrate to be engaged by experience and stabilised. The two are related but not identical. Dihexa-class compounds drive synaptogenesis; whether the new synapses become memory-relevant depends on what the subject does after exposure.",
  },
  {
    q: "Can these peptides be stacked for memory research?",
    a: "Stacking is a recognised research configuration. Semax (cognitive driver) plus DSIP (sleep consolidation support) is the most-replicated combination in published Russian work. The mechanistic rationale is that memory consolidation requires both daytime encoding and nocturnal slow-wave processing; addressing both endpoints together has a stronger basis than addressing either alone.",
  },
];

const PEPTIDE_SLUGS = ["semax", "cerebrolysin", "dihexa", "noopept", "n-acetyl-semax"];

export default function MemoryHub() {
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
          { label: "Memory research" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Use case</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides for memory research
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Memory is not a single endpoint. Encoding, consolidation, and recall draw on different
          molecular systems, and the peptides relevant to memory research target those systems at
          different points. This hub collects the catalogued peptides studied for memory-related
          endpoints, explains where each one acts in the memory pipeline, and notes the
          mechanistic overlap and divergence that determines which one a research design needs.
        </p>
      </header>

      <Section eyebrow="The endpoint" title="What 'memory research' actually means">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Memory in the laboratory is operationalised through several distinct paradigms. In
              rodent research, Morris water maze and novel object recognition probe spatial and
              recognition memory; passive avoidance and conditioned fear probe associative memory;
              radial arm maze probes working memory. In human research, paired-associate learning,
              digit span, and delayed-recall tasks probe declarative memory; specific procedural
              tasks probe non-declarative systems. A peptide that improves one of these does not
              automatically improve the others.
            </p>
            <p>
              The peptides on this page act on memory through three principal mechanisms:
              BDNF/NGF induction (Semax, Noopept, Cerebrolysin), synaptogenesis (Dihexa), and
              multi-pathway neurotrophic mimicry (Cerebrolysin). The clinical and preclinical
              evidence bases differ substantially in maturity. Read the per-peptide profiles for
              the specific evidence; this page is the navigational hub.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The candidates" title="Peptides relevant to memory research">
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

      <Section eyebrow="Picking between them" title="How researchers choose">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>By mechanism</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              If the research question is about BDNF-mediated plasticity specifically, Semax or
              Noopept are the cleanest tools. If the question is about new-synapse formation,
              Dihexa's c-Met agonism is the focused choice. Cerebrolysin is the multi-pathway
              comparator when the question is "what happens with broad neurotrophic support".
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>By route practicality</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Intranasal is the standard for Semax and the acetylated analogue; oral for Noopept
              (via the active metabolite cycloprolylglycine); parenteral infusion for Cerebrolysin;
              oral or subcutaneous for Dihexa in animal work. The route constraint often decides
              which peptide a particular research protocol can practically accommodate.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>By evidence depth</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Cerebrolysin has the deepest randomised clinical-trial record in memory-related
              indications. Semax has the deepest single-peptide clinical evidence. Noopept has
              both Russian clinical data and substantial preclinical mechanism work. Dihexa has
              striking preclinical data but no human trials.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>By model system</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Aged-animal models with reduced baseline BDNF show stronger Semax/Noopept effects
              than young-healthy models. Ischaemia and post-stroke models show Cerebrolysin's
              effects most clearly. Synaptogenesis assays in hippocampal slice preparations are
              the standard Dihexa endpoint.
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
        <ButtonLink href="/mechanisms/bdnf-inducing-peptides">BDNF inducers hub</ButtonLink>
        <ButtonLink href="/mechanisms/synaptogenic-peptides" variant="outline">Synaptogenic hub</ButtonLink>
        <ButtonLink href="/research/bdnf-and-cognitive-peptides" variant="outline">BDNF research summary</ButtonLink>
      </div>
    </Container>
  );
}
