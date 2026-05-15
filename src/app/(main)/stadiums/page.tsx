import PageHero from "@/src/components/common/PageHero";
import StadiumInfoSection from "@/src/features/stadiums/stadiumInfoSection";

const StadiumsPage = () => {
  return (
    <div>
      <PageHero
        title="구장 정보"
        intro="전국 야구장의 주요 정보와 편의시설, 교통, 주변 정보를 확인해보세요!"
      />
      <StadiumInfoSection></StadiumInfoSection>
    </div>
  );
};

export default StadiumsPage;
