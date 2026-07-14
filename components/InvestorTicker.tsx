'use client';

import { useEffect, useRef, useState } from 'react';

export default function InvestorTicker({
  items,
}: {
  items: { label: string; value: string; suffix: string }[];
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="inv-ticker">
      <div className="wrap">
        <div className="inv-ticker-grid">
          {items.map((item, i) => (
            <div key={item.label} className={`inv-ticker-item ${inView ? 'in' : ''}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="inv-ticker-label mono">{item.label}</span>
              <span className="inv-ticker-value">
                {item.value}
                {item.suffix}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
