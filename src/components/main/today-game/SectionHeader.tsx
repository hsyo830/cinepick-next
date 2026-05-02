import Link from "next/link";

const SectionHeader = () => {
  return (
    <div className="mb-3 flex justify-between">
      <div className="flex gap-3">
        <h2 className="text-foreground text-xl font-bold">오늘 경기</h2>
        <div className="bg-primary-soft text-primary rounded-md px-2 py-0.5 text-sm font-bold">
          LIVE
        </div>
        <div className="text-muted text-base font-medium">5경기</div>
      </div>
      <Link href={"/games"} className="text-primary text-md hover:text-primary-hover font-semibold">
        전체 경기 &gt;
      </Link>
    </div>
  );
};

export default SectionHeader;
