// ── Rich per-page content model for industry & solution pages ──
// Each industry/solution has a content file in lib/content/<slug>.ts that
// default-exports an object of the matching type below. The [slug] page
// templates render these consistently.

export type Stat = { value: string; label: string };
export type TitledItem = { title: string; desc: string };
export type Offering = { n: string; title: string; desc: string; points: string[] };
export type Step = { step: string; title: string; desc: string };
export type Faq = { q: string; a: string };

export type IndustryContent = {
  slug: string;
  /** Punchy 1–2 sentence hero lead (overrides the short blurb). */
  heroLead: string;
  /** 2–3 paragraphs of positioning/overview. */
  overview: string[];
  /** 3–4 headline stats for the counter strip. */
  stats: Stat[];
  /** 4–6 industry challenges / pressures we solve. */
  challenges: TitledItem[];
  /** 4–7 expanded offerings (interactive accordion). */
  offerings: Offering[];
  /** 4 delivery-approach steps (animated timeline). */
  approach: Step[];
  /** 3–4 outcomes / value propositions. */
  outcomes: TitledItem[];
  /** Platforms, standards & tech we work with. */
  tech: string[];
  /** 3–5 FAQs (interactive accordion). */
  faqs: Faq[];
  /** Related solution slugs to cross-link. */
  relatedSolutions: string[];
};

export type SolutionContent = {
  slug: string;
  heroLead: string;
  overview: string[];
  stats: Stat[];
  /** 4–6 services within this capability (interactive accordion). */
  services: Offering[];
  /** 4 methodology steps (animated timeline). */
  approach: Step[];
  /** 3–4 outcomes / value propositions. */
  outcomes: TitledItem[];
  tech: string[];
  faqs: Faq[];
  /** Related industry slugs (defaults to all when omitted). */
  relatedIndustries?: string[];
};
