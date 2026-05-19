import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About — Nootropic Peptides",
  description:
    "About Nootropic Peptides — an independent educational reference for research peptides in the cognitive enhancement and brain-health literature.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <Section eyebrow="About" title="An educational reference, not a marketplace">
        <div className="prose max-w-3xl text-slate-700 dark:prose-invert dark:text-slate-300">
          <p>
            Nootropic Peptides is an independent educational reference site covering research
            peptides relevant to cognitive enhancement, neuroprotection, mood, focus, and brain
            health. The site catalogues mechanism of action, published research, safety profile, and
            UK and EU regulatory status for each compound — written in a neutral, evidence-based
            tone, without therapeutic claims and without selling anything.
          </p>
          <p>
            The peptides discussed here are research chemicals, not medicines. None are licensed for
            human use in the United Kingdom. The site exists because the existing online
            information landscape for these compounds is dominated by either marketing copy or
            speculation, and a neutral reference is genuinely useful for researchers, students, and
            informed readers who want to understand the actual state of the published literature.
          </p>
          <p>
            Where the site links to commercial suppliers — explicitly, on each peptide page — it does
            so because researchers genuinely do need to source these compounds for laboratory work,
            and a clear pointer to known UK suppliers is more useful than pretending the question
            does not arise. Those links should be read as research-sourcing references, not as
            endorsements of human consumption.
          </p>

          <h2>How the site is structured</h2>
          <p>
            Each peptide profile follows the same template — quick-facts panel, biochemistry
            overview, discovery history, mechanism of action, researched benefits, theoretical
            dosing protocols, administration routes, safety profile, UK and EU regulatory context,
            clinical studies summary, FAQs, sourcing notes, and related peptides. The uniform
            structure means readers can compare across peptides quickly and can rely on finding the
            same kind of information in the same place.
          </p>
          <p>
            Comparison pages, stack guides, and topic-level research summaries cover the
            cross-cutting questions — how does Semax differ from Selank, what does the
            BDNF-induction literature actually show, why is intranasal delivery the standard route
            in this research family.
          </p>

          <h2>Editorial process and update cadence</h2>
          <p>
            Every peptide profile carries a "last reviewed" date in its header. The default cadence
            is a quarterly audit — published research is checked, new studies are summarised,
            regulatory-status statements are reverified against current MHRA and EMA positions, and
            the last-reviewed date is bumped. High-profile updates (new clinical trial results,
            material regulatory changes, retractions in the literature) trigger immediate revisions
            outside the regular cadence.
          </p>
          <p>
            We deliberately avoid auto-generated content and avoid republishing copy from supplier
            sites. Every page on this site is written from primary or peer-reviewed secondary
            sources by a human editor with the brief: write it as if the reader is a PhD student in
            pharmacology rather than a consumer.
          </p>

          <h2>Conflicts of interest and disclosure</h2>
          <p>
            This site links externally to two commercial peptide suppliers — PeptideAuthority.co.uk
            and PeptideBarn.co.uk — under "Sourcing for laboratory research" sections on each peptide
            page. Those links are not paid advertising and do not currently carry an affiliate
            commission. They are present because researchers do need a real-world answer to the
            "where do I get this for laboratory work" question, and named UK suppliers with traceable
            documentation are a meaningfully better answer than unverified offshore vendors.
          </p>
          <p>
            If the commercial relationship changes — for instance, if these links become affiliate
            links — that disclosure will be added to every page that contains them. No content
            decision on this site (which peptides to cover, what to say about them, which studies to
            summarise) is influenced by any commercial relationship.
          </p>
          <p>
            We do measure how often the supplier links are clicked. Clicks pass through an internal
            redirect that records the supplier, the source peptide page, the browser family, and a
            daily-salted hash of the visitor's IP address (the raw IP is not stored). This lets us
            see which peptide pages drive research-sourcing interest without tracking individual
            visitors across the site. Outbound supplier links carry <code>rel=&quot;sponsored
            nofollow&quot;</code> in line with Google's guidance on sponsored or commercially
            relevant links, even though our supplier links are not currently paid placements. Full
            detail in the <a href="/legal/privacy">privacy policy</a>.
          </p>

          <h2>Reporting errors</h2>
          <p>
            If you spot a factual error — a misstated mechanism, a study referenced incorrectly, a
            regulatory claim that is out of date — please flag it. Corrections are made within a
            working week and the affected page's "last reviewed" date is bumped. We treat
            corrections as a feature of the site, not an embarrassment: the only way to maintain a
            credible reference is to fix the things that turn out to be wrong.
          </p>
        </div>
      </Section>

      <Section title="Editorial standards">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardBody>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Mechanism first</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Every peptide page leads with the molecular mechanism. If a claim cannot be tied to
                a published mechanistic or clinical study, it does not appear.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Regulatory transparency</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                UK and EU regulatory status is stated explicitly on every page, including where the
                status differs across jurisdictions. No grey-area implications.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">No therapeutic claims</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Effects reported in research are research findings — not health benefits in humans.
                The distinction is maintained throughout.
              </p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Safety honesty</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Where long-term human safety data is sparse — which is most peptides discussed here
                — the gap is named explicitly rather than glossed over.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
