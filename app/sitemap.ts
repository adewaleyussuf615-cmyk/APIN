import type { MetadataRoute } from "next";
import { careers, events, galleryItems, newsItems, publications, successStories, teamMembers } from "@/lib/site-data";

const staticRoutes = [
  "",
  "/about",
  "/timeline",
  "/mission-vision-values",
  "/expertise",
  "/our-team",
  "/team",
  "/where-we-work",
  "/success-stories",
  "/hiv-aids",
  "/impact",
  "/publications",
  "/news",
  "/events",
  "/gallery",
  "/careers",
  "/contact",
  "/accountability",
  "/search",
];

const dynamicRoutes = [
  ...newsItems.map(({ slug }) => `/news/${slug}`),
  ...publications.map(({ slug }) => `/publications/${slug}`),
  ...teamMembers.map(({ slug }) => `/team/${slug}`),
  ...successStories.map(({ slug }) => `/success-stories/${slug}`),
  ...events.map(({ slug }) => `/events/${slug}`),
  ...galleryItems.map(({ slug }) => `/gallery/${slug}`),
  ...careers.map(({ slug }) => `/careers/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date();

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.6,
  }));
}