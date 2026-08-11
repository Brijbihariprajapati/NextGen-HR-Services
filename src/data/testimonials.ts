export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "NextGen understood our hiring bar from the first call. Every shortlist was relevant, and closures happened faster than we expected.",
    name: "Rohit Sharma",
    role: "Head of Talent, Technology Company",
  },
  {
    id: "t2",
    quote:
      "Their consultants stayed close through the entire process — from role scoping to offer negotiation. It felt like an extension of our own team.",
    name: "Ananya Verma",
    role: "HR Director, Manufacturing Group",
  },
  {
    id: "t3",
    quote:
      "We used NextGen for a bulk hiring drive and the structure they brought to screening saved us weeks of internal effort.",
    name: "Karan Mehta",
    role: "Operations Lead, BPO & Shared Services",
  },
  {
    id: "t4",
    quote:
      "Professional, responsive, and honest about timelines. Exactly what you want from a recruitment partner.",
    name: "Priya Nair",
    role: "Founder, Professional Services Firm",
  },
];
