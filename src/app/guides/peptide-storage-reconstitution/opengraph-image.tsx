import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Storage and reconstitution — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Handling guide"
        title="Storage & reconstitution"
        tagline="Practical research-grade guide to handling lyophilised peptides — solvents, pH, sterility, freeze-thaw, stability windows."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
