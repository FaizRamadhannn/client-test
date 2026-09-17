# AI Customization Prompt

Use this prompt with an AI coding agent to customize the Master Astro Template for one researched business.

## Prompt

```text
You are an expert coding agent customizing an existing Astro static business website.

You receive two inputs:

1. The complete Master Astro Template repository.
2. One Business JSON object produced by the approved business-research prompt.

BUSINESS JSON

{{BUSINESS_JSON}}

Your task is to customize the existing website for the supplied business while preserving the repository's architecture and production guarantees.

MANDATORY FIRST STEP: INSPECT BEFORE EDITING

Before changing any file:

1. Read the repository instructions, including AGENTS.md, CLAUDE.md, and summary.md when present.
2. Inspect package.json, astro.config.mjs, tsconfig.json, src/data/business.ts, both page routes, Layout.astro, all section components, UI primitives, styles, utilities, and public assets.
3. Compare the supplied JSON with the actual Business schema in src/data/business.ts.
4. Identify the smallest set of files that must change.
5. State a short local implementation plan and identify validation checks.

Do not begin by rewriting or redesigning the project.

ARCHITECTURE THAT MUST BE PRESERVED

- Keep Astro as the framework.
- Keep TypeScript.
- Keep Tailwind CSS and the existing styling/token approach.
- Keep the static-site architecture.
- Keep the existing reusable components and page composition.
- Keep src/data/business.ts as the single source of business content.
- Keep the existing / route for Indonesian content.
- Keep the existing /en/ route for English content.
- Keep the existing SEO utility and sitemap integration unless a concrete compatibility fix is required.
- Keep the existing WhatsApp utility and image fallback system when present.
- Do not introduce React, Next.js, Vue, Svelte, a database, backend APIs, authentication, CMS, or unnecessary dependencies.
- Do not add framework hydration or client-side state unless the existing behavior genuinely requires it.
- Do not deploy, publish, commit, create a branch, or modify hosting settings.

BUSINESS DATA CUSTOMIZATION

1. Replace the existing demo business object with the supplied Business JSON.
2. Preserve the exact TypeScript schema and public property names from the repository's actual src/data/business.ts.
3. Do not add arbitrary schema keys.
4. Do not scatter business-specific content into components, pages, or layouts.
5. Preserve empty strings, empty arrays, and omitted optional fields where the JSON indicates that information is missing.
6. Never turn inferred or missing information into a factual claim.
7. Never invent or embellish testimonials, ratings, review counts, awards, certifications, experience, customer counts, branches, partnerships, facilities, qualifications, prices, guarantees, response times, or service claims.
8. Preserve verified wording and meaning while correcting only obvious formatting or type issues.
9. If the supplied JSON does not match the actual schema, stop and report the mismatch instead of silently inventing or restructuring business facts.

BILINGUAL ROUTING AND CONTENT

- Keep both pages with the same section structure.
- The Indonesian page must render with lang="id" and content.id.
- The English page must render with lang="en" and content.en.
- Keep the internal language switcher working: / links to /en/ and /en/ links to /.
- Do not hardcode Indonesian copy into the English route or English copy into the Indonesian route.
- Keep one meaningful h1 per route and preserve logical heading hierarchy.
- Make sure every localized title, description, CTA, process item, FAQ, and visible fallback uses the correct language.

SEO AND METADATA

Preserve and correctly populate the existing SEO implementation:

- Use factual business.seo.title and business.seo.description.
- Keep canonical URLs distinct: / and /en/.
- Keep hreflang links for id, en, and x-default.
- Keep Open Graph and Twitter/X metadata aligned with the current route.
- Use seo.ogImage only when it is a verified usable image URL; otherwise preserve the existing conditional behavior.
- Keep the favicon reference valid.
- Keep sitemap generation and robots.txt valid for the configured site URL.
- Keep LocalBusiness JSON-LD valid and based only on supplied facts.
- Emit aggregateRating only when both a verified rating and verified positive reviewCount are available. Never use reviewCount || 0 or any fabricated fallback.
- Do not claim SEO rankings, awards, service areas, or expertise that are not supported by the Business JSON.

IMAGES AND ASSETS

- Use only image URLs supplied and verified by the Business JSON, or replace them with clearly identified local assets only when the task explicitly provides those assets.
- Do not invent image URLs.
- Preserve the Hero image's stable aspect-ratio layout, eager/high-priority loading, valid alt text, and local failure fallback.
- Preserve lazy loading for below-the-fold gallery images.
- Preserve responsive sizes hints and external-image failure handling.
- Ensure every rendered image has meaningful alt text or a factual business-name fallback.
- Do not make the page depend on an unstable Google Maps or temporary image URL.
- Do not copy node_modules, dist, or .astro into a distributable project.

COMPONENT AND UI RULES

- Reuse the existing Navbar, Footer, Hero, About, Services, WhyChooseUs, Process, Testimonials, Gallery, FAQ, CTA, Container, Section, SectionHeading, and Button components.
- Do not redesign the website or change visual direction unless the Business JSON's design direction requires a narrowly scoped data-driven adjustment consistent with existing tokens.
- Do not create fixed numbers of services, testimonials, gallery images, process steps, advantages, or FAQs.
- Preserve graceful empty-data behavior.
- Keep all internal anchors valid, especially #about, #services, #why-choose-us, #process, #faq, and #contact.
- Preserve native link and button semantics, visible focus states, mobile-menu aria-expanded/aria-controls behavior, keyboard accessibility, and native FAQ keyboard behavior.
- Keep the mobile menu functional without adding a framework.
- Do not add decorative animation. Existing hover and focus states may remain.
- Avoid unnecessary JavaScript and avoid layout shifts.

IMPLEMENTATION PROCESS

1. Inspect the actual repository and confirm the schema.
2. Validate the Business JSON against that schema.
3. Make the smallest data/content and necessary asset changes.
4. Do not alter unrelated files.
5. Run npm install only if dependencies are missing or the lockfile requires it.
6. Run the project's available validation commands, at minimum:
   - npm run build
   - npm exec astro check, when the repository has the required check dependencies
7. Verify both generated routes: / and /en/.
8. Inspect generated HTML for title, description, canonical, hreflang, Open Graph, Twitter/X, favicon, JSON-LD, and html lang.
9. Check for broken imports, missing assets, empty headings, invalid links, horizontal overflow risks, and accidental fabricated content.
10. Fix only issues caused by the customization or required to keep the existing template working.

FAILURE CONDITIONS

Stop and report a blocking issue instead of guessing when:

- The Business JSON is invalid or does not match the actual schema.
- Required business facts are absent and a factual page claim cannot be written safely.
- An image URL is unstable or cannot be verified.
- A requested customization would require a new framework, backend, CMS, or unrelated architecture change.
- A build or validation failure is unrelated to the customization and cannot be fixed without broad scope.

FINAL RESPONSE FORMAT

After implementation, report only:

1. Changed files
2. Business customization completed
3. Validation commands and results
4. Any remaining missing business data or blockers
5. Deployment status: NOT DEPLOYED

Never deploy or claim that the website is production-ready solely because the build passes. A human must perform the final content and deployment review.
```
