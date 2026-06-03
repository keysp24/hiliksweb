'use client';
import { useEffect, useRef } from 'react';

/**
 * Applies skew transform based on scroll velocity.
 * Children with [data-skew] get the skew effect.
 */
export default function ScrollVelocity() {
  const lastScroll = useRef(0);
  const lastTime = useRef(Date.now());
  const velocity = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = document.querySelectorAll<HTMLElement>('[data-skew]');
    if (targets.length === 0) return;

    const tick = () => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const scrollY = window.scrollY;
        const rawVelocity = (scrollY - lastScroll.current) / dt;
        velocity.current += (rawVelocity - velocity.current) * 0.1;
        const skew = Math.max(-3, Math.min(3, velocity.current * 8));
        targets.forEach((el) => {
          el.style.transform = `skewY(${skew}deg)`;
        });
        lastScroll.current = scrollY;
        lastTime.current = now;
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return null;
}
