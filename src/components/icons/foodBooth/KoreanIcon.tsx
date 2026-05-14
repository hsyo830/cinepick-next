import type { SVGProps } from "react";

const KoreanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* 밥그릇 */}
      <path
        d="M5 13C5 17 8 20 12 20s7-3 7-7H5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* 밥 */}
      <path
        d="M7 13C7 10.5 9 9 12 9s5 1.5 5 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* 젓가락 */}
      <path d="M16 4L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.5 4L16.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
};

export default KoreanIcon;
