import Reveal from './Reveal';
import type { Step } from '@/lib/content/types';

/** Animated 4-step delivery timeline. Horizontal on desktop, vertical on mobile. */
export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="timeline">
      <div className="timeline-line" aria-hidden />
      {steps.map((s, i) => (
        <Reveal key={s.step} className="tl-step" delay={i * 90}>
          <div className="tl-node mono">{s.step}</div>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </Reveal>
      ))}
    </div>
  );
}
