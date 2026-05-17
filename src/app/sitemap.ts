import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";
import { studies } from "@/data/studies";
import { CATEGORIES, ALL_TAGS, categoryToSlug } from "@/lib/cluster";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;
  const staticRoutes = [
    "",
    "/peptides",
    "/compare",
    "/compare/semax-vs-selank",
    "/compare/dihexa-vs-cerebrolysin",
    "/compare/noopept-vs-semax",
    "/compare/peptides-vs-racetams",
    "/stacks",
    "/stacks/best-nootropic-peptide-stacks-2026",
    "/stacks/focus-and-productivity-stack",
    "/stacks/anxiety-and-mood-stack",
    "/research",
    "/resources",
    "/about",
    "/glossary",
    "/guides/research-peptides-beginners-guide",
    "/guides/uk-peptide-regulations",
    "/guides/peptide-storage-reconstitution",
    "/mechanisms/bdnf-inducing-peptides",
    "/mechanisms/synaptogenic-peptides",
    "/mechanisms/enkephalinase-inhibiting-peptides",
    "/use-cases",
    "/use-cases/peptides-for-memory-research",
    "/use-cases/peptides-for-focus-research",
    "/use-cases/peptides-for-anxiety-research",
    "/use-cases/peptides-for-sleep-research",
    "/use-cases/peptides-for-neuroprotection-research",
    "/alternatives",
    "/alternatives/semax",
    "/alternatives/selank",
    "/alternatives/dihexa",
    "/alternatives/cerebrolysin",
    "/research/studies",
    "/search",
    "/legal/disclaimer",
    "/legal/privacy",
    "/legal/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const peptideRoutes = peptides.map((p) => ({
    url: `${base}/peptides/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const researchRoutes = researchSummaries.map((r) => ({
    url: `${base}/research/${r.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const studyRoutes = studies.map((s) => ({
    url: `${base}/research/studies/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = CATEGORIES.map((c) => ({
    url: `${base}/peptides/category/${categoryToSlug(c)}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const tagRoutes = ALL_TAGS.map((t) => ({
    url: `${base}/peptides/tag/${t}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...peptideRoutes, ...researchRoutes, ...studyRoutes, ...categoryRoutes, ...tagRoutes];
}
