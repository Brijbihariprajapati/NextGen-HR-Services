export type StatItem = {
  value: number;
  suffix: string;
  label: string;
};

export const stats: StatItem[] = [
  { value: 500, suffix: "+", label: "Successful placements" },
  { value: 120, suffix: "+", label: "Client companies served" },
  { value: 15, suffix: "+", label: "Industries covered" },
  { value: 98, suffix: "%", label: "Client retention rate" },
];
