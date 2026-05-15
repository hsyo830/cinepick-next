import Image from "next/image";

import SectionCard from "@/src/components/common/SectionCard";

const StadiumInfoSection = () => {
  return (
    <SectionCard>
      <div className="relative h-30 w-30">
        <Image
          src={"/image/food-booth/placeholder-image.webp"}
          alt="음식 부스 이미지"
          fill
          sizes="(max-width: 768px) 140px, 300px"
          className="object-cover"
        />
      </div>
    </SectionCard>
  );
};

export default StadiumInfoSection;
