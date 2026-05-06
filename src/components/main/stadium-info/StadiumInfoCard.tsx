import Image from "next/image";

import DoosanLogo from "@/public/image/team-logo/doosan-logo.svg";
import LgLogo from "@/public/image/team-logo/lg-logo.svg";

import Button from "../../common/Button";
import SectionCard from "../../common/SectionCard";

const StadiumInfoCard = () => {
  return (
    <SectionCard className="flex h-45 w-full gap-5">
      <div className="h-full w-60 rounded-lg bg-blue-500">이미지</div>
      <div className="flex w-full flex-col justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-foreground text-[15px] font-semibold md:text-lg lg:text-xl">
              잠실야구장
            </p>
            <p className="text-disabled">|</p>
            <div className="flex gap-2">
              <Image src={LgLogo} alt="엘지트윈스 로고" className="h-auto w-12" />
              <Image src={DoosanLogo} alt="엘지트윈스 로고" className="h-auto w-12" />
            </div>
          </div>
          <div>
            <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
              서울 송파구 올림픽로 19-2
            </div>
            <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
              <span className="bg-warning h-2.5 w-2.5 rounded-full md:h-4 md:w-4" />
              2호선 잠실역 2번 출구 도보 10분
            </div>
          </div>
        </div>
        <div className="flex w-full gap-2">
          <Button className="flex-2">구장 정보 더 보기 &gt;</Button>
          <Button className="flex-1 px-3.5" variant="inline">
            길찾기 &gt;
          </Button>
        </div>
      </div>
    </SectionCard>
  );
};

export default StadiumInfoCard;
