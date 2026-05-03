const FoodCard = () => {
  return (
    <div className="bg-surface border-border flex h-55 w-29 flex-col overflow-hidden rounded-xl border md:h-85 md:w-75 lg:h-44 lg:flex-row lg:items-center">
      <div className="h-21.5 w-full shrink-0 bg-blue-500 md:h-44 lg:h-full lg:w-44">이미지</div>
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5 px-2 md:gap-2 md:px-4">
        <div className="border-border border-b pb-2">
          <p className="text-primary text-[15px] font-semibold md:text-lg lg:text-base">
            잠실야구장
          </p>
          <p className="text-muted text-xs md:text-[15px] lg:text-[13px]">1루 내야 118블록</p>
        </div>
        <h3 className="text-foreground text-sm font-semibold md:text-[15px]">BBQ 치킨</h3>
        <div className="text-muted flex items-center gap-1 text-[11px] md:text-[13px]">
          <span className="bg-warning h-2.5 w-2.5 rounded-full md:h-4 md:w-4" />
          치킨
        </div>
        <p className="text-foreground text-sm font-semibold md:text-[15px]">15,000원</p>
      </div>
    </div>
  );
};

export default FoodCard;
