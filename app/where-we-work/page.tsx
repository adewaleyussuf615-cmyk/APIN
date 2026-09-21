import StandardPage from "@/components/StandardPage";
export const metadata = { title: "Where We Work", description: "APIN works across Nigeria through government, facilities, communities and partners." };
const states=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara","Federal Capital Territory"];
export default function Page(){ return <StandardPage eyebrow="Where we work" title="Local knowledge. National reach." intro="APIN's work is delivered through national institutions, state systems, health facilities and community partnerships across Nigeria." links={[["Our expertise","/expertise"],["Impact","/impact"],["Success stories","/success-stories"]]}>
  <h2>Nationwide reach</h2><p>Programmes are adapted to local needs while aligning with national policy, evidence and public-health priorities.</p>
  <div className="state-grid">{states.map(s=><span key={s}>{s}</span>)}</div>
</StandardPage> }