import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getRelatedPeptides } from "@/data/peptides";

export function RelatedPeptides({ slug }: { slug: string }) {
  const related = getRelatedPeptides(slug, 3);
  if (related.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {related.map((p) => (
        <Card key={p.slug}>
          <CardBody>
            <Badge variant="brand" className="mb-2">{p.category}</Badge>
            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">{p.name}</h4>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.tagline}</p>
            <Link
              href={`/peptides/${p.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              Read more <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
