import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'digital-engineering',
  heroLead:
    'Embedded, product and platform engineering for critical systems — real engineering depth that powers the systems other vendors only integrate.',
  overview: [
    'Digital Engineering is the foundation of Hiliks. We build the embedded, product and platform software that runs inside safety- and mission-critical systems — from trackside controllers and industrial edge devices to the enterprise platforms that operate them.',
    'This is engineering, not assembly. Our teams work across firmware, real-time systems, hardware-software co-design and cloud-native platforms, applying rigorous verification, traceability and quality engineering suited to industries where failure is not an option.',
    'Because we engineer the core, every other capability — integration, AI, automation and managed services — sits on a foundation we genuinely understand. That depth is what makes Hiliks credible in railways, energy, oil & gas and beyond.',
  ],
  stats: [
    { value: '8', label: 'Core capabilities' },
    { value: 'SIL', label: 'Safety-aligned delivery' },
    { value: 'OT + IT', label: 'Full-stack engineering' },
    { value: '24×7', label: 'Operable by design' },
  ],
  services: [
    { n: '01', title: 'Embedded & Firmware Engineering', desc: 'Real-time firmware and embedded software for controllers, sensors and edge devices.', points: ['RTOS & bare-metal firmware', 'Device drivers & protocols', 'Edge data acquisition', 'Low-power & deterministic design'] },
    { n: '02', title: 'Product Engineering', desc: 'Full product lifecycle engineering from architecture through sustained release.', points: ['Architecture & design', 'Agile delivery & DevOps', 'Test automation & QA', 'Sustained engineering'] },
    { n: '03', title: 'Platform Engineering', desc: 'Cloud-native and on-prem platforms that critical operations run on.', points: ['Cloud-native platform design', 'APIs & microservices', 'Scalability & resilience', 'Observability built in'] },
    { n: '04', title: 'Hardware-Software Co-Design', desc: 'Co-engineering across the boundary where hardware meets software.', points: ['HW/SW partitioning', 'Board bring-up & integration', 'Interface & protocol design', 'System validation'] },
    { n: '05', title: 'Safety-Critical Systems', desc: 'Engineering disciplined for safety integrity and regulatory compliance.', points: ['Safety-integrity (SIL) practices', 'Requirements traceability', 'Verification & validation', 'Auditable safety cases'] },
  ],
  approach: [
    { step: '01', title: 'Architect for the constraint', desc: 'We start from the real-world constraints — safety, latency, reliability — that the system must honour.' },
    { step: '02', title: 'Engineer with rigour', desc: 'Traceable requirements, disciplined design and automated testing from day one.' },
    { step: '03', title: 'Verify & validate', desc: 'We prove the system against its requirements with structured V&V and evidence.' },
    { step: '04', title: 'Operate & sustain', desc: 'We harden for operations and sustain the product across its lifecycle.' },
  ],
  outcomes: [
    { title: 'Systems you can certify', desc: 'Traceable, verifiable engineering that stands up to safety and regulatory scrutiny.' },
    { title: 'Lower total cost', desc: 'Quality engineered in early means fewer defects, less rework and lower lifetime cost.' },
    { title: 'Faster, safer change', desc: 'Automation and observability let you evolve critical systems with confidence.' },
  ],
  tech: ['C / C++ / Rust', 'RTOS & embedded Linux', 'Python / Go', 'Kubernetes & containers', 'CI/CD & DevOps', 'Azure / AWS / GCP', 'MQTT / OPC-UA', 'Test automation'],
  faqs: [
    { q: 'How is this different from generic software development?', a: 'We engineer for critical systems — safety integrity, traceability, verification and long lifecycles — not just feature delivery.' },
    { q: 'Do you cover both hardware-adjacent and cloud work?', a: 'Yes. We span embedded firmware and hardware-software co-design through to cloud-native platform engineering.' },
    { q: 'Can you work to safety standards?', a: 'Our delivery is disciplined for safety-integrity expectations with requirements traceability and auditable verification.' },
  ],
};

export default content;
