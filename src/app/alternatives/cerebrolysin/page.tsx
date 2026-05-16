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
  title: "Alternatives to Cerebrolysin — Other neurotrophic and neuroprotective research peptides",
  description:
    "If a research design wants Cerebrolysin's multi-pathway neurotrophic effect but the parenteral route, the porcine origin, or the multi-component complexity isn't workable, the alternatives are Semax, Dihexa, Pinealon, and FGL.",
  path: "/alternatives/cerebrolysin",
  keywords: [
    "alternatives to Cerebrolysin",
    "Cerebrolysin substitute",
    "neurotrophic peptide alternative",
    "Cerebrolysin vs Semax",
    "non-parenteral Cerebrolysin alternative",
  ],
});

const ALTS = [
  { slug: "semax", reason: "Defined single peptide with BDNF/NGF induction as the principal mechanism. Choose when mechanistic specificity matters more than multi-pathway coverage, when intranasal delivery is preferred over parenteral, and when working from a single defined molecular structure is important for reproducibility." },
  { slug: "dihexa", reason: "Focused synaptogenic mechanism via c-Met agonism. Choose when the research endpoint is specifically new-synapse formation rather than broad neurotrophic support. Oral bioavailability is a meaningful practical advantage; safety data depth is meaningfully shallower." },
  { slug: "pinealon", reason: "Khavinson-school bioregulator targeting oxidative-stress attenuation and excitotoxicity in cell-culture work. Choose when the mechanism of interest is antioxidant defence and neuroprotection in oxidative-stress models specifically." },
  { slug: "fgl-peptide", reason: "FGFR1-pathway peptide with anti-apoptotic and synaptogenic effects. Defined mechanism, smaller evidence base than Cerebrolysin. Choose when the research design needs a single defined peptide for FGFR1-mediated neuroprotection studies." },
];

export default function CerebrolysinAlternatives() {
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
          { label: "Alternatives to Cerebrolysin" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Alternatives</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Alternatives to Cerebrolysin
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Cerebrolysin has the strongest clinical evidence base in the cognitive-peptide field,
          but it is also the least convenient compound to work with — parenteral administration,
          multi-component preparation, porcine origin, and limited UK availability. When those
          factors rule it out, four single-peptide alternatives cover overlapping research ground.
        </p>
      </header>

      <Section eyebrow="Why look elsewhere" title="When Cerebrolysin isn't the right fit">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Cerebrolysin is administered by intravenous infusion or intramuscular injection. For
              most independent research contexts this is a meaningful practical constraint:
              parenteral protocols require trained personnel, sterile technique, and a clinical
              environment that single-peptide intranasal alternatives do not. The compound is also
              not licensed in the UK, which adds an importation question that some research designs
              cannot accommodate.
            </p>
            <p>
              The multi-component nature is also a mechanistic constraint. Cerebrolysin is a
              standardised preparation but not a single molecule, so it is harder to use as a
              clean mechanistic probe than a defined single peptide. Researchers studying a
              specific pathway in isolation typically prefer Semax (BDNF), Dihexa (c-Met), or FGL
              (FGFR1) for that reason.
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

      <Section eyebrow="When NOT to switch" title="Reasons to stay with Cerebrolysin">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Cerebrolysin remains the right choice when the research design requires the
              broadest available clinical-trial evidence base in any of the cognitive-peptide
              indications, when multi-pathway neurotrophic effect is the explicit endpoint rather
              than a single defined mechanism, and when the parenteral route is acceptable or
              preferable. In vascular dementia and post-stroke recovery research particularly, no
              single-peptide alternative matches Cerebrolysin's clinical record.
            </p>
            <p>
              The clinical-trial body around Cerebrolysin extends across decades and includes
              well-conducted randomised studies. Substituting a single peptide moves from that
              evidence base to a more limited one, even where the mechanism is cleaner.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/cerebrolysin">Back to Cerebrolysin profile</ButtonLink>
        <ButtonLink href="/use-cases/peptides-for-neuroprotection-research" variant="outline">Neuroprotection hub</ButtonLink>
        <ButtonLink href="/compare/dihexa-vs-cerebrolysin" variant="outline">Dihexa vs Cerebrolysin</ButtonLink>
      </div>
    </Container>
  );
}
