'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function HeroRings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ringRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ringRefs.current.forEach((ring, i) => {
        if (!ring) return;
        const speeds = [30, 45, 60, 35, 50];
        const directions = [1, -1, 1, -1, 1];
        gsap.to(ring, {
          rotation: 360 * directions[i],
          duration: speeds[i],
          repeat: -1,
          ease: 'none',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const container = containerRef.current;
    if (!container) return;

    const parent = container.parentElement;
    if (!parent) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(container, {
        x: x * 40,
        y: y * 40,
        duration: 1.2,
        ease: 'power2.out',
      });
    };

    parent.addEventListener('mousemove', handleMouseMove);
    return () => parent.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setRingRef = (index: number) => (el: SVGGElement | null) => {
    ringRefs.current[index] = el;
  };

  const rings = [
    { r: 380, stroke: 'url(#ring-orange)', dash: '2 6', width: 1, opacity: 0.35 },
    { r: 310, stroke: 'url(#ring-blue)', dash: 'none', width: 1.2, opacity: 0.4 },
    { r: 250, stroke: 'url(#ring-purple)', dash: '3 8', width: 1, opacity: 0.35 },
    { r: 190, stroke: 'url(#ring-orange-blue)', dash: 'none', width: 1.2, opacity: 0.45 },
    { r: 135, stroke: 'url(#ring-orange)', dash: '2 5', width: 1, opacity: 0.4 },
  ];

  return (
    <div ref={containerRef} className="hero-rings" aria-hidden="true">
      <svg className="hero-rings-svg" viewBox="0 0 900 900" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ring-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(242, 104, 14, 0.55)" />
            <stop offset="100%" stopColor="rgba(242, 104, 14, 0.1)" />
          </linearGradient>
          <linearGradient id="ring-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(46, 143, 224, 0.5)" />
            <stop offset="100%" stopColor="rgba(46, 143, 224, 0.08)" />
          </linearGradient>
          <linearGradient id="ring-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(155, 107, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(155, 107, 255, 0.08)" />
          </linearGradient>
          <linearGradient id="ring-orange-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(242, 104, 14, 0.5)" />
            <stop offset="50%" stopColor="rgba(46, 143, 224, 0.35)" />
            <stop offset="100%" stopColor="rgba(155, 107, 255, 0.15)" />
          </linearGradient>
        </defs>
        {rings.map((ring, i) => (
          <g key={i} ref={setRingRef(i)} transformOrigin="450 450">
            <circle
              cx="450"
              cy="450"
              r={ring.r}
              fill="none"
              stroke={ring.stroke}
              strokeWidth={ring.width}
              strokeDasharray={ring.dash}
              opacity={ring.opacity}
            />
            {ring.dash === 'none' && (
              <>
                <circle cx="450" cy={450 - ring.r} r="2.5" fill="rgba(255,255,255,0.55)" />
                <circle cx={450 + ring.r} cy="450" r="2.5" fill="rgba(255,255,255,0.35)" />
                <circle cx="450" cy={450 + ring.r} r="2.5" fill="rgba(255,255,255,0.35)" />
                <circle cx={450 - ring.r} cy="450" r="2.5" fill="rgba(255,255,255,0.2)" />
              </>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
