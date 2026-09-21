import type { MetadataRoute } from "next";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms", "/support", "/contact"].map((path) => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), changeFrequency: path ? "monthly" : "weekly", priority: path ? .6 : 1 }));
}
