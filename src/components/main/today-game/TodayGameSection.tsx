import GameCard from "./GameCard";
import SectionHeader from "./SectionHeader";

const TodayGameSection = () => {
  return (
    <section className="w-full">
      <SectionHeader />
      <div className="grid w-full grid-cols-3 gap-2 md:gap-5">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </section>
  );
};

export default TodayGameSection;
