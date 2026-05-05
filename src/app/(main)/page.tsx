import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";
import StadiumFoodSection from "@/src/components/main/stadium-food/StadiumFoodSection";
import TodayGameSection from "@/src/components/main/today-game/TodayGameSection";

export default function MainPage() {
  return (
    <div>
      <PageHero
        title="야구 직관 정보를 한눈에!"
        intro="오늘의 경기, 구장 정보와 맛있는 음식 부스까지 한 번에 확인하세요."
      />
      <div className="flex flex-col gap-2 md:px-8.25">
        <SectionCard>
          <TodayGameSection />
        </SectionCard>
        <SectionCard>
          <StadiumFoodSection />
        </SectionCard>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
          <SectionCard className="md:col-span-2 xl:col-span-1">구장 안내</SectionCard>
          <SectionCard>야구장 날씨</SectionCard>
          <SectionCard>직관 준비물 체크</SectionCard>
        </div>
      </div>
    </div>
  );
}
