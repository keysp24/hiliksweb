import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'managed-services',
  heroLead:
    'L1/L2/L3 operations and 24×7 support for systems that cannot afford downtime — run by engineers who understand what they operate.',
  overview: [
    'Managed Services keeps critical systems running. We provide L1, L2 and L3 operations, 24×7 NOC coverage and SLA-driven support for the platforms that signaling, networks, control centres and enterprise operations depend on every hour of every day.',
    'This is operations led by engineering, not a generic helpdesk. Because Hiliks builds the embedded, platform and integration software underneath these systems, our operations teams diagnose root cause rather than just triage tickets — closing the gap between running a system and understanding it.',
    'We transition services with discipline, run them against agreed SLAs with full observability, and improve continuously — turning every incident into a runbook, every recurring fault into permanent fix, and steady-state operations into measurable reliability.',
  ],
  stats: [
    { value: '24×7', label: 'NOC & support coverage' },
    { value: 'L1–L3', label: 'Full operations tiers' },
    { value: 'SLA-driven', label: 'Measured delivery' },
    { value: 'Engineer-led', label: 'Root-cause operations' },
  ],
  services: [
    { n: '01', title: 'L1 / L2 / L3 Operations', desc: 'Tiered operations from first-line triage through deep engineering resolution.', points: ['L1 monitoring & first response', 'L2 incident analysis & action', 'L3 root-cause & code-level fixes', 'Seamless escalation across tiers'] },
    { n: '02', title: '24×7 NOC & Support', desc: 'Always-on network and operations centre coverage for critical systems.', points: ['Round-the-clock monitoring', 'Incident detection & triage', 'Follow-the-clock shift coverage', 'On-call escalation paths'] },
    { n: '03', title: 'SLA-Driven Service Delivery', desc: 'Operations governed by clear, measurable service-level commitments.', points: ['Defined SLAs & SLOs', 'Priority & severity matrices', 'Transparent reporting & reviews', 'Service governance cadence'] },
    { n: '04', title: 'Incident & Problem Management', desc: 'ITIL-aligned handling of incidents, problems and major events.', points: ['Major incident management', 'Structured problem management', 'Post-incident reviews', 'Knowledge & runbook capture'] },
    { n: '05', title: 'Continuous Service Improvement', desc: 'Operations that get measurably better over the life of the engagement.', points: ['Recurring-fault elimination', 'Automation of toil', 'Capacity & reliability tuning', 'Improvement backlog & metrics'] },
  ],
  approach: [
    { step: '01', title: 'Transition & onboard', desc: 'We take over knowledge, runbooks and tooling with a structured transition that protects continuity.' },
    { step: '02', title: 'Stabilise operations', desc: 'We establish monitoring, SLAs and escalation paths so the service runs predictably from day one.' },
    { step: '03', title: 'Run to SLA', desc: 'We operate against agreed service levels with 24×7 coverage, transparent reporting and clear governance.' },
    { step: '04', title: 'Improve continuously', desc: 'We turn incidents into permanent fixes, automate toil and raise reliability over time.' },
  ],
  outcomes: [
    { title: 'Reliable, predictable operations', desc: 'Critical systems stay available, with SLAs met and incidents resolved at root cause.' },
    { title: 'Fewer recurring incidents', desc: 'Continuous improvement and engineer-led problem management steadily remove repeat failures.' },
    { title: 'Lower operating cost', desc: 'Automation of toil and tiered operations reduce effort and total cost of running critical systems.' },
    { title: 'Operational visibility', desc: 'Observability and transparent reporting give you a clear, real-time view of service health.' },
  ],
  tech: ['ITIL service management', 'ServiceNow & ITSM platforms', 'NOC tooling & dashboards', 'Prometheus & Grafana', 'Observability & APM', 'ELK & log analytics', 'Monitoring & alerting', 'Runbook & knowledge automation', 'Incident & on-call platforms', 'Cloud operations (Azure / AWS / GCP)', 'Infrastructure-as-code', 'CI/CD & DevOps'],
  faqs: [
    { q: 'How is this different from a generic IT helpdesk?', a: 'Our operations are engineer-led — because we build the systems underneath, we resolve at root cause rather than only triaging tickets.' },
    { q: 'What do L1, L2 and L3 cover?', a: 'L1 handles monitoring and first response, L2 performs incident analysis and action, and L3 delivers deep root-cause and code-level resolution.' },
    { q: 'How do you ensure service quality?', a: 'We run to agreed SLAs and SLOs with ITIL-aligned incident and problem management, transparent reporting and a regular governance cadence.' },
    { q: 'Can you take over an existing service?', a: 'Yes. We run a structured transition that captures knowledge, runbooks and tooling so continuity is protected from day one.' },
  ],
};

export default content;
