import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Synaptogenic peptides — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Mechanism hub"
        title="Synaptogenic peptides"
        tagline="Dihexa and FGL — c-Met and FGFR1 agonists that drive new synapse formation directly rather than through neurotrophin induction."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
