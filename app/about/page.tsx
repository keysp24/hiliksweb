import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { whyHiliks, ecosystemStats, company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Hiliks',
  description:
    'A niche, engineering-led enterprise technology company for critical industries, delivering across India and the GCC — with a flagship Railways practice.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About' }]}
        eyebrow="About Hiliks"
        title="Engineering-led technology for critical industries"
        lead={`${company.legal} — a niche, engineering-led enterprise technology company for critical industries, delivering across India and the GCC, with a flagship Railways practice.`}
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stats">
            {ecosystemStats.map((s, i) => (
              <Reveal key={s.k} className="stat" delay={i * 50}>
                <div className="v">{s.v}{s.suffix}</div>
                <div className="k">{s.k}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Our principle</Reveal>
          <Reveal as="h2" className="sec-title">A niche partner, not a generalist</Reveal>
          <Reveal as="p" className="sec-lead">
            &ldquo;Hiliks is a niche, engineering-led enterprise technology company for critical industries &mdash; with a
            particularly strong Railways practice.&rdquo; Stronger and more believable than a railway company that also does IT.
            Domain focus, plus engineering-led delivery, plus enterprise depth.
          </Reveal>
          <div className="why-grid">
            {whyHiliks.map((w, i) => (
              <Reveal key={w.t} className="why" delay={i * 50}>
                <div className="ico">
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: w.icon }} />
                </div>
                <h5>{w.t}</h5>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Our Story</Reveal>
          <Reveal as="h2" className="sec-title">Niche by design, engineering-led by DNA</Reveal>
          <div className="feat-grid" style={{ marginTop: 36 }}>
            <Reveal className="feat" delay={0}>
              <span className="n mono">01</span>
              <h4>Founded for critical industries</h4>
              <p>Hiliks was built to serve sectors where failure is not an option — railways, telecom, energy, and public infrastructure.</p>
            </Reveal>
            <Reveal className="feat" delay={40}>
              <span className="n mono">02</span>
              <h4>Railways as our flagship proof</h4>
              <p>Our deepest practice in signaling, telecom and smart rail systems proves that engineering-led delivery wins in the field.</p>
            </Reveal>
            <Reveal className="feat" delay={80}>
              <span className="n mono">03</span>
              <h4>GCC + India footprint</h4>
              <p>Headquartered in Hyderabad, with delivery reach across the UAE, KSA and India — enterprise-grade, locally present.</p>
            </Reveal>
            <Reveal className="feat" delay={120}>
              <span className="n mono">04</span>
              <h4>Partnership, not volume</h4>
              <p>We choose depth over breadth. Small teams, clear outcomes, and long-term relationships with operators and enterprises.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand title="Partner with an engineering-led team." secondaryLabel="Explore Industries" secondaryHref="/industries" />
    </>
  );
}
