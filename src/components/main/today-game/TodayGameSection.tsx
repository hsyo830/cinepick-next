import { getTodayGames } from "@/src/services/kbo/getTodayGames";

import GameCard from "./GameCard";
import SectionHeader from "./SectionHeader";

const TodayGameSection = async () => {
  const todayGameData = await getTodayGames();

  return (
    <section className="w-full">
      <SectionHeader />
      <div className="grid w-full grid-cols-3 gap-2 md:gap-5">
        {todayGameData.gameList.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </div>
    </section>
  );
};

export default TodayGameSection;
