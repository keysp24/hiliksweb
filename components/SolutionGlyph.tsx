// Animated line-art glyph per solution capability. Pure SVG + CSS.
// Reuses the same animation classes as IndustryGlyph (.igfx svg styling).

type Props = { slug: string; className?: string };

export default function SolutionGlyph({ slug, className = '' }: Props) {
  const inner = (() => {
    switch (slug) {
      case 'digital-engineering':
        return (
          <>
            <rect x="30" y="30" width="60" height="60" rx="4" />
            <path d="M44 48 L36 60 L44 72" />
            <path d="M76 48 L84 60 L76 72" />
            <line className="needle" x1="66" y1="44" x2="54" y2="76" />
            <circle className="blinkg" cx="60" cy="22" r="4" />
          </>
        );
      case 'enterprise-applications':
        return (
          <>
            <rect x="26" y="34" width="32" height="24" rx="2" />
            <rect className="win w1" x="62" y="34" width="32" height="24" rx="2" />
            <rect className="win w2" x="26" y="64" width="32" height="24" rx="2" />
            <rect className="win w3" x="62" y="64" width="32" height="24" rx="2" />
            <line x1="58" y1="46" x2="62" y2="46" />
            <line x1="42" y1="58" x2="42" y2="64" />
          </>
        );
      case 'systems-integration':
        return (
          <>
            <circle cx="30" cy="40" r="8" />
            <circle cx="90" cy="40" r="8" />
            <circle cx="60" cy="86" r="8" />
            <circle className="blinkg" cx="60" cy="56" r="5" fill="#fff" stroke="none" />
            <path className="wave" d="M34 46 L56 54" />
            <path className="wave" d="M86 46 L64 54" />
            <path className="wave" d="M60 64 L60 78" />
          </>
        );
      case 'ai-analytics':
        return (
          <>
            <circle className="ring r1" cx="60" cy="60" r="16" />
            <circle className="ring r2" cx="60" cy="60" r="16" />
            <circle cx="60" cy="60" r="6" fill="#fff" stroke="none" />
            <circle className="blinkg b1" cx="30" cy="36" r="4" />
            <circle className="blinkg b2" cx="92" cy="44" r="4" />
            <circle className="blinkg b3" cx="36" cy="88" r="4" />
            <circle className="blinkg" cx="88" cy="86" r="4" />
            <path d="M34 38 L54 56M88 46 L66 57M40 86 L56 66M84 84 L65 65" />
          </>
        );
      case 'intelligent-automation':
        return (
          <>
            <circle cx="60" cy="60" r="30" strokeDasharray="6 8" className="spin-slow" />
            <circle cx="60" cy="60" r="14" />
            <path className="check" d="M50 60 l7 7 l14 -16" />
            <circle className="blinkg" cx="60" cy="24" r="4" />
          </>
        );
      case 'managed-services':
        return (
          <>
            <path d="M40 30 h-12 v60 h12M80 30 h12 v60 h-12" />
            <circle className="blinkg b1" cx="50" cy="60" r="5" />
            <circle className="blinkg b2" cx="60" cy="60" r="5" />
            <circle className="blinkg b3" cx="70" cy="60" r="5" />
          </>
        );
      case 'infrastructure-monitoring':
        return (
          <>
            <rect x="28" y="32" width="64" height="16" rx="2" />
            <rect x="28" y="56" width="64" height="16" rx="2" />
            <circle className="blinkg b1" cx="40" cy="40" r="3" fill="#fff" stroke="none" />
            <circle className="blinkg b2" cx="40" cy="64" r="3" fill="#fff" stroke="none" />
            <path className="wave" d="M30 88 L46 88 L52 80 L60 96 L68 84 L74 88 L90 88" />
          </>
        );
      case 'data-platforms':
        return (
          <>
            <ellipse cx="60" cy="36" rx="28" ry="10" />
            <path d="M32 36 v20 c0 5.5 12.5 10 28 10 s28 -4.5 28 -10 v-20" />
            <path d="M32 56 v20 c0 5.5 12.5 10 28 10 s28 -4.5 28 -10 v-20" />
            <circle className="blinkg" cx="60" cy="36" r="3" fill="#fff" stroke="none" />
          </>
        );
      default:
        return <circle cx="60" cy="60" r="36" strokeDasharray="40 14" />;
    }
  })();

  return (
    <div className={`igfx ${className}`}>
      <svg viewBox="0 0 120 120" role="img" aria-hidden>
        {inner}
      </svg>
    </div>
  );
}
