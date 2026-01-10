import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Max Motion | AI Oplossingen, Trainingen & Advies voor Bedrijven",
    template: "%s | Max Motion",
  },
  description: "Max Motion helpt organisaties met AI automatisering, ChatGPT & Copilot trainingen, AI advies en implementatie. Ontdek wat AI voor jouw bedrijf kan betekenen.",
  keywords: ["AI", "kunstmatige intelligentie", "ChatGPT", "Microsoft Copilot", "Google Gemini", "AI training", "AI advies", "AI automatisering", "AI implementatie", "Nederland"],
  authors: [{ name: "Max Motion" }],
  creator: "Max Motion",
  publisher: "Max Motion",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://maxmotion.nl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://maxmotion.nl",
    siteName: "Max Motion",
    title: "Max Motion | AI Oplossingen, Trainingen & Advies voor Bedrijven",
    description: "Max Motion helpt organisaties met AI automatisering, ChatGPT & Copilot trainingen, AI advies en implementatie.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Max Motion - AI Oplossingen voor Bedrijven",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Motion | AI Oplossingen voor Bedrijven",
    description: "AI automatisering, trainingen en advies voor organisaties.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
