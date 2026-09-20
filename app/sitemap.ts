import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/timeline",
  "/mission-vision-values",
  "/expertise",
  "/our-team",
  "/where-we-work",
  "/success-stories",
  "/hiv-aids",
  "/careers",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}