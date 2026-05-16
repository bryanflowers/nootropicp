import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { glossary } from "@/data/glossary";
import { getPeptideBySlug } from "@/data/peptides";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Glossary — Nootropic peptide research terminology",
  description:
    "Plain-English definitions of the recurring terms in nootropic peptide research — BDNF, NGF, enkephalinase, c-Met, FGFR1, LTP, HPA axis, intranasal delivery, peptidomimetic, and more.",
  path: "/glossary",
  keywords: [
    "nootropic peptide glossary",
    "BDNF definition",
    "enkephalinase definition",
    "LTP definition",
    "peptide research terminology",
  ],
});

const SORTED = [...glossary].sort((a, b) => a.term.localeCompare(b.term));

export default function GlossaryPage() {
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Nootropic Peptide Research Glossary",
    url: `${SITE.url}/glossary`,
    inDefinedTermSet: SORTED.map((g) => ({
      "@type": "DefinedTerm",
      "@id": `${SITE.url}/glossary#${g.id}`,
      name: g.term,
      description: g.short,
    })),
  };

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={definedTermSchema} />
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Glossary" }]} />
      <header className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Glossary
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          Plain-English definitions of the recurring terms in nootropic peptide research. Each
          entry is short enough to scan, long enough to give a meaningful answer, and linked to the
          peptide pages where the concept is most relevant.
        </p>
      </header>

      <Section title="Index" eyebrow="Quick jump">
        <div className="flex flex-wrap gap-2">
          {SORTED.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-700 dark:hover:bg-brand-950/30 dark:hover:text-brand-200"
            >
              {g.term}
            </a>
          ))}
        </div>
      </Section>

      <Section title="Definitions">
        <div className="space-y-6">
          {SORTED.map((g) => {
            const linkedPeptides =
              g.relatedPeptides
                ?.map((s) => getPeptideBySlug(s))
                .filter((p): p is NonNullable<typeof p> => Boolean(p)) ?? [];
            return (
              <Card key={g.id} id={g.id} className="scroll-mt-24">
                <CardBody>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-slate-50">{g.term}</h2>
                  <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{g.short}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{g.body}</p>
                  {(linkedPeptides.length > 0 || (g.seeAlso?.length ?? 0) > 0) && (
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 pt-3 text-xs dark:border-slate-800">
                      {linkedPeptides.length > 0 && (
                        <div>
                          <span className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Discussed in
                          </span>
                          <span className="ml-2 inline-flex flex-wrap gap-x-3 gap-y-1">
                            {linkedPeptides.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/peptides/${p.slug}`}
                                className="text-brand-600 hover:underline dark:text-brand-400"
                              >
                                {p.name}
                              </Link>
                            ))}
                          </span>
                        </div>
                      )}
                      {g.seeAlso && g.seeAlso.length > 0 && (
                        <div>
                          <span className="font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            See also
                          </span>
                          <span className="ml-2 inline-flex flex-wrap gap-x-3 gap-y-1">
                            {g.seeAlso.map((s) => {
                              const target = glossary.find((x) => x.id === s);
                              return target ? (
                                <a
                                  key={s}
                                  href={`#${s}`}
                                  className="text-slate-700 hover:text-brand-600 hover:underline dark:text-slate-300 dark:hover:text-brand-400"
                                >
                                  {target.term}
                                </a>
                              ) : null;
                            })}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Section>
    </Container>
  );
}
