import type { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
};

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <div className="bg-surface border-border flex h-55 w-29 flex-col overflow-hidden rounded-xl border md:h-85 md:w-75 lg:h-85 lg:w-full">
      <div className="h-21.5 w-full shrink-0 bg-blue-500 md:h-44 lg:h-44 lg:w-full">이미지</div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 px-2 md:gap-2 md:px-4">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;
