import { ExternalLink, FlaskConical } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { SITE } from "@/lib/site";

export function SupplierCTA({ peptideName }: { peptideName: string }) {
  return (
    <Card className="border-brand-200 bg-brand-50/50 dark:border-brand-800/50 dark:bg-brand-950/20">
      <CardBody>
        <div className="flex items-start gap-4">
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white sm:inline-flex">
            <FlaskConical className="h-5 w-5" aria-hidden />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
              Sourcing {peptideName} for laboratory research
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              Researchers in the United Kingdom and elsewhere typically obtain {peptideName} from
              specialist research-chemical suppliers. Purity, third-party testing, and supplier
              transparency are the principal differentiators worth evaluating before placing an order.
              The two suppliers below are commonly referenced in UK research contexts.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={SITE.partners.peptideBarn}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700"
              >
                PeptideBarn.co.uk <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
              <a
                href={SITE.partners.peptideAuthority}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-lg border border-brand-300 px-4 py-2 text-sm font-medium text-brand-700 hover:bg-brand-100 dark:border-brand-700 dark:text-brand-300 dark:hover:bg-brand-900/30"
              >
                PeptideAuthority.co.uk <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              Reminder: research peptides are sold strictly for in vitro and preclinical laboratory
              purposes. Importation or supply for human consumption is not permitted under UK
              medicines legislation.
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
