import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import IndustryCard from '@/components/IndustryCard';
import { verticals } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Verticalized, engineering-led practices for critical industries — Railways (flagship), Telecom, BFSI, Public Sector, Real Estate, Oil & Gas and Energy & Utilities.',
};

export default function IndustriesPage() {
  const flagship = verticals.find((v) => v.flagship)!;
  const rest = verticals.filter((v) => !v.flagship);

  return (
    <div style={{ ['--accent' as string]: 'var(--orange)' }}>
      <PageHero
        crumbs={[{ label: 'Industries' }]}
        eyebrow="Industries We Serve"
        title="Verticalized practices for critical industries"
        lead="Domain-focused business units — each fluent in its industry, all engineering-led. Verticals are not equal: Railways leads as our flagship and the proof of our approach."
      />

      {/* FLAGSHIP HIGHLIGHT */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="sec-num">Flagship Business Unit</Reveal>
          <Reveal className="flagship">
            <div className="glow" aria-hidden />
            <div className="flagship-inner">
              <div className="flagship-left">
                <span className="flag-tag mono"><i />{flagship.unit}</span>
                <h3>{flagship.unit}</h3>
                <p className="tag mono">{flagship.tagline}</p>
                <p className="body">{flagship.blurb}</p>
                <Link href={`/industries/${flagship.slug}`} className="flag-cta" data-c>Explore Railways &rarr;</Link>
              </div>
              <div className="rail-caps">
                {flagship.capabilities.map((cap) => (
                  <Link key={cap.n} href={`/industries/${flagship.slug}`} className="rail-cap" data-c>
                    <span className="n mono">{cap.n}</span>
                    <span className="t">{cap.t}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OTHER VERTICALS */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">More verticals</Reveal>
          <Reveal as="h2" className="sec-title">Engineering-led practices across critical industries</Reveal>
          <div className="card-grid">
            {rest.map((v, i) => (
              <Reveal key={v.slug} delay={i * 40}>
                <IndustryCard v={v} index={i + 1} href={`/industries/${v.slug}`} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Find the practice that speaks your industry." secondaryLabel="View Capabilities" secondaryHref="/solutions" />
    </div>
  );
}
