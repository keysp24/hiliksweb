import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'intelligent-automation',
  heroLead:
    'RPA, intelligent document processing and orchestrated workflows that streamline critical operations at scale — automation engineered for environments where accuracy and auditability matter.',
  overview: [
    'Intelligent Automation at Hiliks goes beyond scripting clicks. We combine robotic process automation, business process management and intelligent document processing to remove manual effort from the high-volume, high-stakes operations that critical industries depend on every day.',
    'Because we engineer the systems underneath, our automation is grounded in how operations actually run. We model real processes, integrate cleanly with enterprise and operational systems, and build in the controls, logging and human checkpoints that regulated and safety-conscious industries require.',
    'The result is automation that compounds. Repetitive work is handled reliably by bots and workflows, exceptions are routed to people with full context, and emerging agentic patterns let automation reason across steps — freeing skilled teams for the judgement that genuinely needs them.',
  ],
  stats: [
    { value: 'RPA + IDP', label: 'Bots plus document intelligence' },
    { value: 'Human-in-loop', label: 'Exceptions routed to people' },
    { value: 'Auditable', label: 'Logged and traceable by design' },
    { value: '24×7', label: 'Unattended operation at scale' },
  ],
  services: [
    { n: '01', title: 'RPA at Scale', desc: 'Attended and unattended bots that automate repetitive, rules-based work across systems.', points: ['Attended & unattended bots', 'Bot orchestration & scheduling', 'Resilient, exception-aware design', 'Centralised monitoring & control'] },
    { n: '02', title: 'Workflow & Process Automation', desc: 'BPM-driven workflows that coordinate people, systems and decisions end to end.', points: ['Process modelling & redesign', 'BPM workflow engines', 'Business rules & approvals', 'SLA tracking & escalation'] },
    { n: '03', title: 'Document & Data Automation', desc: 'Intelligent document processing that turns unstructured documents into trusted data.', points: ['OCR & intelligent extraction', 'Classification & validation', 'Data enrichment & matching', 'Straight-through processing'] },
    { n: '04', title: 'Human-in-the-Loop Orchestration', desc: 'Designing the handoffs where automation and human judgement work together.', points: ['Exception handling & review', 'Approval & decision checkpoints', 'Context-rich task routing', 'Feedback loops to improve bots'] },
    { n: '05', title: 'Agentic & Cognitive Automation', desc: 'AI-assisted automation that reasons across steps and adapts to variation.', points: ['LLM & AI-assisted decisions', 'Multi-step agentic workflows', 'Adaptive exception resolution', 'Guardrails & oversight built in'] },
    { n: '06', title: 'Process Discovery & Optimisation', desc: 'Finding and prioritising what to automate using process and task mining.', points: ['Process & task mining', 'Automation opportunity assessment', 'ROI & feasibility analysis', 'Continuous improvement'] },
  ],
  approach: [
    { step: '01', title: 'Discover & prioritise', desc: 'We map real processes and use mining and analysis to target the automations that pay back fastest.' },
    { step: '02', title: 'Design with controls', desc: 'We design workflows, bots and document pipelines with exception paths, logging and human checkpoints built in.' },
    { step: '03', title: 'Build & integrate', desc: 'We engineer reliable automations that integrate cleanly with enterprise and operational systems.' },
    { step: '04', title: 'Operate & scale', desc: 'We orchestrate, monitor and tune bots in production, expanding the automation estate as value proves out.' },
  ],
  outcomes: [
    { title: 'Lower operational cost', desc: 'Repetitive, high-volume work shifts to bots and workflows, freeing skilled people for higher-value tasks.' },
    { title: 'Fewer errors, more trust', desc: 'Validated, logged automation reduces manual mistakes and gives operations data they can rely on.' },
    { title: 'Faster cycle times', desc: 'Straight-through processing and orchestration compress turnaround across high-volume operations.' },
    { title: 'Compliance built in', desc: 'Auditable, traceable automation stands up to scrutiny in regulated and safety-conscious environments.' },
  ],
  tech: ['UiPath', 'BPM workflow engines', 'OCR & intelligent document processing', 'Process & task mining', 'API & integration automation', 'Bot orchestration platforms', 'LLM & AI-assisted automation', 'Azure / AWS / GCP', 'Power Automate', 'Message queues & event automation'],
  faqs: [
    { q: 'How is this different from plain RPA tooling?', a: 'We combine RPA with intelligent document processing, BPM workflows and human-in-the-loop design, engineered to integrate with the systems underneath rather than just record screen clicks.' },
    { q: 'Can automation handle exceptions and not just the happy path?', a: 'Yes. We design exception handling and human-in-the-loop checkpoints from the start, routing edge cases to people with full context rather than failing silently.' },
    { q: 'Is the automation auditable for regulated industries?', a: 'Every step is logged and traceable by design, so automated processes stand up to compliance and audit scrutiny in critical environments.' },
    { q: 'Where do you start when we have many candidate processes?', a: 'We use process and task mining plus feasibility and ROI analysis to prioritise the automations that deliver value soonest, then scale the estate from there.' },
  ],
};

export default content;
