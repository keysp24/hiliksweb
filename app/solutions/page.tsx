import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import AIBand from '@/components/AIBand';
import { capabilities } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Core technology capabilities — Digital Engineering, Enterprise Applications, Systems Integration, AI & Analytics, Intelligent Automation, Managed Services, Infrastructure & Monitoring, Data & Platforms.',
};

const principles = [
  { n: '01', t: 'Engineering-led', d: 'Real engineering depth — we build the core, not just integrate around it.' },
  { n: '02', t: 'Domain-grounded', d: 'Every capability is tuned to the vertical it serves, from rail to utilities.' },
  { n: '03', t: 'AI woven in', d: 'AI is embedded through delivery — predictive, intelligent, agentic — not bolted on.' },
  { n: '04', t: 'Built to operate', d: 'Designed for 24×7 operations, resilience and measurable outcomes.' },
];

export default function SolutionsPage() {
  return (
    <div style={{ ['--accent' as string]: 'var(--orange)' }}>
      <PageHero
        crumbs={[{ label: 'Solutions' }]}
        eyebrow="Core Technology Capabilities"
        title="Horizontal depth across every vertical"
        lead="Eight engineering and enterprise-technology capabilities Hiliks brings to each industry — from embedded systems and enterprise platforms to AI, automation, data and managed operations."
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="sec-num">The capabilities</Reveal>
          <Reveal as="h2" className="sec-title">A full-stack capability set</Reveal>
          <Reveal as="p" className="sec-lead">
            Each capability links to a detailed practice page. Together they cover the whole lifecycle —
            engineer, integrate, intelligence, automate, run.
          </Reveal>
          <div className="cap-grid">
            {capabilities.map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}`} className={`cap ${c.isAi ? 'is-ai' : ''}`} data-c>
                <span className="n mono">{c.n}</span>
                <span className="cico"><svg viewBox="0 0 24 24"><path d={c.icon} /></svg></span>
                <h5>{c.name}</h5>
                <p>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <AIBand />
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">How we engage</Reveal>
          <Reveal as="h2" className="sec-title">Principles behind every capability</Reveal>
          <div className="feat-grid">
            {principles.map((p, i) => (
              <Reveal key={p.n} className="feat" delay={i * 40}>
                <span className="n mono">{p.n}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Find the right solution." primaryLabel="Talk to Experts" secondaryLabel="Explore Industries" secondaryHref="/industries" />
    </div>
  );
}
