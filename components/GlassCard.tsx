'use client';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
};

export default function GlassCard({ children, className = '', hoverGlow = true }: Props) {
  return (
    <div
      className={`glass-card ${className}`}
      data-glow={hoverGlow}
    >
      <div className="glass-border" aria-hidden />
      <div className="glass-content">{children}</div>
    </div>
  );
}
