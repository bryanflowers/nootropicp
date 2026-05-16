import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { peptides } from "@/data/peptides";
import { researchSummaries } from "@/data/research";

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
    "/stacks",
    "/stacks/best-nootropic-peptide-stacks-2026",
    "/stacks/focus-and-productivity-stack",
    "/stacks/anxiety-and-mood-stack",
    "/research",
    "/resources",
    "/about",
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

  return [...staticRoutes, ...peptideRoutes, ...researchRoutes];
}
