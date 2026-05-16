import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "How to store and reconstitute research peptides — laboratory handling guide",
  description:
    "Practical research-grade guide to handling lyophilised peptides — reconstitution solvents, pH, sterility, refrigeration, freezer storage, stability windows, and the common handling errors that ruin a batch.",
  path: "/guides/peptide-storage-reconstitution",
  keywords: [
    "how to store research peptides",
    "peptide reconstitution",
    "reconstituting research peptides",
    "peptide bacteriostatic water",
    "peptide storage stability",
    "lyophilised peptide handling",
  ],
});

const FAQS = [
  {
    q: "What's the difference between bacteriostatic water and sterile water for peptide reconstitution?",
    a: "Bacteriostatic water contains 0.9% benzyl alcohol as a preservative, allowing the reconstituted peptide to resist microbial growth for ~28 days at refrigerated temperatures. Sterile water for injection is preservative-free, so reconstituted peptide must be used within hours or stored frozen. For multi-dose research vials, bacteriostatic water is the practical default; for single-use protocols, sterile water is acceptable.",
  },
  {
    q: "Can I reconstitute a peptide and then re-freeze it?",
    a: "Generally yes, but with caveats. Freeze-thaw cycles degrade peptides through ice-crystal damage to the conformation. For most short peptides one or two cycles is fine; repeated cycling will progressively reduce potency. The preferred pattern is to reconstitute, aliquot into single-use volumes, and freeze the aliquots at -20°C or -80°C.",
  },
  {
    q: "How long is a reconstituted peptide stable at refrigerator temperature?",
    a: "Depends on the peptide and the solvent. Short peptides in bacteriostatic water at 2–8°C are typically stable for 7–30 days, sometimes longer. Larger or less-stable peptides should be assumed to have shorter windows. The conservative default is 14 days; for protocols requiring longer windows, aliquot and freeze.",
  },
  {
    q: "Why does pH matter?",
    a: "Peptide stability is strongly pH-dependent. Most therapeutic peptides are most stable in mildly acidic to neutral solutions (pH 4–7). Strongly acidic or alkaline conditions cause hydrolysis of the peptide bonds and oxidation of vulnerable residues (especially methionine, cysteine, tryptophan). Reconstitution vehicles are formulated to fall in the stable pH range; introducing acidic or alkaline contaminants compromises stability.",
  },
  {
    q: "Do peptides need to be refrigerated during shipping?",
    a: "Lyophilised peptides are remarkably stable at room temperature for short periods (days to a few weeks). Properly packaged dry peptide can ship without ice packs over standard delivery times without meaningful degradation. The stability window is much shorter for reconstituted solutions and for peptides with vulnerable residues. Reputable suppliers will state the shipping conditions on the certificate of analysis.",
  },
  {
    q: "What's the difference between a 'mg vial' and 'mg active'?",
    a: "The total mass in a peptide vial may include acetate or trifluoroacetate counter-ions from the synthesis, which add mass without contributing to the active peptide. A vial labelled '10 mg' may contain 8–9 mg of active peptide and 1–2 mg of counter-ion. Suppliers vary in whether they label by total mass or by active peptide content; check the certificate of analysis for the actual peptide content.",
  },
  {
    q: "Can I tell if a peptide has degraded?",
    a: "Not reliably from visual inspection. A lyophilised peptide is usually a white-to-off-white powder; reconstituted solution should be clear and colourless. Cloudiness, particulate matter, yellow or brown coloration, or persistent off-odour indicate problems. Absence of those signs does not, however, guarantee integrity — chemical degradation can occur without visible changes, and analytical methods (HPLC, MS) are needed to confirm stability.",
  },
  {
    q: "How should I dispose of unused peptide?",
    a: "Treat as you would any unidentified biological research material: solid waste in a closed container, liquid waste in compatible chemical-waste streams. Unused peptide should not go down a sink or into general refuse. For UK laboratory contexts, follow your institution's chemical-waste protocol.",
  },
];

