# MEPTOR — Website (Next.js App Router)

Production build of the MEPTOR landing page: teal liquid-glass UI, Lenis smooth scrolling,
GSAP ScrollTrigger / SplitText reveals, blur-focus typography, hero carousel, industries deck,
testimonial slider, custom cursor and opening curtain.

## Requirements
- Node.js 20.9 or newer

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (fully static)
npm start          # serve the production build
```
Deploys as-is to Vercel, Netlify or any Node host. Set `NEXT_PUBLIC_SITE_URL` to your live domain.

## Project structure
```
app/
  layout.tsx          fonts (self-hosted Instrument Sans), metadata, global CSS
  page.tsx            assembles the page
  globals.css         the complete design system (all styles scoped under .mp)
  icon.png            favicon (M mark)
components/
  MotionRoot.tsx      client wrapper — boots the motion engine after hydration
  Nav.tsx             navigation + mobile glass menu (client)
  sections/*.tsx      Hero, Trust, About, Services, WhyChooseUs, Industries,
                      Testimonials, Insights, Ticker, Cta, Footer, Overlays (static, server-rendered)
lib/
  motion.js           motion engine: Lenis + GSAP on one RAF loop, ScrollTrigger, SplitText,
                      carousels, cursor, card tilt, torch, tap sparkles
public/images/
  meptor-mark.png     logo mark
  grain.png           film-grain texture
  placeholders/*.svg  24 labelled image placeholders
```

## Replacing the placeholder images
Every photo slot shows a teal placeholder that says what photo belongs there and its minimum size.
Drop real photos into `public/images/` (JPG or WebP, ~200–400 KB each) and change the `src`
in the matching section file, e.g. in `components/sections/Hero.tsx`:

```tsx
<img decoding="async" src="/images/hero-1.jpg" alt="HR consultant in a modern office" />
```

| Placeholder file | Section | Suggested photo |
| --- | --- | --- |
| hero-1/2/3.svg | Hero carousel | HR professional portrait · team meeting · interview handshake (2400×1400) |
| about-1.svg / about-2.svg | About | Calm office interior (tall) · team at a whiteboard (wide) |
| svc-1 … svc-6.svg | Services cards | Contract signing · workshop · 1:1 review · payroll desk · interview · onboarding (800×1100) |
| ind-1 … ind-8.svg | Industries deck | Tech office · retail · clinic · factory · hotel · startup · classroom · Dubai skyline (1400×1000) |
| testimonial.svg | Client feedback | Smiling client portrait (1000×1300) |
| ins-1/2/3.svg | Insights | Hiring panel · remote call · policy handbook |
| cta.svg | Contact background | Bright, calm lounge with an empty centre (2400×1200) |

Plain `<img>` tags are used on purpose: the scroll animations transform and over-scan the images,
which `next/image` (fill mode) would override with inline styles.

## Before going live
- Replace the three testimonials tagged **Sample** in `components/sections/Testimonials.tsx` with real client quotes.
- Point the `#locations`, `#faqs` links and "Explore service" / "Read article" links at real pages.
- Wire the WhatsApp buttons to `https://wa.me/917356025576`.

## Accessibility & performance
- `prefers-reduced-motion` turns off smooth scrolling, reveals, curtain and grain.
- Phones keep native touch scrolling; heavy effects (cursor, tilt, refraction) are desktop-only.
- Fonts are self-hosted (SIL OFL licence in `app/fonts/OFL.txt`).
