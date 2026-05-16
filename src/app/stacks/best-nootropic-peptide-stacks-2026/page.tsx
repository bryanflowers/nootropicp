import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Best Nootropic Peptide Stacks of 2026 — Evidence-led combinations",
  description:
    "The peptide combinations most-studied in 2026 research literature: Semax+Selank cognitive-mood, Cerebrolysin neurotrophic, and the Dihexa+FGL synaptogenesis stack.",
  path: "/stacks/best-nootropic-peptide-stacks-2026",
  keywords: ["best nootropic peptide stacks 2026", "Semax Selank stack", "cognitive peptide stack UK"],
});

const STACKS = [
  {
    title: "Semax + Selank — the cognition-mood pairing",
    badge: "Cognitive + Anxiolytic",
    body: "The most-replicated multi-peptide protocol in the Russian literature. Semax handles the BDNF/NGF-mediated cognitive endpoint; Selank handles the enkephalin-mediated anxiolytic endpoint. Mechanism overlap is minimal, which is why the stack is effective rather than redundant. Most published protocols stagger administration (Semax morning, Selank as-needed or pre-stressor).",
    peptides: ["semax", "selank"],
  },
  {
    title: "N-Acetyl Semax + N-Acetyl Selank — the extended-release equivalent",
    badge: "Extended-action variant",
    body: "Same logic as the parent-compound stack but with terminal modifications that extend duration of action. Practically: fewer doses per day for similar pharmacodynamic effect. Analogue-specific long-term safety data is sparser than for the parent compounds — a research-planning consideration.",
    peptides: ["n-acetyl-semax", "n-acetyl-selank"],
  },
  {
    title: "Cerebrolysin + Semax — the heavy-neurotrophic stack",
    badge: "Neurotrophic",
    body: "Used in some Russian post-stroke and post-traumatic-brain-injury rehabilitation protocols. Cerebrolysin provides multi-component neurotrophic support; Semax adds focused BDNF/NGF induction and intranasal CNS access. Cerebrolysin's parenteral route limits this to clinical-research contexts.",
    peptides: ["cerebrolysin", "semax"],
  },
  {
    title: "DSIP + Semax — sleep architecture + cognitive consolidation",
    badge: "Sleep + Cognition",
    body: "Memory consolidation is downstream of slow-wave sleep. The rationale for stacking a sleep-architecture peptide with a daytime cognitive peptide is that the consolidation step itself is the bottleneck for many learning protocols. DSIP at the evening boundary, Semax through the day.",
    peptides: ["dsip", "semax"],
  },
];

export default function BestStacksPage() {
  return (
    <Container className="py-10 lg:py-14">
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Stack guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Best nootropic peptide stacks of 2026
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          A "stack" is a combination of two or more peptides chosen because their mechanisms cover
          complementary endpoints with minimal redundancy. The four combinations below are the
          most-replicated in published research, ranked by depth of supporting evidence.
        </p>
      </header>

      <Section title="The four stacks worth knowing">
        <div className="space-y-6">
          {STACKS.map((s) => (
            <Card key={s.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle>{s.title}</CardTitle>
                  <Badge variant="brand">{s.badge}</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-slate-700 leading-relaxed dark:text-slate-300">{s.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.peptides.map((p) => (
                    <ButtonLink key={p} href={`/peptides/${p}`} variant="outline" size="sm">
                      {p.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")} profile
                    </ButtonLink>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="A note on stacking decisions">
        <Card>
          <CardBody className="text-sm text-slate-700 dark:text-slate-300">
            Stacking research peptides multiplies the unknowns. Each individual peptide has its own
            limited human safety data; combinations have correspondingly less. Researchers planning
            protocols should treat stack data with greater epistemic caution than single-peptide
            data, particularly where mechanisms overlap (multiple BDNF inducers) or where one
            component has theoretical safety questions (Dihexa's c-Met activation, for example).
            All combinations remain strictly research-use; this site does not recommend any peptide
            stack for human consumption.
          </CardBody>
        </Card>
      </Section>
    </Container>
  );
}