export default function StorageGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Reconstituting a lyophilised research peptide",
    description:
      "Standard laboratory procedure for reconstituting a lyophilised peptide from a sealed vial for research use.",
    step: [
      { "@type": "HowToStep", name: "Verify the certificate of analysis", text: "Confirm purity, batch number, and stated peptide content before opening the vial." },
      { "@type": "HowToStep", name: "Allow the vial to reach room temperature", text: "If stored frozen, let the sealed vial equilibrate to room temperature before opening to prevent condensation on the lyophilised cake." },
      { "@type": "HowToStep", name: "Select appropriate solvent", text: "Bacteriostatic water for injection for multi-dose protocols; sterile water for single-use or freezer-aliquoted protocols." },
      { "@type": "HowToStep", name: "Calculate the reconstitution volume", text: "Volume = peptide mass / desired concentration. Account for active peptide content versus total vial mass if relevant." },
      { "@type": "HowToStep", name: "Introduce solvent slowly", text: "Direct the solvent stream against the side of the vial rather than directly onto the peptide cake. Allow the cake to dissolve passively; do not shake vigorously." },
      { "@type": "HowToStep", name: "Swirl gently if needed", text: "Gentle inversion or swirling is fine; mechanical agitation can denature the peptide. Most cakes dissolve within 30–60 seconds." },
      { "@type": "HowToStep", name: "Inspect the solution", text: "Reconstituted solution should be clear and colourless. Cloudiness or particulate matter indicates a problem with the batch or the solvent." },
      { "@type": "HowToStep", name: "Label and refrigerate", text: "Label with date of reconstitution, concentration, and intended use-by date. Store at 2–8°C if used within stability window, or aliquot and freeze for longer storage." },
    ],
  };

  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={[faqSchema, howToSchema]} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides/research-peptides-beginners-guide" },
          { label: "Storage & Reconstitution" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Handling guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          How to store and reconstitute research peptides
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The reproducibility of any peptide research protocol depends on getting the handling
          right. A correctly stored vial of a high-quality peptide can fail to produce the expected
          effect if it is reconstituted in the wrong solvent, exposed to too many freeze-thaw
          cycles, or stored above its stability range. This guide covers the practical fundamentals.
        </p>
      </header>

      <Section eyebrow="The basics" title="Lyophilised peptide handling — what arrives in the vial">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Research peptides are almost always shipped lyophilised — freeze-dried under vacuum
              into a white or off-white solid cake at the bottom of a sealed vial. Lyophilisation
              removes water without applying heat, leaving the peptide in a stable form that
              survives ambient transport for days to weeks. Dry peptide is far more stable than
              reconstituted peptide, which is why protocols typically reconstitute immediately
              before use and store the dry vial until then.
            </p>
            <p>
              On arrival, check the certificate of analysis (COA) for batch number, HPLC purity,
              mass-spectrometry confirmation, and stated peptide content. A reputable supplier
              issues a batch-specific COA from an independent lab; without it the vial is functionally
              unverified. Cross-check the printed batch number on the vial against the COA.
            </p>
            <p>
              Store the unopened vial at the temperature specified on the COA, typically −20 °C or
              refrigerated 2–8 °C for most short peptides. Some peptides are stable at ambient
              temperature for months; others require −80 °C for long-term storage. Defaulting to
              freezer storage is safe across the board.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="Procedure" title="Reconstitution, step by step">
        <Card>
          <CardBody>
            <ol className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <li><strong>1. Verify and equilibrate.</strong> Confirm the COA matches the vial. If stored frozen, let the sealed vial reach room temperature before opening to prevent condensation forming on the cold cake.</li>
              <li><strong>2. Choose your solvent.</strong> Bacteriostatic water (0.9% benzyl alcohol) is the default for multi-dose research protocols; sterile water for injection for single-use. Some peptides (highly hydrophobic ones) require small amounts of acetic acid or saline-buffered solutions — check the supplier's reconstitution notes.</li>
              <li><strong>3. Calculate volume.</strong> Volume = active peptide mass divided by target concentration. If the vial is labelled by total mass rather than active peptide content, use the COA's active-content figure.</li>
              <li><strong>4. Introduce solvent slowly.</strong> Direct the stream against the inner wall of the vial rather than onto the peptide cake. Avoid vigorous agitation: gentle swirling or inversion is fine; vortexing is not.</li>
              <li><strong>5. Allow passive dissolution.</strong> Most cakes dissolve within 30–60 seconds. If significant material remains undissolved after 2 minutes, the solvent choice or pH is wrong for the peptide.</li>
              <li><strong>6. Inspect.</strong> The reconstituted solution should be clear and colourless. Cloudiness, particulate matter, or coloration indicate a problem — do not proceed.</li>
              <li><strong>7. Label and store.</strong> Mark date of reconstitution, peptide name, concentration, and intended use-by date. Refrigerate at 2–8 °C for the supplier-stated stability window, or aliquot and freeze for longer storage.</li>
            </ol>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The variables that matter" title="Five things to get right">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Temperature</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Lyophilised peptide at −20 °C or below is stable for months to years; reconstituted
              peptide at 2–8 °C is typically stable for 7–30 days. Room-temperature exposure of
              reconstituted solution should be minimised to active-use windows only.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>pH</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Most therapeutic peptides are stable at pH 4–7. Bacteriostatic water sits in this
              range. Avoid introducing acidic or alkaline contaminants (residual buffer from
              improperly cleaned syringes, for example) that shift the solution out of the stable
              range.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Sterility</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Reconstituted peptide is a nutrient-rich solution. Bacteriostatic water resists
              microbial growth for ~28 days; sterile water for injection has no preservative and
              should be treated as single-use. Aseptic technique during reconstitution is the most
              practical safeguard.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Light</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Peptides containing tryptophan or methionine residues are sensitive to photo-oxidation.
              Standard practice is to store vials in opaque containers or the original packaging and
              minimise prolonged light exposure during handling.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Freeze-thaw cycles</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Ice-crystal formation during freezing damages the peptide's conformation. One or two
              cycles is usually tolerable for short peptides; repeated cycling progressively
              reduces potency. Aliquot into single-use volumes before freezing to avoid the problem.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Mechanical stress</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Vigorous shaking, vortexing, or sonication denatures peptides by exposing hydrophobic
              residues to the air-water interface. Gentle swirling or inversion is the only
              mixing required for standard reconstitution.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common handling questions">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </Accordion>
      </Section>

      <Section title="Important caveat">
        <Card className="border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
          <CardBody className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            This guide is written for laboratory handling of research peptides — substances sold for
            in vitro and preclinical use only. It is not a guide for preparing peptides for human
            consumption. The research peptides discussed on this site are not licensed medicines in
            the United Kingdom and are not intended for human use.
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides">Browse peptide profiles</ButtonLink>
        <ButtonLink href="/guides/uk-peptide-regulations" variant="outline">UK regulations guide</ButtonLink>
      </div>
    </Container>
  );
}
