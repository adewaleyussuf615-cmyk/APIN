import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APIN Public Health Initiatives",
  description: "Building stronger health systems. Delivering better health outcomes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}