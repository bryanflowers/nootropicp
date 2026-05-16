import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";
import { glossary } from "@/data/glossary";
import { studies } from "@/data/studies";
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

  out.push("## Study deep dives");
  out.push("");
  for (const s of studies) {
    out.push(`### ${s.title}`);
    out.push(`URL: ${SITE.url}/research/studies/${s.slug}`);
    out.push(`Design: ${s.designType} (${s.yearRange}, ${s.jurisdiction})`);
    out.push("");
    out.push(`Summary: ${s.excerpt}`);
    out.push("");
    for (const sec of s.sections) {
      out.push(`**${sec.heading}**`);
      out.push("");
      for (const p of sec.body) {
        out.push(p);
        out.push("");
      }
    }
    out.push("---");
    out.push("");
  }

  out.push("## Glossary terms");
  out.push("");
  for (const g of glossary) {
    out.push(`### ${g.term}`);
    out.push(`URL: ${SITE.url}/glossary#${g.id}`);
    out.push(g.short);
    out.push("");
    out.push(g.body);
    out.push("");
    out.push("---");
    out.push("");
  }

  out.push("## Comparison pages");
  out.push("");
  out.push(`- Semax vs Selank: ${SITE.url}/compare/semax-vs-selank`);
  out.push(`- Dihexa vs Cerebrolysin: ${SITE.url}/compare/dihexa-vs-cerebrolysin`);
  out.push(`- Noopept vs Semax: ${SITE.url}/compare/noopept-vs-semax`);
  out.push(`- Peptides vs Racetams: ${SITE.url}/compare/peptides-vs-racetams`);
  out.push("");
  out.push("## Mechanism hubs");
  out.push("");
  out.push(`- BDNF-inducing peptides: ${SITE.url}/mechanisms/bdnf-inducing-peptides`);
  out.push(`- Synaptogenic peptides: ${SITE.url}/mechanisms/synaptogenic-peptides`);
  out.push(`- Enkephalinase-inhibiting peptides: ${SITE.url}/mechanisms/enkephalinase-inhibiting-peptides`);
  out.push("");
  out.push("## Guides");
  out.push("");
  out.push(`- Beginner's guide to research peptides: ${SITE.url}/guides/research-peptides-beginners-guide`);
  out.push(`- UK peptide regulations: ${SITE.url}/guides/uk-peptide-regulations`);
  out.push(`- Storage and reconstitution: ${SITE.url}/guides/peptide-storage-reconstitution`);
  out.push("");
  out.push("## Use-case hubs");
  out.push("");
  out.push(`- Peptides for memory research: ${SITE.url}/use-cases/peptides-for-memory-research`);
  out.push(`- Peptides for focus & attention research: ${SITE.url}/use-cases/peptides-for-focus-research`);
  out.push(`- Peptides for anxiety & stress-resilience research: ${SITE.url}/use-cases/peptides-for-anxiety-research`);
  out.push(`- Peptides for sleep & circadian research: ${SITE.url}/use-cases/peptides-for-sleep-research`);
  out.push(`- Peptides for neuroprotection research: ${SITE.url}/use-cases/peptides-for-neuroprotection-research`);
  out.push("");
  out.push("## Alternatives pages");
  out.push("");
  out.push(`- Alternatives to Semax: ${SITE.url}/alternatives/semax`);
  out.push(`- Alternatives to Selank: ${SITE.url}/alternatives/selank`);
  out.push(`- Alternatives to Dihexa: ${SITE.url}/alternatives/dihexa`);
  out.push(`- Alternatives to Cerebrolysin: ${SITE.url}/alternatives/cerebrolysin`);
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
