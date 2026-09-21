import StandardPage from "@/components/StandardPage";
export const metadata = { title: "Mission, Vision & Values", description: "APIN's mission, vision and guiding principles." };
export default function Page(){ return <StandardPage eyebrow="Mission, vision & values" title="Health interventions designed to last." intro="APIN's institutional direction combines technical quality, equity, innovation and partnership." links={[["Our story","/timeline"],["Our expertise","/expertise"],["Our team","/team"]]}>
  <h2>Mission</h2><p>To leverage people, technology and other resources to deliver high-quality, innovative and equity-oriented health interventions.</p>
  <h2>Vision</h2><p>To be a leading development organisation committed to improving health in Nigeria and beyond.</p>
  <h2>Guiding principles</h2><p>APIN's work is shaped by service, partnership, innovation, accountability, respect for evidence and a commitment to stronger local systems.</p>
</StandardPage> }