import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.description}`);
  lines.push("");
  lines.push("Educational reference site for research peptides relevant to cognitive enhancement, neuroprotection, focus, mood, and brain health. All peptides discussed are research chemicals; none are licensed medicines in the United Kingdom; none are intended for human consumption.");
  lines.push("");
  lines.push("## Peptide profiles");
  for (const p of peptides) {
    lines.push(`- [${p.name}](${SITE.url}/peptides/${p.slug}): ${p.tagline}`);
  }
  lines.push("");
  lines.push("## Comparisons");
  lines.push(`- [Semax vs Selank](${SITE.url}/compare/semax-vs-selank): Cognitive-attentional vs anxiolytic — two flagship Russian heptapeptides head-to-head.`);
  lines.push(`- [Dihexa vs Cerebrolysin](${SITE.url}/compare/dihexa-vs-cerebrolysin): Single synaptogenic molecule vs multi-component neurotrophic preparation.`);
  lines.push(`- [Noopept vs Semax](${SITE.url}/compare/noopept-vs-semax): Oral peptidomimetic vs intranasal heptapeptide.`);
  lines.push("");
  lines.push("## Stack guides");
  lines.push(`- [Best nootropic peptide stacks of 2026](${SITE.url}/stacks/best-nootropic-peptide-stacks-2026): Evidence-led survey of the most-studied combinations.`);
  lines.push(`- [Focus & productivity stack](${SITE.url}/stacks/focus-and-productivity-stack): Semax-led combination for sustained-attention research.`);
  lines.push(`- [Anxiety & mood stack](${SITE.url}/stacks/anxiety-and-mood-stack): Selank-led combination for anxiolytic and stress-resilience research.`);
  lines.push("");
  lines.push("## Research summaries");
  for (const r of researchSummaries) {
    lines.push(`- [${r.title}](${SITE.url}/research/${r.slug}): ${r.excerpt}`);
  }
  lines.push("");
  lines.push("## Reference");
  lines.push(`- [Peptide library](${SITE.url}/peptides)`);
  lines.push(`- [Glossary](${SITE.url}/glossary)`);
  lines.push(`- [Resources](${SITE.url}/resources)`);
  lines.push(`- [Disclaimer](${SITE.url}/legal/disclaimer)`);
  lines.push(`- [Machine-readable peptide data](${SITE.url}/api/peptides.json)`);
  lines.push(`- [Full text manifest](${SITE.url}/llms-full.txt)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
