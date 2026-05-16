import { peptides } from "@/data/peptides";
import type { Peptide, PeptideTag, PeptideCategory } from "@/types/peptide";

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
