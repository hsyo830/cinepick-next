import HamsterLoader from "@/src/components/common/HamsterLoader";
import PageHero from "@/src/components/common/PageHero";

const ChecklistPage = () => {
  return (
    <div>
      <PageHero title="직관 준비물" intro="완벽한 직관을 위한 준비, 빠짐없이 체크하세요!" />
      <div className="flex w-full flex-col items-center gap-1 text-sm font-bold md:gap-5 md:text-lg">
        <HamsterLoader />
        <div className="text-center">
          현재 페이지 개발 진행 중입니다.
          <br />더 나은 직관 경험을 위해 준비하고 있어요
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
