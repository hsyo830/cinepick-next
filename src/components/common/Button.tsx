import { ReactNode } from "react";

import { cn } from "@/src/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "filled" | "inline";
};

const Button = ({ children, className, variant = "filled" }: ButtonProps) => {
  return (
    <button
      className={cn(
        `bg-primary hover:bg-primary-hover text-primary-foreground flex cursor-pointer items-center justify-center gap-1 rounded-md px-0.5 py-2 text-xs font-semibold md:rounded-lg md:px-1 md:py-2 md:text-base lg:text-sm ${className}`,
        variant === "inline" &&
          `text-secondary-foreground hover:bg-secondary-hover bg-secondary border-border-strong border`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
