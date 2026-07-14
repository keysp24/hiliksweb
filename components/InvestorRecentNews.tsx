'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function InvestorRecentNews({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { tag: string; title: string; date: string; href: string }[];
}) {
  return (
    <section className="band">
      <div className="wrap">
        <Reveal as="div" className="sec-num">
          {eyebrow}
        </Reveal>
        <Reveal as="h2" className="sec-title">
          {title}
        </Reveal>
        <div className="inv-recent-list">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <Link href={item.href} className="inv-recent-item">
                <span className="inv-recent-tag mono">{item.tag}</span>
                <span className="inv-recent-title">{item.title}</span>
                <span className="inv-recent-date mono">{item.date}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
