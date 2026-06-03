import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'energy-utilities',
  heroLead:
    'Reliable, predictive utility operations — asset monitoring, predictive maintenance, field systems and automation that keep power, water and gas networks running across India and the GCC.',
  overview: [
    'Hiliks Energy & Utilities brings engineering-led technology to the operators who keep critical networks running — power transmission and distribution, water, gas and district utilities. We connect the field to the control room, turning dispersed assets and disparate systems into a single, observable, predictable operation.',
    'Utility networks are vast, ageing and unforgiving: a substation fault, a water main break or an undetected transformer fault cascades into outages, penalties and safety risk. We bring genuine OT/IT engineering depth — not generic IT services — across SCADA integration, smart metering, GIS, IoT instrumentation and field mobility, modernized with analytics and automation woven through operations.',
    'We work across India and the GCC, combining domain credibility built on field systems, asset and network instrumentation with modern data platforms, load forecasting and predictive maintenance — so operators move from reactive firefighting to proactive, data-driven control.',
  ],
  stats: [
    { value: '24×7', label: 'Control-room-grade operations' },
    { value: 'Grid-scale', label: 'Asset & network coverage' },
    { value: 'OT + IT', label: 'Converged engineering' },
    { value: 'GCC + India', label: 'Delivery footprint' },
  ],
  challenges: [
    { title: 'Ageing, dispersed assets', desc: 'Transformers, feeders, pumps and pipelines spread across vast networks must be modernized and monitored without interrupting supply.' },
    { title: 'Siloed OT & IT systems', desc: 'SCADA, metering, GIS and enterprise systems run in isolation, making unified network visibility and control hard to achieve.' },
    { title: 'Reactive maintenance', desc: 'Faults are discovered after assets fail, driving outages, emergency crews, penalties and avoidable safety risk.' },
    { title: 'Volatile demand & generation', desc: 'Shifting load, distributed energy and renewables strain forecasting, balancing and network planning.' },
    { title: 'Field workforce inefficiency', desc: 'Crews work with paper, disconnected tools and stale data, slowing inspection, response and restoration in the field.' },
  ],
  offerings: [
    { n: '01', title: 'Asset Monitoring', desc: 'Real-time visibility into network assets — substations, feeders, pumps, transformers and pipelines.', points: ['IoT sensor instrumentation & telemetry', 'SCADA & RTU integration', 'GIS-based asset visualization', 'Real-time condition & health dashboards'] },
    { n: '02', title: 'Predictive Maintenance', desc: 'Condition monitoring fused with analytics to predict failures and extend asset life.', points: ['Condition-based monitoring', 'Failure prediction & anomaly models', 'Transformer & rotating-asset health', 'Maintenance planning & optimization'] },
    { n: '03', title: 'Field Systems & Mobility', desc: 'Connected field operations that put live data and workflows in the hands of crews.', points: ['Mobile inspection & work management', 'Crew dispatch & outage response', 'Offline-capable field data capture', 'GIS-linked field workflows'] },
    { n: '04', title: 'Smart Metering & AMI', desc: 'Advanced metering infrastructure that turns consumption into actionable, billable insight.', points: ['AMI / smart-meter integration', 'Meter data management (MDM)', 'Loss detection & revenue assurance', 'Consumption analytics & profiling'] },
    { n: '05', title: 'Automation & Analytics', desc: 'Operational analytics and automation that turn network data into decisions and action.', points: ['Load & demand forecasting (ML)', 'Outage detection & automated alerting', 'Operational decision intelligence', 'Workflow & process automation'] },
    { n: '06', title: 'Systems Integration', desc: 'Converging OT, IT and enterprise systems into one observable utility operation.', points: ['SCADA / GIS / metering convergence', 'Historian & enterprise data integration', 'Control-room unification', 'Secure OT/IT data exchange'] },
  ],
  approach: [
    { step: '01', title: 'Instrument the network', desc: 'We connect assets, meters and field systems so the network produces reliable, real-time data.' },
    { step: '02', title: 'Integrate OT & IT', desc: 'We converge SCADA, GIS, metering and enterprise systems into unified network visibility.' },
    { step: '03', title: 'Apply intelligence', desc: 'We layer predictive maintenance, forecasting and analytics to anticipate faults and demand.' },
    { step: '04', title: 'Automate the operation', desc: 'We embed automation and decision intelligence to shift from reactive response to proactive control.' },
  ],
  outcomes: [
    { title: 'Higher reliability', desc: 'Fewer unplanned outages and faster restoration through condition monitoring and unified control.' },
    { title: 'Lower maintenance cost', desc: 'Predictive maintenance extends asset life and shifts spend from emergency to planned work.' },
    { title: 'Efficient field operations', desc: 'Connected crews with live data resolve inspections, faults and outages faster.' },
    { title: 'Decisions from data', desc: 'Forecasting and analytics turn network and meter data into balancing, planning and loss-reduction gains.' },
  ],
  tech: ['SCADA / RTU', 'Smart metering / AMI', 'Meter Data Management', 'GIS', 'IoT sensors & telemetry', 'Load-forecasting ML', 'Predictive-maintenance analytics', 'Field mobility', 'Process historians', 'OT/IT integration', 'Azure / AWS', 'Time-series & streaming data'],
  faqs: [
    { q: 'Do you work on OT systems like SCADA, or only enterprise IT?', a: 'Both. Our strength is genuine OT/IT engineering — SCADA, RTU, metering and field instrumentation — converged with GIS, historians, enterprise systems, analytics and automation.' },
    { q: 'Can you modernize live utility networks without disrupting supply?', a: 'Yes. We specialise in phased, brownfield modernization with redundancy and rigorous verification so power, water and gas supply keeps running.' },
    { q: 'Which utilities do you serve?', a: 'Power transmission and distribution, water, gas and district utilities, with delivery across India and the GCC (UAE / KSA).' },
    { q: 'How do analytics and AI fit into utility operations?', a: 'We embed analytics where it changes outcomes — predictive maintenance, load forecasting, loss detection and outage intelligence — grounded in network and field data, not bolted on.' },
  ],
  relatedSolutions: ['infrastructure-monitoring', 'systems-integration', 'ai-analytics', 'intelligent-automation'],
};

export default content;
