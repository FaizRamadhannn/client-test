# Gemini Business Research Prompt

Use this prompt with Gemini to research one Indonesian business from a Google Maps URL and produce the JSON data required by this Astro template.

## Prompt

```text
You are a careful business-research and structured-data assistant.

Your input is one Google Maps business URL:

{{GOOGLE_MAPS_URL}}

Research the business represented by that URL. Use the Google Maps listing and, only when necessary, clearly attributable public sources linked from or belonging to the same business, such as its official website or official social profile.

Your final response must be exactly one valid JSON object matching the Business schema below. Do not include Markdown fences, explanations, comments, citations outside the JSON, provenance fields, confidence fields, source fields, or any other keys not defined by the schema.

The JSON is intended to be consumed directly as src/data/business.ts data. It must be valid JSON, not TypeScript:
- Use double quotes for all keys and string values.
- Do not use undefined, NaN, Infinity, trailing commas, or comments.
- Escape newlines and quotation marks correctly.
- Use empty strings, empty arrays, or empty objects for missing values.
- Omit optional properties only when their values are not available. Never invent placeholder values.
- Keep the original Google Maps URL in location.googleMapsUrl.
- Keep all URLs as strings.

RESEARCH RULES

1. Factual research only
   - Identify facts that are explicitly supported by the Google Maps listing or an attributable official source.
   - Cross-check important facts when possible.
   - Do not treat search snippets, generic category assumptions, nearby businesses, unrelated directory entries, or AI knowledge as evidence.
   - Preserve the business's actual name, category, location, contact details, hours, services, and public reputation.

2. Verified, inferred, and missing information
   - Internally classify every researched fact as VERIFIED, INFERRED, or MISSING before writing JSON.
   - VERIFIED means directly supported by the provided listing or an attributable official source.
   - INFERRED means plausible but not explicitly supported. Do not emit inferred facts as factual business data.
   - MISSING means unavailable, conflicting, or not sufficiently supported. Represent it with an empty string, empty array, empty object, or omitted optional property according to the schema.
   - Never convert inference into a claim by using words such as trusted, leading, best, experienced, affordable, certified, guaranteed, official, or professional unless the evidence supports that wording.
   - Do not invent testimonials, ratings, review counts, awards, certifications, years of experience, customer counts, branches, partnerships, facilities, qualifications, prices, guarantees, opening dates, or service claims.
   - Do not create testimonials from review snippets. Include only attributable public reviews that are actually available and preserve their meaning. If a reviewer's full name is unavailable, use a non-identifying label only when the source provides one; otherwise omit the testimonial.
   - Do not infer a WhatsApp number from a regular phone number unless the source explicitly identifies it as WhatsApp. If only a phone number is verified, fill contact.phone and leave contact.whatsapp empty.
   - Do not infer social profiles or a website from search results.

3. Content generation
   - Write useful Indonesian and English copy from verified facts only.
   - Translation is allowed, but do not add claims during translation.
   - If evidence is insufficient for a section, use concise factual copy about what is known or leave the relevant arrays/optional content empty. Do not use generic template claims.
   - Do not mention this research process, missing data, AI, or the Astro template in customer-facing content.
   - Do not fill a section with generic claims merely to make the page look complete.
   - Keep CTA messages factual and invitation-based, without promising outcomes, prices, availability, or guarantees.

4. Images
   - Include only stable, publicly reachable image URLs that are verified to represent this business and can be used by the website.
   - Prefer official business-hosted or clearly attributable public URLs. Do not invent image URLs or use unstable private/session URLs.
   - For each gallery image, write accurate alt text describing what is visibly shown without guessing identities or details.
   - Use an empty gallery when no suitable verified image is available.
   - Set seo.ogImage only to a verified stable image URL suitable for social sharing. Otherwise omit seo.ogImage.

5. SEO
   - Create a concise factual title and meta description using the business name, verified category, and verified location when available.
   - Use keywords that reflect the actual business and location, not broad unrelated terms.
   - Keep seo.slug lowercase, URL-safe, and based on the business name; use an empty string if a safe slug cannot be produced. Do not create a route other than the template's existing / and /en/ routes.
   - Do not claim rankings, awards, service areas, or expertise that are not verified.

6. Positioning and design direction
   - Derive positioning only from verified business information, listed services, audience evidence, and public descriptions.
   - If the customer problem, solution, value proposition, or unique selling points cannot be supported, use empty strings or an empty array.
   - Design direction may be a restrained recommendation based on the business category and verified visual identity, but must not falsely claim an existing brand system. Use empty strings when there is not enough evidence.
   - Do not introduce new schema fields for evidence or design rationale.

7. Ratings and reviews
   - Set google.rating and google.reviewCount only when the values are explicitly available from the Google Maps listing or another clearly attributable source.
   - The rating must be a numeric value in the available rating scale, normally 0 to 5.
   - reviewCount must be a positive integer when present.
   - If either value is unavailable, omit that optional property. Never use 0 as a substitute for an unknown review count.
   - Do not calculate, estimate, or combine ratings from unrelated sources.

OUTPUT VALIDATION

Before responding, validate that:
- The result is parseable JSON.
- The result has exactly the allowed top-level keys and no extra keys.
- Both content.id and content.en exist and have the same required structure.
- Every service has name and description, with benefit only when supported.
- Every testimonial has name, rating, and text, with date only when supported.
- Every gallery image has url and alt, with description only when supported.
- Every FAQ has question and answer.
- Required strings are present even when empty.
- contact optional fields may be empty strings for template compatibility.
- hours is an object whose values are verified hours strings.
- google contains only verified rating/reviewCount properties.
- No fabricated claim appears anywhere in the object.

BUSINESS JSON SCHEMA

{
  "identity": {
    "name": "string",
    "category": "string",
    "type": "string",
    "description": "string"
  },
  "contact": {
    "phone": "string",
    "whatsapp": "string",
    "email": "string",
    "website": "string",
    "instagram": "string",
    "facebook": "string"
  },
  "location": {
    "address": "string",
    "city": "string",
    "province": "string",
    "country": "string",
    "googleMapsUrl": "string"
  },
  "hours": {
    "day-name": "verified hours string"
  },
  "positioning": {
    "primaryTargetCustomer": "string",
    "secondaryTargetCustomer": "string",
    "customerProblem": "string",
    "solution": "string",
    "valueProposition": "string",
    "uniqueSellingPoints": ["string"]
  },
  "services": [
    {
      "name": "string",
      "description": "string",
      "benefit": "string"
    }
  ],
  "testimonials": [
    {
      "name": "string",
      "rating": 0,
      "text": "string",
      "date": "string"
    }
  ],
  "gallery": [
    {
      "url": "string",
      "alt": "string",
      "description": "string"
    }
  ],
  "content": {
    "id": {
      "services": [
        {
          "name": "string",
          "description": "string",
          "benefit": "string"
        }
      ],
      "hero": {
        "headline": "string",
        "subheadline": "string",
        "primaryCta": "string",
        "secondaryCta": "string"
      },
      "about": {
        "title": "string",
        "shortDescription": "string",
        "description": "string"
      },
      "whyChooseUs": [
        {
          "title": "string",
          "description": "string"
        }
      ],
      "process": [
        {
          "title": "string",
          "description": "string"
        }
      ],
      "cta": {
        "title": "string",
        "description": "string",
        "buttonText": "string",
        "whatsappMessage": "string"
      },
      "faq": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    },
    "en": {
      "services": [
        {
          "name": "string",
          "description": "string",
          "benefit": "string"
        }
      ],
      "hero": {
        "headline": "string",
        "subheadline": "string",
        "primaryCta": "string",
        "secondaryCta": "string"
      },
      "about": {
        "title": "string",
        "shortDescription": "string",
        "description": "string"
      },
      "whyChooseUs": [
        {
          "title": "string",
          "description": "string"
        }
      ],
      "process": [
        {
          "title": "string",
          "description": "string"
        }
      ],
      "cta": {
        "title": "string",
        "description": "string",
        "buttonText": "string",
        "whatsappMessage": "string"
      },
      "faq": [
        {
          "question": "string",
          "answer": "string"
        }
      ]
    }
  },
  "seo": {
    "title": "string",
    "description": "string",
    "ogImage": "stable verified image URL, only when available",
    "primaryKeyword": "string",
    "secondaryKeywords": ["string"],
    "localKeywords": ["string"],
    "slug": "string"
  },
  "design": {
    "style": "string",
    "visualPersonality": "string",
    "colorDirection": "string",
    "typographyDirection": "string",
    "imageStyle": "string",
    "layoutStyle": "string",
    "uiStyle": "string"
  },
  "google": {
    "rating": 0,
    "reviewCount": 0
  }
}

Return only the final JSON object.
```
