import { getStadiums } from "@/src/services/stadium/getStadiums";

import StadiumInfoCard from "./components/StadiumInfoCard";
import SectionHeader from "./SectionHeader";

const StadiumInfoSection = async () => {
  const stadiumInfoData = await getStadiums();

  return (
    <div>
      <SectionHeader />
      <section className="flex w-full items-center gap-2 p-1 xl:hidden">
        <StadiumInfoCard stadium={stadiumInfoData} />
      </section>
      <section className="hidden w-full items-center gap-2 p-1 xl:flex">
        <StadiumInfoCard stadium={stadiumInfoData} />
        <StadiumInfoCard stadium={stadiumInfoData} />
      </section>
    </div>
  );
};

export default StadiumInfoSection;
