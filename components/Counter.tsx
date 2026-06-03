'use client';
import { useEffect, useRef } from 'react';

type Props = {
  value: string;
  className?: string;
};

export default function Counter({ value, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = value;
      return;
    }

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const num = parseInt(value.replace(/\D/g, ''), 10) || 0;
      const suffix = value.replace(/[0-9]/g, '');
      const obj = { val: 0 };

      ctx = gsap.context(() => {
        gsap.to(obj, {
          val: num,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix;
          },
        });
      }, el);
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [value]);

  return <div ref={ref} className={className} />;
}
