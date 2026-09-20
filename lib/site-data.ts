export type ContentItem = {
  slug: string;
  title: string;
  excerpt: string;
  date?: string;
  category?: string;
  image?: string;
  sourceUrl?: string;
  body?: string[];
  meta?: string[];
};

export const newsItems: ContentItem[] = [
  {
    slug: "apin-25-acts-of-kindness",
    title: "APIN @ 25: Acts of Kindness That Touched Lives Across Project States",
    excerpt: "APIN marked its Silver Jubilee with outreach activities focused on service, compassion and stronger communities across project states.",
    date: "June 5, 2026",
    category: "APIN @ 25",
    sourceUrl: "https://apin.org.ng/news/",
  },
  {
    slug: "catalyst-of-wellness-book-launch",
    title: "Catalyst of Wellness Book Launch: Preserving APIN’s 25-Year Legacy",
    excerpt: "A commemorative publication documenting APIN’s milestones, partnerships, innovations and achievements over 25 years.",
    date: "June 4, 2026",
    category: "APIN @ 25",
    sourceUrl: "https://apin.org.ng/news/",
  },
  {
    slug: "25th-anniversary-gala",
    title: "Celebrating Excellence: APIN’s 25th Anniversary Gala and Award Night",
    excerpt: "A celebration recognising staff, partners and stakeholders whose work has shaped APIN’s public-health journey.",
    date: "June 4, 2026",
    category: "APIN @ 25",
    sourceUrl: "https://apin.org.ng/news/",
  },
  {
    slug: "25-years-of-impact",
    title: "25 Years of Impact: APIN Celebrates Public Health Excellence",
    excerpt: "APIN convened a commemorative symposium to reflect on 25 years of advancing public health and strengthening health systems.",
    date: "June 3, 2026",
    category: "Milestone",
    sourceUrl: "https://apin.org.ng/news/",
  },
  {
    slug: "international-womens-day-2026",
    title: "Celebrating the Women of APIN on International Women’s Day",
    excerpt: "APIN recognised women across laboratories, clinics, communities and leadership roles who continue to advance health equity.",
    date: "March 9, 2026",
    category: "People",
    sourceUrl: "https://apin.org.ng/news/",
  },
  {
    slug: "federal-engagement-nutrition-public-health",
    title: "APIN Strengthens Federal Engagement on Nutrition and Public Health Outcomes",
    excerpt: "A high-level engagement focused on stronger government leadership, aligned partnerships and better use of data.",
    date: "February 25, 2026",
    category: "Partnerships",
    sourceUrl: "https://apin.org.ng/news/",
  },
];

export const publications: ContentItem[] = [
  {
    slug: "medication-possession-ratios-virologic-failure",
    title: "High Medication Possession Ratios Associated with Greater Risk of Virologic Failure Among Youth Compared to Adults in a Nigerian Cohort",
    excerpt: "Research examining medication possession ratios and virologic failure among youth and adults in a Nigerian HIV cohort.",
    date: "April 3, 2022",
    category: "Peer-reviewed research",
    sourceUrl: "https://apin.org.ng/publications/",
  },
  {
    slug: "rifabutin-hiv-tb-coinfected-children",
    title: "Safety and efficacy of rifabutin among HIV/TB-coinfected children on lopinavir/ritonavir-based ART",
    excerpt: "A study focused on rifabutin use among HIV/TB-coinfected children receiving lopinavir/ritonavir-based treatment.",
    date: "April 3, 2022",
    category: "Peer-reviewed research",
    sourceUrl: "https://apin.org.ng/publications/",
  },
  {
    slug: "hiv-1-subtypes-treatment-outcomes",
    title: "The impact of HIV-1 subtypes on virologic and immunologic treatment outcomes at Lagos University Teaching Hospital",
    excerpt: "A longitudinal evaluation of HIV-1 subtypes and treatment outcomes at Lagos University Teaching Hospital.",
    date: "April 3, 2022",
    category: "Peer-reviewed research",
    sourceUrl: "https://apin.org.ng/publications/",
  },
  {
    slug: "mental-health-integration-hiv-programs",
    title: "Opportunities and challenges to integrating mental health into HIV programs in a low and middle-income country",
    excerpt: "Implementation-science perspectives on integrating mental-health support into HIV programming in Nigeria.",
    date: "April 3, 2022",
    category: "Implementation science",
    sourceUrl: "https://apin.org.ng/publications/",
  },
  {
    slug: "clinical-pharmacy-training-manual",
    title: "Clinical Pharmacy Training Manual for HIV Medicine",
    excerpt: "A practical training resource for pharmacy professionals supporting HIV medicine.",
    date: "January 11, 2014",
    category: "Training manual",
    sourceUrl: "https://apin.org.ng/publications/",
  },
];

