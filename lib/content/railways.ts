import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'railways',
  heroLead:
    'From the track to the operations centre — signaling and safety, railway telecom, smart rail, OCC integration and AI-led operations for Indian Railways, Etihad Rail and GCC operators.',
  overview: [
    'Hiliks Railways is our flagship business unit and the proof of our engineering-led approach. We engineer the safety-critical, mission-critical systems that move people and freight reliably — from interlocking and train control on the track, to the operations control centre where every signal, asset and decision converges.',
    'Rail is unforgiving: a single fault can halt a corridor, and every change must satisfy stringent safety, availability and regulatory requirements. We bring genuine engineering depth — not generic IT services — across signaling, trackside telecom, OFC backbone, smart-rail data systems and OCC integration, modernized with AI woven through operations.',
    'We work across the Indian Railways ecosystem and GCC operators including Etihad Rail, combining domain credibility built on signaling, telecom and asset systems with modern data platforms, predictive maintenance and decision intelligence.',
  ],
  stats: [
    { value: '7', label: 'Rail capability areas' },
    { value: '24×7', label: 'OCC-grade operations' },
    { value: '99.9%', label: 'Availability targets engineered' },
    { value: 'GCC + India', label: 'Delivery footprint' },
  ],
  challenges: [
    { title: 'Ageing signaling & legacy interlocking', desc: 'Decades-old assets must be modernized without compromising safety integrity or interrupting live operations.' },
    { title: 'Fragmented trackside systems', desc: 'Signaling, telecom, power and asset systems are siloed, making unified situational awareness in the OCC difficult.' },
    { title: 'Reactive maintenance', desc: 'Failures are found after they happen, driving costly downtime, delays and emergency interventions.' },
    { title: 'Safety & regulatory pressure', desc: 'Train control and interlocking demand auditable, standards-compliant engineering with zero tolerance for ambiguity.' },
    { title: 'Resilient communications at distance', desc: 'Corridors span vast, harsh terrain where trackside communications and OFC backbones must never drop.' },
    { title: 'Data without decisions', desc: 'Modern trains and trackside generate huge data volumes that rarely translate into operational action.' },
  ],
  offerings: [
    { n: '01', title: 'Signaling & Safety', desc: 'Train control, interlocking and safety-critical signaling engineered for reliability and compliance.', points: ['Interlocking & train-control engineering', 'Safety-integrity (SIL) aligned delivery', 'Brownfield modernization without service loss', 'Verification, validation & safety cases'] },
    { n: '02', title: 'Railway Telecom', desc: 'OFC backbone and resilient trackside communications across distance and terrain.', points: ['Optical fibre (OFC) backbone design & rollout', 'Trackside & tunnel communications', 'Train-to-ground & GSM-R / radio integration', 'Network resilience & redundancy'] },
    { n: '03', title: 'Smart Rail Systems', desc: 'Connected trackside and station systems that generate the data operations depend on.', points: ['IoT-enabled trackside sensing', 'Passenger information & station systems', 'Edge data acquisition', 'Connected asset instrumentation'] },
    { n: '04', title: 'OCC Integration', desc: 'Operations control centre integration — unifying systems, signals and data into a single pane.', points: ['Multi-system OCC integration', 'SCADA / signaling / telecom convergence', 'Unified situational awareness', 'Control-room workflow engineering'] },
    { n: '05', title: 'AI-Led Operations', desc: 'Analytics and automation that turn rail data into operational decisions.', points: ['Operational decision intelligence', 'Anomaly & incident detection', 'Automated alerting & response', 'Capacity & punctuality analytics'] },
    { n: '06', title: 'Predictive Maintenance', desc: 'Condition monitoring fused with AI to predict failures and extend asset life.', points: ['Condition-based monitoring', 'Failure prediction models', 'Rolling-stock & trackside health', 'Maintenance optimization'] },
    { n: '07', title: 'Enterprise Rail Systems', desc: 'ERP, ECM, workflow and asset management for the railway enterprise.', points: ['Enterprise asset management (EAM)', 'ECM & engineering document control', 'Workflow & maintenance management', 'Spares, inventory & logistics'] },
  ],
  approach: [
    { step: '01', title: 'Engineer for safety first', desc: 'We start from safety integrity and compliance — interlocking logic, standards and verifiable safety cases.' },
    { step: '02', title: 'Integrate the operation', desc: 'We converge signaling, telecom, power and asset systems into the OCC for unified situational awareness.' },
    { step: '03', title: 'Instrument & sense', desc: 'We connect trackside and rolling stock so the operation produces reliable, real-time data.' },
    { step: '04', title: 'Apply intelligence', desc: 'We layer predictive maintenance and decision intelligence to move from reactive to proactive operations.' },
  ],
  outcomes: [
    { title: 'Higher availability', desc: 'Fewer unplanned failures and faster recovery through condition monitoring and unified control.' },
    { title: 'Safer, compliant operations', desc: 'Auditable, standards-aligned signaling and safety engineering you can certify with confidence.' },
    { title: 'Lower maintenance cost', desc: 'Predictive maintenance extends asset life and shifts spend from emergency to planned work.' },
    { title: 'Decisions from data', desc: 'AI-led operations turn trackside and OCC data into punctuality and capacity gains.' },
  ],
  tech: ['Interlocking & train control', 'SCADA', 'OFC / optical transport', 'GSM-R / train radio', 'IoT edge', 'Predictive-maintenance ML', 'Enterprise Asset Management', 'OpenText ECM', 'Azure / AWS', 'Time-series & streaming data'],
  faqs: [
    { q: 'Do you work on safety-critical signaling, or only IT systems?', a: 'Both. Our flagship strength is genuine signaling and train-control engineering delivered to safety-integrity expectations — then extended with telecom, OCC integration, data and AI.' },
    { q: 'Can you modernize live rail systems without disrupting operations?', a: 'Yes. We specialise in brownfield modernization with phased cutover, redundancy and rigorous verification so live corridors keep running.' },
    { q: 'Which rail operators do you serve?', a: 'The Indian Railways ecosystem and GCC operators including Etihad Rail, with delivery across India and the GCC (UAE / KSA).' },
    { q: 'How does AI fit into rail operations?', a: 'We embed AI where it changes outcomes — predictive maintenance, anomaly detection and OCC decision intelligence — grounded in rail domain and data, not bolted on.' },
  ],
  relatedSolutions: ['digital-engineering', 'systems-integration', 'ai-analytics', 'infrastructure-monitoring'],
};

export default content;
