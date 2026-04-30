import Image from "next/image";

import KiaLogo from "@/public/image/team-logo/kia-logo.svg";
import LotteLogo from "@/public/image/team-logo/lotte-logo.svg";

const GameCard = () => {
  return (
    <article>
      <div>
        <span>KBO</span>
        <span>|</span>
        <span>18:30</span>
      </div>
      <div>
        <div>
          <div>
            <div>롯데 자이언츠</div>
            <Image src={LotteLogo} alt="롯데자이언츠 로고" width={56} height={56} />
          </div>
        </div>
        <div>VS</div>
        <div>
          <div>기아 타이거즈</div>
          <div>
            <Image src={KiaLogo} alt="기아타이거즈 로고" width={56} height={56} />
          </div>
        </div>
      </div>
      <div>광주챔피언즈필드</div>
      <div>
        <div>24°C</div>
        <div>진행 뱃지</div>
      </div>
    </article>
  );
};

export default GameCard;
