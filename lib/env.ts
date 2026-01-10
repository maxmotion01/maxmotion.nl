export const env = {
  NEXT_PUBLIC_BOOKING_URL: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  CONTACT_TO_ADDRESS: process.env.CONTACT_TO_ADDRESS || "",
} as const;

export function getBookingUrl(utmParams?: Record<string, string>): string | null {
  const baseUrl = env.NEXT_PUBLIC_BOOKING_URL;
  if (!baseUrl) return null;

  if (!utmParams) return baseUrl;

  const url = new URL(baseUrl);
  Object.entries(utmParams).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  return url.toString();
}
