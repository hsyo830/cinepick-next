import type { SVGProps } from "react";

const ChickenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.5 4.5a4.5 4.5 0 0 0-6.1 6.1l-3.2 3.2a2.2 2.2 0 1 0 3.1 3.1l3.2-3.2a4.5 4.5 0 0 0 6.1-6.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6 7.6a2.2 2.2 0 1 0-3.1-3.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path d="M6.2 13.8L4.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default ChickenIcon;
