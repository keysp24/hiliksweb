import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'infrastructure-monitoring',
  heroLead:
    'Cloud, network and operations monitoring engineered for critical industries — infrastructure you can trust to stay up, and visibility you can act on before anything breaks.',
  overview: [
    'Infrastructure & Monitoring keeps the platforms behind critical operations running — across cloud, hybrid and on-prem estates, and across the OT/IT boundary where rail, energy and industrial systems actually live. We design, run and watch the infrastructure that everything else depends on.',
    'This is operations-grade engineering, not a dashboard. We build cloud and hybrid foundations with infrastructure-as-code, run networks and operations centres to defined service levels, and instrument every layer with observability so issues surface as signals — not as outages reported by users.',
    'Because Hiliks engineers the systems we monitor, our telemetry maps to how the technology really behaves. That depth lets us tune alerting that means something, plan resilience and disaster recovery against real failure modes, and give operators a single, honest view of health across the estate.',
  ],
  stats: [
    { value: '24×7', label: 'Monitored operations' },
    { value: 'Hybrid', label: 'Cloud + on-prem + edge' },
    { value: '99.9%', label: 'Availability targets' },
    { value: 'OT + IT', label: 'Estate-wide visibility' },
  ],
  services: [
    { n: '01', title: 'Cloud & Hybrid Infrastructure', desc: 'Engineered cloud, hybrid and on-prem foundations provisioned and governed as code.', points: ['Cloud & hybrid architecture', 'Infrastructure-as-code provisioning', 'Containers & Kubernetes platforms', 'Cost, security & governance guardrails'] },
    { n: '02', title: 'Network Operations', desc: 'Resilient connectivity and network operations across distance, terrain and the OT/IT divide.', points: ['Network design & segmentation', 'NOC operations & service levels', 'Performance & traffic monitoring', 'OT/IT and trackside connectivity'] },
    { n: '03', title: 'Observability & Monitoring', desc: 'Full-stack telemetry that turns metrics, logs and traces into actionable signal.', points: ['Metrics, logs & distributed tracing', 'APM & application observability', 'Meaningful alerting & dashboards', 'Capacity & health baselining'] },
    { n: '04', title: 'Resilience & Disaster Recovery', desc: 'Designed-in resilience with tested recovery against real-world failure modes.', points: ['HA & failover architecture', 'Backup & disaster-recovery design', 'RTO / RPO definition & testing', 'Runbooks & recovery drills'] },
    { n: '05', title: 'Security Monitoring & SIEM', desc: 'Continuous security visibility integrated with infrastructure and network operations.', points: ['SIEM & log correlation', 'Threat detection & alerting', 'Endpoint & network sensors', 'Compliance & audit reporting'] },
  ],
  approach: [
    { step: '01', title: 'Map the estate', desc: 'We baseline the cloud, network and on-prem landscape — and the OT/IT dependencies that matter most.' },
    { step: '02', title: 'Engineer the foundation', desc: 'Infrastructure built and governed as code, with resilience and security designed in from the start.' },
    { step: '03', title: 'Instrument everything', desc: 'Full-stack observability and security telemetry so health, performance and risk are always visible.' },
    { step: '04', title: 'Operate & improve', desc: 'We run to defined service levels, tune alerting, test recovery and harden the estate continuously.' },
  ],
  outcomes: [
    { title: 'Fewer surprises', desc: 'Observability surfaces issues as early signals, so problems are resolved before they become outages.' },
    { title: 'Dependable availability', desc: 'Resilient architecture and tested recovery keep critical operations running to agreed service levels.' },
    { title: 'Faster resolution', desc: 'A single, accurate view across cloud, network and operations cuts time to detect and time to repair.' },
    { title: 'Controlled cost & risk', desc: 'Governed, code-driven infrastructure keeps spend, security and compliance under continuous control.' },
  ],
  tech: ['Azure / AWS / GCP', 'Kubernetes & containers', 'Terraform & infrastructure-as-code', 'Prometheus & Grafana', 'AppDynamics & APM', 'ELK / log analytics', 'SIEM & security monitoring', 'Network monitoring & SNMP', 'Trend Micro / Forescout', 'Backup & disaster recovery', 'CI/CD & GitOps', 'OT/IT edge monitoring'],
  faqs: [
    { q: 'Can you monitor hybrid and on-prem estates, not just cloud?', a: 'Yes. We instrument cloud, hybrid, on-prem and edge together — including the OT/IT systems found in rail, energy and industrial environments.' },
    { q: 'Do you build the infrastructure or only watch it?', a: 'Both. We design and provision cloud and hybrid infrastructure as code, then run and observe it to defined service levels.' },
    { q: 'How do you handle resilience and disaster recovery?', a: 'We design high availability and failover, define and test RTO/RPO targets, and run recovery drills against realistic failure modes.' },
    { q: 'How does monitoring connect to security?', a: 'Security telemetry and SIEM are integrated with infrastructure and network monitoring, giving one correlated view of health and risk.' },
  ],
};

export default content;
