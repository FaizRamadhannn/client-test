import type { Business } from "../data/business";

export function getCanonicalUrl(
  siteUrl: string,
  slug: string = "",
): string {
  const baseUrl = siteUrl.replace(/\/+$/, "");
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");

  return normalizedSlug ? `${baseUrl}/${normalizedSlug}` : `${baseUrl}/`;
}

export function createLocalBusinessSchema(
  business: Business,
  siteUrl: string,
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.identity.name,
    description: business.identity.description,
    url: siteUrl,
  };

  if (business.contact.phone) {
    schema.telephone = business.contact.phone;
  }

  if (business.contact.email) {
    schema.email = business.contact.email;
  }

  if (
    business.location.address ||
    business.location.city ||
    business.location.province
  ) {
    schema.address = {
      "@type": "PostalAddress",
      streetAddress: business.location.address || undefined,
      addressLocality: business.location.city || undefined,
      addressRegion: business.location.province || undefined,
      addressCountry: business.location.country || "ID",
    };
  }

  if (
    typeof business.google.rating === "number" &&
    typeof business.google.reviewCount === "number" &&
    business.google.rating > 0 &&
    business.google.reviewCount > 0
  ) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: business.google.rating,
      reviewCount: business.google.reviewCount,
    };
  }

  if (business.gallery.length > 0) {
    schema.image = business.gallery
      .map((image) => image.url)
      .filter(Boolean);
  }

  return schema;
}