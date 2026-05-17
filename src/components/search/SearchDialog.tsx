"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { Search, X, ArrowRight } from "lucide-react";
import MiniSearch from "minisearch";
import type { SearchDocument } from "@/app/api/search-index/route";

type Result = SearchDocument & { score: number };

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

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDocument[] | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => {
    if (!docs) return null;
    const ms = new MiniSearch<SearchDocument>({
      idField: "id",
      fields: ["title", "excerpt", "body", "keywords"],
      storeFields: ["title", "url", "excerpt", "type", "keywords"],
      searchOptions: {
        boost: { title: 3, keywords: 2 },
        fuzzy: 0.2,
        prefix: true,
      },
    });
    ms.addAll(docs);
    return ms;
  }, [docs]);

  const ensureIndex = useCallback(async () => {
    if (docs || loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/search-index", { cache: "force-cache" });
      const data: SearchDocument[] = await res.json();
      setDocs(data);
    } finally {
      setLoading(false);
    }
  }, [docs, loading]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      ensureIndex();
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [open, ensureIndex]);

  const results: Result[] = useMemo(() => {
    if (!index || !query.trim()) return [];
    return index.search(query, { fuzzy: 0.2, prefix: true }).slice(0, 20) as unknown as Result[];
  }, [index, query]);

  return (
    <>
      <button
        type="button"
        aria-label="Search"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
      >
        <Search className="h-4 w-4" aria-hidden />
        <span className="hidden sm:inline">Search</span>
        <kbd className="ml-2 hidden rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-xs font-mono text-slate-500 sm:inline dark:border-slate-700 dark:bg-slate-800">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/60 backdrop-blur-sm px-4 pt-[10vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
              <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden />
              <input
                ref={inputRef}
                type="search"
                placeholder="Search peptides, mechanisms, studies, glossary…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-slate-100"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {loading && !docs && (
                <div className="px-4 py-6 text-center text-sm text-slate-500">Loading search index…</div>
              )}
              {!loading && docs && !query.trim() && (
                <div className="px-4 py-6 text-center text-sm text-slate-500">
                  Start typing — searches across {docs.length} peptides, studies, definitions, and guides.
                </div>
              )}
              {query.trim() && results.length === 0 && docs && (
                <div className="px-4 py-6 text-center text-sm text-slate-500">No results for "{query}".</div>
              )}
              {results.length > 0 && (
                <ul className="divide-y divide-slate-200 dark:divide-slate-800">
                  {results.map((r) => (
                    <li key={r.id}>
                      <Link
                        href={r.url}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      >
                        <span className="mt-0.5 inline-flex shrink-0 rounded bg-brand-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                          {TYPE_LABELS[r.type]}
                        </span>
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">{r.title}</h3>
                          <p className="mt-0.5 line-clamp-2 text-xs text-slate-600 dark:text-slate-400">{r.excerpt}</p>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-400">
              <kbd className="rounded border border-slate-300 bg-white px-1 dark:border-slate-700 dark:bg-slate-800">↵</kbd> open ·{" "}
              <kbd className="rounded border border-slate-300 bg-white px-1 dark:border-slate-700 dark:bg-slate-800">Esc</kbd> close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
