import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides for anxiety research — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Use case"
        title="Peptides for anxiety & stress-resilience research"
        tagline="Selank, N-Acetyl Selank, DSIP — anxiolytic effects through enkephalinase inhibition and HPA-axis modulation, without GABA-A binding."
        palette="rose"
      />
    ),
    { ...size },
  );
}
