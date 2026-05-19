import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Dihexa vs Cerebrolysin — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Comparison"
        title="Dihexa vs Cerebrolysin"
        tagline="Single synaptogenic molecule vs multi-component neurotrophic preparation — depth vs breadth in cognitive-recovery research."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
