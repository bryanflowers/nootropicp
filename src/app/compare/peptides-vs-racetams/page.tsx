import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Peptides vs Racetams — Comparison of two cognitive enhancement traditions",
  description:
    "Head-to-head comparison of the research-peptide family (Semax, Selank, Noopept, Dihexa) and the racetam family (piracetam, aniracetam, oxiracetam) — mechanism, evidence, delivery route, regulatory status.",
  path: "/compare/peptides-vs-racetams",
  keywords: [
    "peptides vs racetams",
    "peptides vs nootropics",
    "racetam vs peptide",
    "piracetam vs Semax",
    "best nootropic class",
  ],
});

const ROWS: [string, string, string][] = [
  ["Chemistry", "Short amino-acid chains (3–15 residues)", "Pyrrolidone-derivative small molecules"],
  ["Discovery era", "Mostly 1970s–2000s; ongoing", "1964 onwards (piracetam)"],
  ["Origin tradition", "Soviet/Russian pharmacology; some Western groups", "Belgian (UCB Pharma) origin; widely Western"],
  ["Primary endpoints", "Memory, focus, neuroprotection, anxiolysis", "Memory, cognitive performance under load"],
  ["Mechanism (dominant)", "BDNF/NGF induction; specific-receptor agonism", "AMPA modulation; membrane fluidity; cholinergic"],
  ["Route", "Mostly intranasal or parenteral", "Oral (all racetams are orally bioavailable)"],
  ["Onset", "Hours to days for cumulative effect", "Hours to days for cumulative effect"],
  ["Per-dose potency", "Microgram to milligram", "Hundreds of milligrams to grams"],
  ["Long-term human data", "Limited outside Russia", "Extensive — piracetam has 50+ years of clinical use in some jurisdictions"],
  ["UK regulatory status", "Research chemicals; not licensed", "Mostly unlicensed; not controlled"],
];

const FAQS = [
  {
    q: "Are racetams better-supported by evidence than peptides?",
    a: "It depends on what 'better-supported' means. Piracetam has decades of human use and a larger body of clinical-trial data than any cognitive peptide outside Russia. The peptides — particularly the Russian cognitive family — have stronger mechanistic clarity (BDNF/NGF induction is a much cleaner story than the racetams' multi-pathway profile) and clearer modern preclinical work. Different strengths.",
  },
  {
    q: "Can racetams and peptides be combined?",
    a: "Combinations are studied in research. Mechanism overlap is limited — peptides like Semax act largely through BDNF/NGF induction, while racetams act primarily through AMPA-receptor modulation and membrane effects — so the combination is not redundant. There is no large body of head-to-head combination research in humans.",
  },
  {
    q: "Why is Noopept sometimes grouped with racetams?",
    a: "Noopept is a small peptidomimetic developed in Russia explicitly as an orally active successor to piracetam. Structurally it bridges the two families. Mechanistically it acts more like the Russian cognitive peptides — BDNF/NGF induction is the dominant endpoint — than like the classical racetams. The clinical positioning in Russian practice is racetam-adjacent.",
  },
  {
    q: "Which class is better for focus?",
    a: "Different mechanisms reach different endpoints. The peptides studied for focus and attention (Semax, Noopept) act through BDNF and monoamine modulation; the racetams studied for focus (aniracetam, phenylpiracetam) act through AMPA potentiation and dopaminergic effects. Research designs that specifically need either mechanism pick accordingly; for general 'focus' enquiries the evidence is approximately tied.",
  },
  {
    q: "Which has better long-term safety?",
    a: "Piracetam has the longer human safety record by a wide margin — decades of use in several jurisdictions. The peptide family has shorter and more geographically constrained human data. For long-protocol research, the racetams have the edge on safety transparency; for short protocols and mechanistic specificity, the peptides do.",
  },
];

export default function PeptidesVsRacetams() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Compare", href: "/compare" },
          { label: "Peptides vs Racetams" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Comparison</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Peptides vs Racetams
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          These are the two principal chemical families studied for cognitive enhancement in
          adult research. They emerged from different scientific traditions, were developed
          decades apart, and rest on different mechanistic assumptions. They are not
          interchangeable, but the choice between them is more nuanced than the partisan literature
          on either side tends to admit.
        </p>
      </header>

      <Section title="Side-by-side">
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr className="text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                <th className="px-4 py-3"></th>
                <th className="px-4 py-3">Research peptides</th>
                <th className="px-4 py-3">Racetams</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/40">
              {ROWS.map(([l, a, b]) => (
                <tr key={l}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{l}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{a}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="The historical context" title="Two traditions, two starting points">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The racetams come out of Belgian medicinal chemistry. Corneliu Giurgea synthesised
              piracetam at UCB Pharma in 1964 and coined the word "nootropic" to describe its
              effects — drugs that improve cognition without sedating, exciting, or otherwise
              substantially affecting non-cognitive systems. Piracetam was followed by aniracetam,
              oxiracetam, pramiracetam, and a small family of close structural cousins. By the
              1990s the class was in clinical use across continental Europe for cognitive
              indications and was being used widely off-label elsewhere.
            </p>
            <p>
              The Russian cognitive peptides come out of a separate scientific tradition.
              Soviet-era and post-Soviet pharmacology, particularly at the Institute of Molecular
              Genetics of the Russian Academy of Sciences, developed a research programme around
              short peptides as cognitive and neuroprotective agents. Semax was approved for
              clinical use in Russia in 1994; Selank followed in the 2000s; Noopept — designed
              specifically as an orally active successor to piracetam — was approved in 2011 in
              Russia. The clinical infrastructure that supports their use never spread to Western
              jurisdictions.
            </p>
            <p>
              The two traditions are now studied together in research practice precisely because
              their mechanisms turn out to be complementary rather than competing. Racetams act
              dominantly on neurotransmission (AMPA potentiation, cholinergic modulation, membrane
              fluidity). Peptides act dominantly on neurotrophin induction (BDNF, NGF). A
              comprehensive research protocol covering both can in principle probe different parts
              of the cognitive-performance pipeline.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The case for each" title="When researchers reach for one over the other">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Reach for a peptide when…</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              <ul className="space-y-2">
                <li>· The endpoint is BDNF/NGF induction or a downstream-of-neurotrophin effect.</li>
                <li>· The research model is ischaemic neuroprotection or stroke recovery.</li>
                <li>· Anxiolysis without sedation is needed (Selank).</li>
                <li>· Synaptogenesis specifically is the question (Dihexa, FGL).</li>
                <li>· The protocol can accommodate intranasal or parenteral delivery.</li>
              </ul>
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Reach for a racetam when…</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              <ul className="space-y-2">
                <li>· You want decades of human safety data behind your tool compound.</li>
                <li>· Oral delivery is mandatory for the protocol design.</li>
                <li>· The endpoint is AMPA-receptor potentiation or membrane-fluidity effects.</li>
                <li>· Cholinergic modulation is part of the mechanism question.</li>
                <li>· Cost and ease of sourcing matter (racetams are typically cheaper).</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </Accordion>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/semax">Semax profile</ButtonLink>
        <ButtonLink href="/peptides/noopept" variant="outline">Noopept profile</ButtonLink>
        <ButtonLink href="/glossary" variant="outline">Glossary</ButtonLink>
      </div>
    </Container>
  );
}
