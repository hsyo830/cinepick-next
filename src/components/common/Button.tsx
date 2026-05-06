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
        `bg-primary hover:bg-primary-hover text-primary-foreground flex cursor-pointer items-center justify-center gap-1 rounded-lg py-2 text-sm font-semibold ${className}`,
        variant === "inline" &&
          `text-secondary-foreground hover:bg-secondary-hover bg-secondary border-border-strong border`,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
