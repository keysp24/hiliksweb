import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join engineering-led teams across India and the GCC. Build technology for critical industries — work that demands real engineering depth and domain fluency.',
};

const tracks = [
  { n: '01', t: 'Rail Systems Engineering', d: 'Signaling, telecom, OCC and smart-rail systems.' },
  { n: '02', t: 'Enterprise & Platforms', d: 'ERP, ECM, integration and data platforms.' },
  { n: '03', t: 'AI & Automation', d: 'Analytics, computer vision and intelligent automation.' },
  { n: '04', t: 'Managed Operations', d: 'L1/L2/L3 operations and 24×7 support.' },
];

const values = [
  { t: 'Engineering First', d: 'We solve problems with code, systems thinking and domain depth — not slideware.' },
  { t: 'Domain Fluency', d: 'We hire for curiosity about industries, not just frameworks. Railways, telecom, energy — we speak the language.' },
  { t: 'Ownership', d: 'Small teams, clear outcomes, no blame culture. You own the stack and the result.' },
  { t: 'Continuous Learning', d: 'Critical industries evolve fast. We invest in certifications, conferences and hands-on labs.' },
];

const benefits = [
  'Competitive compensation & performance bonuses',
  'Health coverage for you and dependents',
  'Certification sponsorship (cloud, rail safety, AI)',
  'Flexible work arrangements',
  'Travel opportunities (India + GCC)',
  'Engineering-led culture — no bureaucracy',
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Careers' }]}
        eyebrow="Careers"
        title="Engineering-led teams across India and the GCC"
        lead="We build technology for critical industries — work that demands real engineering depth, domain fluency, and a bias for action."
      />

      {/* Practice tracks */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="sec-num">Practice Tracks</Reveal>
          <Reveal as="h2" className="sec-title">Where you can make impact</Reveal>
          <div className="feat-grid">
            {tracks.map((t, i) => (
              <Reveal key={t.n} className="feat" delay={i * 40}>
                <span className="n mono">{t.n}</span>
                <h4>{t.t}</h4>
                <p>{t.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Our Culture</Reveal>
          <Reveal as="h2" className="sec-title">How we work</Reveal>
          <div className="feat-grid">
            {values.map((v, i) => (
              <Reveal key={v.t} className="feat" delay={i * 40}>
                <h4>{v.t}</h4>
                <p>{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + apply */}
      <section className="band">
        <div className="wrap split-2">
          <Reveal>
            <div className="sec-num">Benefits</div>
            <h2 className="sec-title">What you get</h2>
            <ul style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, color: 'var(--muted)', fontWeight: 300, fontSize: 15 }}>
                  <span style={{ color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: 13, minWidth: 20 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="sec-num">Apply</div>
            <h2 className="sec-title">Send your profile</h2>
            <p className="sec-lead" style={{ marginTop: 16 }}>
              We review every application personally. Tell us which practice track interests you and include a brief note on a problem you have solved.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted-2)', display: 'block', marginBottom: 6 }}>
                  Email
                </span>
                <a href={`mailto:${company.email}`} style={{ color: 'var(--orange)', fontSize: 16, fontWeight: 500 }}>
                  {company.email}
                </a>
              </div>
              <div>
                <span className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted-2)', display: 'block', marginBottom: 6 }}>
                  Locations
                </span>
                <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, fontSize: 15 }}>
                  {company.city}<br />
                  {company.offices}
                </p>
              </div>
            </div>
            <Link
              href={`mailto:${company.email}?subject=Career%20Inquiry%20—%20Hiliks%20Technologies`}
              className="btn btn-primary"
              style={{ marginTop: 32 }}
              data-c
            >
              Send Your Profile →
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Build critical-industry technology with us." primaryLabel="Get in Touch" secondaryLabel="About Hiliks" secondaryHref="/about" />
    </>
  );
}
