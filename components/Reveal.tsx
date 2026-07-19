'use client';

import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
};

/**
 * Scroll-reveal wrapper.
 *
 * Starts hidden (opacity 0, translated down) and fades/slides into view when
 * the element enters the viewport. Uses IntersectionObserver so it works
 * reliably after Next.js App Router client-side navigation.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(el);

    // Safety net: if the observer never fires, reveal content anyway.
    const timer = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible ' : ''}${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
