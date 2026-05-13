import { FoodBooth } from "@/src/types/foodBooth";

type FoodProps = {
  food: FoodBooth;
};

const FoodCard = ({ food }: FoodProps) => {
  return (
    <div className="bg-surface border-border flex h-55 w-29 flex-col overflow-hidden rounded-xl border md:h-85 md:w-75 lg:h-44 lg:w-full lg:flex-row lg:items-center">
      <div className="h-21.5 w-full shrink-0 bg-blue-500 md:h-44 lg:h-full lg:w-44">이미지</div>
      <div className="flex min-w-0 flex-1 flex-col justify-start gap-0.5 px-2 pt-2 md:justify-center md:gap-2 md:px-4 md:pt-0">
        <div className="border-border border-b pb-2">
          <p className="text-primary text-sm font-semibold md:text-lg lg:text-base">
            {food.stadiumName}
          </p>
          <h3 className="text-foreground text-sm font-semibold md:text-[15px]">{food.name}</h3>
        </div>

        <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
          <span className="bg-warning h-2.5 w-2.5 rounded-full md:h-4 md:w-4" />
          {food.menuCategory}
        </div>
        <p className="text-muted flex h-10 items-center gap-1 text-[12px] md:text-[15px] lg:text-[13px]">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-200 md:h-4 md:w-4" />
          {food.location}
        </p>
        {/*<p className="text-foreground text-sm font-semibold md:text-[15px]">15,000원</p>*/}
      </div>
    </div>
  );
};

export default FoodCard;
