'use client';
import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

export type MegaItem = {
  name: string;
  href: string;
  blurb: string;
  icon: ReactNode;
  /** CSS var name for the per-item accent colour, e.g. '--v-rail'. */
  accentVar?: string;
};

/**
 * Presentational mega-menu panel: a rich grid of items (icon + name + blurb)
 * with a "view all" link. Open/close state and positioning are owned by Nav;
 * this component only renders content. The panel stays in the DOM and is
 * shown/hidden via CSS (visibility) so the links are crawlable and the
 * open/close can animate.
 */
export default function MegaMenu({
  panelId,
  items,
  viewAllHref,
  viewAllLabel,
  onItem,
}: {
  panelId: string;
  items: MegaItem[];
  viewAllHref: string;
  viewAllLabel: string;
  /** Called when any link inside the panel is activated (closes the panel). */
  onItem: () => void;
}) {
  return (
    <div className="mega-panel" id={panelId} role="region" aria-label={viewAllLabel}>
      <div className="mega-grid">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="mega-item"
            data-c
            style={it.accentVar ? ({ ['--ac']: `var(${it.accentVar})` } as CSSProperties) : undefined}
            onClick={onItem}
          >
            <span className="mega-ico" aria-hidden>
              {it.icon}
            </span>
            <span className="mega-tx">
              <span className="mega-name">{it.name}</span>
              <span className="mega-blurb">{it.blurb}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link href={viewAllHref} className="mega-all" data-c onClick={onItem}>
        {viewAllLabel} &rarr;
      </Link>
    </div>
  );
}
