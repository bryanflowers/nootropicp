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
  title: "Enkephalinase-inhibiting peptides — Anxiolysis through endogenous opioid tone",
  description:
    "Research peptides that produce anxiolytic effects by inhibiting enkephalin-degrading enzymes — Selank, N-Acetyl Selank — without direct GABA-A binding, sedation, or dependence. Mechanism, evidence, and the contrast with benzodiazepines.",
  path: "/mechanisms/enkephalinase-inhibiting-peptides",
  keywords: [
    "enkephalinase inhibitor peptide",
    "Selank enkephalinase",
    "anxiolytic peptide",
    "peptide alternative to benzodiazepines",
    "non-sedating anxiolytic",
    "enkephalin system peptide",
  ],
});

export default function EnkephalinaseHub() {
  const items = peptides.filter((p) => p.tags?.includes("enkephalinase-inhibitor"));

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Mechanisms", href: "/mechanisms/bdnf-inducing-peptides" },
          { label: "Enkephalinase inhibitors" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Mechanism hub</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Enkephalinase-inhibiting peptides
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          A distinctive class of research peptides produces anxiolytic effects not by binding the
          GABA-A receptor but by extending the active life of endogenous enkephalin peptides. The
          mechanism is indirect, the pharmacology is non-sedating, and the side-effect profile is
          fundamentally different from the benzodiazepine class. This page explains how it works.
        </p>
      </header>

      <Section eyebrow="Why this matters" title="The benzodiazepine problem">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              For most of clinical pharmacology's history, the standard approach to anxiolysis has
              been GABA-A receptor positive allosteric modulation. Benzodiazepines, Z-drugs, and
              their structural relatives all bind GABA-A and amplify the brain's principal
              inhibitory neurotransmitter. The effect is anxiolytic, but the same mechanism that
              reduces anxiety also produces sedation, motor impairment, anterograde amnesia,
              dependence on chronic use, and rebound anxiety on discontinuation.
            </p>
            <p>
              These side effects are not incidental — they are mechanistic. The same GABA-A
              activation that quiets the limbic system also slows motor control, impairs new
              memory formation, and adapts toward dependence when sustained over weeks. A
              different mechanistic approach is needed if anxiolysis without those effects is the
              research goal.
            </p>
            <p>
              The enkephalinase-inhibiting peptides represent one such approach. Rather than
              directly amplifying inhibition, they extend the active life of endogenous
              anti-anxiety peptides that the body already releases at low tone. The pharmacology is
              upstream of GABA-A in the regulatory circuitry — and the side-effect profile is
              correspondingly different.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The mechanism" title="How enkephalinase inhibition produces anxiolysis">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>1. Endogenous enkephalin release</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The body releases enkephalin peptides — short opioid-like neuropeptides — at low
              constitutive tone throughout the brain. These act on delta and mu opioid receptors,
              producing modulatory effects on mood, stress reactivity, and pain perception.
              Endogenous enkephalin release is part of the normal regulatory baseline.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>2. Rapid enkephalinase degradation</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Released enkephalins are rapidly degraded by a small family of peptidases —
              principally neprilysin (neutral endopeptidase) and aminopeptidase N. The half-life of
              an extracellular enkephalin is measured in seconds. This rapid clearance keeps
              endogenous opioid signalling localised and prevents tonic overactivation.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>3. Peptide inhibition of the enzymes</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Selank and its acetylated analogue bind and inhibit these peptidases in a
              dose-dependent manner. The result is extended life of the endogenous enkephalins
              that the body has already chosen to release — not introduction of an exogenous opioid
              agonist.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>4. Anxiolysis without sedation</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Extended enkephalin tone modulates the limbic system's anxiety response indirectly,
              producing measurable anxiolytic effects without the sedation, motor impairment, or
              cognitive blunting characteristic of GABA-A drugs. The effect is closer in feel to
              "reduced anxiety reactivity" than to "sedation" — an important practical distinction
              for research designs.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The family" title="Peptides in the enkephalinase-inhibitor class">
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

      <Section eyebrow="What this is not" title="Important mechanistic distinctions">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Enkephalinase inhibition is not the same as direct opioid receptor agonism. The
              mechanism does not introduce an exogenous compound that binds opioid receptors;
              it extends the active life of endogenous compounds the body has already released.
              Functionally this is upstream of the receptor in the same way that a serotonin
              reuptake inhibitor is upstream of serotonin receptors. The downstream effects share
              vocabulary with direct opioid pharmacology but the pharmacokinetics, the addiction
              liability, and the safety profile are different.
            </p>
            <p>
              The enkephalinase-inhibiting peptides do not, on the published evidence, produce
              opioid-like euphoria, sedation, or respiratory depression at studied doses. They do
              not show dependence in animal models. They are not classified as controlled
              substances in any major jurisdiction. The mechanism delivers anxiolytic effects
              specifically — not the broader opioid pharmacology.
            </p>
            <p>
              Equally, this is not a complete replacement for benzodiazepine-class drugs in clinical
              terms. Benzodiazepines produce rapid, dose-titratable anxiolysis with predictable
              dose-response and decades of clinical refinement behind their use. The
              enkephalinase-inhibiting peptides produce more gradual, less precisely titrated
              effects and lack the clinical infrastructure of the benzodiazepine class. Different
              tools for different research questions.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/glossary#enkephalinase">Enkephalinase defined</ButtonLink>
        <ButtonLink href="/glossary#opioid-system" variant="outline">Opioid system defined</ButtonLink>
        <ButtonLink href="/peptides/selank" variant="outline">Selank profile</ButtonLink>
        <ButtonLink href="/mechanisms/bdnf-inducing-peptides" variant="outline">BDNF inducers</ButtonLink>
      </div>
    </Container>
  );
}
