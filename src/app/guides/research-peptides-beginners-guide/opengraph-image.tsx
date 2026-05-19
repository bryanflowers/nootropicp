import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "What are research peptides? — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Beginner's guide"
        title="What are research peptides?"
        tagline="A neutral introduction to chemistry, regulatory category, delivery routes, and why these compounds are studied for cognition and brain health."
        palette="brand"
      />
    ),
    { ...size },
  );
}
