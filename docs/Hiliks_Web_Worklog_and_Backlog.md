# Hiliks Web — Worklog & Backlog

**Last updated:** 2026-06-05
**Repository:** `keysp24/hiliksweb` (GitHub, **public**)
**Live site:** https://hiliksweb.vercel.app (auto-deploys from `main` via Vercel)
**Local project path:** `D:\projects\amalyte\hiliks\hiliksweb`
**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · GSAP/ScrollTrigger · Lenis (smooth scroll) · Three.js (hero 3D)
**Current released version:** **v1.1.0**

---

## 1. How to run / work with the project

```bash
# from D:\projects\amalyte\hiliks\hiliksweb
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

- The dev server uses Turbopack with HMR (changes hot-reload).
- The site requires JavaScript (Lenis smooth-scroll, GSAP, Three.js hero).

---

## 2. Version control & release workflow (set up this session)

Versioning is now formalized. **Every change follows this flow:**

1. Create a feature/fix branch (never commit directly to `main`).
2. Commit → push → open a **Pull Request** → merge to `main`.
3. Update `CHANGELOG.md` (repo root) with a dated section.
4. Create an **annotated git tag** `vMAJOR.MINOR.PATCH` whose message includes a
   friendly name + **date and time** (IST).
5. Publish a **GitHub Release** titled with the version + date/time.
6. Merging to `main` **auto-deploys** to the live Vercel site.

**Roll back / branch from any version:**
```bash
git checkout v1.1.0                      # inspect that exact version
git checkout -b fix/from-v1.1.0 v1.1.0   # branch off it to make changes
```

**Versioning scheme:** MAJOR = redesign/breaking · MINOR = new sections/features · PATCH = small fixes.

**Branch protection:** A repository ruleset ("Protect main") is **active** — `main`
requires a PR to merge and blocks force-pushes and deletion. (This became possible
only after the repo was switched from private to public; GitHub Free does not allow
branch protection on private repos.)

---

## 3. Release history

### v1.0.0 — 2026-06-05 15:16 IST — Hero + layout polish, pre-loader fix
First versioned checkpoint. See section 4 for the detailed changes bundled here.

### v1.0.1 — 2026-06-05 16:21 IST — UI bug fixes
- **Section indicator HUD** ("Railways" + dots on the right) no longer shows on
  the Hero; it appears only from the Railways section onward and hides again when
  scrolling back up.
- **Case-study cards** — removed the stray underline on card text (the cards are
  `<a>` links and `.icard` was missing `text-decoration:none`).

### v1.1.0 — 2026-06-05 18:45 IST — Mega menu + contact image + crash fix
- **Mega menu** on Industries & Solutions (see 4.6).
- **Contact CTA image** (see 4.4).
- **Route-change crash fix** (see 4.7).

GitHub Releases: https://github.com/keysp24/hiliksweb/releases

---

## 4. Detailed changes (by area)

### 4.1 Hero 3D "helix" (the rotating sphere/strand object)
> Internally this object is called the **"hero helix"** — component `Hero3D`
> (`components/Hero3D.tsx`), CSS id `#scene`, the Three.js group named `helix`.

- **Placement:** Moved into the hero's **right column**, starting **after the menu
  row** (top offset = nav height) and **capped to the first viewport page** so it
  never spills into the next section.
