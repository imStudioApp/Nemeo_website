import type { Metadata } from "next";
import "./globals.css";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_ORIGIN = new URL(SITE_URL).origin;
const ASSET_ROOT = `${BASE_PATH}/assets`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Nemeo — Compress Videos, Not Memories",
  description: "Free up iPhone storage by optimizing videos and photos privately, right on your device.",
  applicationName: "Nemeo",
  keywords: ["iPhone storage", "video compression", "photo optimization", "Nemeo"],
  openGraph: { title: "Nemeo — Compress Videos, Not Memories", description: "More room for new memories. Private, on-device media optimization for iPhone.", type: "website", images: [{ url: `${BASE_PATH}/og.png`, width: 1200, height: 630, alt: "Nemeo — Compress videos, not memories." }] },
  twitter: { card: "summary_large_image", title: "Nemeo — Compress Videos, Not Memories", description: "More room for new memories. Private, on-device media optimization for iPhone.", images: [`${BASE_PATH}/og.png`] },
  icons: {
    icon: [{ url: `${ASSET_ROOT}/nemeo-favicon-full.png?v=2`, type: "image/png", sizes: "882x882" }],
    shortcut: `${ASSET_ROOT}/nemeo-favicon-full.png?v=2`,
    apple: `${ASSET_ROOT}/app-icon.png`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Nemeo", applicationCategory: "UtilitiesApplication", operatingSystem: "iOS", description: "Private, on-device video and photo optimization for iPhone.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }) }} /></body></html>;
}
