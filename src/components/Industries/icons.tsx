import type { JSX } from "react";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const industryIcons: Record<string, JSX.Element> = {
  technology: (
    <svg {...iconProps} aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M7.5 8.5h3M7.5 11.5h5" />
    </svg>
  ),
  manufacturing: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3 20V11l5 3.5V11l5 3.5V11l6 3.5V20" />
      <path d="M3 20h18" />
      <path d="M7 20v-3" />
      <path d="M14 20v-3" />
    </svg>
  ),
  bfsi: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3 10l9-5 9 5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 20h18" />
    </svg>
  ),
  healthcare: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 20.5s-7.5-4.6-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 5.5c-2 4.4-9.5 9-9.5 9Z" />
      <path d="M9 11h2l1-2 2 4 1-2h2" />
    </svg>
  ),
  retail: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6 8h12l-1 12H7L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  logistics: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  ),
  energy: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  ),
  professional: (
    <svg {...iconProps} aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="1.5" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
};
