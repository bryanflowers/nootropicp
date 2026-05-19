import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Alternatives to Cerebrolysin — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Alternatives"
        title="Alternatives to Cerebrolysin"
        tagline="Semax, Dihexa, Pinealon, FGL — single-peptide options when parenteral multi-component Cerebrolysin is impractical."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
