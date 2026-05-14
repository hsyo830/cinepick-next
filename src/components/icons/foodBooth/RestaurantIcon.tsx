import type { SVGProps } from "react";

const RestaurantIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 포크 */}
      <path d="M6 3v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M4 3v4M8 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M6 10v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />

      {/* 나이프 */}
      <path d="M16 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M16 3c3 2 4 5 4 8h-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RestaurantIcon;
