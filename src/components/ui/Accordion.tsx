"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-200 last:border-0 dark:border-slate-800">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-slate-900 dark:text-slate-100">{question}</span>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform",
            open && "rotate-180",
          )}
          aria-hidden
        />
      </button>
      {open && (
        <div className="pb-4 pr-8 text-slate-700 leading-relaxed dark:text-slate-300">{answer}</div>
      )}
    </div>
  );
}

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-slate-200 bg-white px-5 dark:border-slate-800 dark:bg-slate-900/60">{children}</div>;
}
