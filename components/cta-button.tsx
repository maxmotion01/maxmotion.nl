"use client";

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBookingUrl } from "@/lib/env";
import { trackEvent } from "@/lib/analytics";

interface CTAButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
  source?: string;
}

export function CTAButton({
  variant = "primary",
  size = "default",
  className,
  source = "unknown",
}: CTAButtonProps) {
  const bookingUrl = getBookingUrl({
    utm_source: "site",
    utm_medium: "cta",
    utm_campaign: "book_a_meeting",
  });

  const handleClick = () => {
    trackEvent("cta_clicked", {
      source,
      destination: bookingUrl || "contact_fallback",
    });

    if (bookingUrl) {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = "/contact";
    }
  };

  if (!bookingUrl) {
    return (
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={() => {
          trackEvent("cta_clicked_fallback", { source });
          window.location.href = "/contact";
        }}
      >
        Neem contact op
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      aria-label="Plan een meeting in Microsoft Outlook/Bookings"
    >
      Plan een meeting
      <ExternalLink className="h-4 w-4" />
    </Button>
  );
}
