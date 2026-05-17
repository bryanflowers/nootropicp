import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";
import { studies } from "@/data/studies";
import { glossary } from "@/data/glossary";

export const dynamic = "force-static";

export interface SearchDocument {
  id: string;
  type: "peptide" | "research" | "study" | "glossary" | "guide" | "mechanism" | "use-case" | "stack" | "compare" | "alternative" | "page";
  title: string;
  url: string;
  excerpt: string;
  body: string;
  keywords?: string;
}

const STATIC_DOCS: SearchDocument[] = [
  {
    id: "home",
    type: "page",
    title: "Nootropic Peptides — Home",
    url: "/",
    excerpt: "Evidence-based educational reference for nootropic research peptides — mechanism, studies, safety, UK regulatory context.",
    body: "Nootropic Peptides educational reference cognitive research peptides Semax Selank Dihexa Cerebrolysin Noopept DSIP UK research",
  },
  {
    id: "guides-uk-regulations",
    type: "guide",
    title: "Are research peptides legal in the UK?",
    url: "/guides/uk-peptide-regulations",
    excerpt: "Complete guide to the UK legal status of research peptides — Misuse of Drugs Act, Human Medicines Regulations 2012, MHRA position, importation, and the distinction between possession and supply for human use.",
    body: "UK regulations legal MHRA Misuse of Drugs Act Human Medicines Regulations 2012 Psychoactive Substances Act research peptides legal status importation",
  },
  {
    id: "guides-beginners",
    type: "guide",
    title: "What are research peptides? A beginner's guide",
    url: "/guides/research-peptides-beginners-guide",
    excerpt: "Plain-English introduction to research peptides — what they are, how they differ from licensed medicines, why they're studied for cognition and brain health.",
    body: "research peptides beginner guide what are introduction peptide chemistry regulatory category routes intranasal parenteral oral",
  },
  {
    id: "guides-storage",
    type: "guide",
    title: "How to store and reconstitute research peptides",
    url: "/guides/peptide-storage-reconstitution",
    excerpt: "Practical research-grade guide to handling lyophilised peptides — reconstitution solvents, pH, sterility, refrigeration, freezer storage, stability windows.",
    body: "peptide storage reconstitution bacteriostatic water lyophilised handling stability refrigerator freezer pH",
  },
  {
    id: "mech-bdnf",
    type: "mechanism",
    title: "BDNF-inducing peptides",
    url: "/mechanisms/bdnf-inducing-peptides",
    excerpt: "The Semax/Selank/Noopept/Cerebrolysin family that raises BDNF and NGF in the hippocampus.",
    body: "BDNF inducer mechanism brain derived neurotrophic factor NGF hippocampus cortex",
  },
  {
    id: "mech-synaptogenic",
    type: "mechanism",
    title: "Synaptogenic peptides",
    url: "/mechanisms/synaptogenic-peptides",
    excerpt: "Dihexa and FGL — c-Met and FGFR1 agonists that drive new synapse formation.",
    body: "synaptogenic synaptogenesis Dihexa FGL c-Met FGFR1 dendritic spine",
  },
  {
    id: "mech-enkephalinase",
    type: "mechanism",
    title: "Enkephalinase-inhibiting peptides",
    url: "/mechanisms/enkephalinase-inhibiting-peptides",
    excerpt: "Selank-class peptides that produce anxiolysis without GABA-A binding.",
    body: "enkephalinase enkephalin Selank anxiolytic GABA opioid system neprilysin",
  },
  {
    id: "uc-memory",
    type: "use-case",
    title: "Peptides for memory research",
    url: "/use-cases/peptides-for-memory-research",
    excerpt: "Research peptides studied for memory encoding, consolidation, and recall.",
    body: "memory research Semax Cerebrolysin Dihexa Noopept BDNF hippocampus consolidation",
  },
  {
    id: "uc-focus",
    type: "use-case",
    title: "Peptides for focus and attention research",
    url: "/use-cases/peptides-for-focus-research",
    excerpt: "Sustained-attention, vigilance, and mental-fatigue endpoints.",
    body: "focus attention sustained vigilance mental fatigue Semax Noopept Russian",
  },
  {
    id: "uc-anxiety",
    type: "use-case",
    title: "Peptides for anxiety and stress-resilience research",
    url: "/use-cases/peptides-for-anxiety-research",
    excerpt: "Anxiolytic effects without GABA-A binding — Selank, N-Acetyl Selank, DSIP.",
    body: "anxiety anxiolytic stress resilience Selank DSIP enkephalinase non-sedating",
  },
  {
    id: "uc-sleep",
    type: "use-case",
    title: "Peptides for sleep and circadian research",
    url: "/use-cases/peptides-for-sleep-research",
    excerpt: "Slow-wave architecture, HPA-axis attenuation, and cognitive-consolidation endpoints.",
    body: "sleep DSIP circadian slow wave HPA axis consolidation",
  },
  {
    id: "uc-neuroprotection",
    type: "use-case",
    title: "Peptides for neuroprotection research",
    url: "/use-cases/peptides-for-neuroprotection-research",
    excerpt: "Ischaemic, oxidative, and excitotoxic injury models.",
    body: "neuroprotection ischaemia oxidative excitotoxicity Cerebrolysin Pinealon FGL stroke",
  },
  {
    id: "stack-best",
    type: "stack",
    title: "Best nootropic peptide stacks of 2026",
    url: "/stacks/best-nootropic-peptide-stacks-2026",
    excerpt: "The peptide combinations most-studied in 2026 research literature.",
    body: "best peptide stack 2026 Semax Selank Cerebrolysin DSIP combination",
  },
  {
    id: "stack-focus",
    type: "stack",
    title: "Focus and productivity stack",
    url: "/stacks/focus-and-productivity-stack",
    excerpt: "Semax-led stack for sustained-attention research.",
    body: "focus productivity stack Semax Noopept DSIP",
  },
  {
    id: "stack-mood",
    type: "stack",
    title: "Anxiety and mood stack",
    url: "/stacks/anxiety-and-mood-stack",
    excerpt: "Selank-led stack for stress-resilience research.",
    body: "anxiety mood stack Selank DSIP Semax",
  },
  {
    id: "cmp-semax-selank",
    type: "compare",
    title: "Semax vs Selank",
    url: "/compare/semax-vs-selank",
    excerpt: "Cognitive-attentional vs anxiolytic — two flagship Russian heptapeptides head-to-head.",
    body: "Semax vs Selank comparison cognitive anxiolytic Russian heptapeptide",
  },
  {
    id: "cmp-dihexa-cere",
    type: "compare",
    title: "Dihexa vs Cerebrolysin",
    url: "/compare/dihexa-vs-cerebrolysin",
    excerpt: "Single synaptogenic molecule vs multi-component neurotrophic preparation.",
    body: "Dihexa Cerebrolysin comparison synaptogenic neurotrophic",
  },
  {
    id: "cmp-noopept-semax",
    type: "compare",
    title: "Noopept vs Semax",
    url: "/compare/noopept-vs-semax",
    excerpt: "Oral peptidomimetic vs intranasal heptapeptide.",
    body: "Noopept Semax comparison oral intranasal peptidomimetic",
  },
  {
    id: "cmp-rac",
    type: "compare",
    title: "Peptides vs racetams",
    url: "/compare/peptides-vs-racetams",
    excerpt: "Two cognitive-enhancement traditions compared on mechanism, evidence, delivery.",
    body: "peptides racetams piracetam nootropic comparison",
  },
  {
    id: "alt-semax",
    type: "alternative",
    title: "Alternatives to Semax",
    url: "/alternatives/semax",
    excerpt: "When researchers reach for a substitute and what they substitute it with.",
    body: "Semax alternatives substitute N-Acetyl Semax Noopept Cerebrolysin Selank",
  },
  {
    id: "alt-selank",
    type: "alternative",
    title: "Alternatives to Selank",
    url: "/alternatives/selank",
    excerpt: "Other peptide-class anxiolytic options.",
    body: "Selank alternatives N-Acetyl Selank DSIP Semax anxiolytic",
  },
  {
    id: "alt-dihexa",
    type: "alternative",
    title: "Alternatives to Dihexa",
    url: "/alternatives/dihexa",
    excerpt: "Other synaptogenic and neuroplasticity research peptides.",
    body: "Dihexa alternatives FGL Cerebrolysin Semax Noopept synaptogenic",
  },
  {
    id: "alt-cere",
    type: "alternative",
    title: "Alternatives to Cerebrolysin",
    url: "/alternatives/cerebrolysin",
    excerpt: "Single-peptide options when parenteral Cerebrolysin is impractical.",
    body: "Cerebrolysin alternatives Semax Dihexa Pinealon FGL parenteral",
  },
];

