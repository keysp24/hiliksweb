'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function InvestorInfoGrid({
  eyebrow,
  title,
  links,
}: {
  eyebrow: string;
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <section className="band light">
      <div className="wrap">
        <Reveal as="div" className="sec-num">
          {eyebrow}
        </Reveal>
        <Reveal as="h2" className="sec-title">
          {title}
        </Reveal>
        <div className="inv-info-grid">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={i * 50}>
              <Link href={link.href} className="inv-info-tile">
                <span>{link.label}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