export const teamMembers: ContentItem[] = [
  {
    slug: "prosper-okonkwo",
    title: "Prof. Prosper Okonkwo",
    excerpt: "Pioneer Chief Executive Officer since 2007 and Professor of Infectious Disease Epidemiology at Bingham University.",
    category: "Leadership",
  },
  {
    slug: "niyi-olaofin",
    title: "Mr. Niyi Olaofin",
    excerpt: "Deputy Chief Executive Officer, Shared Services.",
    category: "Leadership",
  },
  {
    slug: "jay-osi-samuels",
    title: "Dr. Jay Osi Samuels",
    excerpt: "Deputy Chief Executive Officer, Programs.",
    category: "Leadership",
  },
  {
    slug: "oluremi-olaitan",
    title: "Pharm. Oluremi (Remi) Olaitan",
    excerpt: "Director, Special Services.",
    category: "Leadership",
  },
  {
    slug: "ifeyinwa-onwuatuelo",
    title: "Dr. Ifeyinwa (Ify) Onwuatuelo",
    excerpt: "Coordinating Director.",
    category: "Leadership",
  },
  {
    slug: "olabanjo-ogunsola",
    title: "Dr. Olabanjo Okunlola Ogunsola",
    excerpt: "Director, Non-Communicable Diseases and New Business Development.",
    category: "Leadership",
  },
  {
    slug: "eke-ofuche",
    title: "Eke Ofuche",
    excerpt: "Director, Laboratory & Health Systems Strengthening, providing strategic leadership for laboratory systems, quality management and molecular diagnostics.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "femi-owolagba",
    title: "Femi Owolagba",
    excerpt: "Assistant Director, General Laboratory Sciences, supporting laboratory operations, quality systems and workforce capacity.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "chukwuemeka-ibilibor",
    title: "Dr. Chukwuemeka Ibilibor",
    excerpt: "Associate Director, Health Systems Strengthening, leading planning, implementation and monitoring of health-system strengthening activities.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "uche-okezie",
    title: "Pharm. Uche Okezie",
    excerpt: "Director, Strategic Information, leading health informatics and monitoring and evaluation strategy across APIN project locations.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "luke-onu",
    title: "Luke Onu",
    excerpt: "Associate Director, Human Resources & Administration, leading organisational HR strategy and administrative operations.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "plang-jwanle",
    title: "Dr. Plang Jwanle",
    excerpt: "Director, Continuum of Care, providing technical guidance for clinical services, antiretroviral therapy and TB/HIV care.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "joshua-apake",
    title: "Mr. Joshua Adi Apake",
    excerpt: "Associate Director, Finance, overseeing finance and accounting functions across APIN headquarters and regional offices.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
  {
    slug: "kamarudeen-ismaila",
    title: "Mr. Kamarudeen Ismaila",
    excerpt: "Associate Director, Grants Management, supporting APIN's grant stewardship and compliance systems.",
    category: "Leadership",
    sourceUrl: "https://apin.org.ng/our-team/",
  },
];

export const successStories: ContentItem[] = [
  {
    slug: "strengthening-ipc-governance",
    title: "Strengthening National Governance and Oversight of Infection Prevention and Control",
    excerpt: "A systems-focused response to persistent infection prevention and control implementation gaps across supported facilities.",
    date: "September 17, 2024",
    category: "Health systems",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
  {
    slug: "addressing-malnutrition-ovc",
    title: "Before Meets After: Addressing Malnutrition through the OVC Programme",
    excerpt: "How nutrition support within the Orphans and Vulnerable Children programme improved household and child outcomes.",
    date: "August 15, 2024",
    category: "Nutrition",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
  {
    slug: "community-congregational-pmtct",
    title: "Embracing New Approaches to Preventing New HIV Infections",
    excerpt: "A case study of community and congregational approaches to PMTCT services.",
    date: "May 13, 2024",
    category: "HIV prevention",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
  {
    slug: "food-insecurity-malnutrition-benue",
    title: "Ending Food Insecurity and Malnutrition in Benue State",
    excerpt: "An integrated economic-empowerment and nutrition strategy supporting children and households affected by HIV.",
    date: "March 20, 2024",
    category: "Nutrition",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
  {
    slug: "benue-helping-women-thrive",
    title: "Benue: Helping Women Thrive",
    excerpt: "Community partnerships focused on empowering women, households and local organisations.",
    date: "April 6, 2022",
    category: "Community",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
  {
    slug: "oyo-mentor-mother",
    title: "Oyo: From HIV Positive to Mentor Mother",
    excerpt: "A PMTCT story illustrating how peer support can help prevent new infant HIV infections.",
    date: "April 6, 2022",
    category: "PMTCT",
    sourceUrl: "https://apin.org.ng/apin-hosts-3rd-national-clinical-mentorship-programme-retreat/?page_id=853",
  },
];

export const events: ContentItem[] = [
  {
    slug: "annual-symposium-2024",
    title: "2nd Annual APIN Symposium",
    excerpt: "Securing Our Future: Strengthening Global Health Security in Nigeria.",
    date: "November 21, 2024",
    category: "Annual Symposium",
    image: "/assets/events/Symposium_2024_2-2.png",
    sourceUrl: "https://apin.org.ng/annual-apin-symposium/",
    body: [
      "The 2024 symposium brought together researchers, programme implementers, development partners and policy makers to examine progress in strengthening health systems for prevention, preparedness and response.",
      "The programme focused on Global Health Security and practical lessons for a safer, more resilient health system.",
    ],
  },
  {
    slug: "annual-symposium-2023",
    title: "1st Annual APIN Symposium",
    excerpt: "Integrating Non-Communicable Diseases and HIV to support longer, healthier lives for people living with HIV.",
    date: "December 6, 2023",
    category: "Annual Symposium",
    image: "/assets/events/Symposium_2024_31.png",
    sourceUrl: "https://apin.org.ng/the-inaugural-edition-of-the-1st-apin-public-health-initiatives-annual-symposium-holds-in-abuja/",
    body: [
      "APIN's inaugural symposium convened national and international public-health leaders around the integration of non-communicable diseases into HIV programming.",
      "The event created a platform for policy dialogue, implementation learning and cross-sector collaboration.",
    ],
  },
];

export const galleryItems: ContentItem[] = [
  { slug: "symposium", title: "Annual APIN Symposium", excerpt: "Public-health dialogue, speakers and stakeholder engagement.", category: "Events", image: "/assets/events/Symposium_2024_2-2.png" },
  { slug: "symposium-community", title: "Symposium in Pictures", excerpt: "Highlights from APIN's annual convening and learning platform.", category: "Events", image: "/assets/events/Symposium_2024_31.png" },
  { slug: "field-work", title: "Health Programmes in Action", excerpt: "Images representing APIN's programme delivery and community partnerships.", category: "Programmes", image: "/assets/home/Home-Page-Photo-Slide-3.jpg" },
  { slug: "partnerships", title: "People and Partnerships", excerpt: "Stakeholders and teams working together for stronger health systems.", category: "People", image: "/assets/home/Home-Page-Photo-slide-4.jpg" },
];

export const careers: ContentItem[] = [
  {
    slug: "vacancies",
    title: "Vacancies",
    excerpt: "Explore current opportunities across programmes, clinical services, laboratories, strategic information, operations and support functions.",
    category: "Careers",
    image: "/APIN-Public-Health-Initiative-Recruitment.webp",
    sourceUrl: "https://jobapplication.apin.org.ng/application/",
    body: ["APIN recruits experienced and emerging professionals across public health, programmes, laboratories, finance, administration, information technology and related disciplines.", "Open positions are managed through APIN's recruitment application portal when vacancies are available."],
  },
  {
    slug: "internships",
    title: "Internships",
    excerpt: "Opportunities for early-career professionals to gain practical experience in public health and organisational operations.",
    category: "Careers",
    sourceUrl: "https://apin.org.ng/internships-2/",
    body: ["The APIN Internship Programme is designed to help graduates transfer classroom knowledge into practical organisational experience under the guidance of experienced professionals.", "Internship and NYSC placements are subject to availability."],
  },
  {
    slug: "volunteers",
    title: "Volunteer Opportunities",
    excerpt: "Contribute time and expertise to mission-aligned public-health initiatives when suitable opportunities are available.",
    category: "Careers",
    sourceUrl: "https://apin.org.ng/volunteers/",
    body: ["The APIN Volunteer Programme provides practical professional skills and field experience through unpaid, ad-hoc opportunities when placements are available.", "Volunteer participation does not guarantee permanent employment. Interested candidates can contact APIN Human Resources for current information."],
  },
];

export function getBySlug(items: ContentItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}
