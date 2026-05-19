import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Alternatives to Dihexa — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Alternatives"
        title="Alternatives to Dihexa"
        tagline="FGL, Cerebrolysin, Semax, Noopept — other synaptogenic and neuroplasticity research peptides when Dihexa isn't the right fit."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
