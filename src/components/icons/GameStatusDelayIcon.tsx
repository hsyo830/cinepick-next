import type { SVGProps } from "react";

interface GameStatusDelayIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  title?: string;
}

export default function GameStatusDelayIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2.5,
  title,
  className,
  ...props
}: GameStatusDelayIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      color={color}
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {title && <title>{title}</title>}

      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />

      <path
        d="M12 7.5V12L15 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
