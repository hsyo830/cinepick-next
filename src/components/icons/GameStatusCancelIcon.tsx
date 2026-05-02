import type { SVGProps } from "react";

interface GameStatusCancelIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  title?: string;
}

export default function GameStatusCancelIcon({
  size = 20,
  color = "currentColor",
  strokeWidth = 2.5,
  title,
  className,
  ...props
}: GameStatusCancelIconProps) {
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
        d="M8.8 8.8L15.2 15.2M15.2 8.8L8.8 15.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
