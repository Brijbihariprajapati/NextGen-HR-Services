export type StatItem = {
  value?: number;
  suffix?: string;
  text?: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: 8, suffix: "+", label: "Recruitment Services" },
  { value: 3, label: "Core Hiring Domains" },
  { text: "Pan-India", label: "Recruitment" },
  { text: "Permanent & Contract", label: "Hiring" },
];
