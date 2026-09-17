# Master Template V1 Validation

Validation target: the reusable Astro template architecture, not a deployed client site.

## Scenario Matrix

| Scenario | Data contract | ID route | EN route | Dynamic collections | Result |
| --- | --- | --- | --- | --- | --- |
| LPK | Uses the shared `Business` contract | `/` | `/en/` | Services, process, FAQs, testimonials, gallery, and advantages are data-driven | PASS |
| CV / small company | Uses the shared `Business` contract | `/` | `/en/` | Same components accept company-specific data and optional fields | PASS |
| Generic local service business | Uses the shared `Business` contract | `/` | `/en/` | Same components accept service-specific data, imagery, contact, and positioning | PASS |

## Verified Checks

- `npm install` completed successfully.
- `npm exec astro check` completed with zero errors.
- `npm run build` generated `/` and `/en/` successfully.
- Navigation anchors resolve, including `#why-choose-us`.
- Indonesian and English routes render with `lang="id"` and `lang="en"`.
- Canonical URLs, hreflang, Open Graph, Twitter/X metadata, sitemap, robots.txt, favicon, and LocalBusiness JSON-LD are generated.
- `aggregateRating` is omitted when verified rating and review-count data are unavailable.
- WhatsApp links use the shared utility and missing numbers fall back without producing a broken `wa.me/` URL.
- Hero and gallery image fallbacks preserve their layout when images are unavailable.
- Responsive checks pass at 320px, 375px, 390px, 768px, 1024px, and 1280px.
- No horizontal overflow, empty headings, or missing image alt text were found in the empty-data template state.
- `node_modules/`, `dist/`, and `.astro/` are excluded from the distributable project.

## Template Status

`MASTER TEMPLATE V1 = READY`

Before a client deployment, replace the placeholder business data and configure the production site URL. This status does not mean a client site is deployed or that placeholder data may ship unchanged.