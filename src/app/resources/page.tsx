import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
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
    blurb:
      "Where to find the original peer-reviewed papers behind every claim on this site. Most peptide research is indexed in PubMed, but Russian-language literature on Semax, Selank, and Noopept is more reliably found via Europe PMC and direct journal searches.",
    items: [
      { label: "PubMed — National Library of Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/", note: "The standard biomedical literature index. Most peptide mechanism and trial papers are here." },
      { label: "ClinicalTrials.gov", url: "https://clinicaltrials.gov/", note: "Searchable registry of registered trials. Useful for confirming whether a compound is in human research and at what phase." },
      { label: "Europe PMC", url: "https://europepmc.org/", note: "Wider coverage of European and Russian journals than PubMed; better for tracking down the original Russian peptide research." },
    ],
  },
  {
    title: "UK & EU regulatory",
    blurb:
      "Authoritative references for the regulatory status statements on each peptide page. If you need to verify the current MHRA position on an unlicensed substance before designing a research protocol, start here.",
    items: [
      { label: "UK MHRA — Medicines & Healthcare products Regulatory Agency", url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency", note: "UK medicines licensing authority. Search 'unlicensed medicines guidance' for the relevant framework around research-use compounds." },
      { label: "European Medicines Agency", url: "https://www.ema.europa.eu/", note: "Centralised EU medicines authority. None of the peptides on this site are EMA-authorised; the database confirms that status." },
      { label: "Home Office — controlled drugs", url: "https://www.gov.uk/government/organisations/home-office", note: "Authority on the Misuse of Drugs Act schedules. None of the peptides on this site are currently controlled, but verify before assuming." },
      { label: "Home Office — Misuse of Drugs Act schedules", url: "https://www.gov.uk/government/publications/controlled-drugs-list--2", note: "The actual current schedule list. Quick check for whether a compound has been added or moved." },
    ],
  },
  {
    title: "Evaluating a research-peptide supplier",
    blurb:
      "Research peptides are sold by many vendors of variable quality. The differentiators that actually matter for research integrity are purity, third-party testing, batch traceability, and supplier transparency — not price.",
    items: [
      { label: "Third-party HPLC certificates of analysis", url: "https://en.wikipedia.org/wiki/High-performance_liquid_chromatography", note: "A reputable supplier publishes a batch-specific HPLC purity certificate from an independent lab. Anything else is unverifiable." },
      { label: "Mass spectrometry confirmation", url: "https://en.wikipedia.org/wiki/Mass_spectrometry", note: "MS confirmation alongside HPLC verifies molecular identity, not just purity. Look for both on the COA." },
      { label: "ICH Q3A residual-solvents framework", url: "https://www.ich.org/page/quality-guidelines", note: "Background on what residual-solvent specifications mean. Peptide synthesis uses solvents like DCM, DMF, TFA — competent suppliers test for them." },
    ],
  },
  {
    title: "Related educational sites",
    blurb:
      "Sister educational and supplier references in the UK research-peptide space.",
    items: [
      { label: "PeptideAuthority.co.uk — broader peptide reference", url: "https://peptideauthority.co.uk/", note: "Companion site with wider coverage across healing, longevity, and metabolic peptides — not just cognitive." },
      { label: "PeptideBarn.co.uk — UK research peptide supplier", url: "https://peptidebarn.co.uk/", note: "UK-based supplier we link from each peptide page's sourcing section." },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
      <Section
        eyebrow="Resources"
        title="External references"
        description="Where to verify claims, read primary research, and check the regulatory status of any peptide discussed on this site."
      >
        <div className="prose mb-8 max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-300">
          <p>
            Every claim on this site should be checkable against a primary source. The links below
            are the references we use when researching new peptide profiles and when reviewing
            existing ones. They are grouped by purpose — primary literature for the underlying
            research, regulatory bodies for jurisdictional status, supplier-evaluation tools for the
            sourcing question, and sister educational sites for cross-reference.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <Card key={s.title}>
              <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
              <CardBody>
                <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">{s.blurb}</p>
                <ul className="space-y-3">
                  {s.items.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener"
                        className="group inline-flex items-start gap-1.5 text-sm font-medium text-slate-800 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
                      >
                        <span>{item.label}</span>
                        <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
                      </a>
                      {"note" in item && item.note && (
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.note}</p>
                      )}
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
