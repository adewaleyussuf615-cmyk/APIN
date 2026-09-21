import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "APIN Public Health Initiatives",
    template: "%s | APIN Public Health Initiatives",
  },
  description: "Building stronger health systems and delivering better health outcomes across Nigeria and beyond.",
  openGraph: {
    type: "website",
    siteName: "APIN Public Health Initiatives",
    title: "APIN Public Health Initiatives",
    description: "Building stronger health systems and delivering better health outcomes across Nigeria and beyond.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "APIN Public Health Initiatives",
    description: "Building stronger health systems and delivering better health outcomes across Nigeria and beyond.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}