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
  title: "Alternatives to Selank — Other peptide options for anxiety and stress-resilience research",
  description:
    "If a research design needs Selank's anxiolytic-without-sedation profile but Selank isn't available or isn't the right fit, the realistic alternatives are N-Acetyl Selank, DSIP, and indirect Semax effects.",
  path: "/alternatives/selank",
  keywords: [
    "alternatives to Selank",
    "Selank substitute",
    "non-sedating anxiolytic peptide",
    "N-Acetyl Selank vs Selank",
    "DSIP vs Selank",
  ],
});

const ALTS = [
  { slug: "n-acetyl-selank", reason: "Same enkephalinase-inhibition mechanism with extended duration. Choose when the protocol calls for fewer doses per day and accepts the sparser analogue-specific long-term safety data." },
  { slug: "dsip", reason: "Different mechanism — HPA-axis attenuation and slow-wave sleep support rather than direct anxiolysis. Choose when anxiety is principally stress-driven or sleep-disruption-related, or when the research endpoint is stress-resilience over weeks rather than acute anxiolysis." },
  { slug: "semax", reason: "Cognitive peptide with secondary anxiolytic effects via partial enkephalinase inhibition. Choose only when both cognitive and modest anxiolytic effects are needed from a single compound. The cleaner pairing is Semax plus Selank, not Semax instead of Selank." },
];

export default function SelankAlternatives() {
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
          { label: "Alternatives to Selank" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Alternatives</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Alternatives to Selank
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Selank is the cleanest research tool for studying anxiolysis without GABA-A involvement,
          but it isn't the only option in the peptide-class anxiolytic space. Three realistic
          alternatives — the acetylated analogue, DSIP, and Semax as a partial substitute — are
          covered below with the rationale for each switch.
        </p>
      </header>

      <Section eyebrow="Why look elsewhere" title="When Selank isn't the right fit">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Selank's defining limitation in research practice is the short half-life requiring
              multiple intranasal doses per day. For protocols where dosing frequency matters —
              long studies, subjects with poor adherence patterns, animal models where handling
              stress is a confound — the extended-duration analogue addresses that constraint
              directly.
            </p>
            <p>
              The other reasons to reach for an alternative are mechanistic. If the research
              question is about stress-driven anxiety amplified by poor sleep, DSIP's
              HPA-axis-and-slow-wave-sleep mechanism is more relevant than Selank's direct
              anxiolysis. If the question is about anxiety in the context of preserved cognition,
              Selank is usually still the best tool — but the Semax stack pairing covers that
              endpoint at higher cognitive throughput than Selank alone.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The substitutes" title="Three realistic alternatives">
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

      <Section eyebrow="When NOT to switch" title="Reasons to stay with Selank">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Selank remains the right choice when the research endpoint is acute anxiolysis via
              enkephalin-system modulation, the best-characterised single-peptide non-GABA
              anxiolytic mechanism is needed, and the multiple-doses-per-day requirement is
              tolerable. The Russian comparative trials against benzodiazepine standards are the
              strongest piece of clinical evidence in the cluster; the analogue inherits the
              mechanism but has a shorter independent evidence record.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides/selank">Back to Selank profile</ButtonLink>
        <ButtonLink href="/mechanisms/enkephalinase-inhibiting-peptides" variant="outline">Enkephalinase mechanism hub</ButtonLink>
        <ButtonLink href="/use-cases/peptides-for-anxiety-research" variant="outline">Anxiety research hub</ButtonLink>
      </div>
    </Container>
  );
}
