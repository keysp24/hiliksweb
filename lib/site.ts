// ── Hiliks — single source of truth for site content & navigation ──
// Drives the homepage, industry/solution templates, nav, and footer.

export const company = {
  name: 'Hiliks Technologies',
  legal: 'HiLiKS Technologies Ltd.',
  tagline: 'Engineering Intelligent Operations Across Critical Industries',
  corporateLine: 'Industry-Focused Digital Engineering & Enterprise Technology',
  est: 2025,
  phone: '+91-7799169999',
  email: 'hr@hiliks.com',
  address: '510, Aparna Greens, Nanakramguda',
  city: 'Hyderabad \u2014 500032, India',
  offices: 'India \u00b7 GCC (UAE / KSA)',
} as const;

// \u2500\u2500 Contact inquiry routing \u2500\u2500
// Maps each inquiry-routing choice (a vertical name, or "Partnerships") to the
// team inbox that should receive that inquiry. They all point at the central
// inbox for now \u2014 replace each value with the real per-vertical recipient when
// ready. Keys MUST match the labels rendered in the contact form.
export const inquiryRouting: Record<string, string> = {
  'Railways': 'hr@hiliks.com',
  'Telecom': 'hr@hiliks.com',
  'BFSI': 'hr@hiliks.com',
  'Public Sector': 'hr@hiliks.com',
  'Partnerships': 'hr@hiliks.com',
};

// Used when an inquiry's route isn't found in the map above.
export const inquiryFallbackEmail = company.email;

export type Vertical = {
  slug: string;
  name: string;
  unit: string;
  flagship?: boolean;
  hidden?: boolean;
  accentVar: string;
  tagline: string;
  blurb: string;
  capabilities: { n: string; t: string; d?: string }[];
};

