import StandardPage from "@/components/StandardPage";
export const metadata = { title: "Contact APIN", description: "Contact APIN Public Health Initiatives." };
export default function Page(){ return <StandardPage eyebrow="Contact" title="Connect with APIN." intro="Reach APIN for partnerships, programme enquiries, careers and institutional engagement." links={[["Careers","/careers"],["About APIN","/about"],["Where we work","/where-we-work"]]}>
  <h2>Corporate headquarters</h2><p>Plot 1551, Apo Resettlement Zone E, FCT, Abuja, Nigeria.</p>
  <h2>Phone</h2><p>02092915437</p>
  <h2>Email</h2><p><a href="mailto:info@apin.org.ng">info@apin.org.ng</a></p>
</StandardPage> }