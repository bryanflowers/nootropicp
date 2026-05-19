import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "BDNF-inducing peptides — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Mechanism hub"
        title="BDNF-inducing peptides"
        tagline="The Semax, Selank, Noopept and Cerebrolysin family — peptides that raise brain-derived neurotrophic factor in the hippocampus and cortex."
        palette="brand"
      />
    ),
    { ...size },
  );
}
