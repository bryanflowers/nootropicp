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
}
