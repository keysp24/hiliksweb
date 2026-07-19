import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'telecom',
  heroLead:
    'Connected, automated telecom operations — OSS/BSS modernization, network operations and monitoring, intelligent automation, and managed services and analytics for operators across India and the GCC, supported by consulting and specialized talent solutions.',
  overview: [
    'Hiliks Telco helps telecom operators modernize the operational core of their business — the OSS and BSS stacks, network operations centres and assurance systems that decide whether services are provisioned, billed and kept up around the clock. We bring engineering-led depth rather than generic IT services, treating the network and its supporting systems as one mission-critical operation.',
    'Telecom is a high-volume, low-tolerance environment: subscribers expect instant activation and flawless billing, while networks must stay up across vast, heterogeneous infrastructure. Legacy OSS/BSS, siloed assurance tools and manual workflows make every change slow and every outage costly. We untangle that complexity — modernizing platforms, integrating systems end to end, and layering automation and analytics so operations move from reactive firefighting to proactive control.',
    'We deliver across the Indian telecom ecosystem and GCC operators, combining hands-on experience with order management, charging, mediation and network monitoring with modern data platforms, intelligent automation and 24×7 managed services — engineered for the availability, scale and regulatory expectations operators demand. Our consulting and talent practice helps operators secure the leadership, OSS/BSS specialists and automation engineers needed for modernization.'
  ],
  stats: [
    { value: '24×7', label: 'NOC-grade operations' },
    { value: 'OSS + BSS', label: 'Full operational stack' },
    { value: 'GCC + India', label: 'Delivery footprint' },
    { value: 'Automation-led', label: 'Operating model' },
  ],
  challenges: [
    { title: 'Legacy, monolithic OSS/BSS', desc: 'Ageing order, billing and inventory platforms are costly to change and slow to launch new products on, blocking growth and digital propositions.' },
    { title: 'Siloed assurance & operations', desc: 'Network monitoring, fault and performance tools are fragmented, leaving NOC teams without a unified, real-time view of service health.' },
    { title: 'Manual, repetitive workflows', desc: 'Provisioning, ticket handling and reconciliation rely on manual effort, driving cost, errors and slow time-to-resolution.' },
    { title: 'Reactive fault management', desc: 'Faults are detected after customers feel them, turning operations into firefighting instead of proactive prevention.' },
    { title: 'Data without insight', desc: 'Networks and BSS generate enormous volumes of data, yet little of it translates into operational, commercial or churn-reducing decisions.' },
  ],
  offerings: [
    { n: '01', title: 'OSS/BSS Modernization', desc: 'Modernizing the operational and business support stack so operators can launch, provision and bill faster.', points: ['Order management & service provisioning', 'Charging, billing & revenue assurance', 'Inventory, mediation & catalog modernization', 'Brownfield migration without service disruption'] },
    { n: '02', title: 'Network Operations & Monitoring', desc: 'NOC-grade fault, performance and assurance operations that keep services healthy around the clock.', points: ['Unified fault & performance monitoring', 'Service & network assurance integration', 'NOC tooling, dashboards & alerting', 'Capacity & availability management'] },
    { n: '03', title: 'Intelligent Automation', desc: 'Automation across provisioning, assurance and back-office workflows to cut cost and accelerate resolution.', points: ['Zero-touch provisioning & activation', 'Closed-loop incident automation', 'RPA for back-office & reconciliation', 'Self-healing & auto-remediation workflows'] },
    { n: '04', title: 'Systems Integration', desc: 'End-to-end integration that connects OSS, BSS, network and digital channels into one coherent operation.', points: ['OSS / BSS / network integration', 'API & event-driven architecture', 'Order-to-activate & order-to-cash flows', 'Legacy-to-digital integration layers'] },
    { n: '05', title: 'Managed Services', desc: 'Engineering-led managed operations that run and continuously improve telecom platforms and the NOC.', points: ['24×7 NOC & application operations', 'SLA-backed support & incident management', 'Platform run, patch & lifecycle management', 'Continuous optimization & cost control'] },
    { n: '06', title: 'Telecom Analytics & AI', desc: 'Analytics and AI that turn network and subscriber data into operational and commercial decisions.', points: ['Network performance & quality analytics', 'Predictive fault & anomaly detection', 'Churn, usage & customer-experience insight', 'Operational decision intelligence'] },
    { n: '07', title: 'Consulting & Talent', desc: 'Specialized consulting and talent services for telecom modernization — leadership search, direct hire and contract staffing.', points: ['Executive search for telecom leadership', 'Direct hire for OSS/BSS and network specialists', 'Contract hire for transformation programs', 'Diagnostic assessment & precision implementation'] },
  ],
  approach: [
    { step: '01', title: 'Assess the operation', desc: 'We map the OSS/BSS estate, assurance tooling and workflows to find the constraints driving cost, delay and outages.' },
    { step: '02', title: 'Modernize & integrate', desc: 'We modernize core platforms and integrate OSS, BSS and network systems into coherent order-to-activate and assurance flows.' },
    { step: '03', title: 'Automate operations', desc: 'We embed automation across provisioning, assurance and back-office workflows to remove manual effort and speed resolution.' },
    { step: '04', title: 'Run & improve', desc: 'We operate the stack 24×7 under SLA, layering analytics and AI to keep moving from reactive to proactive operations.' },
    { step: '05', title: 'Build the transformation team', desc: 'Our consulting and talent practice diagnoses capability gaps, designs the target organisation and fills leadership and specialist roles through executive search, direct hire and contract staffing.' },
  ],
  outcomes: [
    { title: 'Faster time-to-market', desc: 'Modernized OSS/BSS and automated provisioning let operators launch and activate services in a fraction of the time.' },
    { title: 'Higher service availability', desc: 'Unified monitoring and closed-loop automation detect and resolve faults before subscribers are affected.' },
    { title: 'Lower operational cost', desc: 'Intelligent automation and managed services strip out manual effort, errors and emergency interventions.' },
    { title: 'Decisions from data', desc: 'Analytics and AI turn network and subscriber data into assurance, capacity and customer-experience gains.' },
    { title: 'Ready transformation talent', desc: 'Leadership and specialist teams are in place to own, operate and continuously improve the modernized telecom operation.' },
  ],
  tech: ['OSS / BSS platforms', 'Order management & provisioning', 'Charging & billing systems', 'Mediation & revenue assurance', 'Fault & performance management (FCAPS)', 'NOC monitoring & observability', 'TM Forum Open APIs', 'RPA & workflow automation', 'Event streaming & messaging', 'Time-series & telemetry analytics', 'Cloud (Azure / AWS)', 'Predictive-analytics ML'],
  faqs: [
    { q: 'Do you work across both OSS and BSS, or just one side?', a: 'Both. We engineer the full operational stack — order management, provisioning and assurance on the OSS side, and charging, billing and revenue assurance on the BSS side — and integrate them end to end.' },
    { q: 'Can you modernize live telecom platforms without disrupting service?', a: 'Yes. We specialise in brownfield modernization with phased migration, integration layers and rigorous validation so billing, provisioning and the network keep running.' },
    { q: 'Which operators and regions do you serve?', a: 'The Indian telecom ecosystem and GCC operators, with delivery across India and the GCC (UAE / KSA).' },
    { q: 'How does automation and AI fit into telecom operations?', a: 'We embed them where they change outcomes — zero-touch provisioning, closed-loop assurance, predictive fault detection and NOC decision intelligence — grounded in operational data, not bolted on.' },
  ],
  relatedSolutions: ['enterprise-applications', 'systems-integration', 'intelligent-automation', 'managed-services'],
};

export default content;
