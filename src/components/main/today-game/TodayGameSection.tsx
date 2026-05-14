import { getTodayGames } from "@/src/services/kbo/getTodayGames";

import SectionHeader from "./SectionHeader";
import TodayGameSlider from "./TodayGameSlider";

const TodayGameSection = async () => {
  const todayGameData = await getTodayGames();

  return (
    <section className="w-full min-w-0 overflow-hidden">
      <SectionHeader />
      <TodayGameSlider games={todayGameData.gameList} />
    </section>
  );
};

export default TodayGameSection;
