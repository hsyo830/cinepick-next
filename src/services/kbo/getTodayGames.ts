import { todayGames } from "@/src/mocks/kbo/todayGames";
import { KboTodayGamesResponse } from "@/src/types/todayGames";

export const getTodayGames = async (): Promise<KboTodayGamesResponse> => {
  return todayGames;
};
