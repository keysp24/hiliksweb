'use client';
import { useEffect, useRef, useState } from 'react';

export type AccordionItem = {
  n?: string;
  title: string;
  desc?: string;
  points?: string[];
};

/**
 * Interactive accordion. Smoothly expands one panel at a time (or none).
 * Used for offerings/services (with bullet points) and FAQs.
 */
export default function Accordion({
  items,
  defaultOpen = 0,
  variant = 'offering',
}: {
  items: AccordionItem[];
  defaultOpen?: number;
  variant?: 'offering' | 'faq';
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className={`acc acc-${variant}`}>
      {items.map((it, i) => (
        <Row
          key={it.title}
          item={it}
          isOpen={open === i}
          onToggle={() => setOpen((cur) => (cur === i ? null : i))}
        />
      ))}
    </div>
  );
}

function Row({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [h, setH] = useState(0);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    setH(isOpen ? el.scrollHeight : 0);
  }, [isOpen, item]);

  return (
    <div className={`acc-row ${isOpen ? 'open' : ''}`}>
      <button className="acc-head" onClick={onToggle} aria-expanded={isOpen} data-c>
        {item.n && <span className="acc-n mono">{item.n}</span>}
        <span className="acc-title">{item.title}</span>
        <span className="acc-ic" aria-hidden>
          <svg viewBox="0 0 24 24">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className="acc-body" ref={bodyRef} style={{ height: h }}>
        <div className="acc-body-inner">
          {item.desc && <p className="acc-desc">{item.desc}</p>}
          {item.points && item.points.length > 0 && (
            <ul className="acc-points">
              {item.points.map((p) => (
                <li key={p}>
                  <span className="acc-dot" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
