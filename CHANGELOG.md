# Changelog

All notable changes to the Hiliks website are recorded here.

---

## v1.4.0 — 2026-07-19 14:00 IST

Consulting & Talent integration across public verticals, solution-page layout polish, and build fixes.

### Added
- **Consulting & Talent as a core offering** across all four public industries:
  - `lib/content/railways.ts` — added "Consulting & Talent" capability (#08), updated capability count to 8, added approach step 05 "Build the transformation team", and added outcome "Ready transformation talent".
  - `lib/content/telecom.ts` — added "Consulting & Talent" capability (#07), approach step 05, and talent outcome.
  - `lib/content/bfsi.ts` — added "Consulting & Talent" capability (#07), approach step 05, and talent outcome.
  - `lib/content/public-sector.ts` — added "Consulting & Talent" capability (#07), approach step 05, and talent outcome.
  - Each hero lead and overview now references consulting and specialized talent solutions.

### Changed
- **Solution detail "Applied across" grid** (`app/solutions/[slug]/page.tsx` + `app/globals.css`):
  - Added `.applied-grid` modifier so the four industry cards render in a single compact row on desktop.
  - Reduced card min-height, padding, title size, and glyph size so tiles fit their content.
  - Responsive fallback: 2 columns on tablet, 1 column on mobile.

### Fixed
- **`components/HeroRings.tsx`** — replaced invalid SVG `transformOrigin` attribute with a CSS `style={{ transformOrigin: '450px 450px' }}` to resolve the TypeScript build error that was blocking Vercel deployments.

### Deployment
- Pushed to GitHub on branch `fix/footer-left-align-columns`.
- Redeployed to Vercel preview successfully after the build fix.

---

## v1.3.0 — 2026-07-14 22:00 IST

Hidden Real Estate, Oil & Gas, and Energy & Utilities verticals from the public site (client future roadmap).

### Changed
- **`lib/site.ts`** — added optional `hidden` flag to the `Vertical` type; marked Real Estate, Oil & Gas and Energy & Utilities as `hidden: true`; exported the public `verticals` array as a filtered view of `allVerticals`.
- **Industry pages** — `/industries` metadata and grid now list only Railways, Telecom, BFSI and Public Sector; `/industries/[slug]` statically generates only those four vertical detail pages.
- **Homepage** — hero sub-headline, contact CTA copy and contact image alt text updated to mention only the four public verticals.
- **Footer** — removed the Energy & Utilities link from the Industries column.
- **Contact form** — inquiry routing pills automatically reduced to the four public verticals plus Partnerships; `inquiryRouting` map updated accordingly.
- **Dynamic verticals, case-study filters, sitemap, solutions related-industries, and mega menu** — all derive from the filtered `verticals` array and now surface only public verticals.
- **Root metadata** — `app/layout.tsx` site description updated to list only the four public verticals.

### Notes
- Hidden vertical content modules (`real-estate`, `oil-gas`, `energy-utilities`) and their route files remain in the codebase so they can be re-activated quickly by removing `hidden: true` from `lib/site.ts`.
- Some capability blurbs and insight articles still reference energy/utilities/oil & gas as example domains; these were left intact because they describe capability applicability rather than promote hidden vertical pages.

---

## v1.2.0 — 2026-07-14 11:47 IST

Investors page, CMS, and cursor polish.

### Added
- **Investors page** (`/investors`) benchmarked against Infosys investor page layout:
  - Animated hero section with headline, CTAs, and floating glass cards.
  - Animated stats ticker (BSE listing, incorporated year, countries, partners).
  - Corporate governance philosophy section.
  - Latest News 4-card grid and Recent News list.
  - Investor Toolkit cards (Corporate Governance, Financial Results, Shareholding, Disclosures).
  - Investor Information quick-link grid.
  - Document browser with category tabs and year/quarter filters.
  - Board Committees section (Audit, Nomination & Remuneration, Stakeholders Relationship).
- **CMS layer** for Investors page via `lib/investors-cms.ts` — all content editable without touching components.
- **Investor document manifest** (`lib/investors.ts`) and committee data (`lib/investors-committees.ts`).
- **Investors navigation** added to primary nav and mobile menu.
- Downloaded and organised Hiliks investor PDFs under `public/investors/reports/` (not committed to Git due to size).

### Changed
- **Hero visibility** on Investors page — improved contrast, lighter background gradients, text shadows, and more visible glass cards.

### Fixed
- **Custom cursor overlap** — removed the cursor ring's orange highlight/enlargement on interactive elements that already have their own hover border effects (e.g. "Talk to Experts" button).

Each release below is also **tagged in git** (e.g. `v1.0.0`) and published as a
**GitHub Release**, so any past version can be identified by name + date and
restored at any time:

```bash
git checkout v1.0.0       # inspect that exact version
# or branch off it to make changes from that point:
git checkout -b fix/from-v1.0.0 v1.0.0
```

Versioning follows `vMAJOR.MINOR.PATCH`:
- **MAJOR** — large redesigns / breaking structural changes
- **MINOR** — new sections, features, or notable visual changes
- **PATCH** — small fixes, copy, spacing tweaks

---

## v1.1.0 — 2026-06-05 18:45 IST

New features and a fix.

### Added
- **Mega menu** — the Industries and Solutions nav items now open rich mega-menu
  panels (3-column grid of icon + name + blurb, driven by the existing
  verticals/capabilities data) with a "View all →" link. Opens on hover
  (desktop) or tap/click; closes on Esc, outside-click, or route change.
  Accessible (`aria-haspopup`/`aria-expanded`/`aria-controls`). Desktop/tablet
  only — phones keep the existing burger menu.
- **Contact CTA image** — the homepage Contact band now shows an industry-grid
  image (Railways, Telecom, BFSI, Public Sector, Real Estate, Oil & Gas, Energy
  & Utilities, Partnership) on its right side, top-aligned with the headline.

### Fixed
- **Route-change crash** — guarded `ScrollTrigger.refresh()` on navigation (two
  frames + try/catch) so a pinned trigger mid-teardown can no longer throw
  "Cannot read properties of null (reading 'insertBefore')".

---

## v1.0.1 — 2026-06-05 16:21 IST

Bug fixes.

- **Section indicator** — the right-side section HUD ("Railways", dots) no longer
  shows on the Hero. It now fades in only after the Hero is scrolled past (from
  the Railways section onward) and hides again when scrolling back into the Hero.
- **Case-study cards** — removed the stray underline on card text. The cards are
  link (`<a>`) elements and `.icard` was missing `text-decoration:none`, so the
  browser's default link underline showed through on the title/Challenge/Result.

---

## v1.0.0 — 2026-06-05 15:16 IST

First versioned checkpoint of the Hiliks website (homepage hero, layout polish,
and pre-loader fix).

### Hero
- Hero 3D helix placed in the right column, starting after the menu row and
  capped to the first viewport page so it never spills into the next section.
- Helix left edge anchored to the "Contact" nav item and spanning to the right
  viewport edge — measured live on resize, responsive from 1080p to ultrawide,
  hidden on phones.
- Helix coil widened (radius 3.4 → 4.7) and enlarged 2× (width only, height
  unchanged); continuous 360° spin at +20% speed.
- Hero headline reduced 20%; removed the "Scroll" cue and its animation.

### Layout & spacing
- Marquee strip pushed clear of the hero so the two scrolling objects no longer
  overlap.
- Reduced excess vertical spacing between sections (section padding, headings,
  footer margin).
- Centered the partner pills and the footer content group.
- Contact CTA section switched to the dark theme so it blends with the rest of
  the page instead of reading as a separate page.

### Pre-loader
- Pre-loader overlay is server-rendered so it covers the page on first paint
  (no content flash before it mounts); added a no-JS fallback to hide it.
