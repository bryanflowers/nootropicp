import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Focus & Productivity Peptide Stack — Research protocol overview",
  description:
    "A Semax-led stack targeting sustained-attention, mental-fatigue, and working-memory endpoints in cognitive research protocols.",
  path: "/stacks/focus-and-productivity-stack",
  keywords: ["focus peptide stack", "productivity peptide stack", "Semax focus research"],
});

export default function FocusStack() {
  return (
    <Container className="py-10 lg:py-14">
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Focus stack</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Focus & productivity peptide stack
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The endpoint here is sustained attention and mental-fatigue resistance under cognitive
          load — the metric most often probed in research protocols studying productivity-relevant
          cognitive performance.
        </p>
      </header>

      <Section title="The components">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Semax",
              slug: "semax",
              role: "Core cognitive driver — BDNF/NGF induction, sustained-attention effects.",
            },
            {
              name: "DSIP",
              slug: "dsip",
              role: "Sleep-architecture support — memory consolidation depends on slow-wave sleep.",
            },
            {
              name: "Noopept",
              slug: "noopept",
              role: "Oral adjunct — peptidomimetic with overlapping BDNF mechanism for protocols where intranasal is inconvenient.",
            },
          ].map((c) => (
            <Card key={c.slug}>
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{c.role}</p>
                <ButtonLink href={`/peptides/${c.slug}`} size="sm" variant="outline" className="mt-3">
                  Read profile
                </ButtonLink>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Why this combination">
        <Card>
          <CardBody className="text-sm text-slate-700 leading-relaxed dark:text-slate-300">
            The core observation behind this stack is that sustained-attention performance is not a
            single endpoint — it is the product of (a) the brain's capacity to mount and hold a
            cognitive set, (b) recovery between cognitive blocks, and (c) consolidation of learned
            material overnight. Semax addresses (a) directly via BDNF/NGF induction and observed
            sustained-attention effects in published research. DSIP addresses (c) by supporting
            slow-wave sleep, the substrate for memory consolidation. Noopept is an oral adjunct
            with overlapping but distinct mechanism for protocols where intranasal Semax is
            inconvenient. Stack rationale aside, this remains a research-only set of compounds.
          </CardBody>
        </Card>
      </Section>
    </Container>
  );
}
