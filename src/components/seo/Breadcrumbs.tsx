import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  if (trail.length === 0) return null;
  const items = trail.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: c.href ? new URL(c.href, SITE.url).toString() : undefined,
  }));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items,
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-6 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-slate-500 dark:text-slate-400">
          {trail.map((c, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden />}
              {c.href ? (
                <Link
                  href={c.href}
                  className="hover:text-brand-600 hover:underline dark:hover:text-brand-400"
                >
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-slate-700 dark:text-slate-300">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
