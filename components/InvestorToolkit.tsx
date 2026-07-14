'use client';

import Link from 'next/link';
import Reveal from './Reveal';

export default function InvestorToolkit({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: { title: string; desc: string; href: string; icon: string }[];
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
        <div className="inv-toolkit-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link href={item.href} className="inv-toolkit-card">
                <div className="inv-toolkit-icon">
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: item.icon }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="inv-toolkit-link">Explore →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
