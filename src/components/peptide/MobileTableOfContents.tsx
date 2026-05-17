"use client";

import { useState, useEffect } from "react";
import { List, X } from "lucide-react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "history", label: "Discovery & History" },
  { id: "mechanism", label: "Mechanism of Action" },
  { id: "benefits", label: "Researched Benefits" },
  { id: "dosing", label: "Dosing Protocols" },
  { id: "routes", label: "Administration Routes" },
  { id: "safety", label: "Safety Profile" },
  { id: "regulatory", label: "UK & EU Regulatory" },
  { id: "studies", label: "Clinical Studies" },
  { id: "faqs", label: "FAQs" },
  { id: "sourcing", label: "Sourcing for Research" },
  { id: "related", label: "Related Peptides" },
];

export function MobileTableOfContents() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
        className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-brand-900/30 hover:bg-brand-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
      >
        <List className="h-5 w-5" aria-hidden />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Table of contents"
        >
          <div className="absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto rounded-t-2xl bg-white shadow-2xl dark:bg-slate-900">
            <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                On this page
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <ul className="px-3 py-3">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-brand-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
