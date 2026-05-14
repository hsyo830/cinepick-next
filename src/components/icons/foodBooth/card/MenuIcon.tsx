import type { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="16" cy="16" r="13" fill="currentColor" />

      <path d="M11 8V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M8.8 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.2 8V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M11 13V24" stroke="white" strokeWidth="2" strokeLinecap="round" />

      <path d="M21 8V24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M21 8C18.8 9.4 18 11.4 18 14C18 16 19 17.2 21 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
