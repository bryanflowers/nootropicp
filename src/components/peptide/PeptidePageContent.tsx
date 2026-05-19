import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { QuickFactsCard } from "./QuickFactsCard";
import { SupplierCTA } from "./SupplierCTA";
import { StudyCard } from "./StudyCard";
import { RelatedPeptides } from "./RelatedPeptides";
import { TableOfContents } from "./TableOfContents";
import type { Peptide } from "@/types/peptide";

export function PeptidePageContent({ peptide }: { peptide: Peptide }) {
  return (
    <article className="grid gap-10 lg:grid-cols-[1fr_220px]">
      <div className="min-w-0">
        <header className="mb-8">
          <Badge variant="brand" className="mb-3">{peptide.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
            {peptide.name}
          </h1>
          {peptide.aliases && peptide.aliases.length > 0 && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Also known as: {peptide.aliases.join(" · ")}
            </p>
          )}
          <p className="mt-4 max-w-3xl text-lg text-slate-700 dark:text-slate-300">{peptide.tagline}</p>
        </header>

        <div className="mb-10">
          <QuickFactsCard peptide={peptide} />
        </div>

        <Section id="overview" title="Overview" eyebrow="Section 1">
          <div className="space-y-4 text-slate-700 leading-relaxed dark:text-slate-300">
            {peptide.overview.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Section>

        <Section id="history" title="Discovery & History" eyebrow="Section 2">
          <ul className="space-y-3 text-slate-700 leading-relaxed dark:text-slate-300">
            {peptide.history.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="mechanism" title="Mechanism of Action" eyebrow="Section 3">
          <ul className="space-y-3 text-slate-700 leading-relaxed dark:text-slate-300">
            {peptide.mechanism.map((m, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-semibold text-brand-700 dark:bg-brand-900/50 dark:text-brand-200">
                  {i + 1}
                </span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="benefits" title="Researched Benefits" eyebrow="Section 4" description="Findings reported in the published preclinical and clinical literature. Effects in research contexts do not constitute claims of therapeutic benefit in humans.">
          <ol className="grid gap-3 sm:grid-cols-2">
            {peptide.benefits.map((b, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/40">
                <span className="text-2xl font-bold text-brand-600 dark:text-brand-400">{i + 1}</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{b}</span>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="dosing" title="Theoretical Dosing & Protocols" eyebrow="Section 5">
          <Card className="mb-4 border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
            <CardBody className="text-sm text-amber-900 dark:text-amber-200">
              The protocols below summarise dose ranges reported in published research only. They are
              not recommendations and not a guide for human use.
            </CardBody>
          </Card>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
            <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                <tr>
                  <th className="px-4 py-3">Route</th>
                  <th className="px-4 py-3">Dosage</th>
                  <th className="px-4 py-3">Frequency</th>
                  <th className="px-4 py-3">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900/40">
                {peptide.dosing.map((d, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{d.route}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{d.dosage}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{d.frequency}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{d.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {peptide.dosing.some((d) => d.notes) && (
            <div className="mt-3 space-y-1 text-xs text-slate-500 dark:text-slate-400">
              {peptide.dosing.filter((d) => d.notes).map((d, i) => <p key={i}>Note: {d.notes}</p>)}
            </div>
          )}
        </Section>

        <Section id="routes" title="Administration Routes" eyebrow="Section 6">
          <ul className="space-y-2 text-slate-700 leading-relaxed dark:text-slate-300">
            {peptide.routes.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" aria-hidden />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="safety" title="Safety Profile" eyebrow="Section 7">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Commonly reported</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {peptide.safetyCommon.map((s, i) => <li key={i}>· {s}</li>)}
                </ul>
              </CardBody>
            </Card>
            <Card className="border-rose-200 dark:border-rose-900/50">
              <CardHeader className="border-rose-200 dark:border-rose-900/50">
                <CardTitle className="text-sm text-rose-700 dark:text-rose-300">Rare / theoretical</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {peptide.safetyRare.map((s, i) => <li key={i}>· {s}</li>)}
                </ul>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Contraindications</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {peptide.contraindications.map((s, i) => <li key={i}>· {s}</li>)}
                </ul>
              </CardBody>
            </Card>
          </div>
        </Section>

        <Section id="regulatory" title="UK & EU Regulatory Context" eyebrow="Section 8">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader><CardTitle className="text-sm">United Kingdom</CardTitle></CardHeader>
              <CardBody><p className="text-sm text-slate-700 dark:text-slate-300">{peptide.ukStatus}</p></CardBody>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-sm">European Union</CardTitle></CardHeader>
              <CardBody><p className="text-sm text-slate-700 dark:text-slate-300">{peptide.euStatus}</p></CardBody>
            </Card>
          </div>
        </Section>

        <Section id="studies" title="Clinical Studies Summary" eyebrow="Section 9">
          <div className="grid gap-4 md:grid-cols-2">
            {peptide.studies.map((s, i) => <StudyCard key={i} study={s} />)}
          </div>
        </Section>

        <Section id="faqs" title="Frequently Asked Questions" eyebrow="Section 10">
          <Accordion>
            {peptide.faqs.map((f, i) => (
              <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
            ))}
          </Accordion>
        </Section>

        <Section id="sourcing" title="Sourcing for Laboratory Research" eyebrow="Section 11">
          <SupplierCTA peptideName={peptide.name} peptideSlug={peptide.slug} />
        </Section>

        <Section id="related" title="Related Peptides" eyebrow="Continue reading">
          <RelatedPeptides slug={peptide.slug} />
        </Section>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <TableOfContents />
        </div>
      </aside>
    </article>
  );
}
