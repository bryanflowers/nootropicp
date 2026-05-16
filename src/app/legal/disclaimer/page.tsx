import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Disclaimer — Research-use only, no human consumption",
  description:
    "Full disclaimer and UK regulatory position. Nootropic peptides discussed on this site are research chemicals, not licensed medicines.",
  path: "/legal/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <Container>
      <Section eyebrow="Legal" title="Disclaimer">
        <Card className="border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
          <CardBody className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p className="font-semibold">
              All peptides discussed on this site are research chemicals supplied strictly for in
              vitro and preclinical laboratory use. None are licensed medicines in the United
              Kingdom. None are intended for human consumption, ingestion, injection, or
              therapeutic use of any kind.
            </p>
          </CardBody>
        </Card>

        <div className="prose mt-6 max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-300">
          <h2>Scope</h2>
          <p>
            This site is an educational reference. Its content describes published research,
            mechanism of action, safety profiles as reported in the literature, and regulatory
            status. It does not constitute medical advice, treatment recommendation, or guidance for
            human use. Readers seeking medical advice should consult a qualified clinician.
          </p>

          <h2>UK regulatory position</h2>
          <p>
            Under the Human Medicines Regulations 2012, supply of unlicensed medicines for human
            consumption is restricted. None of the peptides discussed on this site is licensed as a
            medicine by the UK Medicines and Healthcare products Regulatory Agency (MHRA). Sale,
            supply, or importation of these compounds for human use is not permitted under that
            legislation.
          </p>
          <p>
            None of the peptides discussed on this site is, at the time of writing, listed under the
            Misuse of Drugs Act 1971. They are therefore not controlled drugs in the conventional
            sense. This does not, however, make them legal for human use — only legal to possess as
            research chemicals.
          </p>

          <h2>Liability</h2>
          <p>
            Information on this site is provided as-is, without warranty of completeness or
            accuracy. The site authors accept no liability for any action taken on the basis of
            information presented here. Researchers using these compounds in laboratory work do so
            under their own professional and institutional responsibility.
          </p>

          <h2>External links</h2>
          <p>
            Links to external suppliers (PeptideBarn.co.uk, PeptideAuthority.co.uk) are provided as
            research-sourcing references. The site does not vouch for the quality, purity, or
            regulatory compliance of any specific commercial supplier. Researchers should perform
            their own due diligence — third-party purity testing, supplier credentialing, and
            documentation review — before placing any order.
          </p>

          <h2>Changes</h2>
          <p>
            The regulatory status of research peptides can change. While this site is kept reasonably
            current, readers should verify the current status of any specific compound with primary
            regulatory sources (MHRA, Home Office) before relying on the position stated here.
          </p>
        </div>
      </Section>
    </Container>
  );
}
