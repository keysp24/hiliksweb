# Hiliks Media Generation Guide
## For Nano Banana / Veo / Seedance

Use these prompts to generate custom media assets for the website. Replace placeholders after generation.

---

## Hero Video (Homepage Background)

**Tool:** Veo or Seedance (video generation)
**Dimensions:** 1920x1080, 4-6 seconds, seamless loop

**Prompt:**
```
Cinematic aerial tracking shot of a modern high-speed railway at dusk. 
Glowing orange signal lights pulse along the tracks. 
Steam and fog roll across steel rails extending into the distance. 
Cyberpunk engineering aesthetic, dark navy sky, industrial mood. 
Slow subtle camera movement, 4K, photorealistic, moody lighting.
```

**Alternative (abstract):**
```
Abstract dark engineering visualization. 
Glowing orange circuit lines trace across a navy blueprint background. 
Subtle particle dust, depth of field, technical schematic feel. 
Seamless loop, 4K, cinematic.
```

---

## Industry Hero Images (One per vertical)

**Tool:** Nano Banana or Midjourney (image generation)
**Dimensions:** 1600x900, 16:9
**Style:** Dark, engineering-focused, orange accent lighting

### Railways
```
Modern railway signaling control room, multiple monitors showing track diagrams, 
orange warning lights, dark environment, engineering aesthetic, 
photorealistic, cinematic lighting --ar 16:9
```

### Telecom
```
Abstract telecom network visualization, fiber optic cables glowing blue and orange, 
data streams, dark background, technical schematic style, 
cinematic --ar 16:9
```

### BFSI
```
Futuristic bank vault door with digital lock interface, 
glowing orange holographic displays, dark marble environment, 
premium financial aesthetic --ar 16:9
```

### Public Sector
```
Smart city command center, digital map displays, 
citizen service dashboards, dark UI with orange highlights, 
government technology aesthetic --ar 16:9
```

### Real Estate
```
Modern smart building cross-section showing IoT sensors, 
HVAC systems, glowing orange connection lines, 
dark architectural blueprint style --ar 16:9
```

### Oil & Gas
```
Industrial refinery at night with SCADA system overlays, 
pipe networks glowing with data streams, 
dark industrial aesthetic, orange safety lighting --ar 16:9
```

### Energy & Utilities
```
Wind turbine farm at twilight with predictive maintenance holograms, 
orange data overlays, dark moody sky, 
renewable energy technology aesthetic --ar 16:9
```

---

## Abstract Backgrounds / Textures

**Tool:** Nano Banana
**Dimensions:** 2560x1440 (for section backgrounds)

```
Dark engineering blueprint texture, subtle grid lines, 
faint orange circuit traces, deep navy black background, 
minimal, premium, abstract --ar 16:9
```

```
Abstract particle field, orange and navy dots connected by faint lines, 
3D depth, dark background, premium technology aesthetic --ar 16:9
```

---

## Team / About Page

**Tool:** Seedance or Veo
**Dimensions:** 1080x1080 or 1920x1080

```
Professional engineering team in modern office, 
looking at large digital displays, dark environment with orange accent lighting, 
corporate technology aesthetic, cinematic --ar 16:9
```

---

## Integration Instructions

After generating media:

1. **Videos:** Place in `/public/videos/` folder, reference with `<video>` tag
2. **Images:** Place in `/public/images/` folder, use Next.js `<Image>` component
3. **Update components:** Replace canvas/placeholder elements with actual media

### Example Video Integration:
```tsx
<video autoPlay muted loop playsInline className="hero-video">
  <source src="/videos/hero-railway.mp4" type="video/mp4" />
</video>
```

### Example Image Integration:
```tsx
import Image from 'next/image';
<Image src="/images/industry-railways.jpg" alt="Railways" width={1600} height={900} />
```

---

## Cost Optimization Tips

- **Nano Banana:** Best for still images, very affordable
- **Veo:** Great for short video clips, pay per generation
- **Seedance:** Good for longer videos, subscription model
- **Generate in batches** — create all 7 industry images in one session
- **Use abstract prompts** — they require less detail and generate faster
- **Start with hero** — one great hero video/image transforms the whole site
