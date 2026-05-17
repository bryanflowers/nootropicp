import { peptides } from "@/data/peptides";
import type { Peptide, PeptideTag, PeptideCategory } from "@/types/peptide";

export const CATEGORIES: PeptideCategory[] = [
  "Cognitive Enhancement",
  "Neuroprotection",
  "Anxiolytic / Mood",
  "Sleep & Recovery",
  "Neurogenesis",
];

export const ALL_TAGS: PeptideTag[] = [
  "bdnf-inducer",
  "ngf-inducer",
  "enkephalinase-inhibitor",
  "synaptogenic",
  "neuroprotective",
  "sleep-architecture",
  "russian-origin",
  "oral-active",
  "intranasal",
  "parenteral",
  "khavinson-bioregulator",
  "fgfr-agonist",
  "c-met-agonist",
];

const CATEGORY_SLUGS: Record<PeptideCategory, string> = {
  "Cognitive Enhancement": "cognitive-enhancement",
  Neuroprotection: "neuroprotection",
  "Anxiolytic / Mood": "anxiolytic-mood",
  "Sleep & Recovery": "sleep-recovery",
  Neurogenesis: "neurogenesis",
};

export function categoryToSlug(c: PeptideCategory): string {
  return CATEGORY_SLUGS[c];
}

export function slugToCategory(s: string): PeptideCategory | undefined {
  return CATEGORIES.find((c) => CATEGORY_SLUGS[c] === s);
}

export const TAG_LABELS: Record<PeptideTag, { name: string; description: string }> = {
  "bdnf-inducer": {
    name: "BDNF inducer",
    description: "Peptides that raise brain-derived neurotrophic factor expression in the hippocampus and cortex — the family endpoint behind most of the cognitive-peptide literature.",
  },
  "ngf-inducer": {
    name: "NGF inducer",
    description: "Peptides that raise nerve growth factor expression, supporting cholinergic neuron survival and broader neurotrophic effects.",
  },
  "enkephalinase-inhibitor": {
    name: "Enkephalinase inhibitor",
    description: "Peptides that extend endogenous enkephalin tone by inhibiting the peptidases that degrade them — anxiolysis without GABA-A involvement.",
  },
  synaptogenic: {
    name: "Synaptogenic",
    description: "Peptides that drive new synapse formation directly through growth-factor-receptor agonism rather than indirectly through neurotrophin induction.",
  },
  neuroprotective: {
    name: "Neuroprotective",
    description: "Peptides studied in ischaemic, oxidative, and excitotoxic injury models for their capacity to protect neurons from acute damage.",
  },
  "sleep-architecture": {
    name: "Sleep architecture",
    description: "Peptides that modulate slow-wave or REM sleep, with downstream effects on memory consolidation and stress-resilience.",
  },
  "russian-origin": {
    name: "Russian-origin",
    description: "Peptides developed within the Soviet and post-Soviet Russian pharmacology tradition — Semax, Selank, Noopept, and the Khavinson bioregulator family.",
  },
  "oral-active": {
    name: "Oral-active",
    description: "Peptides or peptidomimetics that survive gastrointestinal proteolysis and reach the CNS via oral administration.",
  },
  intranasal: {
    name: "Intranasal",
    description: "Peptides studied principally via the intranasal route, exploiting nose-to-brain transport along the olfactory and trigeminal pathways.",
  },
  parenteral: {
    name: "Parenteral",
    description: "Peptides administered by injection or infusion — typically required for larger or less-stable molecules where intranasal delivery is insufficient.",
  },
  "khavinson-bioregulator": {
    name: "Khavinson bioregulator",
    description: "Short peptides from the St. Petersburg Institute of Bioregulation and Gerontology programme, hypothesised to act as direct gene-expression regulators.",
  },
  "fgfr-agonist": {
    name: "FGFR1 agonist",
    description: "Peptides that activate fibroblast growth factor receptor 1, driving neurite outgrowth and synapse maturation.",
  },
  "c-met-agonist": {
    name: "c-Met agonist",
    description: "Peptides that activate the hepatocyte growth factor receptor c-Met, driving dendritic spine formation and synaptogenesis.",
  },
};

export const CATEGORY_BLURBS: Record<PeptideCategory, string> = {
  "Cognitive Enhancement":
    "Peptides studied principally for direct effects on memory, attention, learning, and overall cognitive performance — typically through BDNF/NGF induction and downstream neuroplasticity mechanisms.",
  Neuroprotection:
    "Peptides studied in models of acute neuronal injury — ischaemic stroke, oxidative stress, excitotoxicity — for their capacity to reduce damage and support recovery.",
  "Anxiolytic / Mood":
    "Peptides that produce anxiolytic and mood-modulating effects through mechanisms distinct from the GABA-A receptor — principally enkephalinase inhibition and stress-axis attenuation.",
  "Sleep & Recovery":
    "Peptides that modulate sleep architecture and stress-resilience, with indirect effects on cognitive performance through next-day consolidation and HPA-axis regulation.",
  Neurogenesis:
    "Peptides that drive the formation of new neurons or new synaptic connections in the adult brain, principally through growth-factor receptor pathways.",
};

export function getPeptidesByTag(tag: PeptideTag): Peptide[] {
  return peptides.filter((p) => p.tags?.includes(tag));
}

export function getPeptidesByCategory(category: PeptideCategory): Peptide[] {
  return peptides.filter((p) => p.category === category);
}

export function getPeptidesByAnyTag(tags: PeptideTag[]): Peptide[] {
  return peptides.filter((p) => p.tags?.some((t) => tags.includes(t)));
}

export function getPeptidesBySlugs(slugs: string[]): Peptide[] {
  return slugs
    .map((s) => peptides.find((p) => p.slug === s))
    .filter((p): p is Peptide => Boolean(p));
}
