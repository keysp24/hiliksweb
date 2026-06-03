import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'bfsi',
  heroLead:
    'Automation, ECM and AI for banks, financial services and insurers — engineering digital, compliant operations from onboarding to compliance, across India and the GCC.',
  overview: [
    'Hiliks BFSI brings engineering discipline to the operational core of banks, financial-services firms and insurers. We digitise and automate the document-heavy, control-heavy processes — onboarding, KYC, account servicing, claims and case work — so institutions move faster without loosening the controls regulators demand.',
    'Financial operations live and die by documents, evidence and auditability. We combine enterprise content management, workflow automation and intelligent document processing to turn paper-bound, manual processes into straight-through digital journeys — every action captured, every decision traceable, every record retained to policy.',
    'Where it changes outcomes, we layer AI: document intelligence to read and classify what arrives, analytics to surface risk, and models to flag fraud and anomalies. The result is a financial back office that is faster, cheaper to run and continuously compliant — delivered across India and the GCC.',
  ],
  stats: [
    { value: 'STP', label: 'Straight-through processing' },
    { value: 'Audit-ready', label: 'Traceable by design' },
    { value: 'ECM + AI', label: 'Document-first engineering' },
    { value: 'GCC + India', label: 'Delivery footprint' },
  ],
  challenges: [
    { title: 'Manual, paper-heavy onboarding', desc: 'Account opening and KYC depend on documents, re-keying and hand-offs that slow customers down and inflate cost-to-serve.' },
    { title: 'Fragmented documents & records', desc: 'Customer evidence is scattered across systems, drives and inboxes, making retrieval, retention and audit response slow and risky.' },
    { title: 'Relentless compliance pressure', desc: 'KYC, AML and evolving regulation demand auditable, repeatable controls that manual processes struggle to sustain.' },
    { title: 'Fraud & operational risk', desc: 'Sophisticated fraud and human error in high-volume processing expose institutions to loss and reputational damage.' },
    { title: 'Legacy core & siloed systems', desc: 'Core banking, lending, claims and CRM rarely talk cleanly, forcing swivel-chair work and duplicated data entry.' },
    { title: 'Data without decisions', desc: 'Transaction and document data accumulates but rarely converts into timely risk, fraud or service insight.' },
  ],
  offerings: [
    { n: '01', title: 'Onboarding & Workflow Automation', desc: 'Digital customer onboarding and process automation that compress cycle times while keeping controls intact.', points: ['Digital onboarding & e-KYC journeys', 'RPA for repetitive back-office tasks', 'Straight-through processing of cases', 'Workflow orchestration & SLA tracking'] },
    { n: '02', title: 'ECM & Document Management', desc: 'Enterprise content management that makes every document captured, classified, retained and instantly retrievable.', points: ['Centralised content repository & capture', 'Records management & retention policy', 'Version control & secure access', 'Audit trails & e-signature workflows'] },
    { n: '03', title: 'Compliance & Risk', desc: 'Engineered controls for KYC, AML and regulatory obligations — auditable and repeatable by design.', points: ['KYC / AML process automation', 'Policy-driven controls & approvals', 'Regulatory reporting support', 'Full audit and evidence trails'] },
    { n: '04', title: 'AI & Document Intelligence', desc: 'AI that reads, classifies and understands financial documents to remove manual effort and surface risk.', points: ['Intelligent document processing & OCR', 'Automated classification & extraction', 'Document validation & exception handling', 'Analytics on operational & customer data'] },
    { n: '05', title: 'Fraud & Anomaly Detection', desc: 'Machine learning that flags suspicious activity and anomalies across transactions and case work.', points: ['Transaction anomaly detection', 'Fraud-risk scoring models', 'Alerting & investigation workflows', 'Continuous model monitoring'] },
    { n: '06', title: 'Core & Systems Integration', desc: 'Clean integration across core banking, lending, claims and CRM to end swivel-chair work.', points: ['Core banking & policy-admin integration', 'API & middleware engineering', 'Data synchronisation across systems', 'Legacy modernisation without disruption'] },
  ],
  approach: [
    { step: '01', title: 'Map the process & controls', desc: 'We start from the regulated process — documents, decisions, controls and audit needs — before any automation is designed.' },
    { step: '02', title: 'Digitise the content', desc: 'We capture and structure documents into ECM so every record is classified, secure, retained and retrievable.' },
    { step: '03', title: 'Automate the workflow', desc: 'We orchestrate onboarding, KYC and case work into straight-through digital journeys with controls built in.' },
    { step: '04', title: 'Apply intelligence', desc: 'We layer document intelligence, analytics and fraud models to remove manual effort and surface risk early.' },
  ],
  outcomes: [
    { title: 'Faster onboarding', desc: 'Digital, automated journeys cut cycle times and cost-to-serve while improving the customer experience.' },
    { title: 'Continuous compliance', desc: 'Policy-driven controls and complete audit trails make KYC, AML and regulatory response repeatable and defensible.' },
    { title: 'Lower operational risk', desc: 'Document intelligence and fraud detection reduce error and loss across high-volume processing.' },
    { title: 'Decisions from data', desc: 'Analytics turn document and transaction data into timely risk, fraud and service insight.' },
  ],
  tech: ['OpenText ECM', 'Enterprise content management', 'RPA / robotic process automation', 'Intelligent document processing & OCR', 'KYC / AML workflow', 'Core banking integration', 'API & middleware', 'Fraud-detection ML', 'Document-intelligence AI', 'Workflow orchestration (BPM)', 'e-Signature & records management', 'Azure / AWS'],
  faqs: [
    { q: 'Do you replace our core banking system?', a: 'No. We integrate with and extend your existing core, lending, claims and CRM systems — automating the document and process layer around them rather than ripping out what works.' },
    { q: 'How do you keep automated processes compliant?', a: 'We engineer controls into the workflow — policy-driven approvals, KYC/AML checks and complete audit trails — so every action is captured and every decision is traceable for regulators.' },
    { q: 'Where does AI add value in financial operations?', a: 'We apply AI where it changes outcomes — document intelligence to read and classify what arrives, and models to detect fraud and anomalies — grounded in your data, not bolted on.' },
    { q: 'Which institutions do you serve?', a: 'Banks, financial-services firms and insurers across India and the GCC (UAE / KSA), from onboarding and ECM through to compliance and analytics.' },
  ],
  relatedSolutions: ['intelligent-automation', 'enterprise-applications', 'ai-analytics', 'systems-integration'],
};

export default content;
