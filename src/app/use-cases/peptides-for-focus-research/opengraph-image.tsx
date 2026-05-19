import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides for focus research — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Use case"
        title="Peptides for focus & attention research"
        tagline="Sustained-attention, vigilance, and mental-fatigue endpoints — Semax, Noopept, N-Acetyl Semax, and how they differ from stimulant-class tools."
        palette="brand"
      />
    ),
    { ...size },
  );
}
