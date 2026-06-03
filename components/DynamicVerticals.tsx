'use client';
import { useEffect, useState } from 'react';
import { verticals } from '@/lib/site';

/**
 * Cycling vertical names: "Now engineering → Railways → Telecom → ..."
 */
export default function DynamicVerticals() {
  const [index, setIndex] = useState(0);
  const names = verticals.map((v) => v.name);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % names.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <div className="dyn-verticals mono">
      <span className="dyn-label">Now engineering</span>
      <span className="dyn-arrow">→</span>
      <span className="dyn-name" key={index}>{names[index]}</span>
    </div>
  );
}
