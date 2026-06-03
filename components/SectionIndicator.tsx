'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SECTIONS = [
  { id: 'railways', label: 'Railways' },
  { id: 'industries', label: 'Industries' },
  { id: 'capabilities', label: 'Solutions' },
  { id: 'why', label: 'Why Hiliks' },
  { id: 'ecosystem', label: 'Ecosystem' },
  { id: 'contact', label: 'Contact' },
];

export default function SectionIndicator() {
  const [active, setActive] = useState('');
  const pathname = usePathname();
  const onHome = pathname === '/';

  useEffect(() => {
    if (!onHome) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ctx: { revert: () => void } | null = null;

    (async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        SECTIONS.forEach((s) => {
          const el = document.getElementById(s.id);
          if (!el) return;
          ScrollTrigger.create({
            trigger: el,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => {
              if (self.isActive) setActive(s.id);
            },
          });
        });
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [onHome]);

  if (!onHome) return null;

  return (
    <div className="hud">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          data-c
          className={active === s.id ? 'on' : ''}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="nm">{s.label}</span>
          <span className="d" />
        </a>
      ))}
    </div>
  );
}
