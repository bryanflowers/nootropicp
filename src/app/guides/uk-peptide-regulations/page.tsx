import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Are research peptides legal in the UK? — Full 2026 regulatory guide",
  description:
    "Complete guide to the UK legal status of research peptides — Misuse of Drugs Act, Human Medicines Regulations 2012, MHRA position, importation rules, and the distinction between possession and supply for human use.",
  path: "/guides/uk-peptide-regulations",
  keywords: [
    "research peptides legal UK",
    "are peptides legal UK",
    "UK peptide regulations",
    "MHRA peptides",
    "Misuse of Drugs Act peptides",
    "Human Medicines Regulations 2012 peptides",
    "import research peptides UK",
  ],
});

const FAQS = [
  {
    q: "Are research peptides illegal in the UK?",
    a: "None of the peptides discussed on this site is currently a controlled drug under the Misuse of Drugs Act 1971. They are not illegal to possess. However, none is a licensed medicine either — so they cannot be supplied or marketed for human consumption under the Human Medicines Regulations 2012. They are legal to possess as research chemicals and illegal to supply for human use.",
  },
  {
    q: "Can I import research peptides into the UK?",
    a: "Importing for personal research use is not blocked by the Misuse of Drugs Act. It is, however, subject to customs declaration and to the Human Medicines Regulations if the substance is being imported for human consumption. UK Border Force routinely intercepts shipments where the declared purpose contradicts the substance's regulatory status. Most UK researchers buy domestically to avoid this.",
  },
  {
    q: "Is Semax legal in the UK?",
    a: "Semax is not controlled and not a licensed UK medicine. It is sold legally as a research chemical. Supply for human consumption would breach the Human Medicines Regulations 2012, regardless of whether the supplier or buyer claims a personal-use exemption.",
  },
  {
    q: "What is the difference between possession and supply?",
    a: "Possession of an unlicensed medicine for research use is not a criminal offence under UK medicines law. Supply, sale, or marketing of an unlicensed medicine for human consumption is restricted. The Human Medicines Regulations distinguish between these activities in a way the Misuse of Drugs Act does not — a substance can be lawful to possess and unlawful to sell for human use.",
  },
  {
    q: "Could a peptide become a controlled drug?",
    a: "Yes. The Misuse of Drugs Act is a living statute and new substances can be added by statutory instrument. The Advisory Council on the Misuse of Drugs reviews emerging compounds and can recommend scheduling. To date no nootropic research peptide discussed on this site has been added, but the position can change. Verify before assuming.",
  },
  {
    q: "Does the Psychoactive Substances Act 2016 cover peptides?",
    a: "The Psychoactive Substances Act prohibits the production, supply, and importation of any substance with a psychoactive effect, with specific exemptions for licensed medicines, alcohol, tobacco, nicotine, caffeine, and food. There is meaningful legal ambiguity about whether some research peptides fall within the Act's definition. In practice, enforcement has focused on supply to consumers for human use rather than possession for research. A peptide explicitly sold and bought for laboratory research is on much firmer ground than one sold with consumption claims.",
  },
  {
    q: "Is there a UK researcher's licence for peptides?",
    a: "No. The MHRA does not operate a 'researcher's licence' for unlicensed peptides. Institutional researchers work under their organisation's research ethics framework and the Home Office's controlled-drug licensing where applicable. Independent researchers operate under their own professional responsibility within the limits of the medicines and misuse-of-drugs legislation.",
  },
  {
    q: "What about prescribing peptides as a UK clinician?",
    a: "UK clinicians can in principle prescribe unlicensed medicines on a named-patient basis where licensed alternatives are unsuitable, but doing so for an unlicensed research peptide places significant clinical and medico-legal responsibility on the prescriber. The GMC's Good Practice in Prescribing and Managing Medicines guidance is the controlling reference. In practice the vast majority of UK clinicians do not prescribe the peptides discussed on this site.",
  },
];

