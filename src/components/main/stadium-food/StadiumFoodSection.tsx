import { foodBooths } from "@/src/data/foodBooths";

import FoodCard from "./FoodCard";
import SectionHeader from "./SectionHeader";

const StadiumFoodSection = () => {
  return (
    <section className="w-full">
      <SectionHeader />
      <div className="flex gap-2">
        <FoodCard food={foodBooths[0]} />
        <FoodCard food={foodBooths[75]} />
        <FoodCard food={foodBooths[300]} />
      </div>
    </section>
  );
};

export default StadiumFoodSection;
