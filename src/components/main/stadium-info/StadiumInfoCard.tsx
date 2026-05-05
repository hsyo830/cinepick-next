import InfoCard from "../../common/InfoCard";

const StadiumInfoCard = () => {
  return (
    <InfoCard>
      <p className="text-foreground text-[15px] font-semibold md:text-lg lg:text-base">
        잠실야구장
      </p>
      <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
        서울 송파구 올림픽로 19-2
      </div>
      <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
        <span className="bg-warning h-2.5 w-2.5 rounded-full md:h-4 md:w-4" />
        2호선 잠실역 2번 출구 도보 10분
      </div>
      <div className="flex gap-1">
        <button>구장 정보 더 보기 &gt;</button>
        <button>길찾기 &gt;</button>
      </div>
    </InfoCard>
  );
};

export default StadiumInfoCard;
