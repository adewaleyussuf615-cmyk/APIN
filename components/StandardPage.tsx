import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

type LinkItem = [string, string];

export default function StandardPage({
  eyebrow,
  title,
  intro,
  children,
  links = [],
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  links?: LinkItem[];
}) {
  return (
    <main className="inner-page">
      <header className="inner-header">
        <a className="brand" href="/">
          <Image className="brand-logo" src="/APIN-PUBLIC-HEALTH-INITIATIVES-Logo.webp" alt="APIN Public Health Initiatives" width={210} height={210} priority />
        </a>
        <a className="underlined-link" href="/">Back to home <ArrowUpRight size={15} /></a>
      </header>

      <section className="inner-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="inner-intro">{intro}</p>
      </section>

      <section className="standalone-content">
        <div className="standalone-main">{children}</div>
        {links.length ? (
          <aside className="inner-links" aria-label="Related pages">
            {links.map(([label, href]) => (
              <a href={href} key={href}>{label}<ArrowUpRight size={17} /></a>
            ))}
          </aside>
        ) : null}
      </section>

      <footer className="inner-footer">
        <a href="/"><ArrowLeft size={16} /> APIN Public Health Initiatives</a>
        <span>Abuja · Lagos · Across Nigeria</span>
      </footer>
    </main>
  );
}
