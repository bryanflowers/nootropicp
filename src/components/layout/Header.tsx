import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";
import { Brain } from "lucide-react";

const NAV = [
  { href: "/peptides", label: "Peptides" },
  { href: "/compare", label: "Compare" },
  { href: "/stacks", label: "Stacks" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-50">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 text-white">
            <Brain className="h-5 w-5" aria-hidden />
          </span>
          <span className="hidden sm:inline">Nootropic Peptides</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </Container>
      <nav className="border-t border-slate-200 md:hidden dark:border-slate-800">
        <Container className="flex gap-1 overflow-x-auto py-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-lg px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </Container>
      </nav>
    </header>
  );
}
