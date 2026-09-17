# AI AGENT PROJECT SUMMARY
## Astro Business Landing Page - Production Readiness Handoff

> **Purpose:** Continue the existing project from the current state to **READY FOR PRODUCTION**.
> **Rule:** Do not restart the architecture or introduce a new stack. Preserve the existing blueprint unless a concrete production bug requires a change.

---

## 1. PROJECT GOAL

Build a reusable, production-ready static landing-page system for Indonesian small businesses:

- CV / small company
- LPK
- local service business
- UMKM

The long-term production workflow is:

Google Maps URL
→ business research
→ structured Business JSON
→ reusable Astro template
→ AI customization
→ AI code review
→ human final check
→ GitHub
→ Vercel
→ client website

The final system must support repeated client projects without rebuilding the website architecture from zero.

---

## 2. LOCKED STACK

Use only the existing stack:

- Astro
- TypeScript
- Tailwind CSS
- GitHub
- Vercel
- Static website

Do NOT introduce:

- React / Next.js
- database
- backend
- authentication
- CMS
- unnecessary API layer
- unnecessary dependencies

CTA is WhatsApp.

No decorative animations. Hover/focus states are acceptable.

---

## 3. EXISTING PROJECT STRUCTURE

Expected structure:

```text
src/
├── components/
│   ├── layout/
│   │   └── Navbar.astro
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── WhyChooseUs.astro
│   │   ├── Process.astro
│   │   ├── Testimonials.astro
│   │   ├── Gallery.astro
│   │   ├── FAQ.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   └── ui/
│       ├── Button.astro
│       ├── Container.astro
│       ├── Section.astro
│       └── SectionHeading.astro
├── data/
│   └── business.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── en/
│       └── index.astro
├── styles/
│   └── global.css
└── utils/
    └── seo.ts

public/
├── favicon.svg
└── robots.txt
```

IMPORTANT:
- Inspect the actual extracted project before changing anything.
- The ZIP may contain `node_modules`. Do not treat `node_modules` as source code.
- Final source/archive should NOT include `node_modules`.

---

## 4. CURRENT ARCHITECTURE

### Business data contract

`src/data/business.ts` contains the central business schema.

Main entities:

```ts
Service
Testimonial
GalleryImage
FAQ
BusinessLanguageContent
Business
```

Business includes:

- identity
- contact
- location
- hours
- positioning
- services
- testimonials
- gallery
- bilingual content (`id`, `en`)
- SEO
- design direction
- Google rating/review count

Keep this as the single source of business content.

Do not scatter client-specific content across components.

---

## 5. REQUIRED PAGE SECTIONS

The master page must contain:

1. Navbar
2. Hero
3. About
4. Services
5. Why Choose Us
6. Process
7. Testimonials
8. Gallery
9. FAQ
10. CTA
11. Footer

All sections must be reusable and driven by `business.ts`.

Do not hardcode a fixed number of services, testimonials, gallery images, FAQs, etc.

Empty/missing data must degrade gracefully.

---

## 6. COMPLETED FOUNDATION

Already established:

- Astro project
- Tailwind
- TypeScript
- Git
- global design tokens
- reusable UI primitives
- SEO foundation
- bilingual routing
- sitemap integration
- robots.txt
- Navbar
- Hero
- About
- Services
- remaining section components are present in the current project and must be audited rather than blindly recreated

Previous implementation has successfully passed `npm run build` multiple times before the latest ZIP audit.

---

# 7. KNOWN ISSUES FROM LATEST ZIP AUDIT

These are the first things the agent must verify and fix.

## P0 / HIGH: Navbar anchor mismatch

Navbar currently references:

```text
#why-us
```

while the section uses:

```text
#why-choose-us
```

Unify the anchor.

Recommended canonical ID:

```text
#why-choose-us
```

Check Navbar, section, footer, and every internal link.

---

## P0 / HIGH: English page language prop

`src/pages/en/index.astro` must pass:

```astro
<Layout business={business} lang="en">
```

not only:

```astro
<Layout business={business}>
```

Verify `<html lang="en">` and all language-specific metadata after the fix.

---

## P0 / HIGH: English canonical URL

The English route `/en/` must have its own canonical:

```text
/en/
```

The Indonesian route `/` must canonicalize to:

```text
/
```

Do not let both routes canonicalize to the same URL.

Also verify:

- hreflang `id`
- hreflang `en`
- hreflang `x-default`
- Open Graph URL
- language metadata

---

## P1: SEO finalization

Audit and fix:

- title
- meta description
- canonical
- hreflang
- Open Graph
- Twitter/X card
- OG image
- Twitter image
- favicon
- semantic HTML
- heading hierarchy
- sitemap
- robots.txt
- JSON-LD
- LocalBusiness schema
- local SEO keywords

