import Link from "next/link";

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

export function TableOfContents() {
  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-slate-200 dark:border-slate-800">
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <Link
              href={`#${s.id}`}
              className="-ml-px block border-l-2 border-transparent pl-3 py-0.5 text-slate-600 hover:border-brand-500 hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
