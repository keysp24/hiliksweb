'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';

import Hero3D from '@/components/Hero3D';
import Marquee from '@/components/Marquee';
import AIBand from '@/components/AIBand';
import IndustryCard from '@/components/IndustryCard';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import PartnerPill from '@/components/PartnerPill';
import TextScramble from '@/components/TextScramble';
import { verticals, capabilities, whyHiliks, partners, ecosystemStats } from '@/lib/site';

// useLayoutEffect on the client, useEffect on the server (avoids the SSR
// "useLayoutEffect does nothing on the server" warning).
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function Home() {
  const heroInnerRef = useRef<HTMLDivElement>(null);
  const flagCardRef = useRef<HTMLDivElement>(null);

  // NOTE: must be a *layout* effect. The #industries ScrollTrigger pin wraps
  // its <section> in a .pin-spacer div (reparenting it in the DOM). The cleanup
  // below (ctx.revert()) un-pins and restores the section to its original
  // parent. As a layout-effect cleanup it runs synchronously in React's
  // mutation phase — BEFORE React removes the section on route change — so
  // React's removeChild sees the un-reparented node. With a passive useEffect
  // the revert runs too late and React throws "Failed to execute 'removeChild'
  // on 'Node': The node to be removed is not a child of this node."
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;
    let gsapInstance: typeof import('gsap').default | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      gsapInstance = gsap;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const heroInner = heroInnerRef.current;
        if (heroInner) {
          gsap.to(heroInner, {
            yPercent: 24,
            opacity: 0.25,
            ease: 'none',
            scrollTrigger: {
              trigger: heroInner.closest('.hero'),
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }

        const hdr = document.getElementById('hdr');
        if (hdr) {
          ScrollTrigger.create({
            start: 60,
            onUpdate: (s) => hdr.classList.toggle('scrolled', s.scroll() > 60),
          });
        }

        // reveal-on-scroll for the homepage's raw .reveal elements (matches source)
        gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        });

        // Industries are now displayed as a static 4-column grid on desktop,
        // so the previous horizontal-scroll pin has been removed.
      });
    })().catch(() => {
      // safety: if GSAP fails to load, never leave content hidden
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });

    // spotlight on cards
    document.querySelectorAll('.cap,.why,.flagship').forEach((c) => {
      c.classList.add('spotlight');
      const s = document.createElement('span');
      s.className = 'spot';
      c.insertBefore(s, c.firstChild);
      c.addEventListener('mousemove', (e) => {
        const r = (c as HTMLElement).getBoundingClientRect();
        (c as HTMLElement).style.setProperty('--mx', (e as MouseEvent).clientX - r.left + 'px');
        (c as HTMLElement).style.setProperty('--my', (e as MouseEvent).clientY - r.top + 'px');
      });
    });

    // tilt cards
    document.querySelectorAll('.tilt').forEach((c) => {
      c.addEventListener('mousemove', (e) => {
        const r = (c as HTMLElement).getBoundingClientRect();
        const px = ((e as MouseEvent).clientX - r.left) / r.width - 0.5;
        const py = ((e as MouseEvent).clientY - r.top) / r.height - 0.5;
        (c as HTMLElement).style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(6px)`;
      });
      c.addEventListener('mouseleave', () => {
        (c as HTMLElement).style.transform = 'perspective(700px) rotateY(0) rotateX(0)';
      });
    });

    // flagship subtle tilt
    const fc = flagCardRef.current;
    if (fc && gsapInstance) {
      fc.addEventListener('mousemove', (e) => {
        const r = fc.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        gsapInstance!.to(fc, { rotateY: px * 3, duration: 0.4, transformPerspective: 1000 });
      });
      fc.addEventListener('mouseleave', () => {
        gsapInstance!.to(fc, { rotateY: 0, duration: 0.5 });
      });
    }

    // magnetic buttons
    document.querySelectorAll('[data-mag]').forEach((b) => {
      const btn = b as HTMLElement;
      const move = (e: Event) => {
        const me = e as MouseEvent;
        const r = btn.getBoundingClientRect();
        if (gsapInstance) {
          gsapInstance.to(btn, {
            x: (me.clientX - r.left - r.width / 2) * 0.35,
            y: (me.clientY - r.top - r.height / 2) * 0.45,
            duration: 0.3,
          });
        }
      };
      const leave = () => {
        if (gsapInstance) {
          gsapInstance.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1,.4)' });
        }
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
    });

    // NOTE: the hero kicker decode effect now uses the React-safe
    // <TextScramble> component (state-driven). The previous code mutated
    // el.textContent directly on React-rendered .sec-num / .kicker nodes,
    // which corrupted React's tracked text nodes and threw
    // "Failed to execute 'removeChild' on 'Node'" \u2014 breaking all animations.

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const railways = verticals.find((v) => v.flagship)!;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Hero3D />
        <div className="hero-vig" aria-hidden />
        <div className="wrap">
          <div className="hero-inner" ref={heroInnerRef}>
            <TextScramble as="div" className="kicker mono" text="Industry-Focused Digital Engineering & Enterprise Technology" />
            <h1 className="hero-h">Engineering <em>Intelligent Operations</em> Across Critical Industries</h1>
            <p className="hero-sub">
              Niche technology, AI-native systems integration, engineering services and digital transformation &mdash;
              for railways, telecom, BFSI and public sector,
              across India and the GCC.
            </p>
            <div className="cta-row">
              <Link href="/industries" className="btn btn-primary" data-mag data-c>Explore Industries &rarr;</Link>
              <Link href="/solutions" className="btn btn-ghost" data-mag data-c>Our Capabilities</Link>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* FLAGSHIP */}
      <section className="band" id="railways">
        <div className="wrap">
          <div className="sec-num reveal">Flagship Business Unit</div>
          <h2 className="sec-title reveal">Our deepest practice proves the engineering-led approach.</h2>
          <div className="flagship reveal" ref={flagCardRef}>
            <div className="glow" aria-hidden />
            <div className="flagship-inner">
              <div className="flagship-left">
                <span className="flag-tag mono"><i />{railways.unit}</span>
                <h3>{railways.unit}</h3>
                <p className="tag mono">{railways.tagline}</p>
                <p className="body">From the track to the operations centre &mdash; signaling and safety, railway telecom, smart rail, OCC integration and AI-led operations for Indian Railways, Etihad Rail and GCC operators.</p>
                <Link href="/industries/railways" className="flag-cta" data-c>Explore Railways &rarr;</Link>
              </div>
              <div className="rail-caps">
                {railways.capabilities.map((c) => (
                  <div key={c.n} className="rail-cap" data-c>
                    <span className="n mono">{c.n}</span>
                    <span className="t">{c.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="h-section light" id="industries">
        <div className="wrap h-head">
          <div className="sec-num reveal">01 &mdash; Industries We Serve</div>
          <h2 className="sec-title reveal">Verticalized practices for critical industries</h2>
          <p className="sec-lead reveal">
            Domain-focused business units &mdash; each fluent in its industry, all engineering-led.
          </p>
        </div>
        <div className="h-track" id="htrack">
          {verticals.map((v, i) => (
            <IndustryCard key={v.slug} v={v} index={i} />
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="band" id="capabilities">
        <div className="wrap">
          <div className="sec-num reveal">02 &mdash; Core Technology Capabilities</div>
          <h2 className="sec-title reveal">AI-native engineering, horizontal across every vertical</h2>
          <p className="sec-lead reveal">
            The engineering and enterprise-technology capabilities we bring to each industry &mdash; now with AI woven through delivery, not bolted on.
          </p>

          <AIBand />

          <div className="cap-grid">
            {capabilities.map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}`} className={`cap reveal ${c.isAi ? 'is-ai' : ''}`} data-c>
                <span className="n mono">{c.n}</span>
                <span className="cico">
                  <svg viewBox="0 0 24 24">
                    <path d={c.icon} />
                  </svg>
                </span>
                <h5>{c.name}</h5>
                <p>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="band light" id="why">
        <div className="wrap">
          <div className="sec-num reveal">03 &mdash; Why Hiliks</div>
          <h2 className="sec-title reveal">A niche, engineering-led enterprise technology company</h2>
          <div className="why-grid">
            {whyHiliks.map((w) => (
              <div key={w.t} className="why tilt reveal">
                <div className="ico">
                  <svg viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: w.icon }} />
                </div>
                <h5>{w.t}</h5>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="band" id="ecosystem">
        <div className="wrap">
          <div className="sec-num reveal">04 &mdash; Strategic Ecosystem</div>
          <h2 className="sec-title reveal">Depth extended through partnership</h2>
          <p className="sec-lead reveal">
            In collaboration with strategic ecosystem partners &mdash; including <b style={{ color: 'var(--text)' }}>Aptiva Technologies</b> &mdash;
            Hiliks extends enterprise digital-transformation depth with GCC-grade rigor.
          </p>
          <div className="stats">
            {ecosystemStats.map((s) => (
              <div key={s.k} className="stat reveal">
                {s.text ? (
                  <div className="v" style={{ fontSize: '1.9rem' }}>{s.v}</div>
                ) : (
                  <div className="v" data-count={s.v} data-suffix={s.suffix}>
                    <Counter value={s.v + s.suffix} />
                  </div>
                )}
                <div className="k">{s.k}</div>
              </div>
            ))}
          </div>
          <div className="partners">
            {partners.map((p) => (
              <PartnerPill key={p.name} name={p.name} domain={p.domain} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band" id="contact" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="glow" aria-hidden />
            <div className="cta-copy">
              <h3>Engineering-led technology for your industry &mdash; with a particularly strong Railways practice.</h3>
              <p>Request a briefing or route your inquiry by vertical: Railways, Telecom, BFSI, Public Sector, or Partnerships.</p>
              <div className="cta-row">
                <Link href="/contact" className="btn btn-primary" data-mag data-c>Request a Briefing &rarr;</Link>
                <Link href="/contact" className="btn btn-ghost" data-mag data-c>Send Inquiry</Link>
              </div>
            </div>
            <div
              className="cta-media"
              role="img"
              aria-label="Hiliks industry verticals — Railways, Telecom, BFSI and Public Sector"
            >
              <div className="cta-tile" style={{ backgroundPosition: '0% 0%' }} />
              <div className="cta-tile" style={{ backgroundPosition: '33.333% 0%' }} />
              <div className="cta-tile" style={{ backgroundPosition: '66.666% 0%' }} />
              <div className="cta-tile" style={{ backgroundPosition: '100% 0%' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
