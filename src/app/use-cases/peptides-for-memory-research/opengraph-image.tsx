import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides for memory research — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Use case"
        title="Peptides for memory research"
        tagline="Semax, Cerebrolysin, Dihexa, Noopept — encoding, consolidation, recall, and the mechanisms that distinguish them."
        palette="brand"
      />
    ),
    { ...size },
  );
}
