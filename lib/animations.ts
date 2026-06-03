// Shared animation utilities

export function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Spring physics for smooth animations
export function spring(
  current: number,
  target: number,
  velocity: number,
  stiffness = 0.1,
  damping = 0.8
): { value: number; velocity: number } {
  const force = (target - current) * stiffness;
  const newVelocity = (velocity + force) * damping;
  return { value: current + newVelocity, velocity: newVelocity };
}

// Random char for scramble effects
export function randomChar(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  return chars[Math.floor(Math.random() * chars.length)];
}

// Split text into spans for staggered animation
export function splitText(text: string): string {
  return text
    .split('')
    .map((char, i) =>
      char === ' '
        ? ' '
        : `<span style="display:inline-block;animation:charReveal 0.6s ${i * 0.02}s both">${char}</span>`
    )
    .join('');
}
