import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of use",
  description: "Terms of use for Nootropic Peptides — educational reference site for research peptides.",
  path: "/legal/terms",
});

export default function TermsPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Legal", href: "/legal/disclaimer" }, { label: "Terms" }]} />
      <Section eyebrow="Legal" title="Terms of use">
        <div className="prose max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-300">
          <h2>Use of this site</h2>
          <p>
            You may read, share, and reference content on this site for educational and research
            purposes. You may not reproduce site content in bulk for commercial purposes without
            written permission. Excerpts with attribution and a link back to the source page are
            welcome.
          </p>

          <h2>No medical advice</h2>
          <p>
            Nothing on this site constitutes medical advice. The compounds discussed are research
            chemicals, not licensed treatments. Readers should consult a qualified clinician for
            medical questions.
          </p>

          <h2>External links</h2>
          <p>
            The site links to external resources for research and sourcing reference. The site
            authors are not responsible for the content, accuracy, or availability of external
            sites.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            Site content is provided as-is. The site authors accept no liability for any action
            taken on the basis of information presented here.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            These terms are governed by the law of England and Wales. Any dispute will be subject to
            the exclusive jurisdiction of the courts of England and Wales.
          </p>
        </div>
      </Section>
    </Container>
  );
}
