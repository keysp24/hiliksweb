'use client';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Desktop-only horizontal scroll section.
 * Pins the section and scrubs the track horizontally.
 * On mobile (< 901px), falls back to normal vertical stacking.
 */
export default function HorizontalScroll({ children, className = '', id }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 901px)', () => {
          const gutter = 40;
          const distance = track.scrollWidth - window.innerWidth + gutter;

          gsap.to(track, {
            x: -distance,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              pin: true,
              scrub: 0.6,
              end: () => `+=${distance}`,
              invalidateOnRefresh: true,
            },
          });
        });
      }, section);
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id}>
      <div ref={trackRef} className="h-track">
        {children}
      </div>
    </section>
  );
}
