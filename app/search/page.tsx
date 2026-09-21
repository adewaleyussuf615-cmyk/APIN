"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { careers, events, galleryItems, newsItems, publications, successStories, teamMembers } from "@/lib/site-data";

const groups = [
  ["News", "/news", newsItems],
  ["Publications", "/publications", publications],
  ["Team", "/team", teamMembers],
  ["Success stories", "/success-stories", successStories],
  ["Events", "/events", events],
  ["Gallery", "/gallery", galleryItems],
  ["Careers", "/careers", careers],
] as const;

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return groups.flatMap(([group, basePath, items]) =>
      items
        .filter((item) => [item.title, item.excerpt, item.category, item.date].filter(Boolean).join(" ").toLowerCase().includes(normalized))
        .map((item) => ({ ...item, group, href: `${basePath}/${item.slug}` }))
    );
  }, [query]);

  return (
    <main className="inner-page">
      <header className="inner-header">
        <a className="brand" href="/">
          <Image className="brand-logo" src="/APIN-PUBLIC-HEALTH-INITIATIVES-Logo.webp" alt="APIN Public Health Initiatives" width={210} height={210} priority />
        </a>
        <a className="underlined-link" href="/">Back to home <ArrowUpRight size={15} /></a>
      </header>

      <section className="inner-hero">
        <p className="eyebrow">Search APIN</p>
        <h1>Find news, research, people and programmes.</h1>
        <p className="inner-intro">Search the content currently available in the redesigned APIN site.</p>
      </section>

      <section className="site-search-wrap">
        <label className="site-search-box">
          <Search size={21} aria-hidden="true" />
          <span className="sr-only">Search APIN content</span>
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “HIV”, “symposium”, “nutrition” or a person’s name…" />
        </label>

        {!query.trim() ? (
          <div className="search-prompt">
            <p>Search across News, Publications, Team, Success Stories, Events, Gallery and Careers.</p>
          </div>
        ) : results.length ? (
          <div className="search-results">
            <p className="collection-count">{results.length} {results.length === 1 ? "result" : "results"}</p>
            {results.map((item) => (
              <article className="search-result" key={item.href}>
                <div>
                  <span className="search-result-group">{item.group}{item.category ? ` · ${item.category}` : ""}</span>
                  <h2><a href={item.href}>{item.title}</a></h2>
                  <p>{item.excerpt}</p>
                </div>
                <a className="round-arrow" href={item.href} aria-label={`Open ${item.title}`}><ArrowUpRight size={17} /></a>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p className="eyebrow">No matches</p>
            <h2>Try a broader search term.</h2>
          </div>
        )}
      </section>
    </main>
  );
}
