'use client';
import { useEffect } from 'react';

/**
 * Scroll-velocity skew: reads ScrollTrigger velocity and applies
 * skewY to all [data-skew] elements. Clamp between -5 and 5 degrees.
 */
export default function ScrollVelocitySkew() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const targets = document.querySelectorAll<HTMLElement>('[data-skew]');
      if (targets.length === 0) return;

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          onUpdate: (self) => {
            const velocity = self.getVelocity();
            const skew = gsap.utils.clamp(-5, 5, velocity / -340);
            targets.forEach((el) => {
              gsap.to(el, {
                skewY: skew,
                duration: 0.3,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            });
          },
        });
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return null;
}
