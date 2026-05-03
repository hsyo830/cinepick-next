import FoodCard from "./FoodCard";
import SectionHeader from "./SectionHeader";

const StadiumFoodSection = () => {
  return (
    <section className="w-full">
      <SectionHeader />
      <div className="flex gap-2">
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </section>
  );
};

export default StadiumFoodSection;