- **Width anchored to the nav:** Its **left edge is anchored to the "Contact" nav
  item** and it spans to the right viewport edge. Because the nav lives in a centered
  max-1280px container, the Contact item is **measured live on every resize** (JS)
  so the helix stays aligned at any monitor size (1080p → 57" ultrawide). Hidden on
  phones (<901px) — no WebGL cost there.
- **Size:** Coil `radius` widened `3.4 → 4.7` (width only — height is set by
  `count × spacing`, so the object got wider without getting taller; spheres stay
  round). Overall scale multiplier set to **2×**.
- **Motion:** Continuous full **360° spin** around the vertical axis, **+20% speed**
  (`helix.rotation.y += 0.00168`).
- Files: `components/Hero3D.tsx`, `app/globals.css` (`#scene`, `--nav-h`).

### 4.2 Hero text & layout
- **Headline reduced 20%** (`h1.hero-h`, desktop and mobile clamps) — scoped to the
  hero only so other page headings are unaffected.
- **Ultrawide:** the hero copy breaks out of the centered 1280px container on very
  wide screens (`≥1500px`) so it fills the left column instead of drifting to center.
- **Removed the "Scroll" cue** (the word + its animated vertical line) from the hero.
- Files: `app/page.tsx`, `app/globals.css`.

### 4.3 Section spacing & layout polish (from review screenshots)
- **Marquee strip** pushed clear of the hero (added top margin) so the scrolling
  strip no longer overlaps the hero helix.
- **Reduced excess vertical spacing** between sections: `--section-y`
  (`clamp(74,9vw,128) → clamp(48,6vw,84)`), `.h-head`, `#industries .h-head`,
  `footer` margin-top (`120 → 56`), `.cta-band` margin-top.
- **Centered the partner pills** (`.partners` → `justify-content:center`).
- **Centered the footer** content group (`.foot` → `justify-content:center`).
- Files: `app/globals.css`.

### 4.4 Contact CTA section (homepage `#contact`)
- **Theme:** Changed from the **light** (cream) theme to **dark** so it blends with
  the rest of the page instead of looking like a separate page.
- **Image:** Embedded the industry-grid image (`public/images/contact-verticals.png`
  — Railways, Telecom, BFSI, Public Sector, Real Estate, Oil & Gas, Energy &
  Utilities, Partnership) on the **right side** of the band. It is **~20% larger**
  and **top-aligned** with the "Engineering-led…" headline (2-column grid). Stacks
  below the text on mobile.
- Files: `app/page.tsx`, `app/globals.css` (`.cta-band`, `.cta-media`),
  `public/images/contact-verticals.png`.

### 4.5 Pre-loader (first-paint fix)
- The pre-loader overlay is now **server-rendered**, so it covers the page on the
  **first paint** instead of letting page content flash before the loader mounted.
- Added a **no-JS fallback** (`<noscript>`) to hide the overlay if scripts are
  disabled (so content is never trapped).
- Files: `components/PageLoader.tsx`, `app/layout.tsx`.

### 4.6 Mega menu (new — v1.1.0)
- **Industries** and **Solutions** nav items open **rich mega panels**: a 3-column
  grid of **icon + name + 2-line blurb**, plus a **"View all →"** link.
  - Industries panel ← the 7 `verticals` (per-vertical accent icons via
    `IndustryGlyph`), links to `/industries/<slug>`.
  - Solutions panel ← the 8 `capabilities` (their SVG icons), links to
    `/solutions/<slug>`.
- **Interaction:** opens on **hover** (desktop, 80ms open / 150ms close delay) or
  **tap/click**; closes on **Esc**, **outside-click**, or **route change**. Only one
  panel open at a time. Accessible (`<button>` triggers with `aria-haspopup`,
  `aria-expanded`, `aria-controls`).
- **Desktop/tablet only** (≥901px). Phones keep the existing slide-in **burger menu**
  unchanged (Industries/Solutions are simple links there).
- Files: `components/MegaMenu.tsx` (new), `components/Nav.tsx`, `app/globals.css`
  (`.mega-*`). Data source: `lib/site.ts` (`verticals`, `capabilities`).

### 4.7 Bug fixes
- **Section indicator HUD** gated behind a hero ScrollTrigger so it never shows on
  the hero (v1.0.1). File: `components/SectionIndicator.tsx`, `app/globals.css`.
- **Case-study card underlines** removed via `text-decoration:none` on `.icard`
  (v1.0.1). File: `app/globals.css`.
- **Route-change crash** — `ScrollTrigger.refresh()` on navigation could throw
  `Cannot read properties of null (reading 'insertBefore')` when the pinned
  `#industries` trigger was mid-teardown. Now **deferred two frames + wrapped in
  try/catch** (v1.1.0). File: `components/LenisProvider.tsx`.

---

## 5. Known issues / pre-existing warnings (not yet addressed)

These appear in dev console; they are **pre-existing** and low priority:

1. **`/favicon.ico` 404** — no favicon is configured. Add `app/icon.png` (or a
   `favicon.ico` in `public/`) to fix.
2. **Logo image warnings** — `next/image` warns that `/images/hiliks-logo.png` uses
   `fill` without a `sizes` prop and is the LCP without `loading="eager"`. Add
   `sizes` (and consider `priority`/eager) on the logo `<Image>` usages.
3. **`contact-verticals.png` is ~2 MB** — Next optimizes delivery, but converting the
   source to WebP/AVIF (or compressing the PNG) would reduce repo size and build
   work.

---

## 6. Backlog / suggested next steps (NOT yet requested — for discussion)

These are recommendations, not committed work. Confirm before any are built.

- **Mobile mega menu** — the burger menu currently lists Industries/Solutions as
  plain links. Optional: make them **expandable accordions** of sub-items for parity
  with the desktop mega menu.
- **`/contact` page (the actual form page)** — only the **homepage** Contact CTA was
  restyled this session. The standalone `/contact` route (`app/contact/page.tsx` +
  `ContactForm.tsx`) was **not** reviewed/redesigned. Worth a pass if it should match
  the new look.
- **Theme consistency** — the **Why** and **Industries** sections are still the
  **light** (cream) theme. If a uniformly dark site is preferred, convert these too
  (kept as-is for now since they're content-rich and the alternation is intentional).
- **Mega menu keyboard polish** — basic Tab focus + Esc work; could add arrow-key
  navigation within the panel for full keyboard-menu semantics.
- **Favicon & social/OG image** — add a favicon and an Open Graph image for nicer
  link previews.
- **Image optimization pass** — convert large PNGs to WebP/AVIF; audit `sizes` on
  all `next/image` usages.
- **Automated tests / CI** — there are currently no automated tests. Consider a basic
  Playwright smoke test + a GitHub Actions check (especially now that `main` requires
  PRs).
- **Accessibility audit** — run a full a11y pass (focus order, contrast on the new
  dark Contact CTA, mega-menu screen-reader behavior).
- **Performance/Lighthouse** — verify Core Web Vitals on the live site; the hero
  (Three.js) and the 2 MB contact image are the main things to watch.

---

## 7. Quick file reference

| Area | Key files |
|---|---|
| Hero 3D helix | `components/Hero3D.tsx`, `app/globals.css` (`#scene`) |
| Homepage sections | `app/page.tsx`, `app/globals.css` |
| Nav + Mega menu | `components/Nav.tsx`, `components/MegaMenu.tsx`, `components/IndustryGlyph.tsx` |
| Pre-loader | `components/PageLoader.tsx`, `app/layout.tsx` |
| Smooth scroll / ScrollTrigger | `components/LenisProvider.tsx` |
| Section indicator HUD | `components/SectionIndicator.tsx` |
| Footer / Marquee | `components/Footer.tsx`, `components/Marquee.tsx` |
| Content data | `lib/site.ts` (nav, verticals, capabilities), `lib/case-studies.ts` |
| Contact route (form) | `app/contact/page.tsx`, `app/contact/ContactForm.tsx` |
| Changelog | `CHANGELOG.md` (repo root) |

---

*Generated by Claude Code. Keep this file updated as work continues, or regenerate it
after the next batch of changes.*