export function GET() {
  const docs: SearchDocument[] = [...STATIC_DOCS];

  for (const p of peptides) {
    docs.push({
      id: `peptide-${p.slug}`,
      type: "peptide",
      title: p.name,
      url: `/peptides/${p.slug}`,
      excerpt: p.tagline,
      body: [
        p.tagline,
        p.aliases?.join(" ") ?? "",
        p.category,
        p.overview[0] ?? "",
        p.mechanism.slice(0, 2).join(" "),
        p.benefits.slice(0, 3).join(" "),
      ].join(" "),
      keywords: p.keywords.join(", "),
    });
  }

  for (const r of researchSummaries) {
    docs.push({
      id: `research-${r.slug}`,
      type: "research",
      title: r.title,
      url: `/research/${r.slug}`,
      excerpt: r.excerpt,
      body: r.body.slice(0, 2).join(" "),
      keywords: r.keywords.join(", "),
    });
  }

  for (const s of studies) {
    docs.push({
      id: `study-${s.slug}`,
      type: "study",
      title: s.shortTitle,
      url: `/research/studies/${s.slug}`,
      excerpt: s.excerpt,
      body: s.sections[0]?.body.join(" ") ?? "",
      keywords: s.keywords.join(", "),
    });
  }

  for (const g of glossary) {
    docs.push({
      id: `glossary-${g.id}`,
      type: "glossary",
      title: g.term,
      url: `/glossary#${g.id}`,
      excerpt: g.short,
      body: g.body,
    });
  }

  return Response.json(docs, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
