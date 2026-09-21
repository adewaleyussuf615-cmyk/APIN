import StandardPage from "@/components/StandardPage"; import { impactStats } from "@/lib/content";
export const metadata = { title: "Our Impact", description: "Explore APIN's public-health reach and programme results." };
export default function Page(){ return <StandardPage eyebrow="Our impact" title="Evidence that moves health forward." intro="APIN measures progress across testing, treatment, health-system support and community delivery." links={[["Success stories","/success-stories"],["Where we work","/where-we-work"],["Publications","/publications"]]}>
  <div className="impact-page-grid">{impactStats.map((s)=><article key={s.label}><strong>{s.value}</strong><h2>{s.label}</h2><p>{s.period} · {s.geography}</p></article>)}</div>
  <h2>Beyond the numbers</h2><p>Impact is not only scale. It also includes stronger systems, better-trained health workers, more resilient supply chains, better use of data and communities that can sustain gains over time.</p>
</StandardPage> }