import { PALETTES, OG_SIZE, paletteForCategory, type PaletteKey } from "./baseStyles";

interface OgCardProps {
  eyebrow: string;
  title: string;
  tagline?: string;
  footer?: string;
  palette?: PaletteKey;
  category?: string;
}

const SYSTEM_STACK =
  "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const MONO_STACK = "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Liberation Mono', monospace";

export function OgCard({
  eyebrow,
  title,
  tagline,
  footer,
  palette,
  category,
}: OgCardProps) {
  const key: PaletteKey = palette ?? paletteForCategory(category);
  const p = PALETTES[key];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: OG_SIZE.width,
        height: OG_SIZE.height,
        backgroundImage: `linear-gradient(135deg, ${p.from} 0%, ${p.via} 50%, ${p.to} 100%)`,
        color: "#ffffff",
        padding: 72,
        fontFamily: SYSTEM_STACK,
        position: "relative",
      }}
    >
      {/* Glow accent */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: 9999,
          backgroundImage: `radial-gradient(circle, ${p.accent}66 0%, ${p.accent}00 70%)`,
        }}
      />

      {/* Eyebrow */}
      <div
        style={{
          display: "flex",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 6,
          color: p.accent,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: title.length > 40 ? 64 : title.length > 24 ? 78 : 96,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: -1.5,
          maxWidth: 1040,
        }}
      >
        {title}
      </div>

      {/* Tagline */}
      {tagline && (
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            fontWeight: 400,
            lineHeight: 1.35,
            color: "#e2e8f0",
            maxWidth: 980,
          }}
        >
          {tagline}
        </div>
      )}

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          justifyContent: "space-between",
          alignItems: "flex-end",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -0.5,
            }}
          >
            NootropicPeptides<span style={{ color: p.accent }}>.co.uk</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 6,
              fontSize: 16,
              color: "#cbd5e1",
              fontFamily: MONO_STACK,
            }}
          >
            For laboratory research use only · not for human consumption
          </div>
        </div>
        {footer && (
          <div
            style={{
              display: "flex",
              fontSize: 16,
              color: p.accent,
              fontFamily: MONO_STACK,
              textAlign: "right",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
