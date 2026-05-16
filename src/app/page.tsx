import Link from "next/link";
import { ArrowRight, Brain, FlaskConical, Microscope, Sparkles, ShieldCheck, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { peptides } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nootropic Peptides — Research-grade reference for cognitive peptides UK",
  description:
    "Evidence-based educational reference for nootropic research peptides — Semax, Selank, Dihexa, Cerebrolysin, DSIP, Noopept and more. Mechanism, studies, safety, UK regulatory context.",
  path: "/",
  keywords: ["nootropic peptides", "cognitive peptides UK", "Semax research", "Selank research", "best nootropic peptides 2026"],
});

const FEATURES = [
  { icon: Microscope, title: "Mechanism-first", body: "Every entry leads with the molecular mechanism before the marketing." },
  { icon: BookOpen, title: "Studies summarised", body: "Plain-English summaries of the peer-reviewed evidence — what it shows and what it doesn't." },
  { icon: ShieldCheck, title: "Regulatory clarity", body: "Explicit UK and EU regulatory status on every page. No grey-area implications." },
  { icon: Sparkles, title: "Evidence, not hype", body: "Neutral scientific tone. We do not market peptides for human use." },
];

const FEATURED_SLUGS = ["semax", "selank", "dihexa", "cerebrolysin", "noopept", "dsip"];

export default function HomePage() {
  const featured = peptides.filter((p) => FEATURED_SLUGS.includes(p.slug));
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-brand-50/60 via-white to-white dark:border-slate-800 dark:from-brand-950/40 dark:via-slate-950 dark:to-slate-950">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]"
        />
        <Container className="py-16 lg:py-24">
          <div className="max-w-3xl">
            <Badge variant="brand" className="mb-4">For laboratory research use only</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl lg:text-6xl">
              The scientific reference for{" "}
              <span className="bg-gradient-to-br from-brand-600 to-accent-600 bg-clip-text text-transparent">
                nootropic research peptides
              </span>
            </h1>
            <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 sm:text-xl">
              Evidence-based, neutrally written profiles of the peptides most relevant to cognitive
              enhancement, neuroprotection, focus, mood, and brain health research — with
              mechanism-of-action breakdowns, study summaries, safety profiles, and UK regulatory
              context.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/peptides" size="lg">
                Browse all peptides <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/stacks/best-nootropic-peptide-stacks-2026" variant="outline" size="lg">
                Best stacks of 2026
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              All peptides discussed are research chemicals, not licensed medicines. Content is
              educational and not medical advice.
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <Section eyebrow="Why this site" title="Educational reference, not a marketplace">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <Card key={f.title}>
                <CardBody>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{f.body}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          eyebrow="Peptide library"
          title="Featured research peptides"
          description="Six of the most-studied peptides in the cognitive enhancement and neuroprotection literature."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/peptides/${p.slug}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 rounded-2xl"
              >
                <Card className="h-full transition-shadow group-hover:shadow-lg">
                  <CardBody>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <Badge variant="brand">{p.category}</Badge>
                      <Brain
                        className="h-5 w-5 text-slate-400 transition-colors group-hover:text-brand-500"
                        aria-hidden
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                      Read profile <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/peptides" variant="outline">
              View all 10 peptides <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </Section>

        <Section
          eyebrow="Brain health"
          title="What the research is investigating"
          description="The peptides catalogued on this site are studied across a range of cognitive-health endpoints."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Memory & learning", body: "BDNF and NGF induction, hippocampal LTP facilitation, synaptogenesis." },
              { title: "Focus & attention", body: "Sustained-attention performance, mental fatigue resistance, vigilance metrics." },
              { title: "Anxiety & mood", body: "Enkephalinase inhibition, HPA-axis modulation, stress resilience." },
              { title: "Neuroprotection", body: "Ischaemia, oxidative stress, excitotoxicity — preclinical neuroprotective profiles." },
              { title: "Sleep architecture", body: "Slow-wave consolidation, REM modulation, indirect cognitive effects." },
              { title: "Neurogenesis", body: "FGFR1 and c-Met agonism, dendritic spine density, adult plasticity." },
            ].map((b) => (
              <Card key={b.title}>
                <CardBody>
                  <FlaskConical className="mb-2 h-5 w-5 text-accent-600" aria-hidden />
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{b.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{b.body}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </Section>

        <Section eyebrow="Start here" title="New to research peptides?">
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/peptides/semax" className="group">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Most studied</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">Read the Semax profile</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">The flagship Russian cognitive peptide.</p>
                </CardBody>
              </Card>
            </Link>
            <Link href="/compare/semax-vs-selank" className="group">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Compare</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">Semax vs Selank</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Cognitive vs anxiolytic — pick the right tool.</p>
                </CardBody>
              </Card>
            </Link>
            <Link href="/legal/disclaimer" className="group">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-400">Important</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-slate-100">Read the disclaimer</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">UK regulatory status and research-use scope.</p>
                </CardBody>
              </Card>
            </Link>
          </div>
        </Section>
      </Container>
    </>
  );
}
