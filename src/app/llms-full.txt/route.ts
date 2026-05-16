import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";
import { SITE, DISCLAIMER } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const out: string[] = [];

  out.push(`# ${SITE.name} — Full reference manifest`);
  out.push("");
  out.push(`Source URL: ${SITE.url}`);
  out.push("");
  out.push("## About this site");
  out.push(SITE.description);
  out.push("");
  out.push("## Important disclaimer");
  out.push(DISCLAIMER);
  out.push("");
  out.push("---");
  out.push("");

  out.push("## Peptide profiles");
  out.push("");
  for (const p of peptides) {
    out.push(`### ${p.name}`);
    out.push(`URL: ${SITE.url}/peptides/${p.slug}`);
    out.push(`Category: ${p.category}`);
    if (p.aliases?.length) out.push(`Aliases: ${p.aliases.join("; ")}`);
    if (p.molecularFormula) out.push(`Molecular formula: ${p.molecularFormula}`);
    if (p.molecularWeight) out.push(`Molecular weight: ${p.molecularWeight}`);
    if (p.sequence) out.push(`Sequence: ${p.sequence}`);
    out.push(`Half-life: ${p.halfLife}`);
    if (p.tags?.length) out.push(`Tags: ${p.tags.join(", ")}`);
    out.push("");
    out.push(`Summary: ${p.tagline}`);
    out.push("");
    out.push(`Overview: ${p.overview[0]}`);
    out.push("");
    out.push("Mechanism of action:");
    p.mechanism.forEach((m, i) => out.push(`${i + 1}. ${m}`));
    out.push("");
    out.push("Researched benefits:");
    p.benefits.forEach((b, i) => out.push(`${i + 1}. ${b}`));
    out.push("");
    out.push(`UK regulatory status: ${p.ukStatus}`);
    out.push(`EU regulatory status: ${p.euStatus}`);
    out.push("");
    out.push("Key studies:");
    p.studies.forEach((s) =>
      out.push(`- ${s.title} (${s.source}${s.year ? `, ${s.year}` : ""}): ${s.summary}`),
    );
    out.push("");
    if (p.faqs.length) {
      out.push("Frequently asked questions:");
      p.faqs.forEach((f) => {
        out.push(`Q: ${f.q}`);
        out.push(`A: ${f.a}`);
      });
      out.push("");
    }
    out.push("---");
    out.push("");
  }

  out.push("## Research summaries");
  out.push("");
  for (const r of researchSummaries) {
    out.push(`### ${r.title}`);
    out.push(`URL: ${SITE.url}/research/${r.slug}`);
    out.push("");
    r.body.forEach((p) => {
      out.push(p);
      out.push("");
    });
    out.push("---");
    out.push("");
  }

  out.push("## Comparison pages");
  out.push("");
  out.push(`- Semax vs Selank: ${SITE.url}/compare/semax-vs-selank`);
  out.push(`- Dihexa vs Cerebrolysin: ${SITE.url}/compare/dihexa-vs-cerebrolysin`);
  out.push(`- Noopept vs Semax: ${SITE.url}/compare/noopept-vs-semax`);
  out.push("");
  out.push("## Stack guides");
  out.push("");
  out.push(`- Best nootropic peptide stacks of 2026: ${SITE.url}/stacks/best-nootropic-peptide-stacks-2026`);
  out.push(`- Focus & productivity stack: ${SITE.url}/stacks/focus-and-productivity-stack`);
  out.push(`- Anxiety & mood stack: ${SITE.url}/stacks/anxiety-and-mood-stack`);
  out.push("");

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
