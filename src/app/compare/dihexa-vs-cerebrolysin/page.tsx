import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Dihexa vs Cerebrolysin — Single Molecule vs Multi-Component Neurotrophic Preparation",
  description:
    "Comparison of Dihexa (single synaptogenic hexapeptide) and Cerebrolysin (multi-component porcine brain preparation) for cognitive and neuroprotective research.",
  path: "/compare/dihexa-vs-cerebrolysin",
  keywords: ["Dihexa vs Cerebrolysin", "synaptogenic peptides", "neurotrophic peptides comparison"],
});

const ROWS: [string, string, string][] = [
  ["Type", "Single small peptide (hexapeptide)", "Standardised multi-component preparation"],
  ["Source", "Synthetic (angiotensin IV-derived)", "Enzymatic digest of porcine brain"],
  ["Primary mechanism", "HGF/c-Met agonism, synaptogenesis", "Mimics multiple neurotrophic factors (BDNF, NGF, GDNF)"],
  ["Route", "Oral (in research)", "Intravenous / intramuscular"],
  ["Evidence", "Strong preclinical; no human trials", "Substantial clinical-trial body in stroke, dementia"],
  ["Approved use", "None", "Approved in several jurisdictions (not UK/US/EMA-centralised)"],
  ["UK status", "Research chemical", "Not licensed in the UK"],
];

export default function DihexaVsCerebrolysin() {
  return (
    <Container className="py-10 lg:py-14">
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Comparison</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Dihexa vs Cerebrolysin
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          These compounds occupy opposite ends of the neurotrophic spectrum. Dihexa is a single,
          well-characterised small molecule with an exceptionally strong preclinical synaptogenesis
          signal and no human data. Cerebrolysin is a complex biological preparation with decades of
          clinical use in approving jurisdictions and a correspondingly broad — but more mechanistically
          diffuse — evidence base.
        </p>
      </header>

      <Section title="Side-by-side">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Dihexa</th>
                <th className="px-4 py-3">Cerebrolysin</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/40">
              {ROWS.map(([l, a, b]) => (
                <tr key={l}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{l}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{a}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="The fundamental difference">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Dihexa: depth, not breadth</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              One molecule, one principal target (HGF/c-Met), one principal effect (synaptogenesis).
              The preclinical literature is among the strongest in the cognitive-peptide field, but
              the absence of human trials is a meaningful gap — and the c-Met pathway carries
              non-trivial theoretical safety questions that have not been answered.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Cerebrolysin: breadth, not depth</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Many active components, multiple pathways, pleiotropic effects. The clinical evidence
              base is substantial; the mechanistic clarity is correspondingly weaker because the
              effects are not attributable to a single molecular handle. Parenteral administration
              is required.
            </CardBody>
          </Card>
        </div>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/dihexa">Read Dihexa profile</ButtonLink>
        <ButtonLink href="/peptides/cerebrolysin" variant="outline">Read Cerebrolysin profile</ButtonLink>
      </div>
    </Container>
  );
}
