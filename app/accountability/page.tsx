import StandardPage from "@/components/StandardPage";
export const metadata = { title: "Accountability & Governance", description: "Governance, stewardship and accountability at APIN Public Health Initiatives." };
export default function Page(){ return <StandardPage eyebrow="Accountability & governance" title="Responsible leadership. Transparent delivery." intro="Strong governance supports sustainable public-health programmes, trusted partnerships and responsible stewardship." links={[["Our team","/team"],["About APIN","/about"],["Contact","/contact"]]}>
  <h2>Governance</h2><p>APIN's governance structure provides strategic oversight, institutional direction and accountability for organisational performance.</p>
  <h2>Stewardship</h2><p>Financial, programme and operational systems are designed to support donor compliance, responsible resource use and high-quality implementation.</p>
  <h2>Learning and accountability</h2><p>Monitoring, evaluation, audit, strategic information and programme review help APIN learn from implementation and improve decision-making.</p>
</StandardPage> }