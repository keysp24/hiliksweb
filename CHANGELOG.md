# Changelog

All notable changes to the Hiliks website are recorded here.

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
