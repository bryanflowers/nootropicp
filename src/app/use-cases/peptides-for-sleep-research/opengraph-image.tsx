import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides for sleep research — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Use case"
        title="Peptides for sleep & circadian research"
        tagline="DSIP and the sleep-cognition link — slow-wave architecture, HPA-axis attenuation, and how sleep modulation feeds back into memory consolidation."
        palette="brand"
      />
    ),
    { ...size },
  );
}
