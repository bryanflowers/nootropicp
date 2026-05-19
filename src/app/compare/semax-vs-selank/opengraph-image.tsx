import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Semax vs Selank — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Comparison"
        title="Semax vs Selank"
        tagline="Cognitive-attentional vs anxiolytic — two flagship Russian heptapeptides head-to-head on mechanism, evidence, and use case."
        palette="brand"
      />
    ),
    { ...size },
  );
}
