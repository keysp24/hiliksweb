import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import Accordion from '@/components/Accordion';
import ProcessTimeline from '@/components/ProcessTimeline';
import SolutionGlyph from '@/components/SolutionGlyph';
import IndustryCard from '@/components/IndustryCard';
import { capabilities, verticals } from '@/lib/site';
import { getSolutionContent } from '@/lib/content';

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cap = capabilities.find((x) => x.slug === slug);
  const c = getSolutionContent(slug);
  if (!cap) return {};
  return { title: cap.name, description: c?.heroLead ?? cap.blurb };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cap = capabilities.find((x) => x.slug === slug);
  const c = getSolutionContent(slug);
  if (!cap || !c) notFound();

  const accentVar = cap.isAi ? '--ai' : '--orange';
  const applied = c.relatedIndustries
    ? verticals.filter((v) => c.relatedIndustries!.includes(v.slug))
    : verticals;

  return (
    <div style={{ ['--accent' as string]: `var(${accentVar})` }}>
      <PageHero
        accentVar={accentVar}
        glyph={<SolutionGlyph slug={cap.slug} className="glyph-hero" />}
        crumbs={[{ label: 'Solutions', href: '/solutions' }, { label: cap.name }]}
        eyebrow={`Capability ${cap.n}`}
        title={cap.name}
        lead={c.heroLead}
      />

      {/* OVERVIEW + STAT RAIL */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap split-2 overview">
          <div>
            <Reveal as="div" className="sec-num">Overview</Reveal>
            <Reveal as="h2" className="sec-title">{cap.name}, engineered into operations</Reveal>
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

      {/* SERVICES (interactive accordion) */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">What it includes</Reveal>
          <Reveal as="h2" className="sec-title">The services inside {cap.name}</Reveal>
          <Accordion items={c.services} variant="offering" />
        </div>
      </section>

      {/* APPROACH timeline */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">How we deliver</Reveal>
          <Reveal as="h2" className="sec-title">A disciplined delivery method</Reveal>
          <ProcessTimeline steps={c.approach} />
        </div>
      </section>

      {/* OUTCOMES + TECH */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Outcomes</Reveal>
          <Reveal as="h2" className="sec-title">The value it delivers</Reveal>
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

      {/* WHERE WE DEPLOY */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Applied across</Reveal>
          <Reveal as="h2" className="sec-title">Where we deploy {cap.name}</Reveal>
          <div className="card-grid applied-grid">
            {applied.map((v, i) => (
              <IndustryCard key={v.slug} v={v} index={i} href={`/industries/${v.slug}`} showBlurb={false} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">FAQ</Reveal>
          <Reveal as="h2" className="sec-title">Questions, answered</Reveal>
          <Accordion items={c.faqs.map((f) => ({ title: f.q, desc: f.a }))} variant="faq" />
        </div>
      </section>

      <CtaBand
        title={`Bring ${cap.name} to your operations.`}
        primaryLabel="Talk to Experts"
        secondaryLabel="All Capabilities"
        secondaryHref="/solutions"
      />
    </div>
  );
}
