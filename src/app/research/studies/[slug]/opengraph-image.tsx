import { ImageResponse } from "next/og";
import { getStudyBySlug, studies } from "@/data/studies";
import { OgCard } from "@/components/og/OgCard";
import { OG_SIZE } from "@/components/og/baseStyles";

export const alt = "Study deep dive — Nootropic Peptides";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export default async function StudyOgImage({ params }: { params: { slug: string } }) {
  const study = getStudyBySlug(params.slug);
  const title = study?.shortTitle ?? "Study deep dive";
  const tagline = study?.excerpt ?? "";
  const footer = study ? `${study.designType} · ${study.yearRange} · ${study.jurisdiction}` : undefined;

  return new ImageResponse(
    (
      <OgCard
        eyebrow="Study deep dive"
        title={title}
        tagline={tagline}
        footer={footer}
        palette="amber"
      />
    ),
    { ...size },
  );
}
