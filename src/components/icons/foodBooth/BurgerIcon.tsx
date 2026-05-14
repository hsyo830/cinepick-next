import type { SVGProps } from "react";

const BurgerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 윗빵 */}
      <path
        d="M5 11C5 7.5 8 5 12 5s7 2.5 7 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 깨 */}
      <circle cx="9" cy="8.5" r="0.5" fill="currentColor" />
      <circle cx="12" cy="7.8" r="0.5" fill="currentColor" />
      <circle cx="15" cy="8.5" r="0.5" fill="currentColor" />

      {/* 패티/야채 */}
      <path d="M5 13H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M6 15C8 14 10 16 12 15C14 14 16 16 18 15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 아랫빵 */}
      <path d="M5 18H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default BurgerIcon;
