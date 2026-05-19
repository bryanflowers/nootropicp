import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Noopept vs Semax — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Comparison"
        title="Noopept vs Semax"
        tagline="Oral peptidomimetic vs intranasal heptapeptide — same Russian cognitive lineage, different delivery, overlapping endpoints."
        palette="brand"
      />
    ),
    { ...size },
  );
}
