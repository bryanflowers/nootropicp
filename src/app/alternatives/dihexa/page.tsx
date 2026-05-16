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
  title: "Alternatives to Dihexa — Other synaptogenic and neuroplasticity research peptides",
  description:
    "If a research design wants Dihexa's synaptogenic effect but the c-Met safety questions, the lack of human trials, or another factor rules it out, the realistic alternatives are FGL, Cerebrolysin, and BDNF-inducing peptides.",
  path: "/alternatives/dihexa",
  keywords: [
    "alternatives to Dihexa",
    "Dihexa substitute",
    "synaptogenic peptide alternatives",
    "Dihexa safety concerns",
    "Dihexa replacement",
  ],
});

const ALTS = [
  { slug: "fgl-peptide", reason: "Other synaptogenic peptide acting through FGFR1 rather than c-Met. Different pathway, same downstream PI3K-Akt and MAPK signalling, comparable preclinical synaptogenic profile in published research. The theoretical oncogenic-pathway concerns apply to FGFR1 too, but the pathway is distinct enough to be informative as a separate research tool." },
  { slug: "cerebrolysin", reason: "Multi-component neurotrophic preparation with substantial clinical evidence base, including cognitive recovery data. The synaptogenic effects are diffuse rather than focused (no single defined molecular mechanism) but the human clinical-trial record is the strongest in the cluster. Parenteral route required." },
  { slug: "semax", reason: "BDNF/NGF inducer rather than direct synaptogenic agent — different mechanism but overlapping cognitive endpoint. Choose when the actual research interest is the downstream cognitive enhancement rather than the specific synaptogenic mechanism, or when human safety data depth is non-negotiable." },
  { slug: "noopept", reason: "Oral peptidomimetic with BDNF induction and glutamatergic modulation. The mechanism is upstream of synaptogenesis rather than direct. Choose when oral administration is operationally required and the research endpoint can tolerate the less mechanistically focused approach." },
];

export default function DihexaAlternatives() {
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
          { label: "Alternatives to Dihexa" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Alternatives</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Alternatives to Dihexa
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Dihexa's preclinical synaptogenic data is striking, but several factors push researchers
          toward alternatives — the absence of human trials, the theoretical c-Met-pathway safety
          concerns, the lack of long-term toxicology, and the limited supply through reputable
          channels. Four realistic substitutes are covered below.
        </p>
      </header>

      <Section eyebrow="Why look elsewhere" title="When Dihexa isn't the right fit">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The safety questions around chronic c-Met agonism are meaningful and unanswered. No
              human trials of Dihexa are publicly registered. No long-term animal toxicology data
              is available. Research designs that involve sustained exposure rather than
              short-duration mechanistic probing will eventually run into the safety-evidence gap
              and need a more characterised alternative.
            </p>
            <p>
              The other reason is supply. Dihexa is available through fewer reputable
              research-chemical suppliers than Semax or Cerebrolysin, and batch-to-batch variation
              is harder to verify. For a research design that requires reproducible material across
              extended timescales, a more standardised alternative is often preferred even if the
              mechanistic specificity is lower.
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

      <Section eyebrow="When NOT to switch" title="Reasons to stay with Dihexa">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Dihexa remains the right choice when the research question is specifically about
              c-Met pathway agonism as a tool for studying synaptogenesis, when the published
              preclinical data on dendritic-spine formation at picomolar concentrations is the
              endpoint of interest, and when oral bioavailability of a synaptogenic agent matters
              for the protocol design. For mechanistic studies in cell culture and hippocampal
              slice preparations, the substitutes do not provide the same focused pharmacology.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/dihexa">Back to Dihexa profile</ButtonLink>
        <ButtonLink href="/mechanisms/synaptogenic-peptides" variant="outline">Synaptogenic hub</ButtonLink>
        <ButtonLink href="/compare/dihexa-vs-cerebrolysin" variant="outline">Dihexa vs Cerebrolysin</ButtonLink>
      </div>
    </Container>
  );
}
