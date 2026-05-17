import type { Peptide } from "@/types/peptide";

const CATEGORY_PALETTES: Record<
  string,
  { from: string; to: string; ring: string; dot: string }
> = {
  "Cognitive Enhancement": { from: "#4338ca", to: "#7c3aed", ring: "#a5b4fc", dot: "#c7d2fe" },
  Neuroprotection: { from: "#0f766e", to: "#0e7490", ring: "#5eead4", dot: "#a5f3fc" },
  "Anxiolytic / Mood": { from: "#7c3aed", to: "#db2777", ring: "#f0abfc", dot: "#fbcfe8" },
  "Sleep & Recovery": { from: "#1e1b4b", to: "#312e81", ring: "#818cf8", dot: "#a5b4fc" },
  Neurogenesis: { from: "#15803d", to: "#0f766e", ring: "#86efac", dot: "#bbf7d0" },
};

const FALLBACK = CATEGORY_PALETTES["Cognitive Enhancement"];

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Schematic peptide visual built procedurally from the slug + category palette.
 * Renders a "chain" of n nodes connected by curves, where n is derived from the
 * sequence length where available, otherwise the slug hash.
 */
export function MoleculeCard({ peptide }: { peptide: Peptide }) {
  const palette = CATEGORY_PALETTES[peptide.category] ?? FALLBACK;
  const seed = hashSlug(peptide.slug);
  const seqLen = peptide.sequence ? peptide.sequence.split("-").length : 0;
  const nodes = Math.max(3, Math.min(12, seqLen || ((seed % 8) + 4)));

  const width = 800;
  const height = 280;
  const padX = 80;
  const padY = 90;
  const innerW = width - padX * 2;
  const dx = innerW / Math.max(1, nodes - 1);

  // Build a deterministic gentle wave path through n equally spaced x positions.
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < nodes; i++) {
    const x = padX + dx * i;
    const amplitude = 30 + ((seed >> (i % 8)) & 0xf);
    const wave = Math.sin((i / Math.max(1, nodes - 1)) * Math.PI * 2 + (seed % 7)) * amplitude;
    const y = height / 2 + wave;
    points.push({ x, y });
  }

  // Bezier path through the points.
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const cur = points[i];
    const cx1 = prev.x + (cur.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (cur.x - prev.x) / 2;
    const cy2 = cur.y;
    path += ` C ${cx1} ${cy1}, ${cx2} ${cy2}, ${cur.x} ${cur.y}`;
  }

  const gradId = `mol-grad-${peptide.slug}`;
  const glowId = `mol-glow-${peptide.slug}`;
  const sequenceLabel = peptide.sequence ?? peptide.aliases?.[0] ?? peptide.name;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/60">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Schematic peptide chain for ${peptide.name}`}
        className="block w-full"
      >
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={palette.from} />
            <stop offset="1" stopColor={palette.to} />
          </linearGradient>
          <radialGradient id={glowId} cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor={palette.ring} stopOpacity="0.6" />
            <stop offset="1" stopColor={palette.ring} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={width} height={height} fill={`url(#${gradId})`} />
        <rect width={width} height={height} fill={`url(#${glowId})`} />

        {/* connecting bezier chain */}
        <path d={path} stroke={palette.dot} strokeOpacity="0.6" strokeWidth="3" fill="none" />

        {/* nodes */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={18} fill={palette.dot} fillOpacity="0.18" />
            <circle cx={p.x} cy={p.y} r={11} fill={palette.dot} stroke={palette.ring} strokeWidth="2" />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              fontFamily="ui-sans-serif, system-ui"
              fontSize="11"
              fontWeight="700"
              fill={palette.from}
            >
              {i + 1}
            </text>
          </g>
        ))}

        {/* category label */}
        <text
          x={padX}
          y={padY - 30}
          fontFamily="ui-sans-serif, system-ui"
          fontSize="14"
          fontWeight="600"
          fill={palette.dot}
          opacity="0.85"
          letterSpacing="2"
        >
          {peptide.category.toUpperCase()}
        </text>

        {/* peptide name */}
        <text
          x={padX}
          y={padY}
          fontFamily="ui-sans-serif, system-ui"
          fontSize="36"
          fontWeight="800"
          fill="#ffffff"
        >
          {peptide.name}
        </text>

        {/* sequence / alias */}
        <text
          x={padX}
          y={height - 40}
          fontFamily="ui-monospace, monospace"
          fontSize="14"
          fill={palette.dot}
          opacity="0.9"
        >
          {sequenceLabel}
        </text>

        {/* nodes count badge */}
        <text
          x={width - padX}
          y={height - 40}
          textAnchor="end"
          fontFamily="ui-sans-serif, system-ui"
          fontSize="13"
          fontWeight="600"
          fill={palette.dot}
          opacity="0.7"
        >
          {nodes} residue{nodes === 1 ? "" : "s"} (schematic)
        </text>
      </svg>
    </div>
  );
}
