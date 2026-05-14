import { FOOD_CATEGORIES } from "@/src/constants/foodCategories";
import { FoodBooth } from "@/src/types/foodBooth";

import LocationIcon from "../../icons/foodBooth/card/LocationIcon";
import MenuIcon from "../../icons/foodBooth/card/MenuIcon";

type FoodProps = {
  food: FoodBooth;
};

const FoodCard = ({ food }: FoodProps) => {
  const category = FOOD_CATEGORIES.find((category) => category.label === food.menuCategory);

  const Icon = category?.icon;

  return (
    <div className="bg-surface border-border flex h-55 w-29 flex-col overflow-hidden rounded-xl border md:h-85 md:w-75 lg:h-83 lg:w-full lg:items-center">
      <div className="h-21.5 w-full shrink-0 bg-blue-500 md:h-40">이미지</div>
      <div className="flex min-w-0 flex-1 flex-col justify-start gap-0.5 px-2 pt-2 md:justify-center md:gap-0 md:px-4 md:pt-0 lg:w-full">
        <div className="border-border border-b pb-2">
          <p className="text-primary text-sm font-semibold md:text-lg lg:text-[14px]">
            {food.stadiumName}
          </p>
          <div className="flex items-center gap-2.5">
            <h3 className="text-foreground truncate text-sm font-bold md:text-[19px]">
              {food.name}
            </h3>
            <p className="bg-warning-soft text-warning flex min-w-14 items-center justify-start gap-0.5 rounded-sm pr-1 pl-0.5 text-center font-bold">
              {Icon && <Icon className="text-warning h-5 w-5" />}
              {food.menuCategory}
            </p>
          </div>
        </div>
        <div className="text-muted border-border flex items-center gap-1 border-b py-2.5 text-[11px] md:text-[13px]">
          <LocationIcon className="text-muted h-6 w-6 shrink-0" />
          <p className="w-14 shrink-0 font-bold">위치</p>
          <p className="truncate font-medium">{food.location}</p>
        </div>
        <div className="text-muted flex items-center gap-1 py-2.5 text-[11px] md:text-[13px]">
          <MenuIcon className="text-primary h-6 w-6 shrink-0" />
          <p className="text-primary w-14 font-bold">대표메뉴</p>
          <p className="font-medium">{food.menuCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
