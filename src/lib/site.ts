export const SITE = {
  name: "Nootropic Peptides",
  domain: "nootropicpeptides.co.uk",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nootropicpeptides.co.uk",
  description:
    "Evidence-based educational reference for nootropic research peptides — mechanism of action, clinical studies, safety profiles, and UK regulatory context. For laboratory research use only.",
  twitter: "@nootropicpep",
  partners: {
    peptideAuthority: "https://peptideauthority.co.uk",
    peptideBarn: "https://peptidebarn.co.uk",
  },
} as const;

export const DISCLAIMER =
  "For laboratory and research use only. Not for human consumption, ingestion, or therapeutic use. The peptides discussed on this site are unlicensed research chemicals in the UK and most other jurisdictions.";
