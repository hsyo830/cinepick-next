import PageHero from "@/src/components/common/PageHero";
import SectionCard from "@/src/components/common/SectionCard";

export default function MainPage() {
  return (
    <div>
      <PageHero
        title="야구 직관 정보를 한눈에!"
        intro="오늘의 경기, 구장 정보와 맛있는 음식 부스까지 한 번에 확인하세요."
      />
      <SectionCard>직관GO 메인페이지입니다.</SectionCard>
    </div>
  );
}
