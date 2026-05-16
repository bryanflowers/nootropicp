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
  lines.push(`- [Peptides vs Racetams](${SITE.url}/compare/peptides-vs-racetams): Two cognitive-enhancement traditions compared on mechanism, evidence, and delivery.`);
  lines.push("");
  lines.push("## Mechanism hubs");
  lines.push(`- [BDNF-inducing peptides](${SITE.url}/mechanisms/bdnf-inducing-peptides): The Semax/Selank/Noopept/Cerebrolysin family that raises BDNF and NGF in the hippocampus.`);
  lines.push(`- [Synaptogenic peptides](${SITE.url}/mechanisms/synaptogenic-peptides): Dihexa and FGL — c-Met and FGFR1 agonists that drive new synapse formation.`);
  lines.push(`- [Enkephalinase-inhibiting peptides](${SITE.url}/mechanisms/enkephalinase-inhibiting-peptides): Selank-class peptides that produce anxiolysis without GABA-A binding.`);
  lines.push("");
  lines.push("## Guides");
  lines.push(`- [Beginner's guide to research peptides](${SITE.url}/guides/research-peptides-beginners-guide): What research peptides are, why they're studied, how they differ from licensed medicines.`);
  lines.push(`- [UK peptide regulations](${SITE.url}/guides/uk-peptide-regulations): Are research peptides legal in the UK? Full statutory framework.`);
  lines.push(`- [Storage and reconstitution](${SITE.url}/guides/peptide-storage-reconstitution): Laboratory handling of lyophilised research peptides.`);
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
  lines.push(`- [Peptide library](${SITE.url}/peptides) — 10 catalogued peptides`);
  lines.push(`- [Glossary](${SITE.url}/glossary) — 30+ defined terms (BDNF, NGF, c-Met, FGFR1, LTP, enkephalinase, HPA axis, intranasal delivery, etc.)`);
  lines.push(`- [Resources](${SITE.url}/resources) — external references for primary literature and regulatory checks`);
  lines.push(`- [About](${SITE.url}/about) — editorial process, conflict-of-interest disclosure`);
  lines.push(`- [Disclaimer](${SITE.url}/legal/disclaimer) — full legal position`);
  lines.push(`- [Machine-readable peptide data (JSON)](${SITE.url}/api/peptides.json)`);
  lines.push(`- [Full text manifest](${SITE.url}/llms-full.txt)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
