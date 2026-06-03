'use client';
import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  className?: string;
  as?: 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'p';
  trigger?: boolean;
  duration?: number;
};

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export default function TextScramble({
  text,
  className = '',
  as: Tag = 'span',
  trigger = true,
  duration = 1200,
}: Props) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number>(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const length = text.length;
    const steps = 24;
    const stepTime = duration / steps;
    let current = 0;

    const scramble = () => {
      current++;
      const progress = current / steps;
      const revealed = Math.floor(progress * length);

      let result = '';
      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          result += ' ';
        } else if (i < revealed) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(result);

      if (current < steps) {
        rafRef.current = window.setTimeout(scramble, stepTime);
      } else {
        setDisplay(text);
      }
    };

    scramble();
    return () => clearTimeout(rafRef.current);
  }, [trigger, text, duration]);

  return <Tag className={className}>{display}</Tag>;
}
