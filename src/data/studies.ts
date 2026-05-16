export interface StudyDeepDive {
  slug: string;
  title: string;
  shortTitle: string;
  peptideSlug: string; // slug of the relevant peptide
  yearRange: string;
  jurisdiction: string;
  designType: string;
  excerpt: string;
  keywords: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
}

export const studies: StudyDeepDive[] = [
  {
    slug: "semax-stroke-rehabilitation-trial",
    title:
      "The Semax stroke-rehabilitation trial programme — what the Russian post-stroke evidence actually shows",
    shortTitle: "Semax stroke rehabilitation trials",
    peptideSlug: "semax",
    yearRange: "2000–2015",
    jurisdiction: "Russian Federation",
    designType: "Multicentre clinical-trial programme",
    excerpt:
      "The strongest single-peptide clinical evidence base in the cognitive-peptide field is the body of Russian post-stroke rehabilitation work with Semax. This article unpacks what the trials actually measured, what they showed, and what the methodological limits are.",
    keywords: [
      "Semax stroke trial",
      "Semax post-stroke rehabilitation",
      "Semax clinical evidence",
      "Russian Semax research",
      "Semax neurological recovery",
    ],
    sections: [
      {
        heading: "Background — why post-stroke is the strongest Semax indication",
        body: [
          "Semax has been studied across a range of indications in Russia since its 1994 regulatory approval, but the deepest clinical-evidence body is in ischaemic stroke rehabilitation. The reasons are partly mechanistic and partly historical. Mechanistically, Semax acts through pathways — BDNF/NGF induction, monoaminergic modulation, antioxidant defence — that are all directly relevant to the ischaemic injury cascade and the subsequent recovery process. Historically, the Russian neurological community pursued the post-stroke indication aggressively in the late 1990s and 2000s, producing a continuous stream of trial work that has not been matched in any other Semax indication.",
          "The trial programme is not a single study but a collection of multicentre Russian trials, mostly run through state and academic hospital networks, accumulated across roughly fifteen years. Sample sizes range from a few dozen subjects to several hundred. The pooled body of work is the basis for Semax's continued clinical use in Russian post-stroke care and for its inclusion on the Russian List of Vital and Essential Drugs.",
        ],
      },
      {
        heading: "What the trials measured",
        body: [
          "The standard endpoints across the programme are the NIH Stroke Scale (NIHSS) for neurological deficit, the Barthel Index for activities of daily living, and the Mini-Mental State Examination or Russian-language equivalent for cognitive function. Trials run on a 10–14 day cycle of intranasal Semax administration, typically initiated within the first few days after the index stroke event, with assessments at baseline, end-of-treatment, and at follow-up windows ranging from 30 to 90 days.",
          "The intervention is adjunct to standard rehabilitation care rather than a replacement for it. The comparison arm receives the same physiotherapy, occupational-therapy, and pharmacological-care protocol as the intervention arm; the intervention arm adds intranasal Semax on top. The question the trials are designed to answer is therefore narrow and well-posed: does adding Semax to standard care produce measurably faster or more complete neurological recovery?",
        ],
      },
      {
        heading: "What the trials show",
        body: [
          "The consistent finding across the trial body is faster neurological recovery in the Semax arm. NIHSS improvement is typically reported as occurring more rapidly in the treated group, with statistical separation appearing within the first 7–10 days of treatment and persisting at the 30-day follow-up window. The magnitude of the effect varies across studies — published effect sizes range from modest to substantial — but the direction is consistent.",
          "Barthel Index improvements track NIHSS improvements, with treated subjects regaining independence in activities of daily living more quickly. Cognitive measures show smaller but still positive effects, with the strongest signals in the speech-function and attention sub-domains. Quality-of-life and subjective-wellbeing measures, where collected, show concordant patterns.",
          "The neurological-recovery effect is most reliably demonstrable in moderate-severity strokes — NIHSS scores in the 8–15 range. In very mild strokes, both arms recover quickly and the differential is hard to detect; in very severe strokes, the underlying tissue damage limits the recovery ceiling and the marginal effect of the intervention is small.",
        ],
      },
      {
        heading: "The methodological limits",
        body: [
          "Several caveats are appropriate when assessing the strength of this evidence body from a Western standpoint.",
          "The trials are predominantly open-label or single-blind rather than double-blind placebo-controlled. Russian clinical-trial methodology of the 1990s and 2000s did not always reach the standards now expected in Western regulatory submissions, and some of the published reports omit details that would be required in a Cochrane-style systematic review.",
          "The trials are concentrated in a small number of Russian centres with shared training and methodology. Cross-centre methodological independence is more limited than would be expected from a comparable Western multicentre programme.",
          "Publication bias is plausible. The available trials are uniformly positive; null trials may exist in unpublished form and would change the pooled picture.",
          "The trial body has not been subjected to a full independent Western meta-analysis. The available systematic reviews are largely Russian and may share methodological assumptions with the underlying trials.",
        ],
      },
      {
        heading: "What this means for research and clinical practice",
        body: [
          "The Russian post-stroke Semax trial body is the strongest single-peptide clinical evidence base in the cognitive-peptide field, and the post-stroke indication is correspondingly the strongest claim that can be made for the compound. It is, however, not strong enough on its own to support Western regulatory authorisation, and the gap between 'consistent positive signal in Russian trials' and 'meets MHRA or FDA standard for licensing' is meaningful.",
          "For research purposes the trial body provides a credible mechanistic and clinical context for investigating Semax in ischaemic-injury and post-stroke recovery models. For clinical purposes — outside Russia — Semax remains a research chemical, not an approved post-stroke therapy, and the trial body is properly understood as supporting research interest rather than licensed clinical use.",
        ],
      },
    ],
  },

  {
    slug: "dihexa-spinogenesis-mechanism-study",
    title:
      "The Dihexa spinogenesis breakthrough — what the picomolar dendritic-spine data actually shows",
    shortTitle: "Dihexa spinogenesis mechanism study",
    peptideSlug: "dihexa",
    yearRange: "2012–2015",
    jurisdiction: "United States (Washington State University)",
    designType: "In vitro and animal preclinical research programme",
    excerpt:
      "The Joseph Harding group's Dihexa research demonstrated dendritic spine formation at picomolar concentrations — orders of magnitude beyond BDNF on the same assay. This article explains what was measured, why the result matters, and why the compound nonetheless remains preclinical.",
    keywords: [
      "Dihexa spinogenesis study",
      "Dihexa Harding research",
      "Dihexa BDNF comparison",
      "Dihexa mechanism",
      "Washington State University Dihexa",
    ],
    sections: [
      {
        heading: "Background — the lineage of the molecule",
        body: [
          "Dihexa was designed at Washington State University as part of a research programme led by Joseph Harding investigating the central effects of angiotensin IV. The starting observation was that angiotensin IV, a C-terminal hexapeptide fragment of angiotensin II with no significant cardiovascular activity, has measurable effects on cognition and memory in animal research. The team set out to identify a small-molecule analogue that retained those CNS effects while improving on the parent molecule's pharmacokinetic limitations — particularly its rapid degradation in plasma and its poor blood-brain barrier penetration.",
          "Dihexa emerged from this design programme. It is a small hexapeptide derivative with two engineering features: terminal modifications that confer plasma stability and lipophilicity that improves blood-brain barrier penetration. The compound is orally bioavailable in animal studies — an unusual property for a peptide of its size — and reaches the CNS at concentrations sufficient to produce measurable pharmacology.",
        ],
      },
      {
        heading: "What the spinogenesis study measured",
        body: [
          "The defining piece of Dihexa research is the dendritic-spinogenesis study published from the Harding group around 2012. The work used hippocampal slice preparations from rat brains, applied Dihexa to the bathing medium at a range of concentrations from femtomolar through micromolar, and measured the resulting change in dendritic spine density on pyramidal neurons.",
          "The result that drew attention was the potency curve. Dihexa produced measurable increases in dendritic spine density at concentrations in the picomolar range — roughly 10 to the minus 12 molar. The same assay run with BDNF, the reference physiological spinogenic factor, produced equivalent effects at concentrations several orders of magnitude higher, in the low nanomolar range. Dihexa was reported as approximately one thousand times more potent than BDNF on this specific endpoint.",
          "The mechanism was characterised in the same and subsequent work. Dihexa activates the hepatocyte growth factor (HGF) receptor c-Met, with the small peptide effectively serving as an allosteric stabiliser of the HGF dimer that engages the receptor. Downstream signalling — PI3K-Akt, MAPK — is consistent with c-Met activation and produces the spinogenic effect.",
        ],
      },
      {
        heading: "What followed in animal work",
        body: [
          "The in vitro spinogenesis result was followed by behavioural work in cognitively impaired animal models. The most-cited extension was the scopolamine-amnesia model: rats given scopolamine show a profound deficit on the Morris water-maze spatial-learning task, and the question was whether Dihexa administration could attenuate or reverse that deficit.",
          "The published result was that oral Dihexa administration restored Morris water-maze performance to control levels in scopolamine-treated rats — not just attenuating the impairment but eliminating it within the assay's resolution. Subsequent work in aged rats showed similar restoration of performance to that of young-control animals. These results are striking in magnitude and have not been independently replicated by Western groups outside the Harding programme.",
        ],
      },
      {
        heading: "Why it nonetheless remains preclinical",
        body: [
          "The Dihexa research is among the most preclinically promising work in the cognitive-peptide field. The compound has not, however, progressed to human clinical trials, and the reasons are worth understanding because they apply to several other research peptides in the same category.",
          "First, the c-Met pathway is implicated in oncogenic signalling. Chronic pharmacological activation of growth-factor receptors is a recognised safety concern in drug development, and the long-term toxicology data that would be needed to address this concern for Dihexa specifically does not exist. No published long-term animal toxicology study covers the chronic-dosing scenario that would mirror clinical use.",
          "Second, the manufacturing and supply infrastructure for clinical-grade Dihexa has not developed. The molecule is available through research-chemical channels but not through GMP-grade pharmaceutical suppliers, which is the practical prerequisite for any clinical-trial registration.",
          "Third, the academic-to-clinical translation pathway requires institutional investment that has not materialised. The Harding group's primary work is research rather than drug development; translating a preclinical compound to clinical trials requires venture funding, regulatory engagement, and clinical-trial infrastructure that an academic lab does not typically possess in isolation.",
          "The result is a compound with arresting preclinical data that exists in regulatory and commercial limbo. It is freely studied in research contexts and freely available as a research chemical; it is not a licensed medicine anywhere and is unlikely to become one in the foreseeable future without external development resources.",
        ],
      },
    ],
  },

  {
    slug: "selank-anxiolytic-vs-benzodiazepine-trial",
    title:
      "Selank vs benzodiazepines — what the comparative anxiolytic trials show",
    shortTitle: "Selank vs benzodiazepine comparison",
    peptideSlug: "selank",
    yearRange: "2005–2015",
    jurisdiction: "Russian Federation",
    designType: "Randomised comparative clinical trials",
    excerpt:
      "Selank's most-cited clinical evidence is its head-to-head comparison with benzodiazepine anxiolytics in generalised anxiety populations. This article unpacks what the trials measured, how Selank performed relative to the benzodiazepine standard, and what differential side-effect profile emerged.",
    keywords: [
      "Selank vs benzodiazepine",
      "Selank anxiety trial",
      "Selank vs medazepam",
      "Selank clinical evidence",
      "Russian Selank research",
    ],
    sections: [
      {
        heading: "Background — why a head-to-head trial design",
        body: [
          "Anxiolytic research has been dominated for sixty years by the GABA-A positive allosteric modulator class — benzodiazepines and their structural relatives. Any new anxiolytic candidate has to either match the benzodiazepine standard on anxiolytic potency or offer a meaningfully better side-effect profile to justify clinical development. Russian work on Selank explicitly framed the question this way, designing comparative trials against a benzodiazepine comparator rather than against placebo alone.",
          "The comparator most commonly used in the Selank trial body is medazepam, an intermediate-potency benzodiazepine in routine clinical use for generalised anxiety in Russia at the time. Trials enrolled patients with generalised anxiety disorder or adjustment disorder with anxiety, randomised them to Selank or medazepam, and measured anxiolytic effect plus a battery of side-effect endpoints.",
        ],
      },
      {
        heading: "What the trials measured",
        body: [
          "The primary endpoint across the trial body was anxiolytic effect, typically measured with the Hamilton Anxiety Rating Scale and the Spielberger State-Trait Anxiety Inventory. Secondary endpoints addressed the side-effect profile in detail: sedation (measured by daytime sleepiness scales), motor impairment (reaction-time and coordination tests), cognitive impairment (digit-symbol substitution and similar measures), and abuse liability (subjective drug-liking measures in some studies).",
          "Trial durations were typically 10 to 14 days of treatment, with assessments at baseline, mid-treatment, and end of treatment. Follow-up windows varying from one to four weeks post-treatment looked for rebound anxiety on discontinuation.",
        ],
      },
      {
        heading: "What the trials show — on anxiolytic effect",
        body: [
          "The headline finding across the comparative trial body is that Selank produces anxiolytic effects comparable in magnitude to medazepam at the doses studied. Hamilton Anxiety Rating Scale reductions in the Selank arms matched or modestly exceeded the medazepam arms by end-of-treatment in the published studies, with statistical equivalence rather than superiority being the most defensible conclusion from the pooled data.",
          "The time-course was different. Selank's anxiolytic effect develops gradually across the treatment course; medazepam produces a more rapid acute anxiolytic effect from the first dose. By the end of the two-week treatment window the magnitude was comparable; in the first few days, medazepam led on the anxiety measures. Research designs that prioritise acute anxiolysis would therefore still choose the benzodiazepine class; designs that can accept the slower onset can substitute Selank.",
        ],
      },
      {
        heading: "What the trials show — on side-effect differential",
        body: [
          "The substantive case for Selank rests on the side-effect comparisons rather than the anxiolytic-effect comparison. The published trials report meaningful differences favouring Selank on all four of the secondary endpoints listed above.",
          "Sedation: minimal or absent in the Selank arm; expected and dose-related in the medazepam arm.",
          "Motor impairment: no measurable effect in the Selank arm; modest decrements in the medazepam arm on coordination and reaction-time testing.",
          "Cognitive impairment: no measurable effect in the Selank arm; the expected mild but detectable decrement on digit-symbol substitution and related measures in the medazepam arm.",
          "Abuse liability and rebound: no rebound anxiety in the Selank arm at the one-to-four-week follow-up windows; mild rebound in the medazepam arm consistent with benzodiazepine-class behaviour.",
          "The composite picture is of two anxiolytics with comparable end-of-treatment anxiolytic effect but substantially different side-effect profiles. For research designs that need to probe anxiety in the context of preserved cognition or attention, the differential matters substantially.",
        ],
      },
      {
        heading: "The methodological limits",
        body: [
          "The trial body has the same methodological limitations as the broader Russian peptide-clinical evidence record. Most trials are smaller than would be expected from a Western anxiety-drug development programme; blinding is variable; the cross-centre methodological independence is limited; Western meta-analysis is sparse.",
          "The benzodiazepine comparator chosen (medazepam) is not the most-potent benzodiazepine in the class — comparisons against high-potency comparators like alprazolam or clonazepam would be more challenging. The published trial body does not consistently use those high-potency comparators.",
          "Long-term comparative work — beyond the two-week treatment window — is sparse. Whether the side-effect differential persists across months of chronic use, and whether Selank's anxiolytic effect maintains across the same window, is not as well-characterised as the acute-treatment data.",
        ],
      },
      {
        heading: "What this means for the broader anxiolytic-research landscape",
        body: [
          "Selank's comparative-trial body is one of the most credible pieces of evidence in the cognitive-peptide field that a non-GABA-A anxiolytic mechanism can produce clinically meaningful effects. The compound has not progressed to Western regulatory approval, but the trial body provides a stronger evidence floor for the underlying enkephalinase-inhibition strategy than would otherwise exist.",
          "For research designs that need an anxiolytic tool but cannot tolerate the cognitive and motor side effects of the GABA-A class, Selank is the best-characterised peptide-class option. The decades of mature Western clinical-trial methodology have not been applied to it, but the available data is consistent enough to support continued research interest.",
        ],
      },
    ],
  },

  {
    slug: "cerebrolysin-vascular-dementia-meta-analysis",
    title:
      "The Cerebrolysin vascular-dementia evidence — what the systematic reviews actually find",
    shortTitle: "Cerebrolysin vascular dementia evidence",
    peptideSlug: "cerebrolysin",
    yearRange: "1995–2020",
    jurisdiction: "Multinational (predominantly Eastern European and Asian)",
    designType: "Pooled randomised controlled trial evidence",
    excerpt:
      "Cerebrolysin has the largest randomised-trial body of any cognitive peptide. This article walks through the vascular-dementia meta-analytic record, what the pooled effect sizes show, and why the compound remains unlicensed in the UK despite the evidence base.",
    keywords: [
      "Cerebrolysin vascular dementia",
      "Cerebrolysin meta-analysis",
      "Cerebrolysin clinical trial",
      "Cerebrolysin Cochrane review",
      "Cerebrolysin dementia evidence",
    ],
    sections: [
      {
        heading: "Background — Cerebrolysin's distinct evidence profile",
        body: [
          "Cerebrolysin occupies an unusual position among research peptides. Unlike Semax, Selank, or Dihexa, it is not a single defined molecule; it is a standardised multi-component preparation. Unlike the other peptides on this site, it has been the subject of substantial Western and international randomised clinical-trial work in addition to the Russian and Eastern European tradition. The clinical-trial body across all indications is the largest in the field, and the meta-analytic literature is correspondingly deeper.",
          "The vascular-dementia indication is one of two principal cognitive areas covered (the other being post-stroke recovery). It is a meaningful test case for Cerebrolysin because vascular dementia is a slowly progressive condition where clinical effects are detectable on standardised cognitive batteries over months of follow-up — a different research design from the acute post-stroke window.",
        ],
      },
      {
        heading: "The trial body",
        body: [
          "The vascular-dementia Cerebrolysin trial record includes multiple randomised double-blind placebo-controlled studies conducted across Eastern Europe, Russia, and parts of Asia between the mid-1990s and the late 2010s. Sample sizes are larger than the typical Russian peptide trial — several hundred subjects per trial in the larger studies — and the methodology more closely approaches Western standards.",
          "Standard outcome measures across the body include the Alzheimer's Disease Assessment Scale cognitive subscale (ADAS-cog), the Clinical Global Impression of Change (CGI-C), and the Mini-Mental State Examination. Follow-up windows typically extend to 12 or 24 weeks. Cerebrolysin is administered intravenously across treatment cycles, generally 10–30 mL per day over a 10–20 day cycle, sometimes repeated after a washout interval.",
        ],
      },
      {
        heading: "What the pooled evidence shows",
        body: [
          "Multiple systematic reviews and meta-analyses have synthesised the vascular-dementia trial body, with broadly consistent findings.",
          "On cognitive outcomes, the pooled effect sizes favour Cerebrolysin over placebo, with statistically significant improvements on the ADAS-cog and similar batteries. The magnitude of the effect is modest in absolute terms — typically a few points on the ADAS-cog scale — but consistent across studies and replicable in larger trials.",
          "On global-impression outcomes, the pooled CGI-C effects favour Cerebrolysin, with a higher proportion of subjects classified as improved versus unchanged or worsened in the active arm compared with the placebo arm. The effect is more visible at end-of-treatment than at washout follow-up, consistent with a pharmacological effect that requires continued exposure.",
          "Subgroup analyses suggest stronger effects in moderate rather than mild or severe disease, which is the expected pattern from any therapeutic intervention. Subgroup analyses by sex, age, and concurrent medication are less reliably reported across the trial body.",
        ],
      },
      {
        heading: "What the Cochrane-style reviews conclude",
        body: [
          "Independent systematic reviews of the Cerebrolysin vascular-dementia evidence — including reviews approaching Cochrane methodological standards — have generally concluded that the evidence supports a positive cognitive effect, with the methodological quality of the included trials being acceptable but not uniformly excellent.",
          "The standard caveats apply. Heterogeneity between trials is meaningful — different dosing protocols, different study durations, different outcome-measure mixes — and may inflate or distort the pooled effect estimate. Publication bias is plausible given the commercial backing of the trial programme. The trial body is dominated by groups based in jurisdictions where Cerebrolysin is licensed and clinically used, which is unavoidable but worth noting.",
          "The consensus interpretation across independent reviews is that Cerebrolysin has a real and demonstrable cognitive effect in vascular dementia, of modest magnitude, with an acceptable acute safety profile, and with methodological limitations that fall short of the standard required for UK or US regulatory approval but well above the standard typical of the broader research-peptide literature.",
        ],
      },
      {
        heading: "Why it remains unlicensed in the UK",
        body: [
          "The Cerebrolysin evidence base is more substantial than that of any other peptide on this site, and yet the compound remains unlicensed in the UK. The reasons are partly methodological and partly commercial.",
          "Methodologically, the MHRA standard for licensing a medicine for vascular dementia or any other cognitive indication requires evidence that meets specific design and statistical standards that the Cerebrolysin trial body, as a whole, does not uniformly meet. Individual trials within the body do; the pooled record contains too much heterogeneity for a clean submission.",
          "Commercially, the manufacturer has not pursued UK licensing aggressively. The compound is licensed and reimbursed in markets where the commercial return is more straightforward, and the regulatory and commercial investment required to extend that to the UK has not been made.",
          "The result is a compound with substantial international clinical-trial evidence that occupies a regulatory-orphan position in the UK — neither a research chemical in the narrow sense nor a licensed medicine. It can be imported and used under unlicensed-medicines provisions in specific clinical contexts but is not generally available through normal NHS or private-prescription channels.",
        ],
      },
    ],
  },

  {
    slug: "noopept-mild-cognitive-impairment-trial",
    title:
      "Noopept in mild cognitive impairment — what the Russian clinical-trial record shows",
    shortTitle: "Noopept MCI trial evidence",
    peptideSlug: "noopept",
    yearRange: "2005–2015",
    jurisdiction: "Russian Federation",
    designType: "Randomised controlled clinical trials",
    excerpt:
      "Noopept's clinical-trial body in mild cognitive impairment is the principal clinical evidence supporting the compound's 2011 Russian regulatory approval. This article walks through what the trials measured, what they showed, and how the evidence compares with other cognitive-peptide records.",
    keywords: [
      "Noopept MCI trial",
      "Noopept mild cognitive impairment",
      "Noopept clinical evidence",
      "Noopept Russia approval",
      "Noopept dementia research",
    ],
    sections: [
      {
        heading: "Background — Noopept's position in Russian clinical practice",
        body: [
          "Noopept was developed at the V. V. Zakusov Institute of Pharmacology in the 1990s as an orally bioavailable cognitive enhancer in the lineage of piracetam. It received Russian regulatory approval in 2011 for use in cognitive indications, supported by a clinical-trial body developed across the preceding decade. The mild cognitive impairment (MCI) indication is the strongest clinical-evidence area, and is the principal basis for the 2011 approval.",
          "MCI is the clinical category of cognitive decline that exceeds normal age-related change but falls short of dementia. It is clinically meaningful in its own right and is also a window into early-stage dementia processes where intervention might be more effective than at later stages. A cognitive enhancer with measurable MCI effects is therefore both clinically and mechanistically interesting.",
        ],
      },
      {
        heading: "The trial body",
        body: [
          "The Russian Noopept MCI trial body consists of several randomised studies conducted across academic and clinical neurology centres in Russia between 2005 and 2015. Sample sizes are smaller than the Cerebrolysin trial body — typically 50 to 150 subjects per trial — but methodology is generally double-blind placebo-controlled at the larger studies. Treatment durations are longer than for the Selank or Semax trials, typically 8 to 12 weeks reflecting the longer effects required to detect MCI changes.",
          "Standard outcome measures include the Mini-Mental State Examination, the Montreal Cognitive Assessment (MoCA), domain-specific cognitive batteries covering memory and attention, and global-impression measures. Subjects are typically 50–75 years old at enrolment, with stable MCI defined by standardised criteria, and follow-up assessments occur at baseline, mid-treatment, end-of-treatment, and a post-treatment washout window.",
        ],
      },
      {
        heading: "What the trials show",
        body: [
          "The consistent finding across the MCI trial body is statistically significant cognitive improvement in the Noopept arm versus placebo, with effect sizes that are modest but reproducible.",
          "MMSE improvements are typically 1–3 points by end-of-treatment, comparable in magnitude to the Cerebrolysin vascular-dementia effect. Domain-specific measures show stronger effects in memory and attention than in executive function or visuospatial domains, consistent with the hippocampal-prefrontal mechanism of the compound. Global-impression measures track the cognitive measures.",
          "The washout window typically shows partial regression of the cognitive effects, indicating that the pharmacology is real but reversible — the gains are not consolidated permanently after discontinuation. This is consistent with a mechanism that supports ongoing neurotrophin signalling rather than producing a one-shot structural change.",
          "Subjective and quality-of-life endpoints, where collected, show concordant improvements. The trials uniformly report excellent tolerability, with adverse-event profiles not meaningfully different from placebo at the doses studied.",
        ],
      },
      {
        heading: "How the evidence compares with other cognitive-peptide records",
        body: [
          "The Noopept MCI evidence sits in the middle of the cognitive-peptide clinical-evidence hierarchy. It is more methodologically robust than the broader Selank anxiety body — the larger trials are properly randomised double-blind placebo-controlled — but smaller in total sample size than the Cerebrolysin vascular-dementia body and confined to a single geographic and clinical research tradition.",
          "The strongest comparison is with the Russian Semax post-stroke evidence. Both bodies are predominantly Russian, both are reproducible across multiple centres, both support continued clinical use within Russia, and both fall short of the standard required for Western regulatory approval. The methodological weaknesses are similar; the mechanistic interest is similar; the strength of evidence is similar.",
          "The Noopept body has the advantage of using a longer-term endpoint (12-week cognitive change in MCI) rather than an acute-recovery endpoint (NIHSS at 30 days post-stroke). For research interested in cognitive effects over weeks-to-months rather than hours-to-days, the Noopept body is the more directly relevant record.",
        ],
      },
      {
        heading: "What this means for research applications",
        body: [
          "The Noopept MCI body provides a real and credible clinical context for investigating the compound in cognitive-decline research. It does not support clinical use outside Russia — Noopept is not licensed in the UK or US — but it supports research interest in the BDNF-induction-plus-glutamatergic-modulation mechanism the compound represents.",
          "For research designs studying cognitive interventions in MCI or early-stage cognitive decline populations, the Noopept evidence is one of the stronger preclinical-to-clinical bridges in the cognitive-peptide field. The active metabolite cycloprolylglycine, with its endogenous status and cleaner pharmacokinetics, is an interesting research-tool alternative for mechanistic work where the parent compound's pharmacokinetics is a confound.",
        ],
      },
    ],
  },
];

export function getStudyBySlug(slug: string) {
  return studies.find((s) => s.slug === slug);
}
