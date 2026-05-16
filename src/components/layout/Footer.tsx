import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NewsletterSignup } from "./NewsletterSignup";
import { SITE, DISCLAIMER } from "@/lib/site";

const COLS = [
  {
    title: "Peptides",
    links: [
      { href: "/peptides/semax", label: "Semax" },
      { href: "/peptides/selank", label: "Selank" },
      { href: "/peptides/dihexa", label: "Dihexa" },
      { href: "/peptides/cerebrolysin", label: "Cerebrolysin" },
      { href: "/peptides/noopept", label: "Noopept" },
      { href: "/peptides/epitalon", label: "Epitalon" },
      { href: "/peptides", label: "All 15 peptides →" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { href: "/use-cases/peptides-for-memory-research", label: "Memory research" },
      { href: "/use-cases/peptides-for-focus-research", label: "Focus & attention" },
      { href: "/use-cases/peptides-for-anxiety-research", label: "Anxiety research" },
      { href: "/use-cases/peptides-for-sleep-research", label: "Sleep research" },
      { href: "/use-cases/peptides-for-neuroprotection-research", label: "Neuroprotection" },
    ],
  },
  {
    title: "Reference",
    links: [
      { href: "/guides/research-peptides-beginners-guide", label: "Beginner's guide" },
      { href: "/guides/uk-peptide-regulations", label: "UK regulations" },
      { href: "/glossary", label: "Glossary" },
      { href: "/research/studies", label: "Study deep dives" },
      { href: "/alternatives", label: "Alternatives" },
      { href: "/resources", label: "Resources" },
    ],
  },
  {
    title: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/legal/disclaimer", label: "Disclaimer" },
      { href: "/legal/privacy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container className="py-12">
        <div className="mb-10">
          <NewsletterSignup />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{SITE.name}</h3>
            <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-400">{SITE.description}</p>
            <p className="mt-4 text-xs text-amber-700 dark:text-amber-300">{DISCLAIMER}</p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center">
          <p>&copy; {year} {SITE.name}. Educational reference site.</p>
          <p>
            Further reading:{" "}
            <a
              href={SITE.partners.peptideAuthority}
              target="_blank"
              rel="noopener"
              className="font-medium text-brand-600 hover:underline dark:text-brand-400"
            >
              PeptideAuthority.co.uk
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
