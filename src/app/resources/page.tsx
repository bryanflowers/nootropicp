import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Resources — Peer-reviewed sources and regulatory references",
  description:
    "External resources for verifying claims, reading primary literature, and checking UK / EU regulatory status of research peptides.",
  path: "/resources",
  keywords: ["nootropic peptide research sources", "peptide PubMed", "UK MHRA peptide"],
});

const SECTIONS = [
  {
    title: "Primary literature",
    items: [
      { label: "PubMed — National Library of Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/" },
      { label: "ClinicalTrials.gov", url: "https://clinicaltrials.gov/" },
      { label: "Europe PMC", url: "https://europepmc.org/" },
    ],
  },
  {
    title: "UK & EU regulatory",
    items: [
      { label: "UK Medicines & Healthcare products Regulatory Agency (MHRA)", url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" },
      { label: "European Medicines Agency", url: "https://www.ema.europa.eu/" },
      { label: "Home Office — Drugs misuse and dependency", url: "https://www.gov.uk/government/organisations/home-office" },
    ],
  },
  {
    title: "Related educational sites",
    items: [
      { label: "PeptideAuthority.co.uk — broader peptide reference", url: "https://peptideauthority.co.uk/" },
      { label: "PeptideBarn.co.uk — UK research peptide supplier", url: "https://peptidebarn.co.uk/" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <Container>
      <Section
        eyebrow="Resources"
        title="External references"
        description="Where to verify claims, read primary research, and check the regulatory status of any peptide discussed on this site."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {SECTIONS.map((s) => (
            <Card key={s.title}>
              <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
              <CardBody>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-start gap-1.5 text-sm text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}
