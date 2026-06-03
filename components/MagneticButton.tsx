'use client';
import { useRef, useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  strength?: number;
};

export default function MagneticButton({ children, className = '', onClick, href, strength = 0.4 }: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: 'transform 0.25s cubic-bezier(.16,1,.3,1)',
    display: 'inline-flex',
  } as React.CSSProperties;

  if (href) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={className}
        style={style}
        onMouseMove={handleMove as never}
        onMouseLeave={handleLeave}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={className}
      style={style}
      onMouseMove={handleMove as never}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
