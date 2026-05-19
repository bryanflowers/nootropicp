import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides vs Racetams — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Comparison"
        title="Peptides vs Racetams"
        tagline="Two cognitive-enhancement traditions compared on mechanism, evidence, delivery, and side-effect profile."
        palette="amber"
      />
    ),
    { ...size },
  );
}
