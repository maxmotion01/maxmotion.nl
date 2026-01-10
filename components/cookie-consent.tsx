"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-4 sm:pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/10 bg-gray-900/95 backdrop-blur-md p-6 shadow-2xl">
          {/* Close button */}
          <button
            onClick={declineCookies}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Sluiten"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 pr-8">
              <h3 className="text-lg font-semibold text-white">
                Cookies & Privacy
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Wij gebruiken cookies om uw ervaring te verbeteren en onze website te analyseren. 
                Door gebruik te maken van deze website gaat u akkoord met ons{" "}
                <Link 
                  href="/legal/privacy" 
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  privacybeleid
                </Link>
                {" "}en{" "}
                <Link 
                  href="/legal/terms" 
                  className="text-primary underline hover:text-primary/80 transition-colors"
                >
                  algemene voorwaarden
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-shrink-0">
              <Button
                onClick={declineCookies}
                variant="secondary"
                size="sm"
                className="whitespace-nowrap"
              >
                Alleen noodzakelijk
              </Button>
              <Button
                onClick={acceptCookies}
                size="sm"
                className="whitespace-nowrap bg-primary hover:bg-primary/90"
              >
                Alles accepteren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