Do not fabricate SEO facts.

### JSON-LD rule

Only output `aggregateRating` when both rating and review count are actually available.

Do NOT use:

```ts
reviewCount || 0
```

as a fake value.

Use real available business data only.

---

## P1: WhatsApp utility

WhatsApp URL generation is currently duplicated across components.

Create a small reusable utility, for example:

```text
src/utils/whatsapp.ts
```

Centralize:

- number normalization
- message encoding
- WhatsApp URL creation
- empty-number fallback

Then use it consistently in Navbar, Hero, CTA, and anywhere else.

Do not create broken `wa.me/` URLs when the phone number is missing.

---

## P1: Image system

Finalize a robust image strategy.

Requirements:

- Hero image
- Gallery images
- graceful fallback
- valid alt text
- responsive images
- lazy loading where appropriate
- eager/high-priority loading only for above-the-fold Hero image
- no broken-image layout
- OG image support
- client asset replacement must be straightforward

Google Maps/business images may not always provide stable direct URLs.

Therefore:

- never make the page dependent on an unstable image URL
- support local/manual replacement
- preserve layout when an image is unavailable

---

## P1: Business content schema robustness

Current `WhyChooseUs` implementation uses:

```ts
business.positioning.uniqueSellingPoints[index]
```

together with:

```ts
content.whyChooseUs[index]
```

This depends on two arrays having identical length/order.

Improve this if possible without overengineering.

Preferred approach:

- one structured array containing title + description
- or safe fallback behavior when lengths differ

The schema must be easy for an AI agent to populate reliably.

---

## P2: FAQ animation consistency

FAQ currently has a small icon rotation/transition.

The locked project direction says:

> No decorative animation.

Remove unnecessary transition/rotation if strict no-animation behavior is required.

Keep the accordion interaction itself.

---

## P2: Dummy data cleanup

Current `business.ts` contains test/demo copy such as:

```text
Website Profesional untuk Bisnis Anda
Program Pelatihan
Konsultasi
Layanan Profesional
```

This is test data only.

Before freezing Master Template v1:

- clearly mark placeholder/demo data
- ensure no demo claims can accidentally ship to a real client
- keep schema easy for AI replacement

Never use fake testimonials, fake awards, fake certifications, fake years of experience, fake customer counts, fake guarantees, fake branches, fake partnerships, or other invented business facts.

Missing facts must be represented as missing, not invented.

---

# 8. BILINGUAL REQUIREMENTS

Routes:

```text
/
```

Indonesian

```text
/en/
```

English

Both pages must have:

- correct visible language
- correct `<html lang>`
- correct metadata
- correct canonical
- correct hreflang
- correct internal language switcher
- same page structure
- business-specific English content

The language switcher must not create broken URLs.

---

# 9. DESIGN SYSTEM

Existing global CSS contains tokens approximately:

```css
--color-background
--color-foreground
--color-primary
--color-primary-foreground
--color-secondary
--color-secondary-foreground
--color-muted
--color-muted-foreground
--color-border

--radius-sm
--radius-md
--radius-lg
--radius-xl

--container-width
```

Preserve the design-token approach.

Use reusable primitives:

- Container
- Section
- SectionHeading
- Button

Do not duplicate layout primitives unnecessarily.

---

# 10. ACCESSIBILITY REQUIREMENTS

Audit the complete website for:

- semantic landmarks
- one clear H1 per page
- logical heading hierarchy
- accessible navigation
- mobile menu keyboard accessibility
- visible focus states
- button/link semantics
- `aria-expanded`
- `aria-controls`
- meaningful link text
- image alt text
- sufficient contrast
- FAQ keyboard behavior
- no keyboard traps
- no inaccessible clickable `<div>`
- language switcher accessibility

Do not add unnecessary ARIA when native HTML semantics are sufficient.

---

# 11. PERFORMANCE REQUIREMENTS

Because this is a static landing-page product:

- zero unnecessary JavaScript
- no framework hydration unless genuinely required
- no unnecessary third-party libraries
- optimize image loading
- avoid layout shifts
- keep CSS clean
- avoid oversized assets
- verify production build
- verify generated output
- ensure no broken asset paths

FAQ/mobile navigation may use minimal vanilla JS.

---

# 12. RESPONSIVE REQUIREMENTS

Test at minimum:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1280px+

Check:

- Navbar
- Hero
- cards
- typography
- image ratios
- buttons
- section spacing
- FAQ
- footer
- horizontal overflow

There must be no accidental horizontal scrolling.

---

# 13. CONTENT SAFETY / AI CONTENT RULES

The future Gemini research agent will generate the Business JSON.

AI MUST:

