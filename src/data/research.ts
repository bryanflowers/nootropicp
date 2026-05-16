export interface ResearchSummary {
  slug: string;
  title: string;
  excerpt: string;
  keywords: string[];
  body: string[];
}

export const researchSummaries: ResearchSummary[] = [
  {
    slug: "intranasal-peptide-delivery",
    title: "Intranasal peptide delivery — why the nose-to-brain route matters",
    excerpt:
      "The published case for intranasal administration as the dominant route in nootropic peptide research, and the limits of the nose-to-brain pathway.",
    keywords: ["intranasal peptide delivery", "nose to brain peptide", "Semax intranasal"],
    body: [
      "Small peptides like Semax, Selank, and DSIP face two obstacles to central nervous system action: rapid plasma proteolysis after parenteral administration, and the difficulty of crossing the blood-brain barrier. The intranasal route addresses both at once. Peptides applied to the nasal mucosa can be transported directly to the CNS via the olfactory and trigeminal nerve pathways, bypassing the bloodstream almost entirely.",
      "The mechanism is anatomically well-characterised. Olfactory receptor neurons project directly from the nasal epithelium into the olfactory bulb, providing a continuous extracellular pathway from the nose to the forebrain. Trigeminal nerve endings in the nasal mucosa provide a parallel route to the brainstem. Both pathways have been visualised in animal studies using radiolabelled peptides.",
      "The route is not without limits. Bioavailability is sub-parenteral — most studies estimate only a small fraction of the applied dose reaches the brain. Inter-individual variability is high, depending on nasal mucosa condition, vehicle formulation, and head positioning during administration. Volume per dose is constrained by the small surface area of the olfactory epithelium.",
      "These limitations explain why intranasal protocols typically use small, repeated doses rather than single large administrations, and why peptide stability in the vehicle (saline pH, preservative choice, refrigeration) matters as much as the dose itself for reproducibility of research effects.",
    ],
  },
  {
    slug: "bdnf-and-cognitive-peptides",
    title: "BDNF and the cognitive peptide family — the central mechanistic theme",
    excerpt:
      "BDNF induction is the common molecular endpoint shared by the most-studied nootropic peptides. What that means for research interpretation.",
    keywords: ["BDNF nootropic peptide", "BDNF cognition", "Semax BDNF mechanism"],
    body: [
      "Brain-derived neurotrophic factor (BDNF) sits at the centre of activity-dependent synaptic plasticity. Long-term potentiation, the cellular correlate of memory formation, requires BDNF release. Mature dendritic spines depend on BDNF for stabilisation. Depressive states are associated with reduced BDNF expression; antidepressant treatment, regardless of class, converges on BDNF upregulation.",
      "Against that backdrop, the discovery that several Russian-developed peptides — Semax, Selank, Noopept — share BDNF induction as a common mechanistic endpoint is significant. It places these compounds within a well-characterised molecular framework rather than positioning them as exotic and isolated agents.",
      "The published data show consistent BDNF mRNA and protein increases in the hippocampus and prefrontal cortex within hours of administration, persisting for 24+ hours after a single dose. Repeated administration produces sustained elevations across the course of a research protocol.",
      "There is, however, a translational caveat. BDNF induction is a molecular endpoint, not a clinical one. Whether the magnitude of induction produced by a research peptide is sufficient to translate into measurable cognitive effects depends on baseline, duration, brain region selectivity, and downstream factors that vary across studies. The molecular signal is consistent; the cognitive translation is more variable.",
    ],
  },
  {
    slug: "neurogenesis-research-overview",
    title: "Adult neurogenesis and synaptogenesis research peptides",
    excerpt:
      "Dihexa, FGL, and the broader research effort to develop small-molecule agonists of the pathways that drive adult neural plasticity.",
    keywords: ["adult neurogenesis peptide", "Dihexa synaptogenesis", "FGL peptide research"],
    body: [
      "The discovery that the adult mammalian brain retains some capacity for neurogenesis and substantial capacity for synaptogenesis transformed cognitive-pharmacology research. If new synapses can form throughout life, and if the molecular triggers can be identified, then small-molecule agonists of those pathways become a coherent therapeutic strategy.",
      "Two pathways have dominated the resulting research peptide literature. HGF/c-Met signalling, principally explored through Dihexa, drives dendritic spine formation at picomolar concentrations in published work. FGFR1 signalling, principally explored through the NCAM-mimetic FGL peptide, drives neurite outgrowth and synapse formation. Both pathways converge downstream on PI3K-Akt and MAPK signalling cascades that overlap with BDNF-mediated plasticity.",
      "The strength of these compounds is mechanistic specificity. Unlike the broad BDNF inducers, Dihexa and FGL act on defined receptors with well-characterised downstream signalling. The weakness is the corresponding theoretical safety concern: c-Met and FGFR1 are both involved in oncogenic signalling when chronically activated, and the long-term implications of sustained pharmacological agonism are not characterised in the available literature.",
      "The current state of the field is therefore preclinical: strong mechanistic data, no completed human trials of either compound, and unresolved safety questions that bear directly on whether these compounds will progress to clinical research.",
    ],
  },
  {
    slug: "peptides-and-anxiety-research",
    title: "Peptide-based anxiolytics — Selank and the enkephalin system",
    excerpt:
      "Why endogenous opioid peptide modulation offers a route to anxiolysis without the sedation, dependence, or cognitive impairment of GABA-A approaches.",
    keywords: ["peptide anxiolytic", "Selank enkephalin", "non-sedating anxiolytic research"],
    body: [
      "Conventional anxiolytic drug development has been dominated by GABA-A receptor positive modulators — the benzodiazepines and their structural relatives. These compounds are effective but carry a well-characterised burden of sedation, motor impairment, anterograde amnesia, dependence, and rebound anxiety on discontinuation.",
      "An alternative approach is to leave the GABA-A receptor alone and instead elevate endogenous opioid peptide tone — the enkephalins and endorphins that are constitutively released and degraded throughout the CNS. By inhibiting the enzymes that degrade enkephalins (the enkephalinases), the active life of these endogenous anxiolytic peptides can be extended without administering an exogenous opioid agonist.",
      "Selank, the prototypical peptide of this class, has been shown in published research to inhibit enkephalinase activity in a dose-dependent manner, producing measurable anxiolytic effects in animal models that compare favourably with benzodiazepines without the sedation or amnesia.",
      "The translational data is most developed in the Russian Federation, where Selank has been studied in human anxiety populations and is approved for clinical use. Western peer-reviewed human anxiety data is sparser, and the comparative effectiveness against current first-line anxiety treatments (SSRIs and CBT) has not been comprehensively studied.",
    ],
  },
  {
    slug: "sleep-cognition-dsip-review",
    title: "Sleep, cognition, and the case for DSIP-class peptides",
    excerpt:
      "Memory consolidation is downstream of sleep architecture. Peptides that modulate slow-wave sleep have a coherent — if subtle — case in cognitive research.",
    keywords: ["DSIP cognitive", "sleep memory consolidation", "slow wave sleep peptide"],
    body: [
      "Memory consolidation is not optional. The transfer of newly encoded information from hippocampal short-term storage to neocortical long-term storage occurs predominantly during slow-wave sleep, with declarative memory particularly dependent on the delta-wave activity that defines stage N3. Sleep architecture, in other words, is causally upstream of long-term cognitive performance.",
      "This places sleep-modulating peptides in an interesting position. They do not directly enhance cognition during waking performance; they enable the consolidation step that determines whether daytime learning becomes long-term memory.",
      "DSIP is the most-studied peptide in this category. Despite its name — delta sleep-inducing peptide — its acute sedative effects in published research are modest. Its more consistent effects are on sleep architecture: modest increases in slow-wave duration, attenuated stress-induced sleep disruption, and improved sleep continuity. These changes are small in any individual subject but consistent enough to be detectable in pooled analyses.",
      "The implication for cognitive research is that protocols studying learning and memory should consider sleep architecture as a variable. Whether DSIP itself is the best tool for that modulation remains a research question — the available data is suggestive rather than conclusive — but the underlying logic of including sleep architecture as a consolidation-relevant variable is firm.",
    ],
  },
];

export function getResearchBySlug(slug: string) {
  return researchSummaries.find((r) => r.slug === slug);
}
