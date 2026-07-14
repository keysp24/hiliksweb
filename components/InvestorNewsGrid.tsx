'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function InvestorNewsGrid({
  eyebrow,
  title,
  viewAllHref,
  items,
}: {
  eyebrow: string;
  title: string;
  viewAllHref: string;
  items: { tag: string; title: string; date: string; summary: string; href: string; image: string }[];
}) {
  return (
    <section className="band light">
      <div className="wrap">
        <div className="inv-section-head">
          <div>
            <Reveal as="div" className="sec-num">
              {eyebrow}
            </Reveal>
            <Reveal as="h2" className="sec-title">
              {title}
            </Reveal>
          </div>
          <Reveal>
            <Link href={viewAllHref} className="inv-view-all">
              View All News →
            </Link>
          </Reveal>
        </div>

        <div className="inv-news-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Link href={item.href} className="inv-news-card">
                <div className="inv-news-image">
                  <img src={item.image} alt="" loading="lazy" />
                </div>
                <div className="inv-news-body">
                  <span className="inv-news-tag mono">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <span className="inv-news-date mono">{item.date}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
