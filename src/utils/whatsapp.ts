export function normalizeWhatsAppNumber(
  phone: string | null | undefined,
): string {
  const digits = phone?.replace(/\D/g, "") ?? "";

  if (!digits) {
    return "";
  }

  if (digits.startsWith("0")) {
    return `62${digits.slice(1)}`;
  }

  return digits;
}

export function encodeWhatsAppMessage(message: string | null | undefined): string {
  return encodeURIComponent(message ?? "");
}

export function createWhatsAppUrl(
  phone: string | null | undefined,
  message: string | null | undefined,
  fallback = "#",
): string {
  const number = normalizeWhatsAppNumber(phone);

  if (!number) {
    return fallback;
  }

  return `https://wa.me/${number}?text=${encodeWhatsAppMessage(message)}`;
}
