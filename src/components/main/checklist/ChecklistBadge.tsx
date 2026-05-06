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
        "flex min-w-29 items-center justify-between gap-1 rounded-full border px-3 py-1.5 text-[13px] font-semibold",
        item.checked ? "bg-primary-soft border-primary" : "border-border bg-surface",
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={item.image}
          alt={item.label}
          width={100}
          height={100}
          className="h-5 w-auto object-contain"
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
