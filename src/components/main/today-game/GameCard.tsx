import Image from "next/image";

import { KBO_TEAMS } from "@/src/constants/kboTeams";
import { KBO_WEATHER } from "@/src/constants/kboWeather";
import { KboGame } from "@/src/types/todayGames";

import GameStatusBadge from "../../common/GameStatusBadge";
import SectionCard from "../../common/SectionCard";

type GameCardProps = {
  game: KboGame;
};

const GameCard = ({ game }: GameCardProps) => {
  return (
    <SectionCard className="flex flex-col items-center justify-between gap-2">
      <div className="flex items-center gap-1 text-xs leading-none font-semibold md:gap-2 md:text-sm">
        <span>KBO</span>
        <span className="bg-disabled h-3 w-px" />
        <span>{game.gameTime.slice(0, 5)}</span>
      </div>
      <div className="flex items-center gap-1 md:gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="text-muted text-xs font-bold md:text-sm">
            {game.awayName.split(" ")[0]}
          </div>
          <div className="flex h-8 items-center md:h-17">
            <Image
              src={KBO_TEAMS[game.awayCode].logo}
              alt={game.awayName}
              className="h-auto w-23 md:w-21"
            />
          </div>
        </div>
        <div className="text-sm font-medium md:text-xl">VS</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-muted text-xs font-bold md:text-sm">
            {game.homeName.split(" ")[0]}
          </div>
          <div className="flex h-8 items-center md:h-17">
            <Image
              src={KBO_TEAMS[game.homeCode].logo}
              alt={game.homeName}
              className="h-auto w-23 md:w-21"
            />
          </div>
        </div>
      </div>
      <div className="text-muted text-center text-[10px] font-medium md:text-sm">
        {game.stadiumFullName}
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-1 md:flex-row">
        <div className="flex items-center gap-0.5 md:gap-1">
          <Image
            src={KBO_WEATHER[game.gameIcon].icon}
            alt={game.gameIconName}
            className="h-auto w-6.5 md:w-8.5"
          />
          <div className="text-sm font-semibold md:text-xl">{Math.floor(game.gameTemp)}°C</div>
        </div>
        {game.cancelSc === 0 ? (
          <GameStatusBadge status="NORMAL" />
        ) : (
          <GameStatusBadge status="RAIN_CANCEL" />
        )}
      </div>
    </SectionCard>
  );
};

export default GameCard;
