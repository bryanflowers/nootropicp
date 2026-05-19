import type { Metadata } from "next";
import { SITE } from "./site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  keywords,
}: BuildMetadataArgs): Metadata {
  const url = new URL(path, SITE.url).toString();
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  // Only emit explicit images when the caller has overridden the default.
  // Otherwise we leave them undefined so that Next.js's opengraph-image.tsx /
  // twitter-image.tsx file convention can populate them per-route.
  const explicitImages = image
    ? [{ url: image, width: 1200, height: 630, alt: title }]
    : undefined;
  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: SITE.name,
      ...(explicitImages ? { images: explicitImages } : {}),
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}