const allVerticals: Vertical[] = [
  {
    slug: 'railways',
    name: 'Railways',
    unit: 'Hiliks Railways',
    flagship: true,
    accentVar: '--v-rail',
    tagline: 'Rail Technology, Engineering, Signaling & Digital Transformation',
    blurb: 'From the track to the operations centre \u2014 signaling and safety, railway telecom, smart rail, OCC integration and AI-led operations for Indian Railways, Etihad Rail and GCC operators.',
    capabilities: [
      { n: '01', t: 'Signaling & Safety', d: 'Train control, interlocking, and safety-critical signaling engineered for reliability and compliance.' },
      { n: '02', t: 'Railway Telecom', d: 'OFC backbone and resilient trackside communications across distance and terrain.' },
      { n: '03', t: 'Smart Rail Systems', d: 'Connected trackside and station systems generating the data operations depend on.' },
      { n: '04', t: 'OCC Integration', d: 'Operations control centre integration — unifying systems, signals, and data.' },
      { n: '05', t: 'AI-Led Operations', d: 'Analytics and automation that turn rail data into operational decisions.' },
      { n: '06', t: 'Predictive Maintenance', d: 'Condition monitoring fused with AI to predict failures and extend asset life.' },
      { n: '07', t: 'Enterprise Rail Systems', d: 'ERP, ECM, workflow, and asset management for the railway enterprise.' },
    ],
  },
  {
    slug: 'telecom',
    name: 'Telecom',
    unit: 'Hiliks Telco',
    accentVar: '--v-telco',
    tagline: 'Connected, Automated Telecom Operations',
    blurb: 'OSS/BSS, network operations, automation, managed services, analytics.',
    capabilities: [
      { n: '01', t: 'OSS/BSS Modernization' },
      { n: '02', t: 'Network Operations & Monitoring' },
      { n: '03', t: 'Intelligent Automation' },
      { n: '04', t: 'Managed Services & Analytics' },
    ],
  },
  {
    slug: 'bfsi',
    name: 'BFSI',
    unit: 'Hiliks BFSI',
    accentVar: '--v-bfsi',
    tagline: 'Digital, Compliant Financial Operations',
    blurb: 'Automation, ECM, onboarding, workflow, compliance and AI.',
    capabilities: [
      { n: '01', t: 'Onboarding & Workflow Automation' },
      { n: '02', t: 'ECM & Document Management' },
      { n: '03', t: 'Compliance & Risk' },
      { n: '04', t: 'AI & Analytics' },
    ],
  },
  {
    slug: 'public-sector',
    name: 'Public Sector',
    unit: 'Hiliks Public Sector',
    accentVar: '--v-gov',
    tagline: 'Digital Government & Citizen Services',
    blurb: 'eGovernance, citizen services, smart governance, digitization.',
    capabilities: [
      { n: '01', t: 'eGovernance Platforms' },
      { n: '02', t: 'Citizen Services' },
      { n: '03', t: 'Smart Governance' },
      { n: '04', t: 'Records Digitization (ECM)' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    unit: 'Hiliks Real Estate',
    hidden: true,
    accentVar: '--v-realestate',
    tagline: 'Smart, Connected Properties',
    blurb: 'Smart buildings, ECM, ERP, tenant systems, operations.',
    capabilities: [
      { n: '01', t: 'Smart Building Systems' },
      { n: '02', t: 'ECM & ERP' },
      { n: '03', t: 'Tenant & Facility Systems' },
      { n: '04', t: 'Operations & Analytics' },
    ],
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    unit: 'Hiliks Oil & Gas',
    hidden: true,
    accentVar: '--v-oil',
    tagline: 'Industrial Operations Intelligence',
    blurb: 'Industrial systems, compliance, operations intelligence, engineering.',
    capabilities: [
      { n: '01', t: 'Industrial Systems & SCADA Integration' },
      { n: '02', t: 'Compliance & Safety' },
      { n: '03', t: 'Operations Intelligence' },
      { n: '04', t: 'Digital Engineering' },
    ],
  },
  {
    slug: 'energy-utilities',
    name: 'Energy & Utilities',
    unit: 'Hiliks Energy & Utilities',
    hidden: true,
    accentVar: '--v-energy',
    tagline: 'Reliable, Predictive Utility Operations',
    blurb: 'Asset monitoring, predictive maintenance, field systems, automation.',
    capabilities: [
      { n: '01', t: 'Asset Monitoring' },
      { n: '02', t: 'Predictive Maintenance' },
      { n: '03', t: 'Field Systems' },
      { n: '04', t: 'Automation & Analytics' },
    ],
  },
];

// Publicly surfaced verticals only. Hidden verticals remain in allVerticals for
// future roadmap re-activation without losing content or routing configuration.
export const verticals: Vertical[] = allVerticals.filter((v) => !v.hidden);

export type Capability = { slug: string; n: string; name: string; blurb: string; isAi?: boolean; icon: string };

export const capabilities: Capability[] = [
  { slug: 'digital-engineering', n: '01', name: 'Digital Engineering', blurb: 'Embedded, product and platform engineering for critical systems.', icon: 'M6 6h12v12H6zM9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3' },
  { slug: 'enterprise-applications', n: '02', name: 'Enterprise Applications', blurb: 'ERP, ECM and core enterprise platforms.', icon: 'M3 4h18v16H3zM3 9h18M9 9v11' },
  { slug: 'systems-integration', n: '03', name: 'Systems Integration', blurb: 'Connecting OT/IT, legacy and enterprise systems.', icon: 'M5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM19 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6.5 7.6L10.6 16M17.5 7.6L13.4 16M7 6h10' },
  { slug: 'ai-analytics', n: '04', name: 'AI & Analytics', blurb: 'Predictive insight, analytics and decision intelligence.', isAi: true, icon: 'M4 19V5M4 19h16M8 15l3-4 3 2 4-6' },
  { slug: 'intelligent-automation', n: '05', name: 'Intelligent Automation', blurb: 'RPA and workflow automation at scale.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1' },
  { slug: 'managed-services', n: '06', name: 'Managed Services', blurb: 'L1/L2/L3 operations and 24\u00d7 support.', icon: 'M4 13v-1a8 8 0 0 1 16 0v1M3 13h4v6H3zM17 13h4v6h-4zM20 19a4 3 0 0 1-4 3h-2' },
  { slug: 'infrastructure-monitoring', n: '07', name: 'Infrastructure & Monitoring', blurb: 'Cloud, network and operations monitoring.', icon: 'M3 4h18v6H3zM3 14h18v6H3zM7 7h.01M7 17h.01' },
  { slug: 'data-platforms', n: '08', name: 'Data & Platforms', blurb: 'Data engineering, platforms and governance.', icon: 'M12 3a7 3 0 0 0-7 3v12a7 3 0 0 0 14 0V6a7 3 0 0 0-7-3zM5 6a7 3 0 0 0 7 3 7 3 0 0 0 7-3M5 12a7 3 0 0 0 7 3 7 3 0 0 0 7-3' },
];

export const whyHiliks = [
  { icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>', t: 'Domain-Focused Expertise', d: "Verticalized practices that speak each industry's language." },
  { icon: '<circle cx="12" cy="12" r="3.2"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6 7.7 7.7M16.3 16.3 18.4 18.4M18.4 5.6 16.3 7.7M7.7 16.3 5.6 18.4"/>', t: 'Engineering-Led Delivery', d: 'Real engineering depth \u2014 not just IT services.' },
  { icon: '<path d="M12 3 3 8l9 5 9-5-9-5zM4 12l8 4.5L20 12M4 16l8 4.5L20 16"/>', t: 'Enterprise Technology Depth', d: 'Full-stack: apps, integration, AI, automation, data and cloud.' },
  { icon: '<circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.1 11 15.9 7M8.1 13l7.8 4"/>', t: 'Strategic Ecosystem', d: 'Best-of-breed partners extend our reach and depth.' },
  { icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>', t: 'GCC Expansion Readiness', d: 'Enterprise tone and delivery for the UAE, KSA and India.' },
  { icon: '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4 7 9l5 11M15 4l2 5-5 11"/>', t: 'Niche by Design', d: 'Engineering-led DNA, with a flagship Railways practice.' },
];

export type Partner = { name: string; domain: string };

export const partners: Partner[] = [
  { name: 'Oracle', domain: 'oracle.com' },
  { name: 'OpenText', domain: 'opentext.com' },
  { name: 'Microsoft Azure', domain: 'microsoft.com' },
  { name: 'AWS', domain: 'aws.amazon.com' },
  { name: 'Google Cloud', domain: 'cloud.google.com' },
  { name: 'UiPath', domain: 'uipath.com' },
  { name: 'G42', domain: 'g42.ai' },
  { name: 'Moro Hub', domain: 'morohub.com' },
  { name: 'Trend Micro', domain: 'trendmicro.com' },
  { name: 'Forescout', domain: 'forescout.com' },
  { name: 'AppDynamics', domain: 'appdynamics.com' },
];

export const ecosystemStats = [
  { v: '20', suffix: '+ yrs', k: 'Ecosystem experience' },
  { v: '15', suffix: '', k: 'Countries served' },
  { v: '11', suffix: '+', k: 'Technology partners' },
  { v: 'GCC + India', suffix: '', k: 'Delivery footprint', text: true },
];

export const marqueeItems = [
  'Signaling & Safety', 'OSS / BSS', 'Predictive Maintenance', 'OCC Integration',
  'AI-Led Operations', 'Smart Rail', 'Digital Engineering', 'Applied AI', 'Predictive Ops',
];

export const primaryNav = [
  { label: 'Industries', href: '/industries' },
  { label: 'Railways', href: '/industries/railways' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Investors', href: '/investors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const aiPills = [
  'Predictive Maintenance',
  'Computer Vision',
  'LLM Copilots',
  'Document Intelligence',
  'Agentic Automation',
  'MLOps',
  'Decision Intelligence',
];
