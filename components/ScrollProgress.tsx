'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bar.style.transform = 'scaleX(1)';
      return;
    }

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.to(bar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 0,
            end: 'max',
            scrub: 0.3,
          },
        });
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div
      ref={barRef}
      className="prog"
      style={{ transform: 'scaleX(0)', transformOrigin: 'left' }}
      aria-hidden
    />
  );
}