export default function UkRegulationsGuide() {
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
          { label: "UK Peptide Regulations" },
        ]}
      />
      <header className="mb-10 max-w-3xl">
        <Badge variant="brand" className="mb-3">UK regulatory guide</Badge>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 lg:text-5xl">
          Are research peptides legal in the UK? A complete 2026 guide
        </h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">
          The short answer is: yes, most are legal to possess as research chemicals; no, none is
          legal to supply or use for human consumption. The legal picture is more nuanced than
          either of those one-liners captures, and getting it wrong matters for both researchers
          and suppliers.
        </p>
      </header>

      <Section eyebrow="Headline position" title="Three statutes do the work">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>Misuse of Drugs Act 1971</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The UK's controlled-drugs framework. Lists substances under Schedules 1–5; possession
              and supply of scheduled substances without authority is a criminal offence. None of
              the peptides discussed on this site is currently listed.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Human Medicines Regulations 2012</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              The UK's medicines framework. Restricts the supply, sale, and advertising of any
              substance for use as a human medicine unless it is licensed by the MHRA. This is the
              statute that makes selling research peptides for human consumption unlawful.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>Psychoactive Substances Act 2016</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              A catch-all framework prohibiting production, supply, and import of substances with a
              psychoactive effect outside specific exemptions. Researcher exemptions and the
              ambiguity around whether peptides have a "psychoactive effect" in the statutory
              sense make this the most contested of the three for research peptides.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The detail" title="Possession vs supply — the key distinction">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              UK medicines law treats possession and supply quite differently. The Human Medicines
              Regulations 2012, which carry across most of the previous Medicines Act framework
              under the post-Brexit retained-EU-law settlement, restrict the supply of unlicensed
              medicines for human use. They do not, in the same way, criminalise possession for
              non-human-use purposes.
            </p>
            <p>
              In practice this means a UK-based research chemist or independent researcher can lawfully
              possess Semax, Selank, Dihexa, and the other peptides discussed on this site — provided the
              possession is for laboratory or preclinical purposes rather than for personal consumption.
              A UK supplier can lawfully sell the same compounds — provided the sale is for the same
              purposes and not represented as a medicine. The point at which legality breaks down is
              where the substance is supplied with explicit or implied human-use claims.
            </p>
            <p>
              The MHRA enforcement record is consistent with this reading. Action against research-peptide
              suppliers in recent years has focused on those marketing their products with therapeutic
              claims, dosing instructions, or before-and-after photographs — not those operating
              within the research-chemical convention.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="Importation" title="Buying from overseas vs domestic">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              Importing research peptides into the UK is a more practically constrained question than
              the legal framework alone suggests. UK Border Force routinely inspects packages
              declared as bulk chemicals, pharmaceuticals, or medicines, and an incorrect customs
              declaration is itself a problem regardless of the underlying substance.
            </p>
            <p>
              For Semax-class peptides specifically, much of the source market is in Russia and
              China. Russian-origin material has historically been the standard for Semax and Selank;
              Chinese suppliers dominate the wider research-peptide market. Both routes have
              produced consistent supply, but customs interception is non-trivial. Most UK-based
              researchers source domestically — from suppliers like PeptideAuthority.co.uk and
              PeptideBarn.co.uk — to keep the chain of custody clean and the importation question
              out of the picture.
            </p>
            <p>
              Where importation is unavoidable (specific compounds not available domestically), the
              practical pattern is: declare accurately as a research chemical; do not include
              dosing instructions or human-use claims in the paperwork; keep the volume modest and
              the documentation traceable.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="The MHRA position" title="How MHRA actually treats unlicensed peptides">
        <Card>
          <CardBody className="prose max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
            <p>
              The Medicines and Healthcare products Regulatory Agency is the UK's medicines
              authority. Its position on research peptides, expressed across enforcement actions
              and published guidance, can be summarised as follows.
            </p>
            <p>
              First, the MHRA does not assert that research peptides are intrinsically illegal.
              Substances that are not controlled under the Misuse of Drugs Act and not licensed as
              medicines exist in a regulatory category that the Human Medicines Regulations address
              by restricting supply rather than possession.
            </p>
            <p>
              Second, the MHRA's enforcement activity is concentrated on suppliers who cross the
              human-use line — by marketing peptides with therapeutic claims, by providing dosing
              instructions, by representing themselves as medical providers, or by selling to
              consumers rather than identifiable researchers.
            </p>
            <p>
              Third, the MHRA collaborates with Border Force and trading-standards authorities on
              shipments and online listings that fail to maintain the research-chemical convention.
              Enforcement is selective rather than blanket, but it does happen.
            </p>
            <p>
              The takeaway for a UK researcher: the MHRA position does not require you to stop
              researching peptides; it does require any supply chain you participate in to maintain
              the research-chemical framing throughout.
            </p>
          </CardBody>
        </Card>
      </Section>

      <Section eyebrow="UK vs EU vs US" title="How the UK position compares internationally">
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader><CardTitle>United Kingdom</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Research chemicals legal to possess. Supply for human consumption restricted by HMR
              2012. Psychoactive Substances Act 2016 adds an additional layer of ambiguity for some
              compounds. No specific researcher licence required for unlicensed peptides.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>European Union</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              Varies by member state. The EMA position is no centralised authorisation for any of
              the peptides on this site; national authorities apply their own equivalents of the
              HMR 2012. Russia (not an EU member) is an outlier — Semax and Selank are licensed
              prescription medicines there.
            </CardBody>
          </Card>
          <Card>
            <CardHeader><CardTitle>United States</CardTitle></CardHeader>
            <CardBody className="text-sm text-slate-700 dark:text-slate-300">
              FDA does not approve any of the peptides on this site for human use. FDA enforcement
              against compounding pharmacies and research-chemical suppliers has been more
              aggressive than UK or EU. The "research only" framing is less of a workable shield in
              the US regulatory environment than it is in the UK.
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Frequently asked questions">
        <Accordion>
          {FAQS.map((f, i) => (
            <AccordionItem key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </Accordion>
      </Section>

      <Section title="Important caveat">
        <Card className="border-amber-300 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/30">
          <CardBody className="text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              This guide is an educational summary of the UK regulatory framework as it stood at the
              date of last review. It is not legal advice. The Misuse of Drugs Act, Human Medicines
              Regulations, and Psychoactive Substances Act are all live statutes, and individual
              compounds can be added to schedules at any time by statutory instrument. Researchers
              should verify the current position with primary regulatory sources (
              <a href="https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency" className="font-medium text-amber-900 underline dark:text-amber-200">MHRA</a>,{" "}
              <a href="https://www.gov.uk/government/publications/controlled-drugs-list--2" className="font-medium text-amber-900 underline dark:text-amber-200">Home Office controlled-drug schedules</a>
              ) before relying on the position stated here, and should obtain qualified legal advice
              for any decision with material consequences.
            </p>
          </CardBody>
        </Card>
      </Section>

      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/peptides">Browse peptide profiles</ButtonLink>
        <ButtonLink href={`${SITE.url}/legal/disclaimer`} variant="outline">Full site disclaimer</ButtonLink>
      </div>
    </Container>
  );
}
