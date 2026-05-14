import type { SVGProps } from "react";

const LocationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="M12 6.5C9.8 6.5 8 8.3 8 10.5C8 13.5 12 17.5 12 17.5C12 17.5 16 13.5 16 10.5C16 8.3 14.2 6.5 12 6.5Z"
        fill="white"
      />
      <circle cx="12" cy="10.5" r="1.5" fill="currentColor" />
    </svg>
  );
};

export default LocationIcon;
