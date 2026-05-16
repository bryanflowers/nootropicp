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
      "The pharmacology is the same as Selank: anxiolytic effects via enkephalinase inhibition, BDNF modulation, and immunomodulation. The practical advantage is fewer doses per day for equivalent or greater effect.",
      "It is studied alongside the parent compound in laboratory research as a longer-acting research tool for studying anxiety, stress resilience, and the enkephalin system.",
    ],
    history: [
      "Developed by the Russian Academy of Sciences peptide programme as a stability-optimised analogue of Selank.",
      "Studied in published research alongside the parent compound from the mid-2000s onwards.",
      "Remains a research chemical with no clinical authorisation.",
    ],
    mechanism: [
      "Identical to Selank: enkephalinase inhibition, modulation of GABAergic tone, BDNF induction, immunomodulation.",
      "Terminal modifications block aminopeptidase and carboxypeptidase cleavage, extending half-life.",
    ],
    benefits: [
      "Extended duration of action versus parent Selank.",
      "Equivalent anxiolytic, anti-asthenic, and immunomodulatory effects.",
      "Suitable for less frequent intranasal dosing.",
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
    safetyCommon: ["Mild nasal irritation", "Occasional headache"],
    safetyRare: ["Sparse analogue-specific long-term safety data"],
    contraindications: ["Not authorised for human use", "Pregnancy/lactation — no data"],
    studies: [
      {
        title: "Pharmacokinetic comparison of Selank and N-acetyl analogue",
        summary: "Extended half-life and bioavailability for the protected analogue.",
        source: "Russian peptide pharmacology literature",
        year: 2013,
      },
    ],
    faqs: [
      {
        q: "How does N-Acetyl Selank compare with Selank?",
        a: "Same pharmacology — anxiolysis via enkephalin modulation, BDNF induction, immunomodulation — with significantly extended duration of action per dose.",
      },
      {
        q: "Is it more potent than Selank?",
        a: "Per-dose potency is reported as equivalent or moderately higher in research models; the main practical difference is duration rather than peak effect.",
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
