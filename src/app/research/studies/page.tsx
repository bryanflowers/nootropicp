import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { studies } from "@/data/studies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Study deep dives — Landmark cognitive peptide clinical and preclinical trials",
  description:
    "In-depth breakdowns of the most-cited studies in cognitive peptide research — Semax stroke trials, Dihexa spinogenesis, Selank vs benzodiazepines, Cerebrolysin vascular dementia, Noopept MCI.",
  path: "/research/studies",
  keywords: [
    "cognitive peptide clinical trials",
    "Semax stroke trial",
    "Dihexa research",
    "Selank trial",
    "Cerebrolysin meta-analysis",
    "Noopept clinical evidence",
  ],
});

export default function StudiesIndex() {
  return (
    <Container>
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Research", href: "/research" },
          { label: "Study deep dives" },
        ]}
      />
      <Section
        eyebrow="Study deep dives"
        title="Landmark studies, in depth"
        description="The peptide profiles summarise each compound's evidence base in a paragraph or two. These deep dives unpack the most-cited individual studies and clinical-trial programmes in detail — what they measured, what they showed, and where the methodological limits sit."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {studies.map((s) => (
            <Link
              key={s.slug}
              href={`/research/studies/${s.slug}`}
              className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="brand">{s.designType}</Badge>
                    <Badge variant="muted">{s.yearRange}</Badge>
                    <Badge variant="info">{s.jurisdiction}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Read the breakdown <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
