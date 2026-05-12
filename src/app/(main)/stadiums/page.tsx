import HamsterLoader from "@/src/components/common/HamsterLoader";
import PageHero from "@/src/components/common/PageHero";

const StadiumsPage = () => {
  return (
    <div>
      <PageHero
        title="구장 정보"
        intro="전국 야구장의 주요 정보와 편의시설, 교통, 주변 정보를 확인해보세요!"
      />
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

export default StadiumsPage;
