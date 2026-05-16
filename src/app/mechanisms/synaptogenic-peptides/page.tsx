import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { peptides } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Synaptogenic peptides — Mechanism hub for peptides that promote new synaptic connections",
  description:
    "Research peptides that drive synaptogenesis and dendritic spine formation — Dihexa (c-Met pathway), FGL (FGFR1 pathway), Cerebrolysin's multi-factor approach. Mechanism, evidence, and the open safety questions.",
  path: "/mechanisms/synaptogenic-peptides",
  keywords: [
    "synaptogenic peptide",
    "synaptogenesis peptide",
    "peptides for new synapses",
    "Dihexa synaptogenesis",
    "FGL peptide synaptogenesis",
    "c-Met peptide",
    "FGFR1 peptide",
  ],
});

export default function SynaptogenicHub() {
  const items = peptides.filter((p) => p.tags?.includes("synaptogenic"));

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Mechanisms", href: "/mechanisms/bdnf-inducing-peptides" },
          { label: "Synaptogenic peptides" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Mechanism hub</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Synaptogenic peptides
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          A small but distinctive class of research peptides drives the formation of new synaptic
          connections directly, rather than indirectly through neurotrophin induction. This page
          collects them, explains the two main mechanistic pathways (c-Met and FGFR1), and
          addresses the safety questions that come with chronic agonism of growth-factor systems.
        </p>
      </header>

      <Section eyebrow="What synaptogenesis means" title="The cellular event">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Synaptogenesis is the formation of new synaptic connections between neurons. Most
              active during development, it persists at lower rates throughout adult life and
              provides part of the substrate for ongoing learning and recovery from neural injury.
              A synaptogenic compound is one that drives the cellular machinery of new-synapse
              formation directly — typically by promoting dendritic spine growth on the
              postsynaptic neuron and stabilising the protein scaffolds that anchor the new
              connection.
            </p>
            <p>
              This is mechanistically distinct from BDNF induction. BDNF stabilises synapses that
              activity has already engaged, supporting the learning loop. Synaptogenic agents
              create new structural substrate that wasn't there before. The two effects can be
              complementary in a research design but they answer different questions.
            </p>
            <p>
              In published research, synaptogenic peptides have produced some of the most striking
              cognitive-recovery results in aged-animal models — partial restoration of performance
              on learning tasks back to young-control levels. The mechanism is rigorous; the
              translational distance from rodent paradigms to human application is substantial and
              has not yet been bridged.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The two pathways" title="c-Met vs FGFR1">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>The c-Met pathway (Dihexa)</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              <p>
                c-Met is a receptor tyrosine kinase whose physiological ligand is hepatocyte growth
                factor (HGF). When activated in the CNS, c-Met signalling drives dendritic spine
                formation. Dihexa is a small-peptide HGF mimetic that activates c-Met at picomolar
                concentrations — published work reports synaptogenic potency several orders of
                magnitude beyond BDNF in equivalent assays.
              </p>
              <p className="mt-3">
                The pathway is also implicated in oncogenic processes when chronically dysregulated.
                Long-term safety of pharmacological c-Met agonism in humans is uncharacterised,
                which is the chief brake on clinical development of the compound.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>The FGFR1 pathway (FGL)</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              <p>
                FGFR1 is the principal CNS receptor for fibroblast growth factor and the binding
                partner of the neural cell adhesion molecule (NCAM). Activation drives neurite
                outgrowth and synapse maturation through PI3K-Akt and MAPK signalling. FGL is a
                15-amino-acid mimetic of NCAM's key functional motif, designed to engage FGFR1
                directly.
              </p>
              <p className="mt-3">
                Like c-Met, FGFR1 is implicated in oncogenic signalling when dysregulated, raising
                the same theoretical safety concern around chronic activation. The Copenhagen group
                that developed FGL has done substantial mechanistic work; the clinical translation
                has not progressed.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The family" title="Peptides in the synaptogenic class">
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

      <Section eyebrow="The honest safety question" title="Why these compounds remain preclinical">
        <Card className="border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
          <CardBody className="prose max-w-none text-amber-900 dark:prose-invert dark:text-amber-200">
            <p>
              Both principal synaptogenic pathways — c-Met and FGFR1 — sit at the centre of the
              growth-factor receptor biology that, when dysregulated, drives tumour proliferation
              and metastasis. Pharmacological agonism of these receptors is mechanistically
              equivalent in some respects to what aberrant growth-factor signalling does in
              oncogenesis. The difference is dose, duration, and the regulatory feedback that
              healthy tissue retains. Whether that difference is sufficient to make chronic
              pharmacological agonism safe over years of exposure is an open question.
            </p>
            <p>
              No published long-term toxicology data in any species exists for chronic Dihexa or
              FGL administration. No human clinical trials of either compound are publicly
              registered. This is the principal reason these compounds remain laboratory tools and
              have not progressed to clinical development despite the strong mechanistic data.
            </p>
            <p>
              Read the synaptogenic peptides as research instruments for understanding adult neural
              plasticity, not as candidate therapeutics. The science is meaningful; the safety
              characterisation is not yet adequate for the translation step.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/glossary#synaptogenesis">Synaptogenesis defined</ButtonLink>
        <ButtonLink href="/glossary#c-met" variant="outline">c-Met defined</ButtonLink>
        <ButtonLink href="/glossary#fgfr" variant="outline">FGFR1 defined</ButtonLink>
        <ButtonLink href="/mechanisms/bdnf-inducing-peptides" variant="outline">BDNF inducers</ButtonLink>
      </div>
    </Container>
  );
}
