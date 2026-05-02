import Image from "next/image";

import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";

import GameStatusBadge from "../../common/GameStatusBadge";

const GameCard = () => {
  return (
    <article className="bg-surface border-border flex flex-col items-center rounded-xl border px-6 py-5">
      <div className="flex items-center gap-2 text-sm leading-none">
        <span>KBO</span>
        <span className="bg-disabled h-3 w-px" />
        <span>18:30</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">롯데 자이언츠</div>
          <Image src={LotteLogo} alt="롯데자이언츠 로고" width={88} height={72} />
        </div>
        <div className="text-xl font-medium">VS</div>
        <div className="flex flex-col items-center">
          <div className="text-sm font-medium">기아 타이거즈</div>
          <div>
            <Image src={KiaLogo} alt="기아타이거즈 로고" width={88} height={72} />
          </div>
        </div>
      </div>
      <div className="text-sm">광주챔피언즈필드</div>
      <div className="flex w-full items-center justify-between">
        <div className="text-xl font-semibold">24°C</div>
        <GameStatusBadge status="NORMAL" />
      </div>
    </article>
  );
};

export default GameCard;
