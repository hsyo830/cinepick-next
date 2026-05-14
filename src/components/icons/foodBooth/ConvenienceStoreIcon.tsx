import type { SVGProps } from "react";

const ConvenienceStoreIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 지붕 */}
      <path
        d="M4 8L12 3L20 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 건물 */}
      <path d="M6 8H18V20H6V8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />

      {/* 문 */}
      <path d="M10 20V14H14V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />

      {/* 창문 */}
      <rect x="8" y="10" width="2" height="2" rx="0.5" fill="currentColor" />
      <rect x="14" y="10" width="2" height="2" rx="0.5" fill="currentColor" />

      {/* 간판 */}
      <path d="M8 6H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default ConvenienceStoreIcon;
