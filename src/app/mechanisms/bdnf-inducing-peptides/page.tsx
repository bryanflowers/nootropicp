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
  title: "BDNF-inducing peptides — Mechanism hub for the BDNF/NGF research peptide family",
  description:
    "The research peptides that induce brain-derived neurotrophic factor (BDNF) in the hippocampus and cortex — Semax, Selank, Noopept, Cerebrolysin, and N-Acetyl analogues. Mechanism, comparison, and what the BDNF endpoint actually means.",
  path: "/mechanisms/bdnf-inducing-peptides",
  keywords: [
    "BDNF peptides",
    "BDNF inducing peptide",
    "BDNF nootropic",
    "Semax BDNF",
    "Noopept BDNF",
    "neurotrophin inducing peptide",
  ],
});

const BDNF_TAG = "bdnf-inducer";

export default function BdnfHub() {
  const items = peptides.filter((p) => p.tags?.includes(BDNF_TAG));

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Mechanisms", href: "/mechanisms/bdnf-inducing-peptides" },
          { label: "BDNF inducers" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Mechanism hub</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          BDNF-inducing peptides
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Brain-derived neurotrophic factor sits at the centre of activity-dependent synaptic
          plasticity. The peptides that induce BDNF in the hippocampus and prefrontal cortex form
          the most coherent mechanistic family in the cognitive-peptide field. This page collects
          them, explains what the shared endpoint means, and points to the deeper material on each.
        </p>
      </header>

      <Section eyebrow="The molecular common ground" title="Why BDNF induction is the family endpoint">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              BDNF is released by neurons during patterns of activity that drive long-term
              potentiation — the cellular substrate of memory formation. It binds the TrkB receptor
              and triggers signalling cascades (PI3K-Akt, MAPK, PLCγ) that stabilise newly active
              synapses, support neuronal survival under stress, and enable the structural
              remodelling that turns short-term learning into long-term memory.
            </p>
            <p>
              Reduced BDNF expression is a consistent feature of depressive states, chronic stress,
              and age-related cognitive decline. Almost every effective antidepressant treatment —
              regardless of receptor mechanism — converges on raising BDNF over time. A
              "BDNF-inducing peptide" is therefore aiming at one of the best-validated
              cognitive-relevance molecular endpoints currently available.
            </p>
            <p>
              The peptides catalogued below all show BDNF (and typically NGF) induction in the
              hippocampus and prefrontal cortex within hours of administration, with persistence
              for 24+ hours after a single dose and sustained elevation across repeated dosing
              protocols. The magnitudes vary; the direction is consistent.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The family" title="Peptides in the BDNF-inducing class">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.slug}
              href={`/peptides/${p.slug}`}
              className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
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

      <Section eyebrow="Mechanism in detail" title="The cascade — from peptide to consolidated memory">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>1. Upstream trigger</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The peptide reaches the CNS — intranasally for Semax, Selank, and the acetylated
              analogues; orally for Noopept (via the active metabolite cycloprolylglycine);
              parenterally for Cerebrolysin. Each engages a distinct upstream effector, but all
              produce the same downstream BDNF/NGF transcriptional response.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>2. Transcriptional induction</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Within hours, BDNF and NGF mRNA expression rises in the hippocampus and prefrontal
              cortex. Protein levels follow with a lag of several more hours. The induction is
              region-specific in a way that aligns with the cognitive endpoints these peptides are
              studied for — it is not a generic CNS-wide effect.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>3. TrkB receptor activation</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Released BDNF binds TrkB receptors on neighbouring neurons. The receptors dimerise,
              autophosphorylate, and recruit adaptor proteins that initiate PI3K-Akt, MAPK, and
              PLCγ signalling. NGF performs the same role through TrkA on cholinergic neurons.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>4. Synaptic stabilisation</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The downstream signalling cascades stabilise newly activated synapses (the substrate
              of long-term potentiation), promote dendritic spine growth, and support the
              consolidation of learning into long-term memory. This is the cellular endpoint behind
              the behavioural cognitive effects in animal models.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The translational caveat" title="What BDNF induction does and doesn't promise">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              BDNF induction is a molecular endpoint, not a cognitive one. The translation from "we
              raised BDNF" to "the subject performs better on a learning task" is not automatic.
              Several variables matter: the magnitude of the induction, the region specificity,
              the duration of elevation, the baseline state of the system being modulated, and the
              downstream factors that determine whether elevated BDNF actually produces the
              expected synaptic and behavioural effects.
            </p>
            <p>
              The published data show consistent BDNF responses across the family; the cognitive
              translation is more variable. In healthy young animal models, BDNF induction often
              fails to produce dramatic cognitive improvements because the baseline is already
              high. In aged or stressed models — where baseline BDNF is depressed — the effects are
              more visible. This explains why much of the most striking peptide cognitive-effect
              data comes from stroke-recovery or aged-rat paradigms rather than from healthy young
              subjects.
            </p>
            <p>
              Read the family as "research tools for studying BDNF-mediated cognitive plasticity"
              rather than as "guaranteed cognitive enhancers". The mechanism is sound; the
              translation is the open question.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/glossary#bdnf">BDNF defined</ButtonLink>
        <ButtonLink href="/mechanisms/synaptogenic-peptides" variant="outline">Synaptogenic peptides</ButtonLink>
        <ButtonLink href="/mechanisms/enkephalinase-inhibiting-peptides" variant="outline">Enkephalinase inhibitors</ButtonLink>
      </div>
    </Container>
  );
}
