import { ImageResponse } from "next/og";
import { getPeptideBySlug, getAllSlugs } from "@/data/peptides";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Nootropic Peptides — peptide research profile";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function PeptideOgImage({ params }: { params: { slug: string } }) {
  const peptide = getPeptideBySlug(params.slug);
  const title = peptide?.name ?? "Peptide profile";
  const eyebrow = peptide?.category ?? "Research peptide";
  const tagline = peptide?.tagline ?? "Educational reference for cognitive research peptides.";
  const footer = peptide?.sequence ?? peptide?.aliases?.[0];

  return new ImageResponse(
    (
      <OgCard
        eyebrow={eyebrow}
        title={title}
        tagline={tagline}
        footer={footer}
        category={peptide?.category}
      />
    ),
    { ...size },
  );
}
