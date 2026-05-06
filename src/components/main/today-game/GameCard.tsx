import Image from "next/image";

import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";

import GameStatusBadge from "../../common/GameStatusBadge";
import SectionCard from "../../common/SectionCard";

const GameCard = () => {
  return (
    <SectionCard className="flex flex-col items-center justify-between gap-2">
      <div className="flex items-center gap-1 text-xs leading-none font-semibold md:gap-2 md:text-sm">
        <span>KBO</span>
        <span className="bg-disabled h-3 w-px" />
        <span>18:30</span>
      </div>
      <div className="flex items-center gap-1 md:gap-5">
        <div className="flex flex-col items-center gap-1">
          <div className="text-muted text-xs font-bold md:text-sm">롯데</div>
          <Image src={LotteLogo} alt="롯데자이언츠 로고" className="h-auto w-23 md:w-21" />
        </div>
        <div className="text-sm font-medium md:text-xl">VS</div>
        <div className="flex flex-col items-center gap-1">
          <div className="text-muted text-xs font-bold md:text-sm">기아</div>
          <div>
            <Image src={KiaLogo} alt="기아타이거즈 로고" className="h-auto w-23 md:w-21" />
          </div>
        </div>
      </div>
      <div className="text-muted text-xs font-medium md:text-sm">광주챔피언즈필드</div>
      <div className="flex w-full flex-col items-center justify-between gap-1 md:flex-row">
        <div className="text-sm font-semibold md:text-xl">24°C</div>
        <GameStatusBadge status="NORMAL" />
      </div>
    </SectionCard>
  );
};

export default GameCard;
