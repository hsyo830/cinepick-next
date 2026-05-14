import type { SVGProps } from "react";

const DessertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5 10h14l-1.2 8.2A2 2 0 0 1 15.82 20H8.18a2 2 0 0 1-1.98-1.8L5 10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 10c.2-3 2.2-5 5-5s4.8 2 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M9 14h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default DessertIcon;
