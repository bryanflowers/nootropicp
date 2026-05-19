import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Alternatives to Semax — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Alternatives"
        title="Alternatives to Semax"
        tagline="N-Acetyl Semax, Noopept, Cerebrolysin, Selank — when researchers reach for a substitute and what they substitute it with."
        palette="brand"
      />
    ),
    { ...size },
  );
}
