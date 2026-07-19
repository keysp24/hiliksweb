'use client';
import { useEffect, useRef } from 'react';
import type { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
};

let refreshTimer: number | undefined;

function scheduleScrollTriggerRefresh() {
  if (typeof window === 'undefined') return;
  window.clearTimeout(refreshTimer);
  refreshTimer = window.setTimeout(async () => {
    try {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      ScrollTrigger.refresh();
    } catch {
      /* ignore */
    }
  }, 120);
}

/**
 * Reveal-on-scroll: starts opacity:0, y:34; animates to opacity:1, y:0,
 * duration .9, ease 'power3.out', ScrollTrigger start 'top 88%'.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // The .reveal class supplies the hidden start state (opacity:0,
        // translateY(34px)); animate TO the visible state explicitly.
        // (Using gsap.from here would capture opacity:0 as the END value
        // and leave the element invisible forever.)
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: delay / 1000,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        });
      }, el);

      // Ensure newly-created triggers are re-evaluated alongside the rest of
      // the page (critical after Next.js client-side navigation, where the
      // route-change refresh may have already run before this Reveal mounted).
      scheduleScrollTriggerRefresh();
    })().catch(() => {
      // safety: never leave content hidden if GSAP fails to load
      el.style.opacity = '1';
      el.style.transform = 'none';
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
