import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardBody } from "@/components/ui/Card";
import { ArrowRight, Brain, Focus, HeartPulse, Moon, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Research peptides by use case — Memory, focus, anxiety, sleep, neuroprotection",
  description:
    "Choose research peptides by the endpoint you are studying — memory, focus and attention, anxiety, sleep architecture, or neuroprotection. Each hub groups the relevant peptides by mechanism.",
  path: "/use-cases",
  keywords: [
    "peptides by use case",
    "peptides for memory research",
    "peptides for focus research",
    "peptides for anxiety research",
    "peptides for sleep research",
    "peptides for neuroprotection",
  ],
});

const HUBS = [
  {
    href: "/use-cases/peptides-for-memory-research",
    label: "Memory research",
    body: "Peptides studied for memory encoding, consolidation, and recall — Semax, Cerebrolysin, Dihexa, Noopept.",
    icon: Brain,
  },
  {
    href: "/use-cases/peptides-for-focus-research",
    label: "Focus & attention research",
    body: "Sustained-attention, vigilance, and mental-fatigue endpoints — Semax, Noopept, N-Acetyl Semax.",
    icon: Focus,
  },
  {
    href: "/use-cases/peptides-for-anxiety-research",
    label: "Anxiety & stress-resilience research",
    body: "Anxiolytic effects without GABA-A binding — Selank, N-Acetyl Selank, DSIP.",
    icon: HeartPulse,
  },
  {
    href: "/use-cases/peptides-for-sleep-research",
    label: "Sleep & circadian research",
    body: "Slow-wave architecture, HPA-axis attenuation, and cognitive-consolidation endpoints — DSIP and adjuncts.",
    icon: Moon,
  },
  {
    href: "/use-cases/peptides-for-neuroprotection-research",
    label: "Neuroprotection research",
    body: "Ischaemic, oxidative, and excitotoxic injury models — Cerebrolysin, Pinealon, FGL, Semax.",
    icon: ShieldCheck,
  },
];

export default function UseCasesIndex() {
  return (
    <Container>
      <Breadcrumbs trail={[{ label: "Home", href: "/" }, { label: "Use cases" }]} />
      <Section
        eyebrow="Use cases"
        title="Research peptides by endpoint"
        description="The same peptide can be relevant to several research endpoints; different research endpoints recruit different peptides. These hubs group the catalogued peptides by the endpoint a researcher is most likely starting from, with notes on mechanism overlap and how investigators choose between them in practice."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {HUBS.map((h) => (
            <Link key={h.href} href={h.href} className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2">
              <Card className="h-full transition-shadow group-hover:shadow-lg">
                <CardBody>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <h.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{h.label}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{h.body}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Explore the hub <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
