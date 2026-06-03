import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Accordion from '@/components/Accordion';
import ProcessTimeline from '@/components/ProcessTimeline';
import IndustryGlyph from '@/components/IndustryGlyph';
import { verticals, capabilities } from '@/lib/site';
import { getIndustryContent } from '@/lib/content';

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  const c = getIndustryContent(slug);
  if (!v) return {};
  return { title: `${v.unit} — ${v.name}`, description: c?.heroLead ?? v.blurb };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  const c = getIndustryContent(slug);
  if (!v || !c) notFound();

  const related = capabilities.filter((cap) => c.relatedSolutions.includes(cap.slug));

  return (
    <div style={{ ['--accent' as string]: `var(${v.accentVar})` }}>
      <PageHero
        accentVar={v.accentVar}
        glyph={<IndustryGlyph slug={v.slug} className="glyph-hero" />}
        crumbs={[{ label: 'Industries', href: '/industries' }, { label: v.name }]}
        eyebrow={v.flagship ? 'Flagship Business Unit' : 'Industry Business Unit'}
        title={v.unit}
        tag={v.tagline}
        lead={c.heroLead}
      />

      {/* OVERVIEW + STAT RAIL */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap split-2 overview">
          <div>
            <Reveal as="div" className="sec-num">Overview</Reveal>
            <Reveal as="h2" className="sec-title">
              {v.flagship ? 'From the track to the operations centre.' : `Engineering-led delivery for ${v.name}.`}
            </Reveal>
            <Reveal className="prose">
              {c.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="stat-rail">
              {c.stats.map((s) => (
                <div key={s.label} className="sr">
                  <div className="v">{s.value}</div>
                  <div className="k">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">The challenge</Reveal>
          <Reveal as="h2" className="sec-title">What {v.name} operations are up against</Reveal>
          <div className="challenge-grid">
            {c.challenges.map((ch, i) => (
              <Reveal key={ch.title} className="challenge" delay={i * 40}>
                <span className="cn mono">{String(i + 1).padStart(2, '0')}</span>
                <h4>{ch.title}</h4>
                <p>{ch.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS (interactive accordion) */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">What we deliver</Reveal>
          <Reveal as="h2" className="sec-title">Engineering across the {v.name} lifecycle</Reveal>
          <Accordion items={c.offerings} variant="offering" />
        </div>
      </section>

      {/* APPROACH timeline */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">How we deliver</Reveal>
          <Reveal as="h2" className="sec-title">An engineering-led delivery approach</Reveal>
          <ProcessTimeline steps={c.approach} />
        </div>
      </section>

      {/* OUTCOMES + TECH */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Outcomes</Reveal>
          <Reveal as="h2" className="sec-title">What changes for your operation</Reveal>
          <div className="outcome-grid">
            {c.outcomes.map((o) => (
              <Reveal key={o.title} className="outcome">
                <span className="ock" aria-hidden>
                  <svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                <div>
                  <h4>{o.title}</h4>
                  <p>{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="div" className="sec-num" style={{ marginTop: 56 }}>Platforms &amp; technology</Reveal>
          <div className="tech-pills">
            {c.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES APPLIED */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Capabilities applied</Reveal>
          <Reveal as="h2" className="sec-title">Horizontal depth, tuned for {v.name}</Reveal>
          <div className="cap-grid">
            {related.map((cap) => (
              <Link key={cap.slug} href={`/solutions/${cap.slug}`} className={`cap ${cap.isAi ? 'is-ai' : ''}`} data-c>
                <span className="n mono">{cap.n}</span>
                <span className="cico"><svg viewBox="0 0 24 24"><path d={cap.icon} /></svg></span>
                <h5>{cap.name}</h5>
                <p>{cap.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">FAQ</Reveal>
          <Reveal as="h2" className="sec-title">Questions, answered</Reveal>
          <Accordion items={c.faqs.map((f) => ({ title: f.q, desc: f.a }))} variant="faq" />
        </div>
      </section>

      <CtaBand
        title={v.flagship ? 'Talk to our Rail team.' : `Modernize your ${v.name} operations.`}
        text={`Engineering-led delivery for ${v.name}, across India and the GCC. Tell us where you want to go.`}
        primaryLabel="Talk to Experts"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </div>
  );
}
