import type { SolutionContent } from './types';

const content: SolutionContent = {
  slug: 'ai-analytics',
  heroLead:
    'Predictive insight, analytics and decision intelligence — AI engineered into critical operations, not bolted on afterwards.',
  overview: [
    'AI & Analytics is where Hiliks turns operational data into foresight and action. We build predictive, prescriptive and decision-intelligence systems that sense what is happening across assets and networks, anticipate what comes next, and recommend or trigger the right response — inside the operations our engineers already understand.',
    'This is applied, production-grade AI. We treat models as engineered systems: grounded in real signals from sensors, controllers and enterprise platforms, validated against operational ground truth, and deployed with the monitoring, traceability and rollback discipline that critical industries demand.',
    'Because the same teams engineer the embedded systems, integrations and platforms beneath the model, our AI lives close to the data and close to the decision. That proximity is what makes intelligence trustworthy in railways, energy, oil & gas and other domains where a wrong call carries real consequences.',
  ],
  stats: [
    { value: 'Edge → Cloud', label: 'AI where it runs best' },
    { value: 'Explainable', label: 'Decisions you can defend' },
    { value: 'MLOps', label: 'Models kept in production' },
    { value: 'OT + IT', label: 'Fused data signals' },
  ],
  services: [
    { n: '01', title: 'Predictive & Prescriptive Analytics', desc: 'Models that forecast failures, demand and risk — then recommend the optimal action.', points: ['Predictive maintenance & RUL', 'Time-series & anomaly detection', 'Prescriptive optimisation', 'Forecasting & scenario modelling'] },
    { n: '02', title: 'Computer Vision & Sensor Fusion', desc: 'Vision and multi-sensor models that perceive assets, defects and conditions in the field.', points: ['Defect & anomaly inspection', 'Object detection & tracking', 'Multi-sensor data fusion', 'Condition & safety monitoring'] },
    { n: '03', title: 'Decision-Intelligence Dashboards', desc: 'Operational interfaces that turn model output into clear, accountable decisions.', points: ['Real-time KPI & alerting', 'Root-cause & what-if analysis', 'Explainable recommendations', 'Role-based operational views'] },
    { n: '04', title: 'Operational AI at the Edge', desc: 'Low-latency inference on trackside and industrial hardware where the cloud cannot reach.', points: ['On-device model deployment', 'Latency & power optimisation', 'Offline & intermittent operation', 'Edge-to-cloud orchestration'] },
    { n: '05', title: 'LLM Copilots & Document Intelligence', desc: 'Grounded language models that surface knowledge and automate document-heavy work.', points: ['Retrieval-augmented copilots', 'Document extraction & classification', 'Knowledge search over manuals & logs', 'Guardrails & source citation'] },
    { n: '06', title: 'Agentic Automation & MLOps', desc: 'Goal-driven agents and the engineering platform that keeps every model reliable in production.', points: ['Multi-step task automation', 'Feature stores & pipelines', 'Model monitoring & drift detection', 'Versioning, retraining & rollback'] },
  ],
  approach: [
    { step: '01', title: 'Frame the decision & data', desc: 'We start from the operational decision to improve, then map the signals — OT, IT and field — needed to inform it.' },
    { step: '02', title: 'Build & validate models', desc: 'We engineer features, train and benchmark models, and validate them against operational ground truth, not just test metrics.' },
    { step: '03', title: 'Deploy to the edge or cloud', desc: 'We ship inference where it belongs — on-device, on-prem or in cloud — with the latency, security and integration the operation requires.' },
    { step: '04', title: 'Monitor, retrain & improve', desc: 'We watch for drift and degradation, retrain on fresh data, and keep models accurate across their operational lifecycle.' },
  ],
  outcomes: [
    { title: 'Foresight, not hindsight', desc: 'Anticipate failures, demand and risk early enough to act before they become incidents.' },
    { title: 'Decisions you can defend', desc: 'Explainable, traceable intelligence that operators and regulators can scrutinise and trust.' },
    { title: 'Intelligence that stays accurate', desc: 'MLOps discipline keeps models reliable in production long after the first deployment.' },
    { title: 'AI close to operations', desc: 'Models engineered into your systems and edge, delivering value where the work actually happens.' },
  ],
  tech: ['Python', 'PyTorch / TensorFlow', 'MLOps & MLflow', 'Computer vision (OpenCV / ONNX)', 'LLMs & RAG', 'Time-series & forecasting', 'Feature stores', 'Edge inference (NVIDIA / TensorRT)', 'Azure / AWS / GCP AI', 'Vector databases', 'Kafka & streaming data'],
  faqs: [
    { q: 'How is this different from a generic AI vendor?', a: 'We engineer the systems your AI runs on — embedded, integration and platform — so models sit close to real operational data and decisions, not bolted on after the fact.' },
    { q: 'Can your models run without reliable connectivity?', a: 'Yes. We deploy inference at the edge for low-latency, offline and intermittently connected environments, then orchestrate back to cloud when links are available.' },
    { q: 'How do you keep models trustworthy in production?', a: 'We apply MLOps discipline — feature pipelines, monitoring for drift, retraining and rollback — alongside explainability so decisions remain accurate and defensible.' },
    { q: 'Do you build language-model copilots and agents?', a: 'We build grounded LLM copilots and agentic automation with retrieval, guardrails and source citation, focused on document-heavy and knowledge-intensive operational work.' },
  ],
};

export default content;
