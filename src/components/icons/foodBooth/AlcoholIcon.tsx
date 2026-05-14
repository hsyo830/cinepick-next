import type { SVGProps } from "react";

const AlcoholIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 병 */}
      <path d="M10 3h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M11 3v4l-2.5 4.5V19a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-7.5L13 7V3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* 잔 */}
      <path
        d="M17 6h3l-1.2 4a2 2 0 0 1-1.9 1.4A2 2 0 0 1 15 10L14 6h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M17 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M15.5 19h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default AlcoholIcon;
