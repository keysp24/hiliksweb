'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function InvestorHero({
  eyebrow,
  headline,
  subheadline,
  ctaPrimary,
  ctaSecondary,
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from(container.querySelectorAll('.inv-hero-eyebrow'), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
        })
          .from(
            container.querySelectorAll('.inv-hero-title'),
            { y: 40, opacity: 0, duration: 1 },
            '-=0.5'
          )
          .from(
            container.querySelectorAll('.inv-hero-sub'),
            { y: 30, opacity: 0, duration: 0.9 },
            '-=0.6'
          )
          .from(
            container.querySelectorAll('.inv-hero-cta'),
            { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 },
            '-=0.5'
          )
          .from(
            container.querySelectorAll('.inv-hero-card'),
            { y: 50, opacity: 0, duration: 0.9, stagger: 0.12 },
            '-=0.6'
          );

        gsap.to(container.querySelector('.inv-hero-glow'), {
          scale: 1.12,
          opacity: 0.6,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }, container);
    })().catch(() => {});

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={containerRef} className="inv-hero">
      <div className="inv-hero-glow" aria-hidden />
      <div className="wrap">
        <div className="inv-hero-grid">
          <div className="inv-hero-copy">
            <span className="inv-hero-eyebrow mono">{eyebrow}</span>
            <h1 className="inv-hero-title">{headline}</h1>
            <p className="inv-hero-sub">{subheadline}</p>
            <div className="inv-hero-actions">
              <Link href={ctaPrimary.href} className="btn btn-primary inv-hero-cta" data-c>
                {ctaPrimary.label}
              </Link>
              <Link href={ctaSecondary.href} className="btn btn-ghost inv-hero-cta" data-c>
                {ctaSecondary.label}
              </Link>
            </div>
          </div>

          <div className="inv-hero-cards">
            <div className="inv-hero-card">
              <span className="inv-hero-card-tag mono">Annual Report</span>
              <h3>2024-25</h3>
              <p>Complete financial and governance disclosures.</p>
              <a href="/investors/reports/annual-reports/Annualreport2025.pdf" target="_blank" rel="noreferrer">
                Download →
              </a>
            </div>
            <div className="inv-hero-card">
              <span className="inv-hero-card-tag mono">Governance</span>
              <h3>Policies</h3>
              <p>Code of conduct, whistle blower and board charters.</p>
              <a href="#documents">Browse →</a>
            </div>
            <div className="inv-hero-card">
              <span className="inv-hero-card-tag mono">Disclosures</span>
              <h3>Regulation 30</h3>
              <p>Board meetings, outcomes and material updates.</p>
              <a href="#documents">View →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
