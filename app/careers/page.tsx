import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Careers",
  description: "Career, internship and volunteer opportunities at APIN Public Health Initiatives.",
};

const opportunities = [
  {
    title: "Vacancies",
    eyebrow: "Experienced professionals",
    image: "/assets/careers/vacancies.webp",
    href: "/careers/vacancies",
    description:
      "Explore opportunities across public health programmes, laboratories, strategic information, finance, operations, administration and other specialist teams.",
  },
  {
    title: "Internships",
    eyebrow: "Early-career opportunities",
    image: "/assets/careers/internships.webp",
    href: "/careers/internships",
    description:
      "Build practical experience alongside experienced professionals while translating academic knowledge into real organisational and public-health work.",
  },
  {
    title: "Volunteer Opportunities",
    eyebrow: "Contribute your skills",
    image: "/assets/careers/volunteers.webp",
    href: "/careers/volunteers",
    description:
      "Contribute your time and expertise to mission-aligned work and gain exposure to APIN's people, programmes and public-health environment.",
  },
];

export default function CareersPage() {
  return (
    <main className="careers-page">
      <header className="inner-header">
        <a className="brand" href="/">
          <Image
            className="brand-logo"
            src="/APIN-PUBLIC-HEALTH-INITIATIVES-Logo.webp"
            alt="APIN Public Health Initiatives"
            width={210}
            height={210}
            priority
          />
        </a>
        <a className="underlined-link" href="/">
          Back to home <ArrowUpRight size={15} />
        </a>
      </header>

      <section className="careers-hero">
        <div>
          <p className="eyebrow">Careers at APIN</p>
          <h1>
            Do work that
            <br />
            <em>improves health.</em>
          </h1>
          <p>
            APIN brings together people across programmes, laboratories, data,
            research, finance, operations and community health. Explore ways to
            build your career while contributing to stronger health systems.
          </p>
        </div>
        <div className="careers-hero-image">
          <Image
            src="/assets/careers/vacancies.webp"
            alt="APIN team members collaborating at work"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="career-opportunity-list">
        {opportunities.map((item, index) => (
          <article className="career-opportunity" key={item.href}>
            <div className="career-opportunity-image">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
            <div className="career-opportunity-copy">
              <span className="section-kicker">0{index + 1} / {item.eyebrow}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a className="red-button" href={item.href}>
                Learn more <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="careers-cta">
        <p className="eyebrow">Build with APIN</p>
        <h2>Expertise matters. So does purpose.</h2>
        <p>
          Explore opportunities to contribute to programmes that strengthen
          health services, institutions and communities.
        </p>
        <a className="underlined-link" href="/contact">
          Contact APIN <ArrowUpRight size={16} />
        </a>
      </section>
    </main>
  );
}
