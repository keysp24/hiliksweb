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
