export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, properties);
  }

  console.log("[Analytics]", eventName, properties);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
