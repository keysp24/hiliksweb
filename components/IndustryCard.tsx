import Link from 'next/link';
import IndustryGlyph from './IndustryGlyph';
import type { Vertical } from '@/lib/site';

export default function IndustryCard({
  v,
  index,
  showBlurb = true,
  minHeight,
  href,
}: {
  v: Vertical;
  index?: number;
  showBlurb?: boolean;
  minHeight?: number;
  href?: string;
}) {
  const card = (
    <div
      className={`icard ${v.flagship ? 'flag' : ''}`}
      style={{
        ['--ac' as string]: `var(${v.accentVar})`,
        ...(minHeight ? { minHeight } : {}),
      }}
    >
      <IndustryGlyph slug={v.slug} />
      <span className="idx mono">{v.flagship ? 'FLAGSHIP' : String((index ?? 0) + 1).padStart(2, '0')}</span>
      <span className="lbl mono">{v.name}</span>
      <h4>{v.name}</h4>
      {showBlurb && <p>{v.blurb}</p>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="icard-tilt" data-c style={{ textDecoration: 'none', color: 'inherit' }}>
        {card}
      </Link>
    );
  }

  return card;
}
