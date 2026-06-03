import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'oil-gas',
  heroLead:
    'Industrial Operations Intelligence — SCADA and DCS integration, HSE and compliance, operations intelligence and digital engineering for upstream, midstream and downstream operators across India and the GCC.',
  overview: [
    'Hiliks Oil & Gas applies our engineering-led DNA to industrial operations — converging the OT systems that run plants and pipelines with the IT and data layers that turn raw process signals into operational intelligence. We engineer for environments where uptime, safety and compliance are non-negotiable.',
    'Oil and gas operations are unforgiving: process upsets, integrity failures and compliance gaps carry real safety, environmental and financial consequences. We bring genuine industrial-engineering depth — not generic IT services — across SCADA and DCS integration, historians, industrial IoT, edge acquisition and HSE-aligned delivery, modernized with predictive analytics woven through operations.',
    'We work across upstream, midstream and downstream operators in India and the GCC, combining domain credibility built on control systems, instrumentation and asset integrity with modern data platforms, predictive maintenance and decision intelligence — closing the gap between the field and the control room.',
  ],
  stats: [
    { value: 'OT + IT', label: 'Convergence engineered' },
    { value: '24×7', label: 'Control-room operations' },
    { value: 'HSE-aligned', label: 'Safety & compliance delivery' },
    { value: 'GCC + India', label: 'Delivery footprint' },
  ],
  challenges: [
    { title: 'Siloed OT & IT systems', desc: 'SCADA, DCS, historians and enterprise systems run in isolation, denying operators a unified view of plant and pipeline performance.' },
    { title: 'Ageing control systems', desc: 'Legacy DCS and SCADA must be modernized and integrated without interrupting safety-critical, live production.' },
    { title: 'Reactive asset integrity', desc: 'Equipment failures and integrity issues are found after they happen, driving unplanned shutdowns and costly intervention.' },
    { title: 'HSE & regulatory pressure', desc: 'Operations demand auditable, standards-compliant engineering with rigorous safety, environmental and emissions accountability.' },
    { title: 'Data without decisions', desc: 'Instrumentation and historians generate vast process data that rarely translates into timely operational action.' },
  ],
  offerings: [
    { n: '01', title: 'Industrial Systems & SCADA Integration', desc: 'Converging SCADA, DCS, PLC and instrumentation with the enterprise and data layers into one operational fabric.', points: ['SCADA / DCS / PLC integration', 'OPC-UA & industrial protocol connectivity', 'OT/IT convergence & secure data flow', 'Brownfield integration without production loss'] },
    { n: '02', title: 'Compliance & Safety', desc: 'HSE-aligned engineering with auditable compliance, integrity and emissions accountability built in.', points: ['HSE & regulatory-aligned delivery', 'Asset integrity & inspection data systems', 'Emissions, environmental & audit reporting', 'Functional-safety-aware engineering'] },
    { n: '03', title: 'Operations Intelligence', desc: 'Turning process and asset data into real-time visibility and decisions for the control room and the enterprise.', points: ['Real-time operations dashboards', 'Production & performance analytics', 'Anomaly detection & alerting', 'Unified control-room situational awareness'] },
    { n: '04', title: 'Predictive Maintenance', desc: 'Condition monitoring fused with machine learning to predict failures and extend asset life.', points: ['Condition-based monitoring', 'Failure-prediction models', 'Rotating-equipment & pipeline health', 'Maintenance & shutdown optimization'] },
    { n: '05', title: 'Industrial IoT & Edge', desc: 'Instrumenting the field and refining data at the edge so operations produce reliable, real-time signals.', points: ['Industrial IoT sensing & telemetry', 'Edge data acquisition & processing', 'Remote & field asset connectivity', 'Time-series ingestion to historians'] },
    { n: '06', title: 'Digital Engineering', desc: 'Embedded, platform and application engineering for industrial systems and the operations enterprise.', points: ['Industrial application engineering', 'Historian & data-platform engineering', 'Enterprise asset management (EAM)', 'Cloud & on-prem industrial platforms'] },
  ],
  approach: [
    { step: '01', title: 'Engineer for safety & compliance', desc: 'We start from HSE, integrity and regulatory requirements — auditable engineering with safety designed in, not bolted on.' },
    { step: '02', title: 'Converge OT & IT', desc: 'We integrate SCADA, DCS, historians and enterprise systems into one secure operational fabric for unified visibility.' },
    { step: '03', title: 'Instrument & sense', desc: 'We connect field assets through industrial IoT and edge so operations produce reliable, real-time data.' },
    { step: '04', title: 'Apply intelligence', desc: 'We layer predictive maintenance and operations intelligence to move from reactive to proactive operations.' },
  ],
  outcomes: [
    { title: 'Higher availability', desc: 'Fewer unplanned shutdowns and faster recovery through condition monitoring and unified operations visibility.' },
    { title: 'Safer, compliant operations', desc: 'Auditable, HSE-aligned engineering that stands up to integrity, environmental and regulatory scrutiny.' },
    { title: 'Lower maintenance cost', desc: 'Predictive maintenance extends asset life and shifts spend from emergency to planned, optimized work.' },
    { title: 'Decisions from data', desc: 'Operations intelligence turns process and asset data into production, efficiency and safety gains.' },
  ],
  tech: ['SCADA', 'DCS', 'PLC', 'OPC-UA', 'Data historians', 'Industrial IoT', 'IoT edge', 'Predictive-maintenance ML', 'HSE & compliance systems', 'Enterprise Asset Management', 'Time-series & streaming data', 'Azure / AWS'],
  faqs: [
    { q: 'Do you work on OT control systems, or only IT and data?', a: 'Both. We engineer genuine OT/IT convergence — integrating SCADA, DCS, PLC and instrumentation through OPC-UA and historians, then extending into data platforms, analytics and AI.' },
    { q: 'Can you integrate live industrial systems without disrupting production?', a: 'Yes. We specialise in brownfield integration with phased cutover, redundancy and rigorous verification so safety-critical production keeps running.' },
    { q: 'How do you handle HSE, safety and compliance?', a: 'We engineer with HSE and regulatory requirements first — auditable, standards-aligned delivery covering asset integrity, emissions and environmental reporting.' },
    { q: 'How does AI and analytics fit into oil & gas operations?', a: 'We embed it where it changes outcomes — predictive maintenance, anomaly detection and operations intelligence — grounded in process and asset data, not bolted on.' },
  ],
  relatedSolutions: ['systems-integration', 'digital-engineering', 'ai-analytics', 'infrastructure-monitoring'],
};

export default content;
