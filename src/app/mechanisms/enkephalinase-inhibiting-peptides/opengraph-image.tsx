import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Enkephalinase-inhibiting peptides — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Mechanism hub"
        title="Enkephalinase-inhibiting peptides"
        tagline="Selank-class peptides that produce anxiolysis through endogenous enkephalin tone — without GABA-A binding, sedation, or dependence."
        palette="rose"
      />
    ),
    { ...size },
  );
}
