export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "Which industries and roles do you recruit for?",
    answer:
      "We recruit across IT, non-IT, and manufacturing domains — spanning permanent, contract, and leadership roles across technology, BFSI, healthcare, retail, logistics, energy, and professional services.",
  },
  {
    id: "faq-2",
    question: "How quickly can you start on a hiring requirement?",
    answer:
      "In most cases, our team begins sourcing within 24–48 hours of receiving a detailed requirement, with an initial shortlist shared within the first week.",
  },
  {
    id: "faq-3",
    question: "Do you support bulk and contract hiring?",
    answer:
      "Yes. Alongside permanent hiring, we support contract staffing, C2H (contract-to-hire), bulk hiring drives, and RPO-style embedded recruitment support.",
  },
  {
    id: "faq-4",
    question: "How do you ensure candidate quality?",
    answer:
      "Every profile goes through structured screening covering skills, experience validation, and role fit before it reaches your shortlist — reducing time spent on unsuitable applications.",
  },
  {
    id: "faq-5",
    question: "As a candidate, how do I get considered for roles?",
    answer:
      "Submit your resume through our Candidates page. Our consultants review profiles against live and upcoming requirements and reach out when there is a relevant match.",
  },
];
