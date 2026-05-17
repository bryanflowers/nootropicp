"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, ArrowRight } from "lucide-react";
import MiniSearch from "minisearch";
import type { SearchDocument } from "@/app/api/search-index/route";

const TYPE_LABELS: Record<SearchDocument["type"], string> = {
  peptide: "Peptide",
  research: "Research summary",
  study: "Study deep dive",
  glossary: "Glossary",
  guide: "Guide",
  mechanism: "Mechanism",
  "use-case": "Use case",
  stack: "Stack",
  compare: "Comparison",
  alternative: "Alternative",
  page: "Page",
};

export function SearchPageClient() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const [docs, setDocs] = useState<SearchDocument[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/search-index", { cache: "force-cache" })
      .then((r) => r.json())
      .then((d: SearchDocument[]) => setDocs(d))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const next = query.trim();
    const current = params.get("q") ?? "";
    if (next !== current) {
      const url = next ? `/search?q=${encodeURIComponent(next)}` : "/search";
      router.replace(url, { scroll: false });
    }
  }, [query, params, router]);

  const index = useMemo(() => {
    if (!docs) return null;
    const ms = new MiniSearch<SearchDocument>({
      idField: "id",
      fields: ["title", "excerpt", "body", "keywords"],
      storeFields: ["title", "url", "excerpt", "type"],
      searchOptions: { boost: { title: 3, keywords: 2 }, fuzzy: 0.2, prefix: true },
    });
    ms.addAll(docs);
    return ms;
  }, [docs]);

  const results = useMemo(() => {
    if (!index || !query.trim()) return [];
    return index.search(query, { fuzzy: 0.2, prefix: true }).slice(0, 50);
  }, [index, query]);

  return (
    <>
      <div className="mt-6 flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <Search className="h-5 w-5 text-slate-400" aria-hidden />
        <input
          autoFocus
          type="search"
          placeholder="Search peptides, mechanisms, glossary, studies…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
        />
      </div>

      <div className="mt-6">
        {loading && <p className="text-sm text-slate-500">Loading search index…</p>}
        {!loading && !query.trim() && docs && (
          <p className="text-sm text-slate-500">
            Type to search across {docs.length} documents — peptides, mechanism hubs, glossary terms,
            studies, guides, and use-case hubs.
          </p>
        )}
        {query.trim() && results.length === 0 && !loading && (
          <p className="text-sm text-slate-500">No results for "{query}".</p>
        )}
        {results.length > 0 && (
          <ul className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900/40">
            {results.map((r) => (
              <li key={r.id}>
                <Link
                  href={(r as unknown as { url: string }).url}
                  className="flex items-start gap-3 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  <span className="mt-0.5 inline-flex shrink-0 rounded bg-brand-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    {TYPE_LABELS[(r as unknown as { type: SearchDocument["type"] }).type]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      {(r as unknown as { title: string }).title}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                      {(r as unknown as { excerpt: string }).excerpt}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
