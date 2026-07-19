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
        image: '/images/investors/quarterly-report.svg',
      },
      {
        tag: 'Annual Report',
        title: 'Annual Report 2024-25',
        date: '2025-08-11',
        summary: 'Download the complete annual report including financial statements and governance disclosures.',
        href: '/investors/reports/annual-reports/Annualreport2025.pdf',
        image: '/images/investors/annual-report.svg',
      },
      {
        tag: 'Regulatory Filing',
        title: 'Board Meeting Outcome',
        date: '2026-06-30',
        summary: 'Outcome of the board meeting held to consider and approve the quarterly financial results.',
        href: '#documents',
        image: '/images/investors/board-meeting.svg',
      },
      {
        tag: 'Press Release',
        title: 'Preferential Issue Update',
        date: '2026-05-15',
        summary: 'Updates on preferential allotment, listing approvals and related disclosures.',
        href: '#documents',
        image: '/images/investors/press-release.svg',
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

  // Investor Toolkit — quick-action cards with clear objectives
  toolkit: {
    eyebrow: 'Investor Toolkit',
    title: 'Quick actions for investors',
    lead: 'Find reports, understand governance, manage shareholding and stay updated with regulatory disclosures.',
    items: [
      {
        title: 'Financial Reports',
        desc: 'Download quarterly results, annual reports and audited financial statements.',
        href: '#documents',
        icon: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
      },
      {
        title: 'Governance',
        desc: 'Review board policies, committee charters and corporate governance reports.',
        href: '#governance',
        icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
      },
      {
        title: 'Shareholder Services',
        desc: 'Get help with dividends, share transfers, demat and investor queries.',
        href: '/contact',
        icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      },
      {
        title: 'Regulatory Disclosures',
        desc: 'Access Regulation 30 filings, board meeting outcomes and material updates.',
        href: '#documents',
        icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
      },
      {
        title: 'Stock Information',
        desc: 'View BSE listing details, corporate announcements and price history.',
        href: '#documents',
        icon: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
      },
      {
        title: 'Investor Calendar',
        desc: 'Track board meetings, result announcements and shareholder meetings.',
        href: '#documents',
        icon: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
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
