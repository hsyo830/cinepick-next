import Image from "next/image";

import { cn } from "@/src/lib/utils";

import GameStatusCheckIcon from "../../icons/GameStatusCheckIcon";

type ChecklistItem = {
  id: string;
  label: string;
  image: string;
  checked: boolean;
};

type ChecklistBadgeProps = {
  item: ChecklistItem;
};

const ChecklistBadge = ({ item }: ChecklistBadgeProps) => {
  return (
    <div
      className={cn(
        "flex min-w-21 items-center justify-between gap-1 rounded-full border px-1 py-0.5 text-xs font-semibold md:min-w-29 md:px-3 md:py-1.5 md:text-[13px] lg:min-w-25 lg:px-2 lg:text-xs",
        item.checked ? "bg-primary-soft border-primary" : "border-border bg-surface",
      )}
    >
      <div className="flex items-center gap-1 md:gap-2 lg:gap-1">
        <Image
          src={item.image}
          alt={item.label}
          width={100}
          height={100}
          className="h-3.5 w-auto object-contain md:h-5"
        />
        {item.label}
      </div>
      {item.checked ? (
        <GameStatusCheckIcon filled className="text-primary" />
      ) : (
        <div className="border-border bg-surface h-4 w-4 rounded-full border" />
      )}
    </div>
  );
};

export default ChecklistBadge;
