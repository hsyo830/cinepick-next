import type { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 배경 원 */}
      <circle cx="12" cy="12" r="10" fill="currentColor" />

      {/* 포크 */}
      <path d="M8 6V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.8 6V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.2 6V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 9V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />

      {/* 나이프 */}
      <path
        d="M15 6C16.5 7 17.2 8.5 17.2 10.5V17"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
