import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";
import GameCard from "@/src/components/main/today-game/GameCard";

export default function MainPage() {
  return (
    <div>
      <PageHero
        title="야구 직관 정보를 한눈에!"
        intro="오늘의 경기, 구장 정보와 맛있는 음식 부스까지 한 번에 확인하세요."
      />
      <div className="md:px-8.25">
        <SectionCard>
          <GameCard />
        </SectionCard>
      </div>
    </div>
  );
}
