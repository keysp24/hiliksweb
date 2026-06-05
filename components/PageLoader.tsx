'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  // NOTE: `loading` starts true and the overlay is rendered on the SERVER too,
  // so the pre-loader is part of the very first HTML paint and covers the page
  // immediately. (Previously a `mounted` gate returned null until a post-paint
  // useEffect ran, which let the page content flash BEFORE the loader appeared.)
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 12;
      if (p > 100) p = 100;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 140);
    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="page-loader"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0B0D11',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 36,
        transition: 'opacity 0.6s ease',
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? 'none' : 'all',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 160,
          height: 110,
          animation: 'loaderPulse 2s ease-in-out infinite',
        }}
      >
        <Image
          src="/images/hiliks-logo.png"
          alt="Hiliks Technologies"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
        <div
          style={{
            position: 'absolute',
            inset: -20,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,104,14,0.25) 0%, rgba(242,104,14,0) 70%)',
            animation: 'loaderGlow 2.5s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />
      </div>
      <div style={{ width: 180, height: 3, background: '#1a2332', borderRadius: 3, overflow: 'hidden' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #F2680E, #FF9248)',
            transition: 'width 0.25s ease',
            boxShadow: '0 0 10px rgba(242,104,14,0.4)',
          }}
        />
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: '#94A1B2',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
        {Math.round(progress)}% — Loading Experience
      </div>
      <style>{`
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes loaderGlow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}
