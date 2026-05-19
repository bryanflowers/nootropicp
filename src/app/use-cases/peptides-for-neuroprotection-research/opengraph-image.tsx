import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Peptides for neuroprotection research — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Use case"
        title="Peptides for neuroprotection research"
        tagline="Cerebrolysin, Pinealon, FGL, Semax — peptides studied in ischaemic, oxidative, and excitotoxic injury models."
        palette="emerald"
      />
    ),
    { ...size },
  );
}
