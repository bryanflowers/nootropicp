import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { getPeptidesBySlugs } from "@/lib/cluster";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Alternatives to Semax — Other cognitive research peptides for memory and focus",
  description:
    "If a research design needs the Semax mechanism but cannot use Semax itself, the realistic alternatives are N-Acetyl Semax (longer-acting), Noopept (oral), Cerebrolysin (multi-component), and Selank (different but complementary endpoint).",
  path: "/alternatives/semax",
  keywords: [
    "alternatives to Semax",
    "Semax substitute",
    "Semax vs Noopept",
    "best alternative to Semax research",
    "N-Acetyl Semax vs Semax",
  ],
});

const ALTS = [
  { slug: "n-acetyl-semax", reason: "Same pharmacology as Semax — BDNF/NGF induction, enkephalinase inhibition, monoaminergic modulation — but with extended half-life thanks to the protected termini. Choose when fewer doses per day is the goal and analogue-specific safety data sparseness is acceptable." },
  { slug: "noopept", reason: "Oral peptidomimetic with overlapping BDNF mechanism. Choose when intranasal administration is operationally impossible. The pharmacology is less specific than Semax (broader monoamine and glutamate effects) but the cognitive endpoint is similar." },
  { slug: "cerebrolysin", reason: "Multi-component neurotrophic preparation covering BDNF, NGF, and GDNF mimicry. Choose when the research design benefits from broad neurotrophic support rather than focused BDNF induction. Parenteral route required." },
  { slug: "selank", reason: "Not a Semax substitute mechanically — Selank's anxiolytic effect is via enkephalinase inhibition, not BDNF induction. Choose if the actual research endpoint is anxiety-with-preserved-cognition rather than cognitive enhancement per se. Often used alongside Semax, not instead of it." },
];

export default function SemaxAlternatives() {
  const items = getPeptidesBySlugs(ALTS.map((a) => a.slug));
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://nootropicpeptides.co.uk/peptides/${p.slug}`,
      description: p.tagline,
    })),
  };

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={itemListSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Alternatives", href: "/alternatives" },
          { label: "Alternatives to Semax" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Alternatives</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Alternatives to Semax
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Semax is the most-characterised cognitive research peptide on the site, but it is not
          always the right tool. Supply constraints, route limitations, the need for a longer
          duration of action, or a research design that calls for a different mechanism can all
          push researchers toward an alternative. Four realistic substitutes are covered below.
        </p>
      </header>

      <Section eyebrow="Why look elsewhere" title="When Semax isn't the right fit">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Semax's defining limitations in research practice are the intranasal-only route (no
              oral option), the short duration of action requiring multiple daily doses, and the
              relatively narrow pharmacology centred on BDNF/NGF induction. Each of these limits
              is what an alternative might address.
            </p>
            <p>
              For research designs needing oral administration, Noopept is the realistic
              substitute. For designs needing longer duration per dose, the N-acetylated analogue
              is the direct replacement. For designs needing broader neurotrophic support, the
              multi-component Cerebrolysin preparation covers more pathways. For designs where the
              actual endpoint is anxiety rather than cognition, Selank's enkephalinase mechanism
              is a different question entirely.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The substitutes" title="Four realistic alternatives">
        <div className="space-y-4">
          {items.map((p, i) => (
            <Card key={p.slug}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <CardTitle>
                    <Link href={`/peptides/${p.slug}`} className="hover:text-brand-600 dark:hover:text-brand-400">
                      {p.name}
                    </Link>
                  </CardTitle>
                  <Badge variant="brand">{p.category}</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-sm text-slate-700 dark:text-slate-300">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <strong>When to choose this instead:</strong> {ALTS[i].reason}
                </p>
                <Link
                  href={`/peptides/${p.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400"
                >
                  Full {p.name} profile →
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="When NOT to switch" title="Reasons to stay with Semax">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Semax remains the right choice when the research design specifically requires the
              BDNF/NGF induction mechanism with the shortest available time-to-effect, the
              best-characterised single-peptide clinical evidence record, and the intranasal route.
              The N-acetylated analogue is the closest substitute mechanically; it is not
              identical, and the parent-compound safety record is meaningfully better-established.
            </p>
            <p>
              In stroke-recovery research specifically, Semax has the strongest published
              single-peptide clinical data in any of the cognitive-peptide indications. For that
              endpoint, alternatives are not substitutes — they are different research questions.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/semax">Back to Semax profile</ButtonLink>
        <ButtonLink href="/compare/semax-vs-selank" variant="outline">Semax vs Selank</ButtonLink>
        <ButtonLink href="/compare/noopept-vs-semax" variant="outline">Noopept vs Semax</ButtonLink>
      </div>
    </Container>
  );
}
