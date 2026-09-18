export type ImpactStat = {
  value: string;
  label: string;
  period: string;
  geography: string;
  source: string;
};

export const impactStats: ImpactStat[] = [
  { value: "13,555,085+", label: "persons tested for HIV since 2018", period: "Since 2018", geography: "Nigeria", source: "APIN homepage export" },
  { value: "315,182+", label: "people living with HIV supported", period: "PEPFAR programme", geography: "Nigeria", source: "APIN homepage export" },
  { value: "12,546+", label: "persons treated for tuberculosis", period: "Across 8 states", geography: "Nigeria", source: "APIN homepage export" },
  { value: "500+", label: "health centres and clinics supported", period: "Programme history", geography: "Nigeria", source: "APIN HIV/AIDS page export" },
];

export const capabilities = [
  { number: "01", title: "Community Directed Interventions", description: "Social support systems for HIV/AIDS, SRH and MNCH programmes through communities and government." },
  { number: "02", title: "Clinical Laboratory Infrastructure", description: "Quality diagnostic infrastructure, point-of-care devices and laboratory equipment systems." },
  { number: "03", title: "Health Management Information Systems", description: "Electronic medical records and clinical decision support across hundreds of HIV clinics." },
  { number: "04", title: "Training & Capacity Building", description: "Practical training, professional development and locally led workforce capacity." },
  { number: "05", title: "Technical Assistance", description: "Service delivery assessment, SOP development, testing, linkage, advocacy, care and treatment." },
  { number: "06", title: "Research, Monitoring & Evaluation", description: "Implementation evidence, peer-reviewed research and strategic information for better decisions." },
];

export const navItems = [
  ["About APIN", "/about"],
  ["Where we work", "/where-we-work"],
  ["HIV/AIDS", "/hiv-aids"],
];