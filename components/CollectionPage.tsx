"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { ContentItem } from "@/lib/site-data";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  items: ContentItem[];
  basePath: string;
};

export default function CollectionPage({ eyebrow, title, intro, items, basePath }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(items.map((item) => item.category).filter(Boolean) as string[]))],
    [items]
  );

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const searchable = [item.title, item.excerpt, item.category, item.date].filter(Boolean).join(" ").toLowerCase();
      return matchesCategory && (!normalized || searchable.includes(normalized));
    });
  }, [items, query, category]);

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

      <section className="collection-tools" aria-label="Filter content">
        <label className="collection-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search this section</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this section…" />
        </label>
        {categories.length > 2 ? (
          <label className="collection-filter">
            <span className="sr-only">Filter by category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        ) : null}
        <span className="collection-count">{filteredItems.length} {filteredItems.length === 1 ? "result" : "results"}</span>
      </section>

      {filteredItems.length ? (
        <section className="collection-grid">
          {filteredItems.map((item) => (
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
      ) : (
        <section className="empty-state">
          <p className="eyebrow">No matches</p>
          <h2>Try a different search or category.</h2>
          <button type="button" className="red-button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button>
        </section>
      )}
    </main>
  );
}
