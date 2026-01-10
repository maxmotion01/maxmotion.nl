import { NextRequest, NextResponse } from "next/server";
import { getBookingUrl } from "@/lib/env";
import { trackEvent } from "@/lib/analytics";

export async function GET(request: NextRequest) {
  const bookingUrl = getBookingUrl({
    utm_source: "site",
    utm_medium: "redirect",
    utm_campaign: "book_route",
  });

  trackEvent("book_redirect_accessed", {
    hasBookingUrl: !!bookingUrl,
    userAgent: request.headers.get("user-agent"),
  });

  if (bookingUrl) {
    return NextResponse.redirect(bookingUrl, 307);
  }

  return NextResponse.redirect(new URL("/contact", request.url), 307);
}
