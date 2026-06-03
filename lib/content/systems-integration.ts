import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'systems-integration',
  heroLead:
    'Connecting OT and IT, legacy and enterprise systems into one dependable fabric — so signals, sensors, applications and data behave as a single operation.',
  overview: [
    'Critical industries rarely fail because a single system is weak — they fail at the seams between them. Trackside controllers, SCADA, ERP, control centres, field devices and decades-old line-of-business applications all hold part of the truth, but rarely speak the same language. Hiliks Systems Integration closes those seams.',
    'We engineer the connective tissue between operational technology and information technology — bridging real-time industrial protocols and enterprise platforms through APIs, middleware and streaming data so the right information reaches the right system at the right moment. This is integration done by engineers who understand both worlds, not adapters bolted on after the fact.',
    'Because we build on genuine digital-engineering depth, our integration is resilient, observable and safe to evolve. Legacy systems are modernised without rip-and-replace risk, data flows in real time, and the fabric we deliver becomes a durable foundation for analytics, automation and AI rather than another point of fragility.',
  ],
  stats: [
    { value: 'OT + IT', label: 'Convergence engineered' },
    { value: 'Real-time', label: 'Data exchange' },
    { value: 'API-first', label: 'Integration fabric' },
    { value: 'Legacy-safe', label: 'Modernisation without rip-and-replace' },
  ],
  services: [
    { n: '01', title: 'OT/IT Convergence', desc: 'Unifying operational technology and enterprise IT into one governed, secure fabric.', points: ['Industrial protocol bridging', 'OT/IT security segmentation', 'Edge-to-enterprise data paths', 'Unified visibility & control'] },
    { n: '02', title: 'Legacy System Modernisation', desc: 'Bringing decades-old systems into a modern, connected architecture without rip-and-replace risk.', points: ['Interface & protocol wrapping', 'Incremental strangler migration', 'Data extraction & re-platforming', 'Risk-managed cutover'] },
    { n: '03', title: 'API & Middleware Fabric', desc: 'An API-first integration layer that decouples systems and makes them reusable.', points: ['API design & gateways', 'ESB & iPaaS orchestration', 'Message queues & routing', 'Versioning & lifecycle governance'] },
    { n: '04', title: 'Real-Time Data Exchange', desc: 'Streaming and event-driven pipelines that move operational data the moment it is created.', points: ['Event streaming & brokers', 'Change-data-capture pipelines', 'Stream processing & enrichment', 'Guaranteed delivery & ordering'] },
    { n: '05', title: 'Enterprise & Control-System Integration', desc: 'Joining ERP, ECM and control centres to the systems and signals that run operations.', points: ['ERP / ECM connectors', 'Control-centre (OCC) integration', 'Master & reference data alignment', 'End-to-end process orchestration'] },
  ],
  approach: [
    { step: '01', title: 'Map the landscape', desc: 'We chart every system, protocol, data flow and ownership boundary across the OT and IT estate before touching anything.' },
    { step: '02', title: 'Design the fabric', desc: 'We define APIs, contracts, message patterns and security boundaries so integration is loosely coupled and reusable.' },
    { step: '03', title: 'Integrate incrementally', desc: 'We connect and modernise system by system, proving each flow in production before moving to the next.' },
    { step: '04', title: 'Observe & operate', desc: 'We instrument the fabric end to end so flows are monitored, recoverable and safe to evolve over time.' },
  ],
  outcomes: [
    { title: 'One operational picture', desc: 'OT and IT data converge so operators and enterprise systems work from the same real-time truth.' },
    { title: 'Lower integration risk', desc: 'Loosely coupled APIs and incremental modernisation remove the brittleness of point-to-point connections.' },
    { title: 'Ready for AI & automation', desc: 'A clean, real-time data fabric becomes the foundation analytics and automation can build on with confidence.' },
    { title: 'Longer life from legacy', desc: 'Existing investments keep delivering value, modernised in place instead of replaced at high cost.' },
  ],
  tech: ['ESB & iPaaS platforms', 'REST / GraphQL APIs & gateways', 'Apache Kafka & event streaming', 'OPC-UA / MQTT / Modbus', 'MuleSoft-class integration', 'ETL / ELT & CDC pipelines', 'Message queues (RabbitMQ / AMQP)', 'Cloud integration (Azure / AWS / GCP)', 'API management & governance', 'Observability & tracing'],
  faqs: [
    { q: 'What makes OT/IT integration different from normal IT integration?', a: 'OT systems are real-time, safety-relevant and often run proprietary industrial protocols, so convergence demands engineering that respects both deterministic operations and enterprise security — which is where our depth matters.' },
    { q: 'Can you modernise legacy systems without replacing them?', a: 'Yes. We favour incremental, strangler-style modernisation — wrapping interfaces and migrating flows gradually — so you reduce risk and keep operating throughout.' },
    { q: 'Do you build on standards or proprietary tools?', a: 'We are API-first and standards-led — using open protocols and proven integration platforms so the fabric stays portable, governable and free of lock-in.' },
    { q: 'How does this support analytics and automation later?', a: 'A real-time, well-governed integration fabric is the prerequisite for trustworthy AI and automation, so the data exchange we build is designed to feed those capabilities directly.' },
  ],
};

export default content;
