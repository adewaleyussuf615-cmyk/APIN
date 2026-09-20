import StandardPage from "@/components/StandardPage";
export const metadata = { title: "HIV/AIDS Programme", description: "APIN's HIV prevention, care, treatment and health-system support work." };
export default function Page(){ return <StandardPage eyebrow="HIV/AIDS programme" title="Strengthening prevention, care and treatment." intro="APIN has supported Nigeria's HIV response through clinical services, community systems, laboratories, data, supply chains and workforce development." links={[["Success stories","/success-stories"],["Our expertise","/expertise"],["Where we work","/where-we-work"]]}>
  <h2>Integrated service delivery</h2><p>APIN's HIV work brings together prevention, testing, treatment, viral-load monitoring, PMTCT, TB/HIV integration and community support.</p>
  <h2>Health systems</h2><p>Programme delivery is reinforced by laboratory strengthening, electronic records, logistics, commodity management, workforce training and quality-improvement systems.</p>
  <h2>Community partnerships</h2><p>Community organisations and peer networks help improve access, adherence, continuity of care and support for vulnerable households.</p>
</StandardPage> }