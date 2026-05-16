import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
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