- use factual business information
- distinguish verified vs inferred information
- mark missing information
- generate copy from evidence
- preserve the business's real identity
- generate Indonesian + English copy
- generate SEO content from factual data

AI MUST NOT invent:

- testimonials
- ratings
- awards
- certifications
- years of experience
- number of customers
- branches
- partnerships
- guarantees
- prices
- qualifications
- facilities
- claims that cannot be supported

---

# 14. PRODUCTION CHECKLIST

Before declaring READY:

### Code
- [ ] TypeScript clean
- [ ] Astro components clean
- [ ] no unused imports
- [ ] no broken imports
- [ ] no duplicated utilities that should be shared
- [ ] no unnecessary dependencies

### Build
Run:

```bash
npm install
npm run build
```

Build must pass.

If the ZIP contains broken `node_modules`, delete/reinstall dependencies rather than debugging the bundled `node_modules`.

### Routes
Verify:

```text
/
 /en/
```

Both must build.

### Navigation
Test every navbar/footer anchor.

### SEO
Verify:

- title
- description
- canonical
- hreflang
- OG
- Twitter
- sitemap
- robots
- JSON-LD

### Accessibility
Perform the complete accessibility audit.

### Responsive
Check mobile/tablet/desktop.

### Images
No broken images.

### WhatsApp
Every WhatsApp CTA must produce a correct encoded URL when a valid number exists.

### Content
No accidental demo/fake claims.

---

# 15. DO NOT DO

Do NOT:

- rewrite the project from scratch
- change Astro to another framework
- add a database
- add a CMS
- add React
- add unnecessary animation
- add unnecessary dependencies
- redesign the entire template without a production reason
- invent business information
- deploy automatically
- create AI prompts before the master template is stable

---

# 16. AFTER PRODUCTION READINESS

Only after the existing template passes the production checklist, continue with:

## Phase A: Gemini Business Research Prompt

Input:

```text
Google Maps URL
```

Output:

```text
valid Business JSON
```

It must research:

- identity
- category
- contact
- location
- hours
- services
- positioning
- available reviews
- gallery/image information
- SEO
- design direction
- Indonesian copy
- English copy

No fabrication.

## Phase B: AI Customization Prompt

Input:

- Master Astro template
- Business JSON

Output:

- customized Astro project

Constraints:

- preserve architecture
- preserve stack
- preserve accessibility
- preserve SEO
- preserve performance
- preserve bilingual routing
- do not deploy

## Phase C: AI Code Review Prompt

Review:

- build
- TypeScript
- Astro
- responsive behavior
- accessibility
- SEO
- performance
- images
- links
- WhatsApp
- FAQ
- bilingual behavior
- security
- content accuracy

Severity:

```text
CRITICAL
HIGH
MEDIUM
LOW
```

Final status:

```text
READY
READY_WITH_MINOR_FIXES
NOT_READY
```

---

# 17. MULTI-BUSINESS VALIDATION

After all prompts exist, test the system against at least:

1. LPK
2. CV / small company
3. generic local service business

The same Master Template architecture must work for all three.

Only data, content, imagery, and design direction should change.

---

# 18. FINAL FREEZE CRITERIA

Master Template v1 can only be declared frozen when:

- production build passes
- ID route passes
- EN route passes
- navigation passes
- responsive layout passes
- accessibility audit passes
- SEO audit passes
- JSON-LD is valid
- image fallback works
- WhatsApp CTA works
- no fake content remains
- no unnecessary dependencies exist
- no `node_modules` is included in the distributable template
- three business types have been validated
- Gemini research prompt is ready
- AI customization prompt is ready
- AI code-review prompt is ready

Then mark:

```text
MASTER TEMPLATE V1 = READY
```

---

## 19. AGENT WORKING MODE

Work sequentially.

For each task:

1. Inspect current code.
2. Identify the smallest correct change.
3. Implement it.
4. Run the relevant test/build.
5. Report PASS/FAIL.
6. Continue to the next task only after the previous task is confirmed.

Do not create speculative refactors.

Priority order:

```text
1. Fix known bugs
2. SEO finalization
3. WhatsApp utility
4. Image system
5. Schema robustness
6. Accessibility audit
7. Responsive audit
8. Performance audit
9. Production build
10. Master template cleanup
11. Gemini research prompt
12. AI customization prompt
13. AI code-review prompt
14. 3-business validation
15. Freeze Master Template v1
```

## CURRENT NEXT ACTION

Start by inspecting the actual current project files, then fix and verify the three highest-priority known issues:

1. Navbar `#why-us` → `#why-choose-us`
2. English page must pass `lang="en"`
3. English canonical must be `/en/`

Then run:

```bash
npm run build
```

Do not proceed to prompt-generation until the master template itself is production-ready.
