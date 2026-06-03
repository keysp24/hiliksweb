'use client';
import { aiPills } from '@/lib/site';

/**
 * AI-Native band — matches source aiband exactly.
 * Grid layout with neural network SVG on the right.
 */
export default function AIBand() {
  return (
    <div className="aiband reveal">
      <div className="glow" aria-hidden />
      <div className="aiband-l">
        <span className="ai-badge mono"><i />AI-Native Digital Transformation</span>
        <h3>Engineering that <em>thinks</em> &mdash; applied AI across the operations lifecycle.</h3>
        <p>From predictive maintenance and anomaly detection to copilots, document intelligence and agentic automation &mdash; we embed AI into the systems we engineer, grounded in each industry&apos;s domain and data.</p>
        <div className="ai-pills">
          {aiPills.map((p) => (
            <span key={p} className="mono">{p}</span>
          ))}
        </div>
      </div>
      <div className="aiband-r">
        <svg className="neural" viewBox="0 0 360 280" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g>
            <line className="edge" x1="60" y1="60" x2="180" y2="90" />
            <line className="edge" x1="60" y1="140" x2="180" y2="90" />
            <line className="edge" x1="60" y1="220" x2="180" y2="190" />
            <line className="edge" x1="60" y1="140" x2="180" y2="190" />
            <line className="edge" x1="180" y1="90" x2="300" y2="80" />
            <line className="edge" x1="180" y1="190" x2="300" y2="200" />
            <line className="edge" x1="180" y1="90" x2="300" y2="200" />
            <line className="edge" x1="180" y1="190" x2="300" y2="80" />
          </g>
          <circle className="core" cx="180" cy="140" r="46" />
          <circle className="node pulse" cx="60" cy="60" r="4" />
          <circle className="node pulse d2" cx="60" cy="140" r="4" />
          <circle className="node pulse d3" cx="60" cy="220" r="4" />
          <circle className="node pulse d2" cx="180" cy="90" r="4" />
          <circle className="node pulse d4" cx="180" cy="190" r="4" />
          <circle className="node pulse d3" cx="300" cy="80" r="4" />
          <circle className="node pulse" cx="300" cy="200" r="4" />
        </svg>
      </div>
    </div>
  );
}
