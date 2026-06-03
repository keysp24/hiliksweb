import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'enterprise-applications',
  heroLead:
    'ERP, ECM and core enterprise platforms tailored to each industry — implemented and configured by engineers who understand how critical operations actually run.',
  overview: [
    'Enterprise Applications is where the operational reality of a critical business meets disciplined software delivery. We implement and tailor ERP, ECM and the core enterprise platforms that finance, procurement, asset management, records and back-office teams depend on every day — shaped to the regulatory, asset-heavy and process-intensive nature of railways, energy, oil & gas and the wider critical-industry landscape.',
    'We do not treat these platforms as off-the-shelf installs. Each rollout is grounded in the way the industry genuinely operates, so workflows, master data, controls and integrations reflect real processes rather than generic templates. That engineering-led mindset — the same rigour we bring to embedded and platform work — is what makes our enterprise deployments durable rather than disposable.',
    'Because we engineer the systems these platforms connect to, our ERP and ECM work lands cleanly inside a broader operational fabric. Documents, transactions, assets and processes flow across the enterprise without the brittle hand-offs and shadow systems that so often follow a poorly fitted implementation.',
  ],
  stats: [
    { value: 'ERP + ECM', label: 'Core platform depth' },
    { value: 'Tailored', label: 'Industry-specific by design' },
    { value: 'Process-led', label: 'Workflows that match reality' },
    { value: 'Integrated', label: 'Connected to the wider estate' },
  ],
  services: [
    { n: '01', title: 'ERP Implementation & Rollout', desc: 'End-to-end ERP delivery from blueprint through phased go-live across the enterprise.', points: ['Process blueprinting & fit analysis', 'Configuration & module rollout', 'Data migration & cutover', 'Hypercare & sustained adoption'] },
    { n: '02', title: 'ECM & Document Management', desc: 'Enterprise content and records platforms that govern critical documents across their lifecycle.', points: ['Document capture & ingestion', 'Records & retention governance', 'Search, classification & metadata', 'Secure access & audit trails'] },
    { n: '03', title: 'Workflow & Process Platforms', desc: 'Business process and workflow platforms that digitize approvals, cases and operational flows.', points: ['Process modelling & automation', 'Approval & case management', 'Forms & low-code workflows', 'SLA tracking & process visibility'] },
    { n: '04', title: 'Industry-Specific Configuration', desc: 'Platform tailoring that reflects the regulatory and operational shape of each vertical.', points: ['Vertical process templates', 'Compliance & control mapping', 'Asset & maintenance alignment', 'Localized & regional requirements'] },
    { n: '05', title: 'Integration & Master Data', desc: 'Connecting enterprise platforms to the surrounding systems and keeping core data trustworthy.', points: ['Platform-to-platform integration', 'Master data management', 'APIs & enterprise interfaces', 'Reconciliation & data quality'] },
  ],
  approach: [
    { step: '01', title: 'Understand the operation', desc: 'We map how the business actually runs — processes, controls, assets and constraints — before touching configuration.' },
    { step: '02', title: 'Blueprint for the industry', desc: 'We design the platform fit around vertical realities and compliance, not generic best-practice templates.' },
    { step: '03', title: 'Configure & integrate', desc: 'We tailor workflows, migrate clean data and connect the platform into the wider enterprise estate.' },
    { step: '04', title: 'Adopt & sustain', desc: 'We drive go-live, hypercare and steady-state adoption so the platform keeps delivering value.' },
  ],
  outcomes: [
    { title: 'Platforms that fit, not fight', desc: 'Industry-aligned configuration means teams adopt the system instead of building workarounds around it.' },
    { title: 'Trusted records & controls', desc: 'Governed content, clean master data and audit-ready trails that stand up to compliance scrutiny.' },
    { title: 'One connected enterprise', desc: 'ERP, ECM and workflow platforms integrated into the broader estate, eliminating brittle silos.' },
    { title: 'Lower total cost of ownership', desc: 'Right-fit implementation and sustained adoption reduce rework, shadow systems and lifecycle cost.' },
  ],
  tech: ['Oracle ERP & E-Business Suite', 'OpenText ECM', 'Microsoft Power Platform', 'BPM & workflow engines', 'Document management & records', 'Master data management', 'Enterprise integration & APIs', 'Identity & access governance', 'Azure / AWS / GCP', 'Reporting & analytics'],
  faqs: [
    { q: 'Do you implement a single ERP product or work across platforms?', a: 'We work across leading enterprise platforms — including Oracle and OpenText — and select and tailor the fit based on the industry and the operation, rather than forcing one product on every client.' },
    { q: 'What makes your implementations industry-specific?', a: 'We blueprint around how each vertical genuinely operates — its assets, compliance regime and processes — so workflows, controls and master data reflect reality instead of generic templates.' },
    { q: 'Can these platforms connect to our existing systems?', a: 'Yes. We engineer integration and master data management so ERP, ECM and workflow platforms connect cleanly into the wider OT and IT estate rather than running as isolated silos.' },
    { q: 'How do you handle records, compliance and audit needs?', a: 'Our ECM and process work builds in retention governance, classification, secure access and audit trails, so critical content and approvals remain compliant and traceable across their lifecycle.' },
  ],
};

export default content;
