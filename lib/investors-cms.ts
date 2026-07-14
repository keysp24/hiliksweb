// ── Hiliks Investors Page CMS ──
// Edit the values below to update the investor page without touching components.

export const investorsCms = {
  meta: {
    title: 'Investors',
    description:
      'Investor information, corporate governance, financial results, shareholding pattern, policies and disclosures for HiLiKS Technologies Ltd.',
  },

  hero: {
    eyebrow: 'Investor Relations',
    headline: 'Engineering value for every stakeholder.',
    subheadline:
      'HiLiKS Technologies is committed to transparent disclosures, strong corporate governance and sustainable value creation for shareholders, partners and the communities we serve.',
    ctaPrimary: { label: 'Explore Filings', href: '#documents' },
    ctaSecondary: { label: 'Governance Overview', href: '#governance' },
  },

  // Animated ticker stats below the hero (similar to Infosys stock/company highlights)
  ticker: {
    items: [
      { label: 'Listed on', value: 'BSE', suffix: '' },
      { label: 'Incorporated', value: '1987', suffix: '' },
      { label: 'Countries', value: '15', suffix: '+' },
      { label: 'Technology Partners', value: '11', suffix: '+' },
    ],
  },

  governanceQuote: {
    tag: 'Corporate Governance',
    quote:
      'Good corporate governance is about maximising shareholder value on a sustainable basis while ensuring fairness to all stakeholders.',
    attribution: 'Hiliks Technologies Board',
    cta: { label: 'View Governance Reports', href: '#documents' },
  },

  // Infosys-style "Latest News" cards (4-up)
  latestNews: {
    eyebrow: 'Latest Updates',
    title: 'News & Announcements',
    viewAllHref: '#recent-news',
    items: [
      {
        tag: 'Quarterly Report',
        title: 'Hiliks announces quarterly financial results',
        date: '2026-07-14',
        summary:
          'Review the latest unaudited financial results and accompanying investor presentation.',
        href: '#documents',
        image: '/images/hiliks-logo.png',
      },
      {
        tag: 'Annual Report',
        title: 'Annual Report 2024-25',
        date: '2025-08-11',
        summary: 'Download the complete annual report including financial statements and governance disclosures.',
        href: '/investors/reports/annual-reports/Annualreport2025.pdf',
        image: '/images/hiliks-logo.png',
      },
      {
        tag: 'Regulatory Filing',
        title: 'Board Meeting Outcome',
        date: '2026-06-30',
        summary: 'Outcome of the board meeting held to consider and approve the quarterly financial results.',
        href: '#documents',
        image: '/images/hiliks-logo.png',
      },
      {
        tag: 'Press Release',
        title: 'Preferential Issue Update',
        date: '2026-05-15',
        summary: 'Updates on preferential allotment, listing approvals and related disclosures.',
        href: '#documents',
        image: '/images/hiliks-logo.png',
      },
    ],
  },

  // Infosys-style "Recent News" list
  recentNews: {
    eyebrow: 'Recent News',
    title: 'More from Hiliks',
    items: [
      {
        tag: 'Disclosure',
        title: 'Disclosure under Regulation 30 — Board Meeting',
        date: '2026-07-10',
        href: '#documents',
      },
      {
        tag: 'Shareholding',
        title: 'Shareholding Pattern for the quarter ended June 2026',
        date: '2026-07-05',
        href: '#documents',
      },
      {
        tag: 'Corporate Governance',
        title: 'Corporate Governance Report — Q1 FY 2026-27',
        date: '2026-06-28',
        href: '#documents',
      },
      {
        tag: 'Notice',
        title: 'Notice of Postal Ballot',
        date: '2026-06-20',
        href: '#documents',
      },
    ],
  },

  // Infosys-style "Investor Toolkit" cards
  toolkit: {
    eyebrow: 'Investor Toolkit',
    title: 'Everything you need as an investor',
    items: [
      {
        title: 'Corporate Governance',
        desc: 'Governance policies, committee charters and compliance reports.',
        href: '#documents',
        icon: '<path d="M12 3 3 8l9 5 9-5-9-5zM4 12l8 4.5L20 12M4 16l8 4.5L20 16"/>',
      },
      {
        title: 'Financial Results',
        desc: 'Quarterly results, annual reports and regulatory filings.',
        href: '#documents',
        icon: '<path d="M3 4h18v16H3zM3 9h18M7 14h4M7 18h4M15 14h2M15 18h2"/>',
      },
      {
        title: 'Shareholding',
        desc: 'Shareholding pattern, clause 35 filings and shareholder forms.',
        href: '#documents',
        icon: '<circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>',
      },
      {
        title: 'Disclosures',
        desc: 'Regulation 30 disclosures, board outcomes and postal ballots.',
        href: '#documents',
        icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
      },
    ],
  },

  // Infosys-style "Investor Information" image/link grid
  investorInfo: {
    eyebrow: 'Investor Information',
    title: 'Explore our investor resources',
    links: [
      { label: 'Annual Reports', href: '#documents' },
      { label: 'Financial Results', href: '#documents' },
      { label: 'Policies', href: '#documents' },
      { label: 'Committee Details', href: '#committees' },
      { label: 'Preferential Issues', href: '#documents' },
      { label: 'Contact IR', href: '/contact' },
    ],
  },

  documentBrowser: {
    eyebrow: 'Documents & Disclosures',
    title: 'All investor documents in one place',
    lead: 'Browse or filter regulatory filings, reports, policies and disclosures organised exactly as they appear on our investor menu.',
  },

  committees: {
    eyebrow: 'Board Committees',
    title: 'Governance oversight',
  },

  contactCta: {
    title: 'Have questions for Investor Relations?',
    text: 'Reach out for shareholder services, governance queries or regulatory disclosures.',
    primaryLabel: 'Contact Us',
    primaryHref: '/contact',
    secondaryLabel: 'Back to Home',
    secondaryHref: '/',
  },
};

export type InvestorsCms = typeof investorsCms;
