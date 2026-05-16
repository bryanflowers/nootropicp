import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Noopept vs Semax — Oral Peptidomimetic vs Intranasal Heptapeptide",
  description:
    "Compare Noopept and Semax — two Russian cognitive enhancers with overlapping endpoints but very different chemistry, routes, and pharmacokinetic profiles.",
  path: "/compare/noopept-vs-semax",
  keywords: ["Noopept vs Semax", "Noopept Semax comparison", "oral nootropic peptide"],
});

const ROWS: [string, string, string][] = [
  ["Chemistry", "Proline dipeptide ester (peptidomimetic)", "Heptapeptide (true peptide)"],
  ["Route", "Oral", "Intranasal"],
  ["Onset of effect", "Hours (acute), days (cumulative)", "Hours (acute), days (cumulative)"],
  ["Active species", "Cycloprolylglycine (metabolite) + parent", "Semax peptide"],
  ["Mechanism", "Glutamate modulation + BDNF/NGF induction", "BDNF/NGF induction + enkephalinase + monoamine"],
  ["Clinical use (Russia)", "Approved for cognitive indications", "Approved for cerebrovascular indications"],
  ["UK status", "Research chemical", "Research chemical"],
];

export default function NoopeptVsSemax() {
  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: "Noopept vs Semax" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Comparison</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Noopept vs Semax
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Both emerged from the Russian nootropic research programme, both target memory and
          attention via BDNF and NGF induction, and both are research chemicals in the UK. The chief
          practical difference is delivery: Noopept is orally active, Semax requires intranasal
          administration.
        </p>
      </header>

      <Section title="Side-by-side">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Noopept</th>
                <th className="px-4 py-3">Semax</th>
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

      <Section title="The choice usually comes down to route">
        <Card>
          <CardBody className="text-sm text-slate-700 dark:text-slate-300">
            Researchers comparing Noopept and Semax in practice are rarely choosing between
            mechanisms — the BDNF/NGF induction is broadly similar. The deciding factor is almost
            always practical: Noopept is a small ester that survives the gut, so research protocols
            can use oral capsules. Semax is a true heptapeptide that does not, so protocols are
            intranasal. Pick the delivery your research design accommodates.
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/noopept">Read Noopept profile</ButtonLink>
        <ButtonLink href="/peptides/semax" variant="outline">Read Semax profile</ButtonLink>
      </div>
    </Container>
  );
}
