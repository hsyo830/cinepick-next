import type { KboTeamCode } from "@/src/constants/kboTeams";

export type KboGame = {
  stadium: string;
  stadiumFullName: string;
  homeCode: KboTeamCode;
  homeName: string;
  awayCode: KboTeamCode;
  awayName: string;
  gameTime: string;
  gameSc: number;
  cancelSc: number;
  icon: string;
  iconName: string;
  temp: number;
  rain: number;
  gameIcon: string;
  gameIconName: string;
  gameTemp: number;
  gameRain: number;
  gameTimeOver: string;
  gameId: string;
  dust: string;
  dustCode: string;
};

export type KboTodayGamesResponse = {
  dateDiff: number;
  gameList: KboGame[];
};
