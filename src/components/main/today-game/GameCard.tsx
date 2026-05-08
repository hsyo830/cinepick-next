import Image from "next/image";

import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";
import { KBO_TEAMS } from "@/src/constants/kboTeams";
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
          <div className="text-muted text-xs font-bold md:text-sm">{game.awayName}</div>
          <Image
            src={KBO_TEAMS[game.awayCode].logo}
            alt={game.awayName}
            className="h-auto w-23 md:w-21"
          />
        </div>
        <div className="text-sm font-medium md:text-xl">VS</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-muted text-xs font-bold md:text-sm">{game.homeName}</div>
          <div>
            <Image
              src={KBO_TEAMS[game.homeCode].logo}
              alt={game.homeName}
              className="h-auto w-23 md:w-21"
            />
          </div>
        </div>
      </div>
      <div className="text-muted text-xs font-medium md:text-sm">{game.stadiumFullName}</div>
      <div className="flex w-full flex-col items-center justify-between gap-1 md:flex-row">
        <div className="text-sm font-semibold md:text-xl">{Math.floor(game.gameTemp)}°C</div>
        <GameStatusBadge status="NORMAL" />
      </div>
    </SectionCard>
  );
};

export default GameCard;
