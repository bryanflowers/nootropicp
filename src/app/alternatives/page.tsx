import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Alternatives to popular research peptides — Semax, Selank, Dihexa, Cerebrolysin",
  description:
    "Mechanism-led alternatives to the most-studied cognitive research peptides. When researchers reach for a substitute, what they typically substitute it with, and why.",
  path: "/alternatives",
  keywords: [
    "alternatives to Semax",
    "alternatives to Selank",
    "alternatives to Dihexa",
    "alternatives to Cerebrolysin",
    "peptide substitutes research",
  ],
});

const ITEMS = [
  { href: "/alternatives/semax", label: "Alternatives to Semax", body: "If the research need is cognitive-attentional but the protocol does not fit Semax, what else covers the same ground." },
  { href: "/alternatives/selank", label: "Alternatives to Selank", body: "Other peptide-class anxiolytic and stress-resilience options when Selank is unavailable or unsuitable." },
  { href: "/alternatives/dihexa", label: "Alternatives to Dihexa", body: "Other synaptogenic and neuroplasticity research peptides when Dihexa-specific factors rule it out." },
  { href: "/alternatives/cerebrolysin", label: "Alternatives to Cerebrolysin", body: "Other neurotrophic-mimetic research options when parenteral Cerebrolysin is impractical for the design." },
];

export default function AlternativesIndex() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Alternatives" }]} />
      <Section
        eyebrow="Alternatives"
        title="Mechanism-led peptide substitution guides"
        description="Researchers reach for alternatives for many reasons — supply, route, tolerability, mechanism specificity, safety profile. These pages map the substitution space around each major peptide and explain when each alternative is the better fit."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {ITEMS.map((i) => (
            <Link key={i.href} href={i.href} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{i.label}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{i.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Read alternatives <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
