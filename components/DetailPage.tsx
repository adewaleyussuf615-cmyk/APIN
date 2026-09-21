import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type { ContentItem } from "@/lib/site-data";

export default function DetailPage({ item, backHref, backLabel }: { item: ContentItem; backHref: string; backLabel: string }) {
  return (
    <main className="inner-page">
      <header className="inner-header">
        <a className="brand" href="/">
          <Image className="brand-logo" src="/APIN-PUBLIC-HEALTH-INITIATIVES-Logo.webp" alt="APIN Public Health Initiatives" width={210} height={210} priority />
        </a>
        <a className="underlined-link" href={backHref}>{backLabel} <ArrowUpRight size={15} /></a>
      </header>
      <section className="detail-hero">
        <div>
          <p className="eyebrow">{item.category || "APIN"}</p>
          <h1>{item.title}</h1>
          <p className="inner-intro">{item.excerpt}</p>
          {item.date ? <p className="detail-date">{item.date}</p> : null}
        </div>
        {item.image ? <div className="detail-image"><Image src={item.image} alt="" fill sizes="(max-width:760px) 100vw, 50vw" priority /></div> : null}
      </section>
      <section className="detail-body">
        {(item.body?.length ? item.body : [item.excerpt]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="detail-actions">
          {item.downloadUrl?.startsWith("/") ? <a className="red-button" href={item.downloadUrl}>Download resource <ArrowUpRight size={16} /></a> : null}
        </div>
      </section>
      <footer className="inner-footer"><a href={backHref}><ArrowLeft size={16} /> {backLabel}</a><span>APIN Public Health Initiatives</span></footer>
    </main>
  );
}
