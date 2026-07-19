import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import {
  aboutStats,
  ourStory,
  timeline,
  missionVision,
  coreValues,
  leadership,
  globalPresence,
  railwayTech,
} from '@/lib/about';

export const metadata: Metadata = {
  title: 'About Us - HiLiKS Technologies',
  description:
    'HiLiKS Technologies — a global innovation leader delivering cutting-edge technology and consulting solutions across railways, telecom, energy, and public sector since 1985.',
};

function Icon({ d, className = '' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d={d} />
    </svg>
  );
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="about-hero">
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ justifyContent: 'center' }}>
              About Hiliks
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1>Shaping the Future of Technology</h1>
          </Reveal>
          <Reveal delay={160}>
            <p>
              Global innovation leader delivering cutting-edge solutions across
              industries since 1985.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="cta-row">
              <Link href="#our-story" className="btn btn-primary">
                Explore Our Journey →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="about-stats-band">
            <div className="about-stats">
              {aboutStats.map((s) => (
                <div key={s.k} className="stat">
                  <div className="v">
                    {s.v}
                    {s.suffix}
                  </div>
                  <div className="k">{s.k}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            {ourStory.title}
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Four decades of relentless innovation
          </Reveal>
          <div className="sec-lead" style={{ maxWidth: '72ch' }}>
            {ourStory.paragraphs.map((p, i) => (
              <Reveal key={i} as="p" delay={i * 60}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            Our Journey
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Milestones that define us
          </Reveal>
          <div className="about-timeline" style={{ marginTop: 56 }}>
            {timeline.map((item, i) => (
              <Reveal key={item.year} className="about-tl-item" delay={i * 80}>
                <div className="about-tl-node" />
                <div className="about-tl-year">{item.year}</div>
                <div className="about-tl-text">{item.text}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            Purpose
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Mission & Vision
          </Reveal>
          <div className="mv-grid">
            {[missionVision.mission, missionVision.vision].map((card, i) => (
              <Reveal key={card.title} className="mv-card" delay={i * 80}>
                <h3>{card.title}</h3>
                <p>{card.lead}</p>
                <ul>
                  {card.points.map((pt) => (
                    <li key={pt}>
                      <span className="mv-bullet" aria-hidden />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            Culture
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Our Core Values
          </Reveal>
          <Reveal as="p" className="sec-lead">
            The foundation of everything we do.
          </Reveal>
          <div className="about-values-grid">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} className="about-value" delay={i * 60}>
                <div className="ico">
                  <Icon d={v.icon} />
                </div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            People
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Leadership Team
          </Reveal>
          <Reveal as="p" className="sec-lead">
            Our global leadership team brings together decades of experience
            across technology, railways, and consulting to drive HiLiKS
            Technologies forward.
          </Reveal>
          <div className="about-leaders">
            {leadership.map((leader, i) => (
              <Reveal key={leader.name} className="about-leader" delay={i * 60}>
                <h4>{leader.name}</h4>
                <div className="title">{leader.title}</div>
                <p>{leader.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            Locations
          </Reveal>
          <Reveal as="h2" className="sec-title">
            Global Presence
          </Reveal>
          <Reveal as="p" className="sec-lead">
            Strategic locations serving clients across North America and India.
          </Reveal>

          <Reveal className="map-wrap">
            <img
              src="/images/about/world-map.svg"
              alt="World map showing Hiliks office locations"
              className="world-map"
            />
            {globalPresence.markers.map((m, i) => (
              <div
                key={i}
                className="location-marker"
                style={{ top: `${m.top}%`, left: `${m.left}%` }}
                data-location={m.label}
              />
            ))}
          </Reveal>

          <div className="office-grid">
            {globalPresence.regions.map((region, i) => (
              <Reveal key={region.name} className="office-card" delay={i * 80}>
                <h4>
                  <span>{region.iconFlag === 'US' ? '🇺🇸' : '🇮🇳'}</span>
                  {region.name}
                </h4>
                <ul>
                  {region.offices.map((o) => (
                    <li key={o.city}>
                      <strong>{o.city}</strong> — {o.role}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Railway Technology */}
      <section className="band">
        <div className="wrap">
          <Reveal as="div" className="sec-num">
            Capabilities
          </Reveal>
          <Reveal as="h2" className="sec-title" style={{ textAlign: 'center', margin: '0 auto' }}>
            Railway Technology Leadership
          </Reveal>
          <Reveal as="p" className="sec-lead" style={{ textAlign: 'center', margin: '18px auto 0' }}>
            Pioneering digital transformation in rail infrastructure with
            cutting-edge solutions.
          </Reveal>
          <div className="rail-tech-grid">
            {railwayTech.items.map((item, i) => (
              <Reveal key={item.title} className="rail-tech-card" delay={i * 60}>
                <div className="ico">
                  <Icon d={item.icon} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Transform Your Business?"
        text="Discover how HiLiKS Technologies can drive innovation and efficiency for your organization."
        primaryLabel="Contact Our Team"
        primaryHref="/contact"
        secondaryLabel="Explore Railway Solutions"
        secondaryHref="/industries/railways"
      />
    </>
  );
}
