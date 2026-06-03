# Hiliks Website Enhancement Design
## 2025-06-03 — Premium 3D Interactive Upgrade

### Goal
Transform the existing Hiliks Next.js site into a cinematic, engineering-led experience with advanced 3D, scroll-driven storytelling, and premium UI polish — while keeping build cost at $0 using procedural code-only visuals.

### Design Principles
- **Dark & Premium**: Deep navy/black base (`#0a0f1a`) with engineering orange (`#f2680e`) accents
- **Depth & Motion**: Every section has layered depth (parallax, 3D, blur)
- **Industry Flagship**: Railways gets hero treatment; others follow hierarchy
- **Performance First**: 60fps target, reduced-motion support, mobile fallbacks

---

### Enhancement Areas

#### 1. Hero Section — "Railway to the Future"
**Current**: Basic node network
**New**: Cinematic procedural rail scene
- Track geometry extending into Z-depth with animated rails
- Signal light pulses traveling along tracks (GSAP + Three.js)
- Volumetric fog particles (procedural, no textures)
- Mouse-driven camera parallax (subtle, 5° max rotation)
- Overlay: Gradient vignette + scanlines for engineering feel
- Loading: Brand pulse animation before scene renders

#### 2. Global Scroll System
**Current**: Basic Reveal component
**New**: GSAP ScrollTrigger story system
- Pin sections while content animates in/out
- Text decode effect: characters scramble then resolve
- Staggered reveals: 0.08s delay between elements
- Progress dots on right edge showing section position
- Smooth scroll (Lenis or native CSS scroll-behavior)

#### 3. Industry Cards — 3D Glyphs
**Current**: Static cards with icons
**New**: Each vertical gets a procedural 3D glyph on hover
- Railways: Track crossing with animated points
- Telecom: Signal tower with expanding wave rings
- BFSI: Rotating secure cube
- Public Sector: Connected nodes (city mesh)
- Real Estate: Building wireframe rising up
- Oil & Gas: Pipeline flow visualization
- Energy: Turbine blade rotation
Rendered as small Three.js canvases on each card.

#### 4. Capabilities Section
**Current**: Grid of text links
**New**: Horizontal scroll gallery (scroll hijack)
- Each capability is a full-viewport panel
- Background color shifts per capability
- 3D icon representing each capability
- Number counter animation on enter

#### 5. UI Polish
- Glass-morphism cards: `backdrop-filter: blur(20px)` + semi-transparent borders
- Gradient border animation on hover (conic-gradient rotation)
- Magnetic buttons: Attract toward cursor on proximity
- Custom cursor: Small dot + ring that expands on interactive elements
- Page transitions: Fade + slight Y shift between routes
- Loading screen: Hiliks logo with progress ring

#### 6. Media Generation Guide (External Tools)
Since Nano Banana / Veo / Seedance require user accounts, provide:
- **Hero Video Prompt**: "Cinematic aerial shot of modern railway signaling system at dusk, orange signal lights glowing, tracks extending into fog, cyberpunk engineering aesthetic, 4K, slow dolly"
- **Industry Images**: Per-vertical prompt templates with style keywords
- **Abstract Backgrounds**: "Dark engineering blueprint textures, glowing orange circuit lines, subtle grid"
- Placeholder components ready for generated media insertion

---

### Tech Stack
- **Next.js 16** (App Router) — existing
- **Three.js** — enhance current raw usage
- **GSAP + ScrollTrigger** — existing, expand usage
- **Lenis** — smooth scroll (add)
- **CSS Custom Properties** — theme tokens per industry

### Files to Create/Modify
- `components/Hero3D.tsx` — rebuild with rail scene
- `components/ScrollStory.tsx` — new scroll controller
- `components/IndustryGlyph3D.tsx` — new per-industry 3D
- `components/MagneticButton.tsx` — new
- `components/PageLoader.tsx` — new
- `components/GlassCard.tsx` — new
- `app/globals.css` — expand with new animations
- `lib/animations.ts` — new shared animation utils

### Performance Budget
- Hero 3D: < 16ms frame time (60fps)
- First Contentful Paint: < 1.5s
- Lazy-load 3D below fold
- `prefers-reduced-motion` disables all motion

---

### Success Criteria
- [ ] Homepage feels like a premium engineering product site
- [ ] Scroll animations are buttery smooth
- [ ] 3D elements add depth without distraction
- [ ] Mobile experience is polished (simpler 3D)
- [ ] All existing content from documents is preserved
