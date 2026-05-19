import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Alternatives to Selank — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Alternatives"
        title="Alternatives to Selank"
        tagline="N-Acetyl Selank, DSIP, Semax — other peptide-class anxiolytic and stress-resilience options."
        palette="rose"
      />
    ),
    { ...size },
  );
}
