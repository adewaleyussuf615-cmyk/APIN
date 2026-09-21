import StandardPage from "@/components/StandardPage";
export const metadata = { title: "About APIN", description: "Learn about APIN Public Health Initiatives, its history, mission, values and public-health approach." };
export default function Page(){ return <StandardPage eyebrow="About APIN" title="A Nigerian institution built for public health." intro="APIN combines technical expertise, local partnerships and long-term programme experience to strengthen health systems and improve outcomes. " links={[["Our team","/team"],["Our expertise","/expertise"],["Where we work","/where-we-work"]]}>
  <h2>Who we are</h2><p>APIN Public Health Initiatives is a Nigerian non-governmental organisation working across public-health programmes, health systems, research, laboratories, strategic information and community services.</p>
  <h2>Our journey</h2><p>The organisation grew from early HIV/AIDS research and prevention work into an independent Nigerian institution with broad implementation and technical-assistance capacity.</p>
  <h2>Mission</h2><p>To leverage people, technology and other resources to deliver high-quality, innovative and equity-oriented health interventions.</p>
  <h2>Vision</h2><p>To be a leading development organisation committed to improving health in Nigeria and beyond.</p>
  <h2>How we work</h2><p>APIN works with government, communities, health facilities, development partners and civil-society organisations to build durable systems rather than isolated projects.</p>
</StandardPage> }