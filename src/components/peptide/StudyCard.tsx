import { ExternalLink } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Study } from "@/types/peptide";

export function StudyCard({ study }: { study: Study }) {
  return (
    <Card>
      <CardBody>
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span>{study.source}</span>
          {study.year && <Badge variant="muted">{study.year}</Badge>}
        </div>
        <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{study.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{study.summary}</p>
        {study.url && (
          <a
            href={study.url}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
          >
            Read study <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </CardBody>
    </Card>
  );
}
