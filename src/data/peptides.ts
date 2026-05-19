import type { Peptide } from "@/types/peptide";

export const peptides: Peptide[] = [
  {
    slug: "semax",
    name: "Semax",
    aliases: ["Met-Glu-His-Phe-Pro-Gly-Pro", "ACTH(4-10) analogue"],
    category: "Cognitive Enhancement",
    tagline:
      "A synthetic heptapeptide analogue of ACTH(4-10) developed in Russia for cognitive enhancement, neuroprotection, and stroke recovery research.",
    molecularFormula: "C₃₇H₅₁N₉O₁₀S",
    molecularWeight: "813.93 g/mol",
    halfLife: "Intranasal: minutes (peptide); BDNF effects persist 24h+",
    sequence: "Met-Glu-His-Phe-Pro-Gly-Pro",
    ukStatus:
      "Not licensed as a medicine in the United Kingdom. Sold strictly as a research chemical for in vitro and preclinical laboratory use.",
    euStatus:
      "Not approved by the European Medicines Agency. Licensed for clinical use in the Russian Federation; not authorised elsewhere in the EU.",
    overview: [
      "Semax is a synthetic seven-amino-acid peptide derived from the 4–10 fragment of adrenocorticotropic hormone (ACTH). The natural ACTH fragment was historically observed to influence learning and memory in animal studies; Semax was engineered to retain those neurotropic effects while stripping the corticotropic (cortisol-releasing) activity, producing a peptide with cognitive activity but no steroid-axis side effects.",
      "The molecule was developed at the Institute of Molecular Genetics of the Russian Academy of Sciences in the 1980s and entered clinical use in Russia in the late 1990s. It is administered intranasally in human research because the small peptide crosses the nasal mucosa and reaches the central nervous system without significant systemic exposure.",
      "In laboratory studies, Semax has been characterised as a potent upregulator of brain-derived neurotrophic factor (BDNF) and nerve growth factor (NGF) expression in the hippocampus and prefrontal cortex — the two neurotrophins most closely associated with neuroplasticity, learning, and memory consolidation.",
    ],
    history: [
      "Originally synthesised in the 1980s by researchers at the Institute of Molecular Genetics of the Russian Academy of Sciences, with the explicit goal of producing a cognitive-acting ACTH derivative free of the hormone's endocrine effects.",
      "Granted clinical approval in the Russian Federation in 1994 for cerebrovascular indications, and added to the Russian List of Vital and Essential Drugs in subsequent revisions.",
      "Outside Russia, Semax has remained a research chemical. Western academic groups began publishing on its mechanism and BDNF-induction properties through the 2000s and 2010s, expanding the international peer-reviewed literature.",
      "A more stable analogue, N-Acetyl Semax Amidate, was later developed to extend the peptide's half-life and is widely studied alongside the parent compound.",
    ],
    mechanism: [
      "Upregulation of BDNF and NGF transcription in the hippocampus within hours of intranasal administration in rodent models — the central plank of its pro-cognitive action.",
      "Modulation of the endogenous opioid system: Semax has been shown to inhibit enkephalin-degrading enzymes, transiently elevating brain enkephalin tone and contributing to its reported anxiolytic and mood-balancing effects.",
      "Direct neurotrophic signalling via TrkB and TrkA receptor pathways, downstream of BDNF/NGF release.",
      "Antioxidant and anti-inflammatory effects in cerebral ischaemia models: reduces lipid peroxidation markers and modulates microglial activation following experimental stroke.",
      "Influence on serotonergic and dopaminergic neurotransmission, hypothesised to underlie observed effects on attention, motivation, and mood in early-phase clinical research.",
    ],
    benefits: [
      "Enhanced memory consolidation and recall in learning tasks (rodent models, preliminary human studies in stroke recovery cohorts).",
      "Improved attention span and reduced mental fatigue under sustained-load conditions.",
      "Neuroprotection against ischaemic and oxidative injury in cerebrovascular research.",
      "Reduction of anxiety-like behaviour in animal stress models, attributed to enkephalinase inhibition.",
      "Faster post-stroke recovery of speech and motor function in Russian-language clinical trials (rehabilitation context).",
      "Increased BDNF expression — a biomarker linked to neuroplasticity, mood resilience, and protection against cognitive decline.",
    ],
    dosing: [
      {
        route: "Intranasal (research)",
        dosage: "Typically 250–1000 μg per session in published research",
        frequency: "1–2 times daily in study protocols",
        duration: "Study durations range from 10 days to 12 weeks",
        notes: "Standard research protocol divides total daily dose across both nostrils.",
      },
    ],
    routes: [
      "Intranasal — primary route in all human research; bypasses first-pass metabolism and reaches CNS via the olfactory and trigeminal pathways.",
      "Subcutaneous and intravenous — used in some animal research but rare in human studies due to rapid plasma proteolysis.",
      "Oral administration is not viable: the peptide is rapidly degraded by gastrointestinal proteases.",
    ],
    safetyCommon: [
      "Mild nasal irritation following intranasal application",
      "Transient mild headache reported in a minority of subjects",
      "Mild transient changes in alertness or arousal in early-dose research",
    ],
    safetyRare: [
      "Hypersensitivity reactions to peptide components (theoretical)",
      "Long-term human safety data outside the Russian Federation is limited",
      "Potential for interaction with monoamine-modulating drugs has not been comprehensively studied",
    ],
    contraindications: [
      "Not authorised for human use in the UK/EU/US",
      "Pregnancy and lactation — no controlled human data",
      "Acute psychiatric crises — research subjects are typically excluded from trials in these states",
    ],
    studies: [
      {
        title: "Semax modulates BDNF/NGF expression in rat hippocampus",
        summary:
          "Single intranasal dose produced a marked rise in BDNF and NGF mRNA in the hippocampus within 3 hours, persisting for at least 24 hours.",
        source: "Russian Academy of Sciences group, peer-reviewed",
        year: 2008,
      },
      {
        title: "Semax in ischaemic stroke rehabilitation",
        summary:
          "Multicentre Russian trial reporting accelerated recovery of neurological function in patients receiving adjunct Semax versus standard care.",
        source: "Russian neurology literature",
        year: 2011,
      },
      {
        title: "Effects of Semax on attention and learning under load",
        summary:
          "Healthy adult subjects showed improved sustained-attention metrics following a 10-day intranasal protocol versus placebo.",
        source: "Peer-reviewed pharmacology journal",
        year: 2015,
      },
    ],
    faqs: [
      {
        q: "Is Semax legal in the United Kingdom?",
        a: "Semax is not a licensed medicine in the UK. It is sold and supplied for in vitro and preclinical research purposes only. It is not a controlled drug, but importing or marketing it for human use is not permitted.",
      },
      {
        q: "How does Semax differ from N-Acetyl Semax?",
        a: "N-Acetyl Semax Amidate is a chemically protected analogue with the N-terminus acetylated and the C-terminus amidated, dramatically increasing resistance to peptidase degradation and extending the half-life. The pharmacology is broadly similar but the analogue is longer-acting.",
      },
      {
        q: "Has Semax been studied in humans?",
        a: "Yes — primarily in the Russian Federation, where it has been used clinically since the mid-1990s. Studies cover stroke rehabilitation, cognitive performance in healthy adults, and various neurological indications. Western peer-reviewed human data remains comparatively limited.",
      },
      {
        q: "Why is intranasal delivery preferred in research?",
        a: "Small peptides like Semax are rapidly cleaved by gastrointestinal and plasma proteases. The intranasal route bypasses first-pass metabolism and exploits direct nose-to-brain transport via the olfactory and trigeminal pathways.",
      },
      {
        q: "What is the role of BDNF in Semax's mechanism?",
        a: "BDNF — brain-derived neurotrophic factor — is the master regulator of activity-dependent synaptic plasticity. Semax appears to act primarily by inducing rapid BDNF and NGF expression in the hippocampus and cortex, providing a plausible molecular basis for its observed pro-cognitive effects.",
      },
      {
        q: "Is Semax safe?",
        a: "Russian clinical experience suggests a favourable acute safety profile at studied doses, but long-term safety data outside that jurisdiction is sparse. Outside controlled clinical settings the peptide remains a research chemical with incomplete characterisation of long-term effects.",
      },
    ],
    related: ["selank", "n-acetyl-semax", "dihexa"],
    keywords: [
      "Semax",
      "Semax cognitive research UK",
      "Semax BDNF",
      "Semax peptide UK",
      "ACTH 4-10 analogue",
      "nootropic peptide UK",
    ],
    tags: ["bdnf-inducer", "ngf-inducer", "russian-origin", "intranasal"],
    lastReviewed: "2026-05-16",
    pubchemCid: 9811102,
  },

  {
    slug: "selank",
    name: "Selank",
    aliases: ["TP-7", "Thr-Lys-Pro-Arg-Pro-Gly-Pro"],
    category: "Anxiolytic / Mood",
    tagline:
      "A synthetic heptapeptide analogue of tuftsin developed for anxiolytic and immunomodulatory research, with measurable effects on attention and mood.",
    molecularFormula: "C₃₃H₅₇N₁₁O₉",
    molecularWeight: "751.87 g/mol",
    halfLife: "Intranasal: minutes; pharmacodynamic effects 24h+",
    sequence: "Thr-Lys-Pro-Arg-Pro-Gly-Pro",
    ukStatus:
      "Not licensed as a medicine in the United Kingdom. Available strictly as a research chemical for laboratory use.",
    euStatus:
      "Not approved by the European Medicines Agency. Clinically approved in the Russian Federation.",
    overview: [
      "Selank is a synthetic seven-amino-acid peptide built around the tetrapeptide tuftsin (Thr-Lys-Pro-Arg), an endogenous immunomodulator. Tuftsin itself has a vanishingly short half-life; Selank extends the molecule with a proline-glycine-proline tail that confers stability and produces a peptide with measurable anxiolytic and pro-cognitive activity in research models.",
      "Selank was developed at the Institute of Molecular Genetics of the Russian Academy of Sciences as part of the same research programme that produced Semax. The two are commonly studied as complementary tools: Selank is broadly positioned as anxiolytic, while Semax leans cognitive/attentional.",
      "In animal anxiety paradigms, Selank produces effects comparable to classical benzodiazepines without the sedation, motor impairment, dependence liability, or amnestic side effects associated with that drug class — a profile attributed to its action on enkephalin metabolism rather than direct GABA-A binding.",
    ],
    history: [
      "Synthesised in the 1990s at the Russian Academy of Sciences as an extended, plasma-stable analogue of tuftsin.",
      "Granted clinical approval in the Russian Federation as an anxiolytic; used in human research for generalised anxiety, adjustment disorder, and stress-related symptomatology.",
      "Studied internationally as a tool peptide for probing the relationship between enkephalin tone, anxiety, and attention.",
      "An N-acetylated analogue (N-Acetyl Selank Amidate) was later developed for extended duration of action.",
    ],
    mechanism: [
      "Inhibition of enkephalinase enzymes, prolonging the half-life of endogenous enkephalins and producing anxiolytic effects without direct opioid receptor agonism.",
      "Modulation of GABAergic tone indirectly via the enkephalin system; no direct GABA-A binding has been demonstrated.",
      "Upregulation of BDNF expression in the hippocampus, similar to Semax but generally lower magnitude.",
      "Influence on monoamine turnover — increased serotonergic and dopaminergic metabolite levels in regions associated with mood and motivation.",
      "Immunomodulatory effects via the tuftsin pharmacophore — measurable changes in cytokine balance, particularly interleukin profiles, in stressed animals.",
    ],
    benefits: [
      "Reduction of anxiety-like behaviour in animal models (open-field, elevated plus-maze paradigms).",
      "Improved attention and cognitive performance under stress in early human studies.",
      "Anti-asthenic effect — reduction of mental fatigue and improvement in subjective wellbeing in published trials.",
      "No sedative, amnestic, or motor-impairing effects at studied doses, in contrast to benzodiazepines.",
      "Immunomodulation — observed normalisation of cytokine profiles in subjects with stress-related immune dysregulation.",
      "Synergistic profile with cognitive peptides such as Semax in stack research.",
    ],
    dosing: [
      {
        route: "Intranasal (research)",
        dosage: "Typically 75–300 μg per session in published protocols",
        frequency: "2–3 times daily in study protocols",
        duration: "Studies generally run 10–21 days",
        notes: "Cyclical use is more common than continuous administration in published research.",
      },
    ],
    routes: [
      "Intranasal — the established research route, with the same nose-to-brain rationale as Semax.",
      "Parenteral routes used in animal research; oral administration is not viable due to proteolytic degradation.",
    ],
    safetyCommon: [
      "Mild nasal irritation",
      "Occasional transient headache or lightheadedness",
      "Subtle changes in arousal level (typically reduced anxiety, not sedation)",
    ],
    safetyRare: [
      "Hypersensitivity reactions",
      "Long-term Western safety data is limited",
      "Possible interaction with opioid-modulating medications (theoretical, via enkephalin pathway)",
    ],
    contraindications: [
      "Not authorised for human use outside Russia",
      "Pregnancy and lactation — insufficient data",
      "Concomitant opioid antagonist therapy — theoretical interference with mechanism",
    ],
    studies: [
      {
        title: "Selank in generalised anxiety disorder — controlled trial",
        summary:
          "Russian clinical trial reporting significant reduction in anxiety scores comparable to a benzodiazepine comparator, without sedation or cognitive impairment.",
        source: "Russian psychopharmacology literature",
        year: 2008,
      },
      {
        title: "Selank effects on cytokine profile in stressed subjects",
        summary:
          "Normalisation of pro-/anti-inflammatory cytokine balance following a course of intranasal Selank.",
        source: "Peer-reviewed immunology journal",
        year: 2013,
      },
      {
        title: "Enkephalinase inhibition by Selank — mechanistic study",
        summary:
          "Demonstration of dose-dependent inhibition of plasma and brain enkephalin-degrading activity, providing a molecular basis for the observed anxiolytic effect.",
        source: "Peer-reviewed biochemistry literature",
        year: 2010,
      },
    ],
    faqs: [
      {
        q: "How is Selank different from benzodiazepines?",
        a: "Selank achieves anxiolysis indirectly — by raising endogenous enkephalin tone — rather than by directly binding GABA-A receptors. Consequently it does not appear to produce sedation, motor impairment, dependence, or rebound anxiety in the studies published to date. It is not, however, a replacement for licensed treatment.",
      },
      {
        q: "Can Selank be combined with Semax?",
        a: "Selank and Semax are routinely studied in combination in research settings. They have overlapping but distinct mechanisms — Semax skews cognitive/attentional, Selank skews anxiolytic — and combined administration is a common stack in published Russian literature.",
      },
      {
        q: "Is Selank addictive?",
        a: "There is no evidence of dependence liability in the published research, and the enkephalin-modulation mechanism is upstream of the direct receptor-binding pathways that drive opioid addiction. Comprehensive long-term human data outside Russia is limited.",
      },
      {
        q: "How quickly does Selank work?",
        a: "Acute anxiolytic effects have been reported within 30–60 minutes of intranasal dosing in research subjects, with cumulative effects across a 10–14 day course.",
      },
      {
        q: "Is Selank a controlled substance in the UK?",
        a: "Selank is not a controlled drug in the United Kingdom and is not on the Home Office controlled-drug schedules. It is, however, not a licensed medicine; supply for human consumption is not permitted under UK medicines legislation.",
      },
    ],
    related: ["semax", "n-acetyl-selank", "dsip"],
    keywords: [
      "Selank",
      "Selank anxiety research",
      "Selank peptide UK",
      "tuftsin analogue",
      "Selank vs benzodiazepines",
      "Selank Semax stack",
    ],
    tags: ["enkephalinase-inhibitor", "russian-origin", "intranasal", "bdnf-inducer"],
    lastReviewed: "2026-05-16",
    pubchemCid: 11765600,
  },

  {
    slug: "dihexa",
    name: "Dihexa",
    aliases: ["N-Hexanoic-Tyr-Ile-(6)-aminohexanoic amide", "PNB-0408"],
    category: "Neurogenesis",
    tagline:
      "An orally active hexapeptide derivative of angiotensin IV, characterised in academic research as among the most potent known pro-cognitive compounds in animal models.",
    molecularFormula: "C₂₆H₄₃N₅O₅",
    molecularWeight: "521.66 g/mol",
    halfLife: "Oral bioavailability with extended pharmacodynamic effects",
    ukStatus:
      "Not a licensed medicine. Research chemical for laboratory and preclinical use only.",
    euStatus:
      "Not approved by the EMA. No clinical authorisation in any EU jurisdiction.",
    overview: [
      "Dihexa is a small hexapeptide derivative engineered from the C-terminal fragment of angiotensin IV, designed at Washington State University to be orally bioavailable, blood-brain-barrier penetrant, and metabolically stable. The molecule is positioned in academic research as a tool for studying hepatocyte growth factor (HGF) / c-Met signalling in the central nervous system.",
      "The compound's defining property in published research is its capacity to promote new synaptic connections — synaptogenesis — at sub-nanomolar concentrations in hippocampal slice preparations. Researchers have reported potency several orders of magnitude greater than BDNF in head-to-head spinogenesis assays.",
      "Dihexa has been profiled in animal models of cognitive impairment, including scopolamine-induced amnesia and aged-rat learning paradigms, where it has been reported to restore performance to that of young, untreated control animals.",
    ],
    history: [
      "Developed by Joseph Harding's group at Washington State University in the 2010s as part of a broader programme exploring angiotensin IV's CNS effects.",
      "First major publications describing potent synaptogenic activity appeared between 2012 and 2015.",
      "The molecule remains a research compound: no clinical trials are publicly registered, and it is not in any regulatory approval pipeline known to date.",
      "Has acquired interest in academic and laboratory research circles for its reported oral bioavailability — unusual for a peptide of this size.",
    ],
    mechanism: [
      "Activates the hepatocyte growth factor (HGF) / c-Met signalling pathway in central neurons. HGF/c-Met is a well-characterised driver of dendritic spine formation and synaptic remodelling.",
      "Promotes dendritic spine density increases in hippocampal pyramidal neurons in published in vitro work, at picomolar to nanomolar concentrations.",
      "Stabilises HGF dimers, prolonging the active signalling species and producing sustained pro-synaptogenic stimulus.",
      "Downstream effects include activation of the PI3K-Akt and MAPK pathways, both implicated in long-term potentiation and memory consolidation.",
      "Has been reported to facilitate long-term potentiation (LTP) in hippocampal slice electrophysiology — the cellular correlate of learning.",
    ],
    benefits: [
      "Restoration of cognitive performance in aged-rat learning paradigms in published work.",
      "Reversal of scopolamine-induced amnesia in rodent models.",
      "Promotion of dendritic spine density in hippocampal neurons.",
      "Reported oral bioavailability — distinctive among small peptides.",
      "Facilitation of long-term potentiation in hippocampal preparations.",
      "Potential research utility in neurodegenerative disease modelling.",
    ],
    dosing: [
      {
        route: "Oral (research)",
        dosage:
          "Animal study doses scale broadly across the literature; no validated human protocol exists",
        frequency: "Once daily in most rodent protocols",
        duration: "Study durations vary; chronic dosing has been examined in animal work only",
        notes: "Human pharmacokinetic data is not available in published peer-reviewed sources.",
      },
    ],
    routes: [
      "Oral — the molecule's defining feature is its capacity to survive enteric proteolysis and reach the CNS after oral administration in animal research.",
      "Sublingual and transdermal routes have been explored in laboratory work; results in the literature are limited.",
    ],
    safetyCommon: [
      "Limited safety data — human pharmacovigilance data is not available",
      "Theoretical considerations relate to systemic activation of c-Met signalling",
    ],
    safetyRare: [
      "c-Met activation is implicated in oncogenic signalling pathways — long-term mitogenic implications have not been characterised in published human research and constitute a meaningful theoretical concern.",
      "No long-term toxicology data in any species is publicly available",
    ],
    contraindications: [
      "Not authorised for human use in any jurisdiction",
      "Theoretical contraindication in any subject with active or historic malignancy, given c-Met pathway involvement",
      "No data in pregnancy, lactation, or developmental contexts",
    ],
    studies: [
      {
        title: "Dihexa as a synaptogenic agent — hippocampal slice study",
        summary:
          "Application of Dihexa at sub-nanomolar concentrations produced robust increases in dendritic spine density in hippocampal pyramidal neurons.",
        source: "Washington State University group, peer-reviewed",
        year: 2012,
      },
      {
        title: "Reversal of scopolamine amnesia in rats",
        summary:
          "Oral Dihexa restored learning performance in a scopolamine-amnesia model to control levels.",
        source: "Peer-reviewed pharmacology journal",
        year: 2014,
      },
      {
        title: "HGF/c-Met activation as the molecular basis of Dihexa's effects",
        summary:
          "Mechanistic dissection demonstrating that Dihexa's pro-cognitive effects are abolished by c-Met receptor antagonism.",
        source: "Peer-reviewed neuroscience literature",
        year: 2015,
      },
    ],
    faqs: [
      {
        q: "How potent is Dihexa compared with BDNF?",
        a: "In published spinogenesis assays, Dihexa has been reported to produce equivalent or greater effects on dendritic spine formation at concentrations several orders of magnitude below those required for BDNF. This is a research-system result and should not be assumed to translate directly to whole-organism cognitive outcomes in humans.",
      },
      {
        q: "Is Dihexa safe?",
        a: "There is no human safety data in the peer-reviewed literature. The compound activates the HGF/c-Met pathway, which is involved in physiological repair processes but also in tumour growth in oncological contexts. Long-term safety in humans is uncharacterised and constitutes a meaningful research consideration.",
      },
      {
        q: "Is Dihexa orally active?",
        a: "Animal studies report oral bioavailability sufficient to produce central effects — unusual for a peptide of this molecular weight. Human oral pharmacokinetics have not been validated in published peer-reviewed work.",
      },
      {
        q: "Has Dihexa been in human clinical trials?",
        a: "As of the most recent searches, no human clinical trials of Dihexa are registered with major trial registries. All published data is preclinical.",
      },
      {
        q: "Why is c-Met activation a concern?",
        a: "The c-Met receptor and its ligand HGF are involved in physiological tissue repair but also in tumour growth and metastasis when dysregulated. Chronic systemic activation by an exogenous agonist is a recognised theoretical concern that has not yet been answered by long-term safety studies.",
      },
    ],
    related: ["cerebrolysin", "semax", "pinealon"],
    keywords: [
      "Dihexa",
      "Dihexa peptide UK",
      "Dihexa research",
      "angiotensin IV analogue",
      "synaptogenesis peptide",
      "HGF c-Met agonist",
    ],
    tags: ["synaptogenic", "c-met-agonist", "oral-active"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "pinealon",
    name: "Pinealon",
    aliases: ["Glu-Asp-Arg"],
    category: "Neuroprotection",
    tagline:
      "A short tripeptide bioregulator studied in Russian gerontology research for neuroprotective and anti-ageing effects on the central nervous system.",
    molecularFormula: "C₁₅H₂₆N₆O₈",
    molecularWeight: "418.4 g/mol",
    halfLife: "Short plasma half-life; epigenetic effects extend beyond exposure",
    sequence: "Glu-Asp-Arg",
    ukStatus: "Not a licensed medicine in the United Kingdom. Research chemical only.",
    euStatus: "Not approved by the EMA. Used in research and traditional clinical practice in the Russian Federation.",
    overview: [
      "Pinealon is a short synthetic tripeptide developed within Vladimir Khavinson's bioregulator peptide programme at the St. Petersburg Institute of Bioregulation and Gerontology. The Khavinson school's central hypothesis is that short peptides of two to four amino acids can act as direct gene-expression regulators, binding to specific DNA motifs and modulating transcription of age-related target genes.",
      "Pinealon is positioned in this framework as a neuroprotective and anti-ageing peptide, derived conceptually from peptide extracts of the pineal gland and synthesised in a defined three-amino-acid sequence.",
      "Published research focuses on neuroprotection against oxidative stress, hypoxia, and excitotoxic damage in cell-culture and animal models, with measurable effects on antioxidant enzyme expression and stress-response gene activation.",
    ],
    history: [
      "Developed in the 1990s–2000s at the St. Petersburg Institute of Bioregulation and Gerontology under the direction of Vladimir Khavinson.",
      "Part of a family of related short bioregulator peptides including Epitalon (pineal), Vesugen (vascular), and Thymalin (immune).",
      "Used in Russian clinical and research practice; not approved as a medicine in Western jurisdictions.",
      "International peer-reviewed publications from the Khavinson group describe both phenotypic effects and proposed epigenetic mechanisms.",
    ],
    mechanism: [
      "Proposed direct binding to specific DNA promoter regions, modulating transcription of antioxidant and stress-response genes (the central Khavinson-school mechanism).",
      "Upregulation of endogenous antioxidant enzyme expression — superoxide dismutase, catalase — in neuronal cell culture under oxidative challenge.",
      "Reduction of reactive oxygen species accumulation in models of hypoxia and excitotoxicity.",
      "Modulation of telomerase activity in some in vitro models, consistent with the broader Khavinson 'gerontoprotective' framework.",
      "Inhibition of glutamate-induced excitotoxicity in neuronal preparations.",
    ],
    benefits: [
      "Protection of cultured neurons against oxidative stress and glutamate excitotoxicity.",
      "Reduction of behavioural deficits in animal models of cerebral hypoxia.",
      "Upregulation of endogenous antioxidant defences in cell-culture work.",
      "Potential gerontoprotective effects in the Khavinson-school framework.",
      "Used as a research tool in models of neurodegenerative ageing.",
    ],
    dosing: [
      {
        route: "Intranasal / parenteral (research)",
        dosage: "Microgram-range doses in animal protocols",
        frequency: "Cyclical (typically 10–20 day courses) in research practice",
        duration: "Short courses repeated periodically",
        notes: "No standardised human dosing in peer-reviewed Western literature.",
      },
    ],
    routes: [
      "Intranasal — primary route in research and Russian clinical practice.",
      "Subcutaneous in some animal studies.",
      "Oral — generally not used due to peptide degradation.",
    ],
    safetyCommon: [
      "Minimal published acute toxicity in animal studies",
      "Mild local irritation possible with intranasal administration",
    ],
    safetyRare: [
      "Long-term safety data outside the Khavinson group is sparse",
      "Mechanism (direct DNA binding by short peptides) remains debated in Western pharmacology",
    ],
    contraindications: [
      "Not licensed for human use in the UK/EU/US",
      "Pregnancy/lactation — no data",
    ],
    studies: [
      {
        title: "Pinealon and oxidative neuroprotection",
        summary:
          "Neuronal cell-culture work showing reduced oxidative damage and preserved cell viability under hydrogen peroxide challenge.",
        source: "Khavinson group, peer-reviewed",
        year: 2010,
      },
      {
        title: "Pinealon in models of cerebral hypoxia",
        summary:
          "Improved behavioural outcomes and reduced histological damage in rodent models of acute hypoxia.",
        source: "Russian gerontology literature",
        year: 2012,
      },
    ],
    faqs: [
      {
        q: "How can a three-amino-acid peptide regulate gene expression?",
        a: "The Khavinson group has proposed that very short peptides can pass through cell membranes and the nuclear envelope and bind directly to DNA major-groove sequences, modulating transcription. This mechanism is intriguing but remains under continuing investigation; not all of the proposed binding interactions have been replicated outside the originating group.",
      },
      {
        q: "Is Pinealon related to Epitalon?",
        a: "Both are part of the same Khavinson bioregulator family. Epitalon (Ala-Glu-Asp-Gly) is positioned as a tetrapeptide with pineal/telomerase effects; Pinealon (Glu-Asp-Arg) is positioned as a neuroprotective short peptide. They are complementary research tools in their framework.",
      },
      {
        q: "Is there Western clinical research on Pinealon?",
        a: "Western peer-reviewed Pinealon research is limited. Most published work originates from the Khavinson group and collaborators. Independent replication of the most distinctive claims remains an open research question.",
      },
    ],
    related: ["cerebrolysin", "semax", "dsip"],
    keywords: [
      "Pinealon",
      "Pinealon peptide research",
      "Khavinson peptides",
      "short peptide bioregulator",
      "neuroprotective tripeptide",
    ],
    tags: ["neuroprotective", "khavinson-bioregulator", "russian-origin", "intranasal"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "cerebrolysin",
    name: "Cerebrolysin",
    aliases: ["Porcine brain peptide preparation", "FPF-1070"],
    category: "Neuroprotection",
    tagline:
      "A complex mixture of low-molecular-weight peptides and free amino acids derived from porcine brain tissue, studied extensively in cognitive decline and post-stroke recovery research.",
    halfLife: "Multiple components with varied pharmacokinetics",
    ukStatus:
      "Not licensed as a medicine in the UK. Used clinically in many other jurisdictions including parts of Asia and Eastern Europe.",
    euStatus:
      "Approved as a medicinal product in several EU and Eastern European countries; not approved in others. No centralised EMA authorisation.",
    overview: [
      "Cerebrolysin is not a single peptide but a standardised preparation of low-molecular-weight neuropeptides and free amino acids derived from enzymatic digestion of porcine brain tissue. It has been used as a prescription parenteral neurotrophic preparation for several decades in many jurisdictions for indications including stroke recovery, dementia, and traumatic brain injury.",
      "The preparation contains active fragments that mimic the action of endogenous neurotrophic factors such as BDNF, NGF, and GDNF, producing pleiotropic neuroprotective and neurotrophic effects in published research.",
      "Because Cerebrolysin is a complex biological preparation rather than a single chemical entity, much of the published research is clinical and outcome-focused rather than mechanistically reductive — though substantial mechanistic work has been done in cell-culture and animal models.",
    ],
    history: [
      "Developed in the 1950s and has been in continuous clinical use in various jurisdictions since the late 20th century.",
      "Manufactured by enzymatic digestion of purified porcine brain protein, yielding a standardised peptide-amino-acid mixture.",
      "Subject to a substantial body of clinical trial work in vascular dementia, Alzheimer's disease, stroke, and traumatic brain injury — primarily from European and Asian research centres.",
      "Not approved by the UK MHRA or the US FDA.",
    ],
    mechanism: [
      "Mimics the action of endogenous neurotrophic factors (BDNF, NGF, GDNF) through bioactive low-molecular-weight peptide fragments.",
      "Promotes neuronal survival under ischaemic and oxidative stress in cell-culture and animal models.",
      "Modulates amyloid-beta processing in research models of Alzheimer-type pathology.",
      "Anti-apoptotic effects via stabilisation of the mitochondrial apoptotic pathway.",
      "Modulation of microglial activation and reduction of neuroinflammatory mediators in ischaemic injury models.",
    ],
    benefits: [
      "Improvement in cognitive scores in published vascular-dementia trials.",
      "Faster recovery of neurological function after ischaemic stroke in randomised research.",
      "Reduction in apoptotic neuronal loss in head-injury research models.",
      "Long history of clinical use in many jurisdictions, providing extensive real-world data.",
      "Pleiotropic mechanism — multiple bioactive components rather than a single target.",
    ],
    dosing: [
      {
        route: "Intravenous infusion (clinical use in approving jurisdictions)",
        dosage: "Trial doses typically 10–50 mL of standardised preparation",
        frequency: "Daily during a treatment cycle",
        duration: "Typical clinical cycles run 10–20 days, sometimes repeated",
        notes: "Not approved or prescribed in the UK; this information is provided for educational reference only.",
      },
    ],
    routes: [
      "Intravenous infusion in clinical use.",
      "Intramuscular in some protocols.",
      "Oral administration is not used: the preparation requires parenteral delivery to be effective.",
    ],
    safetyCommon: [
      "Transient sensations of warmth or flushing during infusion (reported in clinical use)",
      "Mild injection-site reactions in IM administration",
      "Headache or dizziness in a minority of subjects",
    ],
    safetyRare: [
      "Hypersensitivity reactions to the porcine-derived preparation",
      "Theoretical infectious-disease considerations associated with animal-derived biologics (managed in licensed manufacture by extensive purification and viral inactivation)",
    ],
    contraindications: [
      "Not licensed in the United Kingdom",
      "Status epilepticus (per labelling in approving jurisdictions)",
      "Severe renal impairment (per labelling)",
      "Known hypersensitivity to porcine-derived proteins",
    ],
    studies: [
      {
        title: "Cerebrolysin in vascular dementia — meta-analysis",
        summary:
          "Pooled analysis of randomised trials reporting cognitive improvement versus placebo in vascular dementia cohorts.",
        source: "Cochrane-style systematic review",
        year: 2013,
      },
      {
        title: "Cerebrolysin in acute ischaemic stroke",
        summary:
          "Multicentre randomised study reporting accelerated neurological recovery in subjects receiving Cerebrolysin adjunct therapy.",
        source: "European neurology literature",
        year: 2012,
      },
      {
        title: "Mechanistic dissection of Cerebrolysin's anti-amyloid effects",
        summary:
          "Animal-model work reporting reduced amyloid-beta accumulation and improved spatial-learning performance.",
        source: "Peer-reviewed neuroscience literature",
        year: 2010,
      },
    ],
    faqs: [
      {
        q: "Is Cerebrolysin a peptide?",
        a: "Cerebrolysin is a peptide-amino-acid preparation, not a single peptide. It contains a standardised mixture of bioactive low-molecular-weight components derived from porcine brain. This complexity is both a strength (pleiotropic effects) and a weakness (more difficult to characterise mechanistically than a single molecule).",
      },
      {
        q: "Is Cerebrolysin available in the UK?",
        a: "Cerebrolysin is not licensed as a medicine in the United Kingdom. It is licensed and prescribed in a number of other jurisdictions, particularly across parts of Asia and Eastern Europe. Importing it for personal use is not permitted under UK medicines legislation.",
      },
      {
        q: "How does Cerebrolysin compare with single-peptide nootropics like Semax?",
        a: "Cerebrolysin is mechanistically broader — multiple bioactive components producing multiple pathway effects — whereas single peptides like Semax allow more reductive mechanistic characterisation. In clinical jurisdictions, Cerebrolysin is used in indications that single research peptides are not (acute stroke rehabilitation, dementia).",
      },
      {
        q: "Why is Cerebrolysin given parenterally?",
        a: "The bioactive peptide fragments are degraded by gastrointestinal proteases. Effective delivery requires bypassing the gut: intravenous or intramuscular administration is therefore standard in approving jurisdictions.",
      },
    ],
    related: ["semax", "dihexa", "pinealon"],
    keywords: [
      "Cerebrolysin",
      "Cerebrolysin UK",
      "porcine brain peptide preparation",
      "Cerebrolysin stroke recovery",
      "Cerebrolysin dementia research",
    ],
    tags: ["neuroprotective", "bdnf-inducer", "ngf-inducer", "parenteral"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "dsip",
    name: "DSIP",
    aliases: ["Delta Sleep-Inducing Peptide", "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu"],
    category: "Sleep & Recovery",
    tagline:
      "A nonapeptide originally isolated from the cerebral venous blood of sleeping rabbits, studied for sleep modulation, stress resilience, and indirect cognitive effects.",
    molecularFormula: "C₃₅H₄₈N₁₀O₁₅",
    molecularWeight: "848.81 g/mol",
    halfLife: "Short plasma half-life (under 10 min); functional effects persist longer",
    sequence: "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu",
    ukStatus: "Not a licensed medicine in the United Kingdom. Research chemical only.",
    euStatus: "Not approved by the EMA.",
    overview: [
      "Delta Sleep-Inducing Peptide (DSIP) is a small endogenous nonapeptide originally isolated in 1977 from the cerebral venous blood of rabbits during electrically induced delta-wave sleep. It is one of the earliest 'sleep peptides' to enter the research literature and remains a tool compound for studying the relationship between sleep architecture, stress, and cognition.",
      "Although its name implies a primary role in inducing slow-wave (delta) sleep, the published mechanistic picture is more nuanced: DSIP appears to act more broadly as a stress-resilience and circadian-modulating peptide, with sleep effects that are real but often more subtle and context-dependent than the name suggests.",
      "In research contexts, DSIP is studied alongside cognitive peptides because sleep quality — particularly slow-wave and REM consolidation — is causally upstream of long-term memory formation. Improved sleep architecture is one plausible indirect mechanism for cognitive effects.",
    ],
    history: [
      "Isolated by Schoenenberger and Monnier in 1977 from cerebral venous blood of sleeping rabbits.",
      "Synthesised and characterised in the following decades by multiple European research groups.",
      "Studied in human research for sleep onset, sleep architecture, opioid withdrawal, and stress resilience.",
      "Remains a research peptide; no major clinical authorisations.",
    ],
    mechanism: [
      "Modulation of hypothalamic-pituitary-adrenal (HPA) axis activity, reducing stress-induced corticosterone elevations in research models.",
      "Influence on slow-wave sleep architecture in some — though not all — research conditions.",
      "Antioxidant effects in CNS tissue under stress conditions.",
      "Modulation of opioid peptide release, contributing to its studied role in opioid-withdrawal research.",
      "Possible direct effects on thalamocortical oscillatory activity — the system that generates delta waves.",
    ],
    benefits: [
      "Reduced stress-axis activation in animal stress paradigms.",
      "Improvements in subjective sleep quality in early human research.",
      "Studied utility in opioid withdrawal protocols (reduction of withdrawal-symptom severity).",
      "Indirect cognitive effects via improved sleep consolidation.",
      "Generally well-tolerated profile in published research.",
    ],
    dosing: [
      {
        route: "Subcutaneous / intranasal (research)",
        dosage: "Microgram-range in research protocols",
        frequency: "Typically once daily, often pre-sleep",
        duration: "Short courses",
        notes: "No standardised human protocol exists in Western clinical practice.",
      },
    ],
    routes: [
      "Subcutaneous in most research.",
      "Intranasal in some protocols.",
      "Oral not viable due to peptide degradation.",
    ],
    safetyCommon: [
      "Generally well-tolerated in research at studied doses",
      "Occasional mild headache or sleep-onset alteration",
    ],
    safetyRare: [
      "Long-term safety data is limited",
      "Possible interaction with HPA-axis-modulating medications",
    ],
    contraindications: [
      "Not approved for human use",
      "Pregnancy/lactation — no data",
    ],
    studies: [
      {
        title: "DSIP and slow-wave sleep architecture",
        summary:
          "Polysomnographic study reporting modest increases in slow-wave sleep duration in subjects receiving DSIP versus placebo.",
        source: "European sleep research literature",
        year: 1990,
      },
      {
        title: "DSIP in opioid withdrawal",
        summary:
          "Reduction in withdrawal-symptom severity scores in subjects receiving adjunct DSIP during opioid detoxification.",
        source: "Russian addiction medicine literature",
        year: 1995,
      },
      {
        title: "DSIP and HPA-axis stress response",
        summary:
          "Attenuation of stress-induced corticosterone elevations in rodent stress models.",
        source: "Peer-reviewed endocrinology literature",
        year: 2005,
      },
    ],
    faqs: [
      {
        q: "Does DSIP put you to sleep?",
        a: "DSIP is not a sedative-hypnotic in the conventional sense. Its name reflects its original isolation from sleeping animals, but published human work shows modulatory rather than acutely sedating effects. It is better understood as a stress and sleep-architecture modulator.",
      },
      {
        q: "Why is DSIP relevant to a nootropic site?",
        a: "Sleep — especially deep slow-wave and REM sleep — is causally upstream of memory consolidation. Peptides that improve sleep architecture have plausible indirect cognitive benefits. DSIP is the most-studied research tool in this category.",
      },
      {
        q: "How long do DSIP effects last?",
        a: "Plasma half-life is short (typically under 10 minutes), but pharmacodynamic effects on sleep architecture, HPA activity, and stress responses outlast the molecule itself by hours — consistent with downstream modulation of slower-acting systems.",
      },
    ],
    related: ["selank", "semax", "pinealon"],
    keywords: [
      "DSIP",
      "Delta sleep inducing peptide",
      "DSIP research",
      "sleep peptide UK",
      "DSIP cognitive",
      "DSIP stress resilience",
    ],
    tags: ["sleep-architecture", "neuroprotective"],
    lastReviewed: "2026-05-16",
    pubchemCid: 68816,
  },

  {
    slug: "noopept",
    name: "Noopept (Peptide Note)",
    aliases: ["N-phenylacetyl-L-prolylglycine ethyl ester", "GVS-111"],
    category: "Cognitive Enhancement",
    tagline:
      "A small proline-containing dipeptide derivative — technically a peptidomimetic — developed in Russia as an orally active cognitive enhancer with structural lineage to piracetam.",
    molecularFormula: "C₁₇H₂₂N₂O₄",
    molecularWeight: "318.37 g/mol",
    halfLife: "Oral bioavailability; parent compound rapidly metabolised to active cycloprolylglycine",
    ukStatus: "Not licensed as a medicine in the UK. Research chemical only.",
    euStatus: "Not approved by the EMA. Used clinically in the Russian Federation.",
    overview: [
      "Noopept is, strictly speaking, a small peptidomimetic rather than a classical research peptide — a proline-containing dipeptide ester developed in Russia as an orally active analogue of the racetam-class nootropics. It is included on this site because its mechanism of action and discovery history are firmly within the peptide research tradition, and because peer-reviewed literature continues to position it alongside Semax and Selank as part of the Russian cognitive-peptide family.",
      "After oral administration Noopept is rapidly metabolised to cycloprolylglycine, an endogenous cyclic dipeptide that is itself a putative cognitive enhancer. The parent compound and metabolite together produce the pharmacological effects characterised in research.",
      "Reported potency is approximately three orders of magnitude greater than piracetam on equivalent endpoints in animal models, with a broader profile that includes anxiolytic and neuroprotective effects alongside the core pro-cognitive activity.",
    ],
    history: [
      "Developed in Russia in the 1990s by Skoldinov and colleagues at the V. V. Zakusov Institute of Pharmacology, as part of a programme to find more potent and orally active successors to piracetam.",
      "Granted clinical approval in the Russian Federation in 2011 for cognitive indications.",
      "Internationally available only as a research chemical.",
      "Subject to a continuing peer-reviewed literature on mechanism, pharmacokinetics, and behavioural pharmacology.",
    ],
    mechanism: [
      "Rapid metabolism to cycloprolylglycine, an endogenous cyclic dipeptide with intrinsic neuropeptide-like activity.",
      "Modulation of AMPA and NMDA glutamate receptor function in hippocampal neurons.",
      "Increased BDNF and NGF expression in the hippocampus after sustained dosing — paralleling the Semax/Selank mechanism.",
      "Antioxidant effects, including upregulation of endogenous antioxidant enzyme activity.",
      "Anxiolytic effects in animal stress models, attributed to modulation of corticosterone responses and glutamatergic tone.",
    ],
    benefits: [
      "Improved memory consolidation in animal learning paradigms.",
      "Cognitive improvement in clinical trials in mild cognitive impairment populations (Russian literature).",
      "Anxiolytic effects in animal stress models.",
      "Neuroprotection against ischaemic and oxidative injury in research models.",
      "Oral bioavailability — distinctive among the broader nootropic peptide family.",
      "Reported tolerability in long-term clinical use in Russia.",
    ],
    dosing: [
      {
        route: "Oral (clinical use in Russia)",
        dosage: "Typical clinical doses 10–30 mg per day",
        frequency: "Twice or three times daily",
        duration: "Cycles of 1.5–3 months in published clinical practice",
        notes: "Not licensed in the UK; this information is provided for educational reference only.",
      },
    ],
    routes: [
      "Oral — the molecule's defining feature, made possible by the peptidomimetic chemistry that resists gastrointestinal proteolysis.",
      "Parenteral routes used in some research but not standard clinical practice.",
    ],
    safetyCommon: [
      "Mild headache",
      "Sleep disturbance if dosed late in the day",
      "Occasional irritability at higher doses",
    ],
    safetyRare: [
      "Hypersensitivity reactions",
      "Long-term Western safety data is limited",
    ],
    contraindications: [
      "Not licensed for human use in the UK",
      "Severe hepatic or renal impairment (per Russian labelling)",
      "Pregnancy/lactation",
    ],
    studies: [
      {
        title: "Noopept in mild cognitive impairment — randomised trial",
        summary:
          "Russian clinical trial reporting cognitive improvement in subjects with mild cognitive impairment versus placebo.",
        source: "Russian neuropharmacology literature",
        year: 2010,
      },
      {
        title: "Noopept and hippocampal BDNF expression",
        summary:
          "Sustained oral dosing produced significant increases in hippocampal BDNF expression in rodent models.",
        source: "Peer-reviewed pharmacology journal",
        year: 2008,
      },
      {
        title: "Cycloprolylglycine as the active metabolite of Noopept",
        summary:
          "Demonstration that the rapidly formed metabolite cycloprolylglycine carries a substantial portion of the parent compound's pharmacological activity.",
        source: "Peer-reviewed pharmacokinetics literature",
        year: 2006,
      },
    ],
    faqs: [
      {
        q: "Is Noopept a peptide?",
        a: "Strictly speaking, Noopept is a peptidomimetic — a small proline-containing dipeptide ester. It is structurally and pharmacologically aligned with the peptide research tradition, and most published Russian work groups it with Semax, Selank, and the broader cognitive-peptide family. It is included here for that reason.",
      },
      {
        q: "How is Noopept different from piracetam?",
        a: "Noopept is roughly three orders of magnitude more potent than piracetam in animal endpoints, has a broader pharmacological profile (anxiolytic + neuroprotective in addition to pro-cognitive), and acts substantially via BDNF/NGF induction rather than purely cholinergic and membrane-fluidity mechanisms.",
      },
      {
        q: "Is Noopept legal in the UK?",
        a: "Noopept is not a controlled drug and not a licensed medicine in the United Kingdom. It is sold as a research chemical; supply for human consumption is not permitted under UK medicines law.",
      },
      {
        q: "How quickly do Noopept effects appear?",
        a: "Some acute effects (mild alertness, clarity) have been reported within hours of dosing in research subjects; the more substantive memory and learning effects develop over a 1–3 week course in published clinical work, consistent with BDNF-mediated mechanisms.",
      },
    ],
    related: ["semax", "selank", "dihexa"],
    keywords: [
      "Noopept",
      "Noopept research UK",
      "Noopept peptidomimetic",
      "Noopept BDNF",
      "cycloprolylglycine",
      "Russian nootropic peptide",
    ],
    tags: ["bdnf-inducer", "ngf-inducer", "russian-origin", "oral-active"],
    lastReviewed: "2026-05-16",
    pubchemCid: 180496,
  },

  {
    slug: "n-acetyl-semax",
    name: "N-Acetyl Semax Amidate",
    aliases: ["NA-Semax-Amidate", "Ac-Semax-NH₂"],
    category: "Cognitive Enhancement",
    tagline:
      "A chemically protected analogue of Semax with N-terminal acetylation and C-terminal amidation, conferring substantially extended half-life and improved potency in research.",
    molecularFormula: "C₃₉H₅₄N₁₀O₁₀S",
    halfLife: "Substantially extended relative to parent Semax",
    ukStatus: "Not a licensed medicine in the UK. Research chemical only.",
    euStatus: "Not approved by the EMA.",
    overview: [
      "N-Acetyl Semax Amidate is a chemically modified analogue of Semax in which the N-terminal methionine is acetylated and the C-terminal proline is amidated. These two terminal modifications protect the peptide from the aminopeptidase and carboxypeptidase enzymes that rapidly degrade the unmodified parent molecule, producing an analogue with substantially extended pharmacodynamic action.",
      "Published comparisons report broadly similar pharmacological effects to Semax — BDNF and NGF induction, modulation of monoamine neurotransmission, neuroprotection in ischaemic models — but with longer duration of action per dose and, in some endpoints, greater potency.",
      "It is positioned in laboratory research as a 'next-generation' Semax: same core pharmacology, extended action, less frequent dosing required to maintain effects.",
    ],
    history: [
      "Developed by the same Russian Academy of Sciences group responsible for the parent Semax compound, as a stability-optimised analogue.",
      "Studied alongside Semax in published research from the mid-2000s onwards.",
      "Not authorised as a medicine in any jurisdiction; remains a research chemical.",
    ],
    mechanism: [
      "Identical mechanistic profile to parent Semax: BDNF/NGF induction, enkephalinase inhibition, monoaminergic modulation, neuroprotection.",
      "Extended half-life through N-terminal acetylation and C-terminal amidation, which block the two principal proteolytic clearance pathways.",
      "Greater bioavailability per administered dose and longer pharmacodynamic action.",
    ],
    benefits: [
      "Extended duration of action versus parent Semax — fewer doses required to maintain effects.",
      "Improved per-dose potency in some research endpoints.",
      "Same pro-cognitive and neuroprotective profile as Semax.",
      "Suitable for less frequent intranasal dosing in research protocols.",
    ],
    dosing: [
      {
        route: "Intranasal (research)",
        dosage: "Microgram-range; specific protocols vary by study",
        frequency: "Often once or twice daily versus 2–3× for Semax",
        duration: "10 days to 8+ weeks in research",
        notes: "Doses are not directly comparable to parent Semax due to potency differences.",
      },
    ],
    routes: [
      "Intranasal — primary research route.",
      "Subcutaneous in some animal protocols.",
    ],
    safetyCommon: [
      "Mild nasal irritation",
      "Occasional headache",
    ],
    safetyRare: [
      "Long-term safety data is limited; analogue-specific data is sparser than parent compound data",
    ],
    contraindications: [
      "Not authorised for human use",
      "Pregnancy/lactation — no data",
    ],
    studies: [
      {
        title: "Comparative pharmacokinetics of Semax and N-acetyl analogue",
        summary:
          "Direct comparison demonstrating significantly extended half-life and bioavailability for the acetylated/amidated analogue.",
        source: "Russian peptide pharmacology literature",
        year: 2012,
      },
      {
        title: "N-acetyl Semax effects on BDNF expression",
        summary:
          "Equivalent or greater BDNF/NGF induction at lower or equivalent doses versus parent Semax in rodent models.",
        source: "Peer-reviewed neuroscience literature",
        year: 2014,
      },
    ],
    faqs: [
      {
        q: "Why use N-Acetyl Semax instead of Semax?",
        a: "The chief practical advantage is extended duration of action — fewer doses per day to maintain comparable pharmacodynamic effects, due to the analogue's resistance to the aminopeptidase and carboxypeptidase enzymes that rapidly clear unmodified Semax.",
      },
      {
        q: "Are the effects different from regular Semax?",
        a: "The pharmacological profile is broadly the same. Differences are primarily quantitative — longer duration, sometimes higher potency per dose — rather than qualitative.",
      },
      {
        q: "Is the safety profile the same as Semax?",
        a: "The acute safety profile is broadly similar in published research, but analogue-specific long-term safety data is sparser than for the parent compound. This is a consideration in research planning.",
      },
    ],
    related: ["semax", "n-acetyl-selank", "selank"],
    keywords: [
      "N-Acetyl Semax",
      "NA-Semax-Amidate",
      "Semax analogue",
      "extended-release Semax",
      "Semax research UK",
    ],
    tags: ["bdnf-inducer", "ngf-inducer", "russian-origin", "intranasal"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "n-acetyl-selank",
    name: "N-Acetyl Selank Amidate",
    aliases: ["NA-Selank-Amidate", "Ac-Selank-NH₂"],
    category: "Anxiolytic / Mood",
    tagline:
      "Chemically protected analogue of Selank with extended half-life through N-terminal acetylation and C-terminal amidation; same anxiolytic profile as the parent compound with longer duration.",
    halfLife: "Substantially extended relative to parent Selank",
    ukStatus: "Not a licensed medicine in the UK. Research chemical only.",
    euStatus: "Not approved by the EMA.",
    overview: [
      "N-Acetyl Selank Amidate stands in the same relationship to Selank as N-Acetyl Semax does to Semax — a terminally protected analogue with N-acetylation and C-amidation conferring resistance to peptidase degradation and producing extended pharmacodynamic action.",
      "The pharmacology is the same as the parent compound: anxiolytic effects via enkephalinase inhibition, BDNF and NGF modulation, and immunomodulation. The practical advantage is fewer doses per day for equivalent or greater pharmacodynamic effect, and a smoother plasma-time curve.",
      "The molecule is studied alongside the parent compound in laboratory research as a longer-acting research tool for probing the relationship between anxiety, stress resilience, attention, and the endogenous opioid system. In the published Russian research programme, the two compounds are commonly compared head-to-head on identical endpoints, with the analogue showing comparable or slightly greater effect at lower or equivalent doses.",
      "Like Selank, the analogue is not a sedative-hypnotic. It does not produce the muscle relaxation, motor impairment, or amnestic effects characteristic of GABA-A-binding anxiolytics. The published profile is anxiolytic-without-sedation — a feature attributed to the indirect mechanism (raising endogenous enkephalin tone) rather than direct GABA-A receptor binding.",
    ],
    history: [
      "Developed by the same Institute of Molecular Genetics group (Russian Academy of Sciences) that produced Semax and Selank, as part of a structured programme to optimise the metabolic stability of short therapeutic peptides.",
      "First characterised in published peer-reviewed work in the mid-2000s, alongside N-Acetyl Semax Amidate. The two analogues are typically studied together as the 'next-generation' counterparts to the parent Semax/Selank pair.",
      "Subject to ongoing characterisation in Russian neuropharmacology and immunopharmacology literature, with comparative studies establishing the pharmacokinetic improvements relative to the parent compound.",
      "Remains a research chemical in all jurisdictions, including the United Kingdom. No clinical authorisation exists for the analogue specifically.",
    ],
    mechanism: [
      "Pharmacologically identical mechanism profile to parent Selank: enkephalinase inhibition raising endogenous enkephalin tone; indirect modulation of GABAergic activity downstream of enkephalin signalling; BDNF and NGF induction in hippocampus and cortex; immunomodulatory effects via the tuftsin pharmacophore.",
      "Terminal modifications — N-terminal acetylation and C-terminal amidation — block the two principal proteolytic clearance pathways (aminopeptidase and carboxypeptidase activity). This is the same protection strategy used in the parent compound's analogue N-Acetyl Semax Amidate.",
      "The result is a substantially longer half-life in plasma and a more sustained CNS exposure profile after intranasal administration, producing measurable pharmacodynamic effects for longer than the parent peptide at comparable doses.",
      "Downstream signalling cascades — serotonergic and dopaminergic metabolite changes, cytokine balance modulation, and hippocampal neurotrophin induction — are reproduced from the parent-compound pharmacology with similar magnitudes and time-courses, scaled by the extended exposure profile.",
    ],
    benefits: [
      "Extended duration of action versus parent Selank — typical published protocols dose the analogue 1–2 times daily versus 2–3 times daily for the parent compound, at comparable or lower per-dose amounts.",
      "Equivalent anxiolytic effect in animal stress paradigms (open-field, elevated plus-maze, forced-swim) with the same lack of sedation or motor impairment characteristic of the parent compound.",
      "Equivalent or moderately greater anti-asthenic effect — reduction of mental fatigue and improvement in subjective wellbeing — in early human research.",
      "Preserved immunomodulatory profile, with normalisation of stress-induced cytokine imbalances reported in research subjects.",
      "Suitable for less frequent intranasal dosing, which translates to better adherence in long research protocols and lower variability from missed doses.",
      "Compatible with Semax and N-Acetyl Semax in published stack research, with the same complementary mechanistic logic as the parent compounds.",
    ],
    dosing: [
      {
        route: "Intranasal (research)",
        dosage: "Microgram-range; protocols vary",
        frequency: "Typically 1–2× daily versus 2–3× for parent compound",
        duration: "10–21 day courses",
      },
    ],
    routes: ["Intranasal — primary research route.", "Subcutaneous in animal research."],
    safetyCommon: [
      "Mild nasal irritation following intranasal application",
      "Occasional transient headache, typically resolving within the first few days of a protocol",
      "Subtle changes in arousal level (reduced anxiety, not sedation) — the same profile as the parent compound",
    ],
    safetyRare: [
      "Hypersensitivity reactions to peptide components (theoretical)",
      "Analogue-specific long-term safety data is sparser than for parent Selank — relevant when planning extended research protocols",
      "Possible interaction with opioid-modulating medications (theoretical, via the enkephalin-system mechanism)",
    ],
    contraindications: [
      "Not authorised for human use in any major jurisdiction",
      "Pregnancy and lactation — no controlled data",
      "Concomitant opioid antagonist therapy — theoretical interference with the enkephalin-system mechanism",
    ],
    studies: [
      {
        title: "Pharmacokinetic comparison of Selank and N-acetyl analogue",
        summary:
          "Direct head-to-head comparison demonstrating significantly extended plasma half-life and prolonged CNS exposure for the acetylated/amidated analogue versus the parent peptide at matched intranasal doses.",
        source: "Russian peptide pharmacology literature",
        year: 2013,
      },
      {
        title: "Anxiolytic effect of N-Acetyl Selank in animal stress paradigms",
        summary:
          "Equivalent or moderately greater anxiolytic effect than parent Selank on standard animal stress measures (open field, elevated plus maze), with no observed sedation or motor impairment at studied doses.",
        source: "Russian neuropharmacology literature",
        year: 2014,
      },
      {
        title: "Immunomodulation profile of the protected Selank analogue",
        summary:
          "Demonstration of preserved cytokine-normalising effect in stressed research subjects, with the extended exposure profile producing more durable normalisation than the parent compound at equivalent total dose.",
        source: "Peer-reviewed immunopharmacology journal",
        year: 2015,
      },
    ],
    faqs: [
      {
        q: "How does N-Acetyl Selank compare with Selank?",
        a: "The pharmacology is the same — anxiolysis via enkephalinase inhibition, BDNF/NGF induction, immunomodulation. The difference is duration: the terminal modifications resist the aminopeptidase and carboxypeptidase enzymes that rapidly clear unmodified Selank, so the analogue produces equivalent pharmacodynamic effect from fewer doses per day.",
      },
      {
        q: "Is it more potent than Selank?",
        a: "Per-dose potency is reported as equivalent or moderately higher in published research. The main practical difference is duration of action rather than peak effect — the analogue maintains pharmacodynamic exposure for longer after each dose.",
      },
      {
        q: "Why not just use parent Selank?",
        a: "Both are reasonable research tools depending on the protocol. The parent compound has a longer published track record and more accumulated long-term safety data; the analogue has better practical pharmacokinetics. Most research groups choose based on which is more important for their specific design.",
      },
      {
        q: "Can N-Acetyl Selank be stacked with N-Acetyl Semax?",
        a: "Stacking the two protected analogues is a recognised research configuration — same complementary mechanistic logic as the parent-compound stack (cognitive-attentional plus anxiolytic) with the practical advantage of less frequent dosing on both sides.",
      },
      {
        q: "Is it stable in solution?",
        a: "The terminal modifications that protect against enzymatic cleavage in plasma also improve aqueous stability versus the parent compound. Practical handling (refrigeration, sterile diluent, pH-controlled vehicle) follows the same conventions as Semax-class peptides in research practice.",
      },
    ],
    related: ["selank", "n-acetyl-semax", "semax"],
    keywords: [
      "N-Acetyl Selank",
      "NA-Selank-Amidate",
      "Selank analogue",
      "extended Selank research",
    ],
  },

  {
    slug: "fgl-peptide",
    name: "FGL Peptide",
    aliases: ["FG Loop peptide", "NCAM mimetic peptide"],
    category: "Neurogenesis",
    tagline:
      "A 15-amino-acid peptide mimetic of the FGL loop of the neural cell adhesion molecule (NCAM), studied for neurogenic, synaptogenic, and memory-enhancing effects in cellular and animal research.",
    halfLife: "Pharmacodynamic effects extend beyond plasma exposure",
    ukStatus: "Not a licensed medicine in the UK. Research chemical only.",
    euStatus: "Not approved by the EMA.",
    overview: [
      "FGL is a 15-amino-acid peptide derived from the second fibronectin type-III domain of the neural cell adhesion molecule (NCAM). NCAM is a cell-surface protein critical to neural development, synaptogenesis, and adult neural plasticity; the FGL peptide reproduces the key receptor-binding motif and acts as a small-molecule mimetic for the full NCAM interaction.",
      "In research, FGL has been characterised for its capacity to activate the fibroblast growth factor receptor (FGFR) — the principal binding partner of NCAM — and trigger the downstream signalling cascades that drive neurite outgrowth, synapse formation, and cognitive improvement in aged animal models.",
      "It is part of a small but distinctive class of NCAM-mimetic research peptides studied as tools for understanding adult neuroplasticity.",
    ],
    history: [
      "Developed by the laboratory of Elisabeth Bock and Vladimir Berezin at the University of Copenhagen, as part of a programme to map functional motifs in NCAM.",
      "Subject to a peer-reviewed literature from the early 2000s onwards covering mechanism, pharmacology, and behavioural effects in animal models.",
      "Has not progressed to formal clinical authorisation; remains a research peptide.",
    ],
    mechanism: [
      "Direct binding and activation of fibroblast growth factor receptor 1 (FGFR1), the principal NCAM partner.",
      "Activation of downstream FGFR signalling: PI3K-Akt, MAPK, PLCγ pathways implicated in neurite outgrowth and synaptogenesis.",
      "Promotion of neurite outgrowth and synapse formation in cell-culture work.",
      "Indirect modulation of BDNF and neurotrophin signalling downstream of FGFR activation.",
      "Anti-inflammatory effects in CNS injury models.",
    ],
    benefits: [
      "Cognitive improvement in aged-rat learning paradigms in published work.",
      "Promotion of neurite outgrowth and synaptogenesis in cell culture.",
      "Neuroprotection in models of CNS injury.",
      "Reported subcutaneous bioavailability sufficient for CNS effects in animal research.",
      "Defined molecular target (FGFR1) — clearer mechanistic story than many peptide research tools.",
    ],
    dosing: [
      {
        route: "Subcutaneous / intranasal (research)",
        dosage: "Microgram to milligram range in animal research",
        frequency: "Daily during study courses",
        duration: "Variable across published protocols",
      },
    ],
    routes: ["Subcutaneous in most animal research.", "Intranasal in some protocols."],
    safetyCommon: ["Limited safety data — animal research only"],
    safetyRare: [
      "Theoretical considerations relating to systemic FGFR activation",
      "FGFR signalling is implicated in some oncogenic processes — long-term human safety implications are uncharacterised",
    ],
    contraindications: [
      "Not authorised for human use",
      "Theoretical contraindication in subjects with active or historic malignancy",
      "No data in pregnancy, lactation, or developmental contexts",
    ],
    studies: [
      {
        title: "FGL peptide and cognitive enhancement in aged rats",
        summary:
          "Improved Morris water maze performance in aged rats receiving FGL versus vehicle controls.",
        source: "Copenhagen group, peer-reviewed",
        year: 2005,
      },
      {
        title: "FGL as an FGFR1 agonist — mechanism study",
        summary:
          "Direct demonstration that FGL binds and activates FGFR1, and that downstream cognitive effects depend on FGFR1 integrity.",
        source: "Peer-reviewed neuroscience literature",
        year: 2008,
      },
      {
        title: "FGL in models of neuroinflammation",
        summary:
          "Reduction in inflammatory markers and improved outcomes in animal models of CNS injury.",
        source: "Peer-reviewed neuroscience literature",
        year: 2010,
      },
    ],
    faqs: [
      {
        q: "What is NCAM and why does it matter?",
        a: "NCAM is the neural cell adhesion molecule — a cell-surface protein that mediates neuron-to-neuron adhesion and signalling, and is critical to brain development, synaptic plasticity, and adult learning. FGL reproduces a key functional motif of NCAM, allowing its central pharmacology to be probed without the full protein.",
      },
      {
        q: "How does FGL compare with Dihexa?",
        a: "Both promote synaptogenesis but via different molecular targets — Dihexa acts on HGF/c-Met, FGL acts on FGFR1. They are complementary tools in synaptogenesis research rather than direct substitutes.",
      },
      {
        q: "Is FGL human-tested?",
        a: "All published FGL data is preclinical. There are no major registered human trials of the peptide to date.",
      },
    ],
    related: ["dihexa", "semax", "cerebrolysin"],
    keywords: [
      "FGL peptide",
      "NCAM mimetic peptide",
      "FGFR1 agonist peptide",
      "FGL research UK",
      "synaptogenesis peptide research",
    ],
    tags: ["synaptogenic", "fgfr-agonist", "neuroprotective"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "epitalon",
    name: "Epitalon",
    aliases: ["Ala-Glu-Asp-Gly", "Epithalon", "Epitalone"],
    category: "Neuroprotection",
    tagline:
      "A short synthetic tetrapeptide developed in the Khavinson bioregulator programme, studied for telomere maintenance, pineal regulation, and indirect cognitive effects via circadian and stress-resilience pathways.",
    molecularFormula: "C₁₄H₂₂N₄O₉",
    molecularWeight: "390.35 g/mol",
    halfLife: "Short plasma half-life; gene-expression effects persist beyond clearance",
    sequence: "Ala-Glu-Asp-Gly",
    ukStatus:
      "Not licensed as a medicine in the United Kingdom. Research chemical only.",
    euStatus:
      "Not approved by the EMA. Used in research and traditional clinical practice in the Russian Federation as part of the bioregulator family.",
    overview: [
      "Epitalon is a synthetic four-amino-acid peptide developed in the same St. Petersburg Institute of Bioregulation and Gerontology programme that produced Pinealon, Cerluten, and Thymalin. The conceptual heritage is Vladimir Khavinson's hypothesis that very short peptides can pass through the cell and nuclear membranes and act as direct gene-expression regulators by binding specific DNA motifs.",
      "The molecule is positioned in the Khavinson framework as a pineal-targeted bioregulator. Its most-cited research findings concern modulation of melatonin rhythms, induction of telomerase activity in cultured cells, and extension of average and maximum lifespan in rodent studies. The cognitive relevance — the reason it appears on a nootropic-peptide reference — is indirect: circadian regulation and stress-resilience modulation feed back into next-day cognitive performance, and ageing-related cognitive decline is one of the endpoints the broader programme targets.",
      "Outside the Khavinson group and collaborators, independent replication of the most distinctive claims — particularly the direct DNA-binding mechanism — has been limited. The phenotypic effects on telomerase activity in cell culture are well-documented; the molecular details of how a tetrapeptide reaches and binds chromatin are more contested.",
    ],
    history: [
      "Synthesised in the 1990s at the St. Petersburg Institute of Bioregulation and Gerontology under the direction of Vladimir Khavinson, as the synthetic equivalent of pineal-gland peptide extracts that the institute had been studying since the 1980s.",
      "Subject to a substantial body of Russian peer-reviewed work covering telomerase induction, melatonin-rhythm restoration, retinal-protection effects, and gerontoprotective outcomes in rodent models.",
      "Studied in human research primarily in Russia in elderly populations, with reports of improved sleep architecture, immune-function markers, and subjective wellbeing on cyclical administration protocols.",
      "Remains a research chemical in all Western jurisdictions, including the United Kingdom.",
    ],
    mechanism: [
      "Proposed direct binding to specific DNA promoter sequences in pineal-relevant genes, modulating transcription of melatonin-synthesis enzymes and other circadian effectors — the central Khavinson-school mechanism.",
      "Induction of telomerase activity in cultured human somatic cells, extending replicative lifespan and producing the cellular signature most associated with Epitalon in Western secondary literature.",
      "Restoration of melatonin-rhythm amplitude in aged animal models with otherwise blunted circadian melatonin production.",
      "Antioxidant effects in retinal and CNS tissue, particularly under age-related oxidative stress.",
      "Indirect downstream cognitive effects through circadian regulation and stress-axis attenuation — the route by which a pineal-acting peptide reaches cognitive endpoints.",
    ],
    benefits: [
      "Reported telomerase induction and extension of replicative lifespan in cultured cells.",
      "Restoration of melatonin-rhythm amplitude in aged animal models.",
      "Improvements in subjective sleep quality and wellbeing in Russian elderly-population research.",
      "Antioxidant and retinal-protective effects in oxidative-stress models.",
      "Used as a research tool for studying pineal-gland regulation and circadian-cognition relationships.",
      "Part of the broader gerontoprotective programme alongside Pinealon and other Khavinson bioregulators.",
    ],
    dosing: [
      {
        route: "Subcutaneous / intranasal (research)",
        dosage: "Microgram-range doses in animal and clinical-research protocols",
        frequency: "Typically once daily during a course",
        duration: "Cyclical protocols of 10–20 days, repeated periodically rather than continuous",
        notes:
          "No standardised Western clinical protocol exists. Russian research practice uses cycles rather than continuous administration.",
      },
    ],
    routes: [
      "Subcutaneous injection — the primary route in animal research and Russian clinical practice.",
      "Intranasal administration is documented in some protocols.",
      "Oral administration is not viable; the peptide is degraded by gastrointestinal proteases.",
    ],
    safetyCommon: [
      "Generally well-tolerated in published animal and Russian clinical research at studied doses",
      "Mild local irritation at the injection site occasionally reported",
    ],
    safetyRare: [
      "Long-term safety data outside the Khavinson group is limited",
      "The direct DNA-binding mechanism (if it occurs as proposed) raises theoretical concerns about off-target gene regulation that have not been comprehensively investigated",
      "Telomerase induction is itself a process implicated in some oncogenic pathways; whether the magnitude produced by Epitalon administration carries meaningful tumour-risk implications is uncharacterised",
    ],
    contraindications: [
      "Not authorised for human use in the UK/EU/US",
      "Pregnancy and lactation — no data",
      "Active or historic malignancy — theoretical contraindication via the telomerase mechanism",
    ],
    studies: [
      {
        title: "Epitalon and telomerase activity in cultured human somatic cells",
        summary:
          "Khavinson-group publications reporting dose-dependent induction of telomerase activity in human fibroblast cultures, with corresponding extension of replicative capacity beyond the Hayflick limit.",
        source: "Khavinson group, peer-reviewed",
        year: 2003,
      },
      {
        title: "Pineal peptide effects on melatonin rhythm in aged animals",
        summary:
          "Restoration of melatonin amplitude and circadian-rhythm regularity in aged rodent models receiving cyclical Epitalon administration versus age-matched controls.",
        source: "Russian gerontology literature",
        year: 2008,
      },
      {
        title: "Gerontoprotective effect of Epitalon in long-term rodent studies",
        summary:
          "Extension of average and maximum lifespan in mouse and rat populations receiving lifelong Epitalon administration versus controls; effect attributed to combined circadian, antioxidant, and telomerase-related mechanisms.",
        source: "Russian gerontology literature",
        year: 2011,
      },
    ],
    faqs: [
      {
        q: "Is Epitalon a nootropic in the cognitive-enhancement sense?",
        a: "Not directly. Epitalon does not raise BDNF or act on the cognitive-peptide pathways in the way Semax or Noopept do. Its relevance to cognition is indirect — through circadian restoration, sleep-architecture support, and stress-resilience modulation. Researchers studying cognitive ageing in the context of disrupted sleep-wake regulation use it as one tool in that question; researchers studying acute cognitive enhancement use it less often.",
      },
      {
        q: "How does Epitalon differ from Pinealon?",
        a: "Both are short Khavinson-school bioregulators. Pinealon (Glu-Asp-Arg, tripeptide) is positioned as a neuroprotective peptide with antioxidant and excitotoxicity-attenuating effects. Epitalon (Ala-Glu-Asp-Gly, tetrapeptide) is positioned as a pineal-acting peptide with telomerase and circadian effects. They are complementary tools within the same theoretical framework rather than substitutes.",
      },
      {
        q: "Is telomerase induction safe?",
        a: "Telomerase is the enzyme that maintains chromosome-end length, allowing cell division to continue beyond the normal replicative limit. It is constitutively active in stem cells and germ cells; it is also activated abnormally in most cancers. Whether pharmacological induction by Epitalon administration carries meaningful tumour-risk implications has not been characterised in long-term human research. The theoretical concern is real but unquantified.",
      },
      {
        q: "What is the evidence outside Russia?",
        a: "Sparse. Most published Epitalon research originates from the Khavinson group or close collaborators. Independent Western replication of the most distinctive claims is limited. The cellular-level findings (telomerase induction in culture) are better-replicated than the whole-organism gerontoprotective findings.",
      },
      {
        q: "Does it improve sleep?",
        a: "Russian clinical research in elderly populations reports improvements in subjective sleep quality, particularly in subjects with age-related melatonin-rhythm blunting. The mechanism is plausible — pineal-targeted modulation should affect melatonin output — but the data is geographically constrained and the placebo-controlled evidence base outside Russia is limited.",
      },
    ],
    related: ["pinealon", "dsip", "cerebrolysin"],
    keywords: [
      "Epitalon",
      "Epithalon peptide UK",
      "Epitalon telomerase research",
      "Khavinson Epitalon",
      "pineal peptide research",
      "Epitalon vs Pinealon",
    ],
    tags: ["neuroprotective", "khavinson-bioregulator", "russian-origin", "sleep-architecture"],
    lastReviewed: "2026-05-16",
    pubchemCid: 219042,
  },

  {
    slug: "cortexin",
    name: "Cortexin",
    aliases: ["Bovine brain peptide preparation"],
    category: "Neuroprotection",
    tagline:
      "A standardised low-molecular-weight peptide preparation derived from bovine cerebral cortex, used in Russian clinical practice for cognitive impairment, post-stroke recovery, and traumatic brain injury research — the closest single sister to Cerebrolysin.",
    halfLife: "Multi-component preparation with varied pharmacokinetics",
    ukStatus:
      "Not licensed as a medicine in the UK. Used clinically in the Russian Federation and several CIS countries.",
    euStatus:
      "Not approved by the EMA. No centralised EU authorisation; licensing status varies by member state.",
    overview: [
      "Cortexin is a complex peptide preparation produced by acetic-acid extraction and standardised processing of bovine cerebral cortex tissue. It contains a defined mixture of low-molecular-weight peptides (under 10 kDa) plus free amino acids, vitamins, and trace minerals. Mechanistically and historically it sits alongside Cerebrolysin as one of the two principal multi-component brain-derived peptide preparations used in Eastern European clinical practice.",
      "The differences from Cerebrolysin are practical rather than fundamental. Cortexin is bovine-derived rather than porcine; it is administered intramuscularly rather than intravenously in most protocols; and its clinical positioning is broader, covering paediatric neurological indications (perinatal CNS injury, developmental delays) alongside the adult cognitive and stroke-recovery indications Cerebrolysin is best known for.",
      "Like Cerebrolysin, its complexity is both a strength and a weakness in research terms. The multi-component preparation produces pleiotropic neurotrophic effects on multiple pathways simultaneously, which mirrors physiological neurotrophic signalling more closely than any single peptide; the same complexity makes the mechanism harder to dissect in clean experimental work.",
    ],
    history: [
      "Developed in the Soviet Union in the late 1980s and registered as a medicinal product in Russia in 1999.",
      "Standard prescription medication in Russia and several CIS countries for a range of cognitive, cerebrovascular, and developmental indications.",
      "Subject to a substantial Russian-language clinical-trial body in stroke recovery, vascular dementia, traumatic brain injury, and paediatric neurology.",
      "Has not progressed to Western regulatory approval; remains unlicensed by the MHRA, EMA, and FDA.",
    ],
    mechanism: [
      "Multi-component neurotrophic factor mimicry — the preparation contains fragments that reproduce aspects of BDNF, NGF, GDNF, and CNTF signalling without being any one of those molecules.",
      "Modulation of GABAergic and glutamatergic balance in cortical neurons, contributing to its reported anticonvulsant and neuroprotective properties.",
      "Antioxidant effects via upregulation of endogenous antioxidant enzyme expression and direct radical scavenging.",
      "Anti-apoptotic effects in models of ischaemic and traumatic neuronal injury.",
      "Modulation of microglial activation and reduction of neuroinflammatory mediator release in CNS injury models.",
    ],
    benefits: [
      "Cognitive improvement in cerebrovascular disease and post-stroke populations in Russian clinical trials.",
      "Reported neuroprotective effects in traumatic-brain-injury research, including paediatric indications.",
      "Anticonvulsant adjunct effects studied in epilepsy research.",
      "Broad clinical use profile across paediatric and adult indications, providing extensive real-world experience.",
      "Long track record of post-marketing safety data in Russian and CIS clinical practice.",
    ],
    dosing: [
      {
        route: "Intramuscular injection (clinical use in approving jurisdictions)",
        dosage: "Typical clinical doses 5–10 mg per injection",
        frequency: "Daily during a treatment cycle",
        duration: "Cycles of 10 days, sometimes repeated after intervals",
        notes:
          "Not approved or prescribed in the UK; this information is for educational reference only.",
      },
    ],
    routes: [
      "Intramuscular injection — the standard clinical route.",
      "Oral administration is not used; the bioactive peptides are degraded by gastrointestinal proteases.",
      "Intranasal administration has been explored in research but is not the standard clinical route.",
    ],
    safetyCommon: [
      "Generally well-tolerated in Russian clinical use",
      "Mild injection-site reactions reported in some patients",
      "Occasional hypersensitivity reactions — local rash or urticaria",
    ],
    safetyRare: [
      "Anaphylactic reactions to the bovine-derived preparation, as with any animal-protein biologic",
      "Theoretical considerations around prion or other transmissible-disease risk in animal-derived biologics, managed by purification and screening in approved manufacture",
    ],
    contraindications: [
      "Not licensed in the UK",
      "Known hypersensitivity to bovine-derived proteins",
      "Pregnancy and lactation (per labelling in approving jurisdictions)",
    ],
    studies: [
      {
        title: "Cortexin in post-stroke cognitive recovery",
        summary:
          "Russian multicentre study reporting accelerated recovery of cognitive function in patients receiving adjunct Cortexin during the rehabilitation phase versus standard care alone.",
        source: "Russian neurology literature",
        year: 2010,
      },
      {
        title: "Cortexin in paediatric perinatal CNS injury",
        summary:
          "Russian clinical research in neonates with hypoxic-ischaemic encephalopathy reporting improved neurodevelopmental outcomes at follow-up in the treated group.",
        source: "Russian paediatric neurology literature",
        year: 2013,
      },
      {
        title: "Comparative study of Cortexin and Cerebrolysin in vascular dementia",
        summary:
          "Russian comparative trial reporting broadly similar cognitive outcomes between the two preparations on standardised cognitive batteries, with differences in tolerability profile.",
        source: "Russian neurology literature",
        year: 2015,
      },
    ],
    faqs: [
      {
        q: "How does Cortexin differ from Cerebrolysin?",
        a: "Both are multi-component brain-derived peptide preparations with overlapping mechanisms and clinical indications. The principal differences: Cortexin is bovine-cortex-derived (Cerebrolysin is porcine-brain-derived), administered intramuscularly (Cerebrolysin is typically intravenous), and has broader paediatric clinical positioning. The pharmacological profiles are more similar than different.",
      },
      {
        q: "Is Cortexin available in the UK?",
        a: "No. Cortexin is not licensed by the MHRA and is not legally supplied for human use in the United Kingdom. It is licensed in Russia and several CIS countries. Importation for personal use is restricted under the Human Medicines Regulations 2012.",
      },
      {
        q: "Can Cortexin be used in cognitive enhancement research outside clinical indications?",
        a: "It has been studied principally in clinical populations — stroke recovery, vascular dementia, paediatric CNS injury — rather than as a generic cognitive enhancer in healthy subjects. The translational relevance to non-clinical cognitive performance is less well-characterised than for Semax or Cerebrolysin.",
      },
      {
        q: "Why intramuscular rather than intravenous?",
        a: "The intramuscular route is more practical for outpatient administration in the protocols Cortexin is typically used in. The bioactive components are absorbed adequately from the muscle depot for the intended pharmacodynamic effect; the higher peak plasma concentrations of IV administration are not necessary for the clinical effects.",
      },
    ],
    related: ["cerebrolysin", "semax", "pinealon"],
    keywords: [
      "Cortexin",
      "Cortexin UK research",
      "bovine cortex peptide preparation",
      "Cortexin vs Cerebrolysin",
      "Russian neuropeptide preparation",
    ],
    tags: ["neuroprotective", "russian-origin", "parenteral", "bdnf-inducer"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "p21",
    name: "P21",
    aliases: ["CNTF-derived peptide", "neuropoietin-related peptide"],
    category: "Neurogenesis",
    tagline:
      "A small peptide derived from a neurotrophic-cytokine framework, characterised in academic research for hippocampal neurogenesis induction and anti-neuroinflammatory effects in models of cognitive ageing and Alzheimer-type pathology.",
    halfLife:
      "Pharmacodynamic effects on neurogenesis extend across weeks despite shorter plasma exposure",
    ukStatus:
      "Not a licensed medicine. Research chemical for laboratory and preclinical use only.",
    euStatus:
      "Not approved by the EMA. No clinical authorisation in any major EU jurisdiction.",
    overview: [
      "P21 is a small synthetic peptide engineered from a region of the neurotrophic-cytokine family — the same superfamily that includes ciliary neurotrophic factor (CNTF) and the leukaemia inhibitory factor — designed to retain the pro-neurogenic activity of the full protein while losing the broader cytokine effects that would otherwise dominate the systemic response.",
      "The molecule has been characterised in academic research as one of the few peptide candidates capable of measurably inducing hippocampal neurogenesis in adult animals — generating new dentate gyrus neurons from quiescent neural stem cells. The endpoint matters because adult hippocampal neurogenesis is one of the few demonstrated routes by which the adult brain produces structurally new processing capacity, and its rate declines with age and with chronic stress.",
      "P21 also shows anti-neuroinflammatory effects in cell-culture and animal models, attenuating microglial activation in response to amyloid-beta exposure and similar inflammatory triggers. The compound is studied in models of cognitive ageing and Alzheimer-type pathology where neurogenic decline and neuroinflammation are both implicated.",
    ],
    history: [
      "Developed in academic research as part of a programme to derive smaller, more drug-like fragments from the cytokine-family neurotrophic factors that had themselves proven impractical as therapeutics due to molecular size and pleiotropic effects.",
      "Subject to a peer-reviewed preclinical literature from the early 2010s onwards, with the strongest data coming from murine models of cognitive ageing and Alzheimer-type pathology.",
      "Has not progressed to clinical-trial registration in any jurisdiction. No human safety or efficacy data is publicly available.",
      "Remains a research peptide used as a tool for studying adult neurogenesis and neuroinflammation pharmacology.",
    ],
    mechanism: [
      "Promotion of adult hippocampal neurogenesis — induction of neural stem cell proliferation in the dentate gyrus and survival of newly differentiated neurons.",
      "Modulation of the JAK-STAT signalling cascade downstream of the cytokine-receptor framework the peptide derives from, without producing the broader systemic cytokine effects of the parent molecules.",
      "Anti-neuroinflammatory effects via attenuation of microglial activation, reduction of pro-inflammatory cytokine release, and shift of microglia toward the M2 (resolution) phenotype.",
      "Indirect cognitive effects through restoration of neurogenic capacity in aged or pathological brain states where baseline neurogenesis is depressed.",
      "Reported reduction of amyloid-beta-induced neuronal injury in Alzheimer-model preparations, partly via the anti-inflammatory mechanism.",
    ],
    benefits: [
      "Induction of measurable adult hippocampal neurogenesis in aged-mouse models in published research.",
      "Improved performance on hippocampus-dependent learning tasks in cognitively impaired animal models.",
      "Anti-neuroinflammatory effects in models of Alzheimer-type pathology.",
      "Restoration of synaptic plasticity markers (LTP magnitude, spine density) in aged-brain preparations.",
      "Distinct mechanism from the BDNF-inducer family — useful as a complementary research tool.",
    ],
    dosing: [
      {
        route: "Subcutaneous / intraperitoneal (research)",
        dosage: "Microgram-range doses in animal protocols",
        frequency: "Daily during a study course",
        duration: "Variable; chronic protocols of several weeks have been examined in mouse research",
        notes:
          "No validated human protocol exists. No clinical trials are publicly registered.",
      },
    ],
    routes: [
      "Subcutaneous injection — primary route in animal research.",
      "Intraperitoneal in some rodent studies.",
      "Oral administration has not been validated in published research.",
    ],
    safetyCommon: [
      "Limited safety data — preclinical animal research only, no human pharmacovigilance",
      "Generally well-tolerated in the reported animal protocols at studied doses",
    ],
    safetyRare: [
      "Theoretical concerns relating to chronic JAK-STAT modulation, which is implicated in some oncogenic pathways when persistently activated",
      "Long-term toxicology data is not publicly available",
      "Pleiotropic cytokine-family pharmacology — even with the smaller peptide, off-target signalling cannot be ruled out",
    ],
    contraindications: [
      "Not authorised for human use in any jurisdiction",
      "Theoretical contraindication in subjects with active or historic malignancy via the JAK-STAT mechanism",
      "No data in pregnancy, lactation, or paediatric contexts",
    ],
    studies: [
      {
        title: "P21 induces adult hippocampal neurogenesis in aged mice",
        summary:
          "Chronic administration produced measurable increases in dentate gyrus BrdU-positive neuron counts in aged mice versus age-matched controls, with corresponding improvements on hippocampus-dependent learning tasks.",
        source: "Peer-reviewed neuroscience literature",
        year: 2014,
      },
      {
        title: "P21 attenuates amyloid-beta induced neuroinflammation",
        summary:
          "Reduction of microglial activation markers and pro-inflammatory cytokine release in Alzheimer-model mouse brains receiving P21 administration during the pathology-progression window.",
        source: "Peer-reviewed neuroscience literature",
        year: 2017,
      },
      {
        title: "Cognitive recovery in Alzheimer's mouse models with P21 treatment",
        summary:
          "Partial restoration of spatial and recognition memory performance in transgenic mouse models of Alzheimer-type pathology following chronic P21 administration.",
        source: "Peer-reviewed neuroscience literature",
        year: 2019,
      },
    ],
    faqs: [
      {
        q: "Is P21 the same molecule as the p21 cell-cycle inhibitor protein?",
        a: "No. The P21 research peptide discussed here is a distinct molecule with a distinct mechanism; the name collision with the cell-cycle inhibitor p21^Cip1/Waf1 (also called CDKN1A) is unfortunate but the two are unrelated. Literature searches require care to disambiguate the two.",
      },
      {
        q: "How does P21 differ from BDNF-inducing peptides?",
        a: "BDNF inducers (Semax, Noopept, Cerebrolysin) stabilise existing synapses and support neuronal survival through neurotrophin signalling. P21 acts further upstream, inducing the formation of entirely new neurons through neurogenic induction in the dentate gyrus. The two mechanisms can be combined in research designs — they address different parts of the cognitive-plasticity pipeline.",
      },
      {
        q: "Is there human data?",
        a: "Not publicly. All published P21 data is preclinical, primarily from murine models. No human trials are registered in major trial registries to date.",
      },
      {
        q: "What about safety?",
        a: "The mechanism involves modulation of cytokine-family signalling cascades that have broader effects in the body than just the cognitive endpoint. Long-term safety in humans is uncharacterised, and the theoretical concerns about chronic JAK-STAT modulation are real and unanswered. This is a research tool, not a candidate human therapeutic on the current evidence.",
      },
    ],
    related: ["dihexa", "fgl-peptide", "cerebrolysin"],
    keywords: [
      "P21 peptide",
      "P21 neurogenesis research",
      "CNTF-derived peptide",
      "neurogenic peptide research",
      "Alzheimer's research peptide",
    ],
    tags: ["synaptogenic", "neuroprotective"],
    lastReviewed: "2026-05-16",
  },

  {
    slug: "ghk-cu",
    name: "GHK-Cu (cognitive angle)",
    aliases: ["Gly-His-Lys-Cu", "Copper tripeptide-1"],
    category: "Neurogenesis",
    tagline:
      "A naturally occurring tripeptide-copper complex best known for skin and tissue-repair effects, but with a distinct cognitive-research literature covering gene-expression modulation, antioxidant defence, and indirect neurotrophic effects.",
    molecularFormula: "C₁₄H₂₄N₆O₄Cu (as Cu complex)",
    molecularWeight: "402.93 g/mol (Cu complex)",
    halfLife: "Short plasma half-life; gene-expression effects persist beyond clearance",
    sequence: "Gly-His-Lys (with bound Cu²⁺)",
    ukStatus:
      "Not licensed as a medicine in the UK. Research chemical only; some cosmetic-grade GHK-Cu is sold for topical use, distinct from research-grade material.",
    euStatus:
      "Not approved by the EMA as a medicine. Used in cosmetic formulations under separate regulatory framework.",
    overview: [
      "GHK-Cu is a naturally occurring tripeptide — glycine-histidine-lysine — that complexes copper ions in plasma and tissue. The molecule was first isolated in the 1970s as the factor in young human plasma that supported wound healing more effectively than the same plasma from older donors. Its predominant identity in the research-peptide market is as a skin and tissue-repair compound, but it has a distinct and less-publicised literature on cognitive and brain-tissue effects.",
      "The cognitive case for GHK-Cu rests on three observations. First, the molecule has been characterised as a broad-spectrum modulator of gene expression — published gene-array work suggests it shifts expression of more than a thousand genes toward a youthful phenotype, including a substantial number in pathways relevant to neuronal survival, antioxidant defence, and neurotrophic signalling. Second, copper homeostasis is itself relevant to CNS function: dysregulated copper handling is implicated in several neurodegenerative conditions. Third, animal research has reported antioxidant and neuroprotective effects in brain-tissue preparations.",
      "The cognitive evidence base is meaningfully smaller than the skin-and-tissue-repair evidence base. GHK-Cu is included on this site for completeness — it is studied in cognitive contexts in the published research-peptide literature — with the caveat that the strongest evidence for the molecule lies outside the cognitive endpoint.",
    ],
    history: [
      "Isolated by Loren Pickart and colleagues in 1973 as the active factor in young human plasma that supported tissue repair.",
      "Initial characterisation focused on wound healing and tissue regeneration; cognitive and brain-tissue effects were investigated more sporadically thereafter.",
      "Widely adopted in cosmetic skin-care formulations from the 1990s onwards under regulatory frameworks distinct from the medicinal-product pathway.",
      "Cognitive and gene-expression research has continued in academic and independent contexts, generating the broader 'pleiotropic regulator' framing the molecule is now described under.",
    ],
    mechanism: [
      "Broad gene-expression modulation — published gene-array research reports shifts in expression of over 1,000 genes toward a youthful or pro-repair phenotype across multiple tissue types.",
      "Copper-dependent enzymatic effects — GHK-Cu delivers copper to tissues in a bioavailable form, supporting the function of copper-dependent enzymes including superoxide dismutase (antioxidant defence) and lysyl oxidase (extracellular matrix remodelling).",
      "Antioxidant effects via upregulation of endogenous antioxidant enzyme expression and direct radical-scavenging by the copper-peptide complex.",
      "Reported neuroprotective effects in animal models, attributed to combined antioxidant, anti-inflammatory, and possibly mild trophic mechanisms.",
      "Modulation of inflammatory gene expression, with reduction of pro-inflammatory markers in tissue-injury models.",
    ],
    benefits: [
      "Antioxidant and tissue-protective effects in brain-tissue preparations under oxidative challenge.",
      "Broad pro-repair gene-expression signature relevant to ageing-related cognitive decline contexts.",
      "Reported neuroprotective effects in animal models of CNS injury.",
      "Copper-delivery role supporting endogenous antioxidant enzyme function.",
      "Naturally occurring molecule with extensive non-cognitive safety record from cosmetic use, providing a partial safety floor.",
    ],
    dosing: [
      {
        route: "Subcutaneous / intranasal (research)",
        dosage: "Microgram to milligram range in animal protocols",
        frequency: "Daily during a course",
        duration: "Variable across published protocols",
        notes:
          "Topical GHK-Cu (cosmetic preparations) is a separate product category; the cognitive-research material is distinct.",
      },
    ],
    routes: [
      "Subcutaneous injection — primary route in animal research.",
      "Intranasal administration documented in some research protocols.",
      "Topical application is the dominant route for skin-care applications, not the cognitive research literature.",
      "Oral administration faces the standard peptide-degradation barrier.",
    ],
    safetyCommon: [
      "Generally well-tolerated in animal research and in the substantial cosmetic-use safety record",
      "Mild local reactions at injection or topical-application site occasionally reported",
    ],
    safetyRare: [
      "Copper toxicity is theoretically possible with excessive systemic administration; the standard research doses are far below relevant toxicity thresholds",
      "The cognitive-research safety literature specifically is sparser than the general safety record",
      "Long-term effects of chronic systemic GHK-Cu administration in cognitive contexts are uncharacterised",
    ],
    contraindications: [
      "Not authorised for human medicinal use in the UK",
      "Pregnancy and lactation — limited data",
      "Wilson's disease and other copper-metabolism disorders — relative contraindication via the copper component",
    ],
    studies: [
      {
        title: "GHK-Cu gene-expression effects in human fibroblast cultures",
        summary:
          "Microarray analysis demonstrating modulation of expression of over 1,000 genes following GHK-Cu exposure, with the modulation pattern aligning with a shift toward a younger transcriptional phenotype across antioxidant, repair, and growth-factor pathways.",
        source: "Pickart group, peer-reviewed",
        year: 2012,
      },
      {
        title: "Neuroprotective effects of GHK-Cu in cerebral ischaemia models",
        summary:
          "Animal-model work reporting reduced infarct volume and improved neurological scoring in rodents receiving GHK-Cu prior to or shortly after experimental cerebral ischaemia, attributed to combined antioxidant and anti-inflammatory mechanisms.",
        source: "Peer-reviewed neuroscience literature",
        year: 2015,
      },
      {
        title: "Antioxidant enzyme modulation by GHK-Cu in brain tissue",
        summary:
          "Upregulation of superoxide dismutase and catalase expression in brain tissue following GHK-Cu administration, supporting the antioxidant-defence pathway as one of the molecule's principal neuroprotective routes.",
        source: "Peer-reviewed biochemistry literature",
        year: 2017,
      },
    ],
    faqs: [
      {
        q: "Is GHK-Cu really a cognitive peptide?",
        a: "The strongest GHK-Cu evidence base is in skin and tissue repair, where its commercial profile is largest. There is, however, a real and separate research literature on cognitive and brain-tissue effects — antioxidant defence, neuroprotection in ischaemia models, and the broad gene-expression signature that touches several cognition-relevant pathways. It is a peripheral entry in the nootropic-peptide field rather than a central one, but a legitimate one.",
      },
      {
        q: "How does cosmetic-grade GHK-Cu differ from research-grade?",
        a: "Cosmetic-grade material is formulated for topical delivery, typically at low concentrations and in vehicle systems optimised for skin penetration rather than systemic bioavailability. Research-grade material is supplied as a lyophilised peptide for reconstitution and parenteral administration in laboratory work. The chemistry is the same; the formulation and the regulatory framework are different.",
      },
      {
        q: "What about the copper safety question?",
        a: "Copper is an essential trace element with a well-characterised therapeutic window. The doses of copper delivered by GHK-Cu in standard research protocols are far below those associated with copper toxicity. The exception is subjects with copper-metabolism disorders such as Wilson's disease, where any additional copper exposure is contraindicated.",
      },
      {
        q: "Can GHK-Cu be combined with other cognitive peptides?",
        a: "Combinations are studied in research. The mechanisms are sufficiently different from the BDNF-inducer family that there is little redundancy; whether the combination produces additive cognitive effects in the way the Russian cognitive-peptide stacks do has not been characterised systematically. Treat as an experimental combination rather than an established stack.",
      },
    ],
    related: ["pinealon", "epitalon", "cerebrolysin"],
    keywords: [
      "GHK-Cu",
      "GHK Cu cognitive research",
      "copper peptide brain",
      "GHK-Cu neuroprotection",
      "GHK-Cu gene expression",
    ],
    tags: ["neuroprotective"],
    lastReviewed: "2026-05-16",
    pubchemCid: 73587,
    pubchemNote: "Structure shown is the GHK tripeptide (Gly-His-Lys) base. In GHK-Cu, a copper ion is chelated by the imidazole nitrogen of histidine and adjacent backbone donors.",
  },

  {
    slug: "cycloprolylglycine",
    name: "Cycloprolylglycine",
    aliases: ["CPG", "cyclo(L-prolyl-L-glycine)", "Noopept active metabolite"],
    category: "Cognitive Enhancement",
    tagline:
      "An endogenous cyclic dipeptide that is also the primary active metabolite of Noopept, with intrinsic anxiolytic and cognitive effects independent of its parent compound — a research peptide in its own right.",
    molecularFormula: "C₇H₁₀N₂O₂",
    molecularWeight: "154.17 g/mol",
    halfLife: "Short plasma half-life; behavioural effects persist beyond exposure",
    sequence: "cyclo(L-Pro-L-Gly)",
    ukStatus:
      "Not a licensed medicine in the UK. Research chemical only.",
    euStatus:
      "Not approved by the EMA. Not on any major regulatory schedule.",
    overview: [
      "Cycloprolylglycine, abbreviated CPG, is a small cyclic dipeptide that occurs endogenously in the mammalian brain and plasma. It also happens to be the principal active metabolite formed from Noopept after oral administration — the parent peptidomimetic is rapidly hydrolysed in vivo to release CPG, and a substantial portion of Noopept's pharmacological activity is attributable to this metabolite acting in its own right.",
      "Because CPG is endogenous, it occupies a different regulatory and pharmacological position from purely synthetic research peptides. The molecule has been characterised separately from Noopept in published Russian research, where direct administration of CPG produces measurable anxiolytic, antiamnestic, and neuroprotective effects on standard behavioural endpoints — effects that broadly mirror those of Noopept but with a different pharmacokinetic profile.",
      "The molecule is included on this site because it is studied as a research peptide in its own right and because it provides a cleaner mechanistic probe for the cognitive effects of the Noopept pharmacology — administering CPG directly avoids the metabolic transformation step and produces a more defined pharmacokinetic picture.",
    ],
    history: [
      "Identified as an endogenous brain dipeptide in early biochemistry work characterising the mammalian neuropeptide landscape.",
      "Identified as the principal active metabolite of Noopept by the same V. V. Zakusov Institute of Pharmacology group that developed Noopept itself, in pharmacokinetic studies in the early 2000s.",
      "Studied as an independent research peptide from the mid-2000s onwards in Russian neuropharmacology, with publications covering anxiolytic, antiamnestic, and neuroprotective endpoints.",
      "Remains a research chemical in all jurisdictions including the United Kingdom; not separately licensed despite the endogenous status.",
    ],
    mechanism: [
      "Modulation of AMPA and NMDA glutamate receptor function in hippocampal neurons, mirroring the principal Noopept mechanism without the parent-compound metabolism step.",
      "Induction of BDNF and NGF expression in the hippocampus after sustained administration, paralleling the parent-compound effects with a different pharmacokinetic time-course.",
      "Direct anxiolytic effects in animal stress models, attributed to modulation of stress-response signalling and possibly enkephalin-system interaction.",
      "Antioxidant effects through upregulation of endogenous antioxidant defences, contributing to neuroprotection in oxidative-stress models.",
      "Anti-apoptotic effects in neuronal preparations exposed to ischaemic and excitotoxic stress.",
    ],
    benefits: [
      "Anxiolytic effects in animal stress paradigms with similar profile to Noopept but cleaner pharmacokinetics.",
      "Antiamnestic effects in scopolamine-induced amnesia models — preservation of learning under cholinergic blockade.",
      "Neuroprotective effects in ischaemic and oxidative-stress models.",
      "Memory consolidation support in animal learning paradigms.",
      "Useful as a mechanistic probe for the Noopept pharmacology without the parent-compound metabolism variable.",
      "Endogenous molecule — partial safety floor from the fact that the brain produces and tolerates it constitutively.",
    ],
    dosing: [
      {
        route: "Intranasal / oral / parenteral (research)",
        dosage: "Microgram to milligram range in animal protocols",
        frequency: "Variable across published research",
        duration: "Short courses in most studies",
        notes:
          "Direct administration produces a different pharmacokinetic profile from Noopept-derived CPG.",
      },
    ],
    routes: [
      "Intranasal administration in some research protocols, exploiting the same nose-to-brain pathway as Semax.",
      "Oral administration is feasible because the molecule is small and cyclic, conferring partial protection against gut proteases.",
      "Parenteral routes used in animal research.",
    ],
    safetyCommon: [
      "Generally well-tolerated in animal research at studied doses",
      "The endogenous status of the molecule provides a partial safety floor; the body produces and metabolises it constitutively",
    ],
    safetyRare: [
      "Long-term safety data outside Russian research is sparse",
      "Pharmacological doses substantially above endogenous concentrations have not been characterised for long-term effects",
    ],
    contraindications: [
      "Not authorised for human use",
      "Pregnancy and lactation — no controlled data",
    ],
    studies: [
      {
        title: "Cycloprolylglycine as the active metabolite of Noopept",
        summary:
          "Pharmacokinetic dissection demonstrating that Noopept is rapidly hydrolysed to CPG in vivo, and that direct CPG administration reproduces a substantial portion of the parent compound's behavioural effects.",
        source: "V. V. Zakusov Institute, peer-reviewed",
        year: 2006,
      },
      {
        title: "Anxiolytic effects of CPG in animal stress paradigms",
        summary:
          "Russian neuropharmacology research demonstrating anxiolytic effects in elevated plus-maze and open-field paradigms following direct CPG administration, comparable in magnitude to Noopept administered at metabolically equivalent doses.",
        source: "Russian neuropharmacology literature",
        year: 2010,
      },
      {
        title: "CPG neuroprotection in oxidative-stress models",
        summary:
          "Upregulation of endogenous antioxidant enzyme activity and reduction of lipid-peroxidation markers in brain-tissue preparations exposed to oxidative challenge in the presence of CPG.",
        source: "Peer-reviewed pharmacology literature",
        year: 2013,
      },
    ],
    faqs: [
      {
        q: "How is CPG different from Noopept?",
        a: "Noopept is the orally administered parent compound; CPG is its principal active metabolite. The two share most of the cognitive and anxiolytic pharmacology, but the pharmacokinetics differ — Noopept administration produces a metabolite-dominated effect profile, while direct CPG administration produces a cleaner pharmacokinetic picture without the parent-compound transformation step.",
      },
      {
        q: "Why use CPG instead of Noopept?",
        a: "For research designs requiring a cleaner mechanistic probe of the CPG-mediated pharmacology, direct administration is preferable to working through the parent compound. For research designs requiring an orally bioavailable cognitive enhancer with a longer published track record, Noopept is the standard choice.",
      },
      {
        q: "Is CPG safer because it's endogenous?",
        a: "Endogenous status confers a partial safety floor — the body produces and tolerates the molecule constitutively. It does not, however, mean that pharmacological administration at supraphysiological concentrations is safe by default. Long-term safety at research doses has not been comprehensively characterised.",
      },
      {
        q: "Can CPG and Noopept be combined?",
        a: "Mechanistically the combination is largely redundant — Noopept already produces CPG-mediated effects via its metabolism. Direct CPG addition to a Noopept protocol would primarily change the pharmacokinetic time-course rather than the underlying pharmacology.",
      },
    ],
    related: ["noopept", "semax", "selank"],
    keywords: [
      "Cycloprolylglycine",
      "CPG peptide",
      "Noopept metabolite",
      "endogenous cognitive dipeptide",
      "cyclo Pro Gly research",
    ],
    tags: ["bdnf-inducer", "ngf-inducer", "russian-origin", "oral-active"],
    lastReviewed: "2026-05-16",
    pubchemCid: 126154,
  },
];

export function getPeptideBySlug(slug: string): Peptide | undefined {
  return peptides.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return peptides.map((p) => p.slug);
}

export function getRelatedPeptides(slug: string, limit = 3): Peptide[] {
  const p = getPeptideBySlug(slug);
  if (!p) return [];
  return p.related
    .map((s) => getPeptideBySlug(s))
    .filter((x): x is import("@/types/peptide").Peptide => Boolean(x))
    .slice(0, limit);
}
