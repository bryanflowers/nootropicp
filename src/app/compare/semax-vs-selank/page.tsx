import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Semax vs Selank — Comparison of the Two Flagship Russian Cognitive Peptides",
  description:
    "Head-to-head comparison of Semax and Selank: mechanism, target endpoints, evidence base, dosing routes, and the case for combining them in research.",
  path: "/compare/semax-vs-selank",
  keywords: ["Semax vs Selank", "Semax Selank comparison", "Russian cognitive peptides", "Semax Selank stack"],
});

const ROWS: [string, string, string][] = [
  ["Sequence", "Met-Glu-His-Phe-Pro-Gly-Pro", "Thr-Lys-Pro-Arg-Pro-Gly-Pro"],
  ["Parent molecule", "ACTH(4-10) fragment", "Tuftsin (Thr-Lys-Pro-Arg)"],
  ["Primary endpoint", "Cognition, attention, neuroprotection", "Anxiolysis, anti-asthenia, immunomodulation"],
  ["Mechanism (primary)", "BDNF/NGF induction", "Enkephalinase inhibition"],
  ["Route", "Intranasal", "Intranasal"],
  ["Onset", "Hours to days", "30–60 min for anxiolytic feel; days for cumulative effect"],
  ["Clinical use (Russia)", "Stroke recovery, cognitive impairment", "Generalised anxiety, adjustment disorder"],
  ["UK status", "Research chemical", "Research chemical"],
];

export default function SemaxVsSelank() {
  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: "Semax vs Selank" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Comparison</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Semax vs Selank
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Both peptides emerged from the same Russian Academy of Sciences programme in the 1990s and
          are routinely studied together. The mechanistic overlap is real, but the practical
          differences are sharp enough to make the choice obvious once you know your research
          endpoint.
        </p>
      </header>

      <Section title="At a glance">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Semax</th>
                <th className="px-4 py-3">Selank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/40">
              {ROWS.map(([label, a, b]) => (
                <tr key={label}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{label}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{a}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="When researchers pick one over the other">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Reach for Semax when…</CardTitle></CardHeader>
            <CardBody className="text-slate-700 dark:text-slate-300">
              <ul className="space-y-2 text-sm">
                <li>· The endpoint is memory, learning, or sustained attention.</li>
                <li>· The research model is ischaemic neuroprotection or post-stroke recovery.</li>
                <li>· You want BDNF/NGF induction as the molecular handle.</li>
                <li>· The protocol prioritises cognitive performance under load.</li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Reach for Selank when…</CardTitle></CardHeader>
            <CardBody className="text-slate-700 dark:text-slate-300">
              <ul className="space-y-2 text-sm">
                <li>· The endpoint is anxiety, stress reactivity, or anti-asthenic effect.</li>
                <li>· You want anxiolysis without sedation or motor impairment.</li>
                <li>· The mechanism of interest is enkephalin-system modulation.</li>
                <li>· Immune-axis modulation is part of the research question.</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section title="The Semax + Selank stack">
        <Card>
          <CardBody className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-slate-700 dark:text-slate-300">
              Combining the two peptides is one of the most-replicated approaches in published
              Russian research — and the rationale is straightforward: the mechanisms are different
              enough that there is little redundancy. Semax drives BDNF/NGF induction and cognitive
              performance; Selank elevates endogenous enkephalin tone and dampens anxiety without
              affecting alertness. Stacked, they cover both axes of the cognition-mood interaction.
              Most published protocols stagger administration (Semax earlier in the day, Selank
              spread or pre-stressor) rather than co-administering.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/semax">Read full Semax profile</ButtonLink>
        <ButtonLink href="/peptides/selank" variant="outline">Read full Selank profile</ButtonLink>
      </div>
    </Container>
  );
}
