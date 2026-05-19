export type PeptideCategory =
  | "Cognitive Enhancement"
  | "Neuroprotection"
  | "Anxiolytic / Mood"
  | "Sleep & Recovery"
  | "Neurogenesis";

export interface Study {
  title: string;
  summary: string;
  source: string;
  url?: string;
  year?: number;
}

export interface DosingProtocol {
  route: string;
  dosage: string;
  frequency: string;
  duration: string;
  notes?: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export type PeptideTag =
  | "bdnf-inducer"
  | "ngf-inducer"
  | "enkephalinase-inhibitor"
  | "synaptogenic"
  | "neuroprotective"
  | "sleep-architecture"
  | "russian-origin"
  | "oral-active"
  | "intranasal"
  | "parenteral"
  | "khavinson-bioregulator"
  | "fgfr-agonist"
  | "c-met-agonist";

export interface Peptide {
  slug: string;
  name: string;
  aliases?: string[];
  category: PeptideCategory;
  tagline: string;
  molecularFormula?: string;
  molecularWeight?: string;
  halfLife: string;
  sequence?: string;
  ukStatus: string;
  euStatus: string;
  overview: string[];
  history: string[];
  mechanism: string[];
  benefits: string[];
  dosing: DosingProtocol[];
  routes: string[];
  safetyCommon: string[];
  safetyRare: string[];
  contraindications: string[];
  studies: Study[];
  faqs: FAQ[];
  related: string[]; // slugs
  keywords: string[];
  tags?: PeptideTag[];
  lastReviewed?: string; // ISO date e.g. "2026-05-16"
  pubchemCid?: number; // PubChem Compound ID — only set when a single, verified CID matches the molecule
  pubchemNote?: string; // Optional caption (e.g. "Shown: GHK base; Cu complex coordinates the imidazole nitrogen")
}
