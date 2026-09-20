import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ContentItem } from "@/lib/site-data";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ContentItem[];
  basePath: string;
};

export default function CollectionPage({ eyebrow, title, intro, items, basePath }: Props) {
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
      <section className="collection-grid">
        {items.map((item) => (
          <article className="collection-card" key={item.slug}>
            {item.image ? (
              <a className="collection-image" href={`${basePath}/${item.slug}`} aria-label={item.title}>
                <Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
              </a>
            ) : null}
            <div className="collection-card-body">
              <div className="collection-meta">
                {item.category ? <span>{item.category}</span> : null}
                {item.date ? <span>{item.date}</span> : null}
              </div>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
              <a className="underlined-link" href={`${basePath}/${item.slug}`}>Explore <ArrowUpRight size={15} /></a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
