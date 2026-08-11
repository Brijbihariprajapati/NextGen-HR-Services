export type Industry = {
  id: string;
  title: string;
  tone: string;
};

export const industries: Industry[] = [
  { id: "technology", title: "Technology & IT", tone: "blue" },
  { id: "manufacturing", title: "Manufacturing & Engineering", tone: "slate" },
  { id: "bfsi", title: "BFSI & Fintech", tone: "teal" },
  { id: "healthcare", title: "Healthcare & Life Sciences", tone: "rose" },
  { id: "retail", title: "Retail & E-commerce", tone: "amber" },
  { id: "logistics", title: "Logistics & Supply Chain", tone: "indigo" },
  { id: "energy", title: "Energy & Infrastructure", tone: "orange" },
  { id: "professional", title: "Professional Services", tone: "violet" },
];
