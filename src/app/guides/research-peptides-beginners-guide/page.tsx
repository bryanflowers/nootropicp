import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "What are research peptides? A complete beginner's guide for 2026",
  description:
    "Plain-English introduction to research peptides — what they are, how they differ from licensed medicines, why they're studied for cognition and brain health, and the basic rules of laboratory use.",
  path: "/guides/research-peptides-beginners-guide",
  keywords: [
    "what are research peptides",
    "research peptides beginners",
    "introduction to peptides",
    "peptide research basics",
    "nootropic peptides explained",
  ],
});

const FAQS = [
  {
    q: "What does 'research peptide' actually mean?",
    a: "It's a regulatory category, not a chemical one. A research peptide is a peptide that is sold for in vitro and preclinical laboratory use, has not been licensed as a medicine, and is not a controlled drug. The chemistry can be anything from a three-amino-acid bioregulator to a complex multi-domain construct; the common feature is the regulatory status, not the structure.",
  },
  {
    q: "How are peptides different from small-molecule drugs?",
    a: "Small-molecule drugs are typically under 500 daltons, often orally bioavailable, often able to cross the blood-brain barrier, and metabolised primarily by liver enzymes. Peptides are larger, usually require parenteral or intranasal administration, are degraded by plasma and gastrointestinal peptidases rather than by liver enzymes, and often act with high specificity on a single receptor or pathway. The trade-off is target specificity versus delivery convenience.",
  },
  {
    q: "Are research peptides the same as bodybuilding peptides?",
    a: "There's overlap but the categories aren't identical. Bodybuilding-adjacent peptides (TB-500, BPC-157, GHRPs) are sold through the same research-chemical channels as cognitive peptides, but the research literature and the intended endpoints are different. This site focuses on the cognitive and neurological side of the research-peptide field.",
  },
  {
    q: "Why are most of the cognitive peptides from Russia?",
    a: "Soviet and post-Soviet Russian pharmacology developed a distinctive research tradition around short, intranasally-administered peptides with cognitive and neuroprotective effects. Semax, Selank, Noopept, and Cerebrolysin (with its Austrian origin but similar Eastern-European clinical use pattern) come out of that tradition. The West has produced its own cognitive peptides — Dihexa from Washington State University, FGL from Copenhagen — but the bulk of the published clinical research originates in Russia.",
  },
  {
    q: "What's the safety position?",
    a: "Variable, and the honest answer is 'we don't fully know' for almost any compound discussed on this site. Russian clinical experience suggests Semax and Selank have favourable short-term safety profiles at studied doses. Long-term data outside Russia is limited. Compounds like Dihexa have no human safety data at all; the theoretical concerns around chronic activation of growth-factor pathways are real and unanswered.",
  },
  {
    q: "What does 'in vitro and preclinical use' actually allow?",
    a: "In vitro means in a test tube or cell culture, outside a living organism. Preclinical means in non-human animal models or other research systems prior to human trials. Together these cover the bulk of legitimate biomedical research before a compound reaches a clinical-trial protocol. They do not cover human consumption, which is what 'not for human use' on every label is reinforcing.",
  },
];

