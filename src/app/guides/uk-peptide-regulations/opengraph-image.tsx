import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "UK Peptide Regulations — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="UK regulatory guide"
        title="Are research peptides legal in the UK?"
        tagline="The Misuse of Drugs Act, the Human Medicines Regulations 2012, the MHRA position, and the practical line between possession and supply."
        palette="amber"
      />
    ),
    { ...size },
  );
}
