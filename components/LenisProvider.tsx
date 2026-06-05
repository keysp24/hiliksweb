'use client';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const LenisContext = createContext<InstanceType<typeof import('lenis').default> | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<InstanceType<typeof import('lenis').default> | null>(null);
  const rafRef = useRef<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;

    (async () => {
      const Lenis = (await import('lenis')).default;
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (disposed) return;

      const instance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      instance.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        instance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      // Refresh ScrollTrigger after fonts load
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });

      // Debounced resize refresh
      let resizeTimer: number;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
      };
      window.addEventListener('resize', onResize);

      setLenis(instance);

      return () => {
        window.removeEventListener('resize', onResize);
        clearTimeout(resizeTimer);
        instance.destroy();
      };
    })();

    return () => { disposed = true; };
  }, []);

  // On client-side route change: jump to top and recompute ScrollTrigger
  // positions for the new page's content (reveals, pins, etc.).
  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    let raf1 = 0;
    let raf2 = 0;
    (async () => {
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      // Wait two frames so the outgoing page's pinned triggers (e.g. the
      // #industries pin) finish tearing their pin-spacers out of the DOM before
      // we refresh. Guard the refresh too: if it still races a detached pin,
      // GSAP throws "Cannot read properties of null (reading 'insertBefore')"
      // inside its pin-swap — harmless here, and the next scroll/resize refresh
      // recomputes positions correctly, so we must not let it crash the app.
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          try {
            ScrollTrigger.refresh();
          } catch {
            /* transient route-change DOM race — safe to ignore */
          }
        });
      });
    })();
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname, lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