export default function BeginnersGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Container className="py-10 lg:py-14">
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        trail={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides/research-peptides-beginners-guide" },
          { label: "Beginner's Guide" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">Beginner's guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          What are research peptides? A complete beginner's guide
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          A neutral introduction to the field, written for someone arriving with no prior
          pharmacology background but with enough patience to want a real explanation rather than a
          marketing pitch. By the end of this guide you should be able to read any peptide profile
          on the site and follow what is being claimed and why.
        </p>
      </header>

      <Section eyebrow="Starting point" title="What is a peptide, biochemically?">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              A peptide is a short chain of amino acids connected by peptide bonds. Two amino acids
              make a dipeptide; three make a tripeptide; somewhere in the range of 50 to 100 amino
              acids the term "peptide" gives way to "protein", though the boundary is not sharp.
              The peptides discussed on this site range from three amino acids (Pinealon) to fifteen
              (FGL), with most sitting in the six-to-nine range typical of the bioactive-fragment
              tradition.
            </p>
            <p>
              Bioactive peptides occur naturally throughout the body. Hormones (insulin,
              oxytocin), neurotransmitter modulators (substance P, the enkephalins), growth factors
              (BDNF, NGF), and immune mediators (tuftsin, defensins) all include peptides among
              their members. Synthetic research peptides are usually engineered either as
              extensions or modifications of these natural sequences, or as mimetics of specific
              binding motifs in larger proteins.
            </p>
            <p>
              The molecular logic of "design a short peptide that copies the active part of a long
              protein" is what produced FGL (mimicking the NCAM-FGFR1 binding motif), Dihexa
              (mimicking the active fragment of angiotensin IV), and Selank (extending the
              endogenous tuftsin sequence for stability). Once you grasp this design pattern, the
              field becomes less mysterious.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="Regulatory category" title="What makes a peptide a research peptide?">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The term "research peptide" is a regulatory category in the UK, not a chemical
              category. A peptide qualifies for research-chemical sale and use if it is not
              controlled under the Misuse of Drugs Act 1971 and not licensed as a human medicine by
              the MHRA. The same chemistry can be a licensed medicine in one country (Semax in
              Russia) and a research chemical in another (Semax in the UK).
            </p>
            <p>
              The practical implication is that research peptides are sold without the warranties,
              quality controls, and pharmacovigilance reporting that attach to licensed medicines.
              Purity, batch consistency, and supplier traceability vary widely across the market.
              For this reason, evaluating a supplier (HPLC certificates, mass spectrometry
              confirmation, batch documentation) matters at least as much as evaluating the
              underlying compound.
            </p>
            <p>
              The UK regulatory framework does not allow research peptides to be sold for human
              consumption. They are sold for laboratory research, and a credible supplier will not
              provide dosing instructions, before-and-after photographs, or other framing that
              suggests human use. If a supplier does provide that material, treat it as a red flag
              about both their regulatory position and the seriousness of their operation.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="Why study them?" title="What the research community is trying to learn">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle>Mechanism mapping</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Research peptides are precise tools. Because a small peptide typically acts on a
              defined receptor or enzyme, it allows researchers to test what happens when one
              specific pathway is engaged. Dihexa's c-Met agonism is a clean way to study HGF
              signalling in the CNS; Selank's enkephalinase inhibition is a clean way to study
              endogenous opioid tone without administering an exogenous opioid.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Indications without therapies</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Several of the cognitive endpoints studied — stroke rehabilitation, vascular dementia,
              mild cognitive impairment — have limited licensed treatment options. Research
              peptides are part of the broader pipeline of candidates for these indications, even
              if most never reach approval.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Drug-design proof-of-concept</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Even when a research peptide will not itself become a medicine, demonstrating that a
              specific binding motif produces a specific effect is the first step toward
              small-molecule drug discovery. Many marketed drugs began as peptidomimetic prototypes
              showing the principle.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Ageing and neurodegeneration</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The synaptogenic and neuroprotective peptide families (Dihexa, FGL, Cerebrolysin, the
              Khavinson bioregulators) are studied in models of age-related cognitive decline. The
              translational distance from animal models to clinical benefit in humans is
              substantial; the research itself remains active.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="How they're delivered" title="Routes of administration">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The delivery problem is central to the peptide research literature. Peptides cannot
              be taken orally as a default: they are degraded by gastrointestinal proteases before
              they reach systemic circulation. Three workarounds dominate the research-peptide
              field.
            </p>
            <p>
              <strong>Intranasal administration</strong> is the standard route for the
              Russian-origin cognitive peptides (Semax, Selank, and their acetylated analogues).
              The nasal mucosa supports direct nose-to-brain transport via the olfactory and
              trigeminal pathways, bypassing the bloodstream and the blood-brain barrier. The
              bioavailability is sub-parenteral but the route is reproducible and clinically
              practical.
            </p>
            <p>
              <strong>Parenteral administration</strong> (subcutaneous, intramuscular, intravenous)
              is used where the peptide is large or unstable enough that intranasal delivery is
              insufficient. Cerebrolysin's standard administration in approving jurisdictions is by
              intravenous infusion; many synaptogenesis research peptides are studied by
              subcutaneous injection in animals.
            </p>
            <p>
              <strong>Oral administration</strong> is the exception, not the rule. It works for
              specifically engineered peptidomimetics — Noopept's ester chemistry survives the gut;
              Dihexa's particular structure achieves measurable oral bioavailability in animal
              research — but it is not available for most of the peptides on this site.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="What to read next" title="Where to go from here">
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/uk-peptide-regulations" className="group">
            <Card className="h-full transition-shadow group-hover:shadow-lg">
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">UK regulations guide</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  The legal picture in detail — Misuse of Drugs Act, Human Medicines Regulations,
                  Psychoactive Substances Act, and what each actually allows.
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href="/guides/peptide-storage-reconstitution" className="group">
            <Card className="h-full transition-shadow group-hover:shadow-lg">
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Storage and reconstitution</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Peptide handling for research: lyophilisation, reconstitution, sterility, pH,
                  refrigeration, and the practical reasons why all of those matter.
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href="/peptides" className="group">
            <Card className="h-full transition-shadow group-hover:shadow-lg">
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Peptide library</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Ten cognitive research peptides catalogued — Semax, Selank, Dihexa, Cerebrolysin,
                  DSIP, Noopept and more.
                </p>
              </CardBody>
            </Card>
          </Link>
          <Link href="/glossary" className="group">
            <Card className="h-full transition-shadow group-hover:shadow-lg">
              <CardBody>
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Glossary</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  Plain-English definitions for the recurring terms — BDNF, NGF, enkephalinase,
                  LTP, HPA axis, c-Met, and the rest.
                </p>
              </CardBody>
            </Card>
          </Link>
        </div>
      </Section>

      <div className="mt-10">
        <ButtonLink href="/peptides">Start with the peptide library</ButtonLink>
      </div>
    </Container>
  );
}
