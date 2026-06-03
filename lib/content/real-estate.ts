import type { IndustryContent } from './types';

const content: IndustryContent = {
  slug: 'real-estate',
  heroLead:
    'Smart, connected properties — building automation, ECM and ERP, tenant and facility systems, and operations analytics that modernize how portfolios are run across India and the GCC.',
  overview: [
    'Hiliks Real Estate brings engineering-led depth to property operations — uniting building automation, enterprise applications and tenant systems into a single, data-driven operating model. We treat a building like the connected system it has become, not a static asset, so owners and operators can run portfolios with the same rigor as any critical infrastructure.',
    'Modern properties generate constant data from HVAC, energy, access, lifts and metering — yet most of it stays siloed inside vendor controllers and disconnected enterprise systems. We close that gap, integrating building management systems with ERP, ECM and facility platforms so operations, finance and tenant experience work from one trusted view.',
    'Across commercial towers, mixed-use developments and managed portfolios in India and the GCC, we combine BMS and IoT engineering with enterprise application and integration strength — modernized with occupancy analytics, energy intelligence and digital-twin foundations that turn property data into measurable operating gains.',
  ],
  stats: [
    { value: '4', label: 'Real-estate capability areas' },
    { value: '24×7', label: 'Building operations support' },
    { value: 'BMS + ERP', label: 'OT and IT converged' },
    { value: 'GCC + India', label: 'Delivery footprint' },
  ],
  challenges: [
    { title: 'Siloed building systems', desc: 'HVAC, energy, access and lift controllers run on isolated platforms, blocking any unified view of how a building actually performs.' },
    { title: 'Disconnected enterprise applications', desc: 'ERP, ECM and facility tools rarely talk to building systems, so finance, operations and maintenance work from inconsistent data.' },
    { title: 'Rising energy and operating cost', desc: 'Without occupancy-aware control and energy intelligence, buildings consume more than they need and waste goes unseen.' },
    { title: 'Reactive facility maintenance', desc: 'Faults in critical equipment are found after tenants complain, driving emergency call-outs, downtime and service penalties.' },
    { title: 'Fragmented tenant experience', desc: 'Onboarding, requests, billing and access span separate systems, making the tenant journey slow and the operator inefficient.' },
  ],
  offerings: [
    { n: '01', title: 'Smart Building Systems', desc: 'Building automation and IoT engineering that make properties observable, efficient and controllable.', points: ['BMS / BAS design & integration', 'IoT sensing for HVAC, energy & access', 'Edge data acquisition & control', 'Digital-twin foundations for assets'] },
    { n: '02', title: 'ECM & ERP', desc: 'Enterprise platforms tailored to property operations, finance and document control.', points: ['Property & portfolio ERP implementation', 'ECM & engineering document control', 'Lease, contract & compliance records', 'Finance, billing & procurement workflows'] },
    { n: '03', title: 'Tenant & Facility Systems', desc: 'Connected systems that streamline the tenant journey and facility management end to end.', points: ['Tenant onboarding & self-service portals', 'Service request & helpdesk workflows', 'Facility & work-order management', 'Access, visitor & space management'] },
    { n: '04', title: 'Operations & Analytics', desc: 'Energy, occupancy and operational intelligence that turn building data into decisions.', points: ['Energy management & optimization', 'Occupancy & space-utilization analytics', 'Predictive maintenance for building assets', 'Operations dashboards & decision intelligence'] },
  ],
  approach: [
    { step: '01', title: 'Map the property estate', desc: 'We assess building systems, enterprise applications and data sources to define one connected operating model.' },
    { step: '02', title: 'Integrate OT and IT', desc: 'We converge BMS, IoT, ERP and ECM so building, finance and facility data share a single trusted view.' },
    { step: '03', title: 'Instrument & sense', desc: 'We connect HVAC, energy, access and metering so each building produces reliable, real-time operational data.' },
    { step: '04', title: 'Apply intelligence', desc: 'We layer energy, occupancy and predictive analytics to shift operations from reactive to proactive.' },
  ],
  outcomes: [
    { title: 'Lower operating cost', desc: 'Energy optimization and occupancy-aware control reduce consumption and trim avoidable building expenditure.' },
    { title: 'Higher asset uptime', desc: 'Predictive maintenance on critical equipment cuts emergency call-outs and protects tenant service levels.' },
    { title: 'Better tenant experience', desc: 'Unified onboarding, requests and access make the tenant journey faster and operations leaner.' },
    { title: 'Decisions from data', desc: 'Connected building and enterprise data become dashboards and intelligence that guide portfolio decisions.' },
  ],
  tech: ['BMS / BAS', 'IoT edge sensing', 'Enterprise ERP', 'OpenText ECM', 'Energy management systems', 'Occupancy & space analytics', 'Digital twin', 'Predictive-maintenance ML', 'Facility & work-order systems', 'Azure / AWS', 'Time-series & streaming data', 'Tenant portals & access control'],
  faqs: [
    { q: 'Do you work on building automation, or only enterprise software?', a: 'Both. We engineer BMS / BAS and IoT integration as well as ERP, ECM and tenant systems — then converge them so building and enterprise data work as one.' },
    { q: 'Can you integrate existing building and enterprise systems?', a: 'Yes. Our strength is systems integration — connecting legacy BMS, IoT, ERP and ECM platforms into a single operating fabric without rip-and-replace.' },
    { q: 'How do you reduce energy and operating cost?', a: 'We combine energy management, occupancy analytics and occupancy-aware control with predictive maintenance, so consumption drops and waste becomes visible and actionable.' },
    { q: 'Which markets do you serve?', a: 'We deliver across India and the GCC (UAE / KSA), serving commercial, mixed-use and managed property portfolios.' },
  ],
  relatedSolutions: ['enterprise-applications', 'systems-integration', 'infrastructure-monitoring', 'ai-analytics'],
};

export default content;
