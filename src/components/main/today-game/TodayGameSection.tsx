import GameCard from "./GameCard";

const TodayGameSection = () => {
  return (
    <section className="grid w-full grid-cols-3 gap-5">
      <GameCard />
      <GameCard />
      <GameCard />
    </section>
  );
};

export default TodayGameSection;
