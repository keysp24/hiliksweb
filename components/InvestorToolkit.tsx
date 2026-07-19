'use client';

import Link from 'next/link';
import Reveal from './Reveal';

type ToolkitItem = {
  title: string;
  desc: string;
  href: string;
  external?: boolean;
  icon: string;
};

export default function InvestorToolkit({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  items: ToolkitItem[];
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
        {lead && (
          <Reveal as="p" className="sec-lead" style={{ maxWidth: 720 }}>
            {lead}
          </Reveal>
        )}
        <div className="inv-toolkit-grid">
          {items.map((item, i) => {
            const Card = (
              <div className="inv-toolkit-card">
                <span className="inv-toolkit-shimmer" aria-hidden />
                <div className="inv-toolkit-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="inv-toolkit-link">
                  {item.external ? 'View on BSE →' : 'Explore →'}
                </span>
              </div>
            );

            return (
              <Reveal key={item.title} delay={i * 70}>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inv-toolkit-linkwrap"
                  >
                    {Card}
                  </a>
                ) : (
                  <Link href={item.href} className="inv-toolkit-linkwrap">
                    {Card}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
