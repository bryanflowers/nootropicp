import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Nootropic Peptides — Research-grade reference for cognitive peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Educational reference"
        title="Nootropic Peptides"
        tagline="Mechanism, studies, safety and UK regulatory context for the most-researched cognitive peptides — Semax, Selank, Dihexa, Cerebrolysin, Noopept, DSIP, and more."
        palette="brand"
      />
    ),
    { ...size },
  );
}
