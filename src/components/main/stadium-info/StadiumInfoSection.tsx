import SectionHeader from "./SectionHeader";
import StadiumInfoCard from "./StadiumInfoCard";

const StadiumInfoSection = () => {
  return (
    <div>
      <SectionHeader />
      <section className="flex w-full items-center gap-2 p-1">
        <StadiumInfoCard />
      </section>
    </div>
  );
};

export default StadiumInfoSection;
