export type ServiceItem = {
  id: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    id: "it-recruitment",
    title: "IT Recruitment",
    description:
      "Specialized hiring for software, infrastructure, product, and digital roles across experience levels.",
  },
  {
    id: "non-it-recruitment",
    title: "Non-IT Recruitment",
    description:
      "Talent sourcing for sales, operations, finance, HR, and other professional business functions.",
  },
  {
    id: "manufacturing-recruitment",
    title: "Manufacturing Recruitment",
    description:
      "Plant, production, quality, and supply-chain hiring tailored to manufacturing environments.",
  },
  {
    id: "permanent-hiring",
    title: "Permanent Hiring",
    description:
      "End-to-end permanent placement with role mapping, screening, and offer closure support.",
  },
  {
    id: "contract-staffing",
    title: "Contract Staffing",
    description:
      "Flexible contract talent for project spikes, seasonal demand, and specialized short-term needs.",
  },
  {
    id: "c2h-hiring",
    title: "C2H Hiring",
    description:
      "Contract-to-hire models that reduce risk while helping teams validate fit before conversion.",
  },
  {
    id: "bulk-hiring",
    title: "Bulk Hiring",
    description:
      "High-volume recruitment programs with structured screening and predictable delivery timelines.",
  },
  {
    id: "executive-search",
    title: "Executive Search",
    description:
      "Confidential leadership search for senior and strategic roles that shape business direction.",
  },
  {
    id: "rpo-support",
    title: "RPO / Recruitment Support",
    description:
      "Embedded recruitment process outsourcing and scalable hiring support for growing teams.",
  },
];
