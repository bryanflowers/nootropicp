import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Peptide } from "@/types/peptide";

export function QuickFactsCard({ peptide }: { peptide: Peptide }) {
  const rows: { label: string; value: string }[] = [
    { label: "Category", value: peptide.category },
    { label: "Half-life", value: peptide.halfLife },
  ];
  if (peptide.molecularFormula) rows.push({ label: "Formula", value: peptide.molecularFormula });
  if (peptide.molecularWeight) rows.push({ label: "Weight", value: peptide.molecularWeight });
  if (peptide.sequence) rows.push({ label: "Sequence", value: peptide.sequence });

  return (
    <Card className="bg-gradient-to-br from-brand-50 to-white dark:from-brand-950/30 dark:to-slate-900">
      <CardBody>
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="brand">{peptide.category}</Badge>
          <Badge variant="warn">UK: Research only</Badge>
          <Badge variant="muted">Not for human use</Badge>
        </div>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
          {rows.map((r) => (
            <div key={r.label}>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {r.label}
              </dt>
              <dd className="mt-0.5 text-sm text-slate-900 dark:text-slate-100">{r.value}</dd>
            </div>
          ))}
        </dl>
      </CardBody>
    </Card>
  );
}
