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
  const spotlightRef = useRef<HTMLDivElement>(null);
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

        gsap.to(container.querySelectorAll('.inv-hero-blob'), {
          y: -24,
          x: 16,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: { each: 2, from: 'random' },
        });
      }, container);
    })().catch(() => {});

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    if (spotlightRef.current) {
      spotlightRef.current.style.setProperty('--spot-x', `${x * 100}%`);
      spotlightRef.current.style.setProperty('--spot-y', `${y * 100}%`);
    }
  };

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--card-x', `${x}px`);
    card.style.setProperty('--card-y', `${y}px`);

    const px = (x / rect.width - 0.5) * 2;
    const py = (y / rect.height - 0.5) * 2;
    card.style.transform = `perspective(900px) rotateX(${-py * 5}deg) rotateY(${px * 5}deg) translateY(-6px)`;
  };

  const handleCardMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section
      ref={containerRef}
      className="inv-hero"
      onMouseMove={handleMouseMove}
    >
      <div className="inv-hero-glow" aria-hidden />
      <div ref={spotlightRef} className="inv-hero-spotlight" aria-hidden />
      <div className="inv-hero-blob inv-hero-blob--orange" aria-hidden />
      <div className="inv-hero-blob inv-hero-blob--blue" aria-hidden />
      <div className="inv-hero-blob inv-hero-blob--purple" aria-hidden />

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
            <div
              className="inv-hero-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="inv-hero-card-shimmer" aria-hidden />
              <span className="inv-hero-card-tag mono">Annual Report</span>
              <h3>2024-25</h3>
              <p>Complete financial and governance disclosures.</p>
              <a href="/investors/reports/annual-reports/Annualreport2025.pdf" target="_blank" rel="noreferrer">
                Download →
              </a>
            </div>
            <div
              className="inv-hero-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="inv-hero-card-shimmer" aria-hidden />
              <span className="inv-hero-card-tag mono">Governance</span>
              <h3>Policies</h3>
              <p>Code of conduct, whistle blower and board charters.</p>
              <a href="#documents">Browse →</a>
            </div>
            <div
              className="inv-hero-card inv-hero-card--wide"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <span className="inv-hero-card-shimmer" aria-hidden />
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
