import Image from "next/image";

const StadiumInfoCard = () => {
  return (
    <section>
      <div className="relative h-30 w-30">
        <Image
          src={"/image/food-booth/placeholder-image.webp"}
          alt="음식 부스 이미지"
          fill
          sizes="(max-width: 768px) 140px, 300px"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default StadiumInfoCard;
