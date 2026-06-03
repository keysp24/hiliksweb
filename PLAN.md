# Implementation Plan — Hiliks Premium Enhancement

## Tasks (in order of visual impact)

### Phase 1: Foundation Components
1. **TextScramble** — Decode/scramble text reveal effect (reusable)
2. **PageLoader** — Branded loading screen with progress ring
3. **MagneticButton** — Cursor-attracting buttons
4. **GlassCard** — Glass-morphism cards with animated gradient border

### Phase 2: Hero & 3D
5. **Hero3D rebuild** — Cinematic procedural rail scene
   - Track geometry with animated rails
   - Signal light pulses
   - Fog particles
   - Mouse parallax
   - Gradient vignette overlay

### Phase 3: Scroll & Animation System
6. **ScrollStory** — GSAP ScrollTrigger section controller
   - Pin sections on scroll
   - Text decode triggers
   - Parallax layers
   - Progress dots navigation

### Phase 4: Section Enhancements
7. **Industry cards** — 3D hover tilt + glow effects
8. **Capabilities gallery** — Horizontal scroll panels
9. **Why Hiliks** — Counter animations + staggered reveals

### Phase 5: Polish
10. **Page transitions** — Smooth route transitions
11. **globals.css** — New animation keyframes, glass utilities
12. **Media generation guide** — Prompts for Nano Banana / Veo / Seedance

## Files to Create
- `components/TextScramble.tsx`
- `components/PageLoader.tsx`
- `components/MagneticButton.tsx`
- `components/GlassCard.tsx`
- `components/ScrollStory.tsx`
- `lib/animations.ts`
- `MEDIA_GUIDE.md`

## Files to Modify
- `components/Hero3D.tsx` — rebuild
- `app/globals.css` — add animations
- `app/page.tsx` — integrate new components
- `app/layout.tsx` — add PageLoader
