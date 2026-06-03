'use client';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/**
 * Wraps a section with GSAP ScrollTrigger animations.
 * Elements with [data-animate] get staggered reveal animations.
 */
export default function ScrollStory({ children, className = '', id }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.querySelectorAll('[data-animate]').forEach((child) => {
        (child as HTMLElement).style.opacity = '1';
        (child as HTMLElement).style.transform = 'none';
      });
      return;
    }

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const animatables = el.querySelectorAll('[data-animate]');
      if (animatables.length === 0) return;

      ctx = gsap.context(() => {
        animatables.forEach((child, i) => {
          const htmlChild = child as HTMLElement;
          const delay = parseFloat(htmlChild.dataset.delay || '0');
          const duration = parseFloat(htmlChild.dataset.duration || '0.9');
          const y = parseFloat(htmlChild.dataset.y || '40');

          gsap.from(htmlChild, {
            y,
            opacity: 0,
            duration,
            delay: delay + i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: htmlChild,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          });
        });
      }, el);
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}
