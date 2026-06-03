'use client';
import { useRef, useState } from 'react';
import type { ReactNode, MouseEvent } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glowColor?: string;
};

export default function TiltCard({ children, className = '', tiltAmount = 8, glowColor = 'rgba(242,104,14,0.3)' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * tiltAmount * 2;
    const rotateY = (x - 0.5) * tiltAmount * 2;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s ease-out',
      boxShadow: `${rotateY * 2}px ${-rotateX * 2}px 30px ${glowColor}`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
      boxShadow: 'none',
    });
  };

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
