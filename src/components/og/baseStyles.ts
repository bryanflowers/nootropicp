export const OG_SIZE = { width: 1200, height: 630 } as const;

export const OG_CONTENT_TYPE = "image/png";

export const PALETTES = {
  brand: { from: "#1e1b4b", via: "#4338ca", to: "#7c3aed", accent: "#a5b4fc" },
  emerald: { from: "#0f172a", via: "#0f766e", to: "#15803d", accent: "#5eead4" },
  rose: { from: "#1e1b4b", via: "#7c3aed", to: "#db2777", accent: "#f0abfc" },
  amber: { from: "#1e1b4b", via: "#7c2d12", to: "#b45309", accent: "#fde68a" },
} as const;

export type PaletteKey = keyof typeof PALETTES;

const CATEGORY_TO_PALETTE: Record<string, PaletteKey> = {
  "Cognitive Enhancement": "brand",
  Neuroprotection: "emerald",
  "Anxiolytic / Mood": "rose",
  "Sleep & Recovery": "brand",
  Neurogenesis: "emerald",
};

export function paletteForCategory(category: string | undefined): PaletteKey {
  if (!category) return "brand";
  return CATEGORY_TO_PALETTE[category] ?? "brand";
}
