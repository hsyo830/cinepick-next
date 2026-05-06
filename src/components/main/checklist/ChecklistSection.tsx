import { checklistItems } from "@/src/constants/checklistItems";

import Button from "../../common/Button";
import GameStatusCheckIcon from "../../icons/GameStatusCheckIcon";
import ChecklistBadge from "./ChecklistBadge";
import SectionHeader from "./SectionHeader";

const ChecklistSection = () => {
  return (
    <div>
      <SectionHeader />
      <section className="flex flex-col justify-center gap-3">
        <div className="text-muted text-sm">
          <div>직관 준비물 다 챙기셨나요?</div>
          <div>체크하고 빠뜨린 것 없이 즐거운 직관을 준비하세요!</div>
        </div>
        <div className="flex gap-3">
          <div className="bg-surface-2 flex w-60 flex-col gap-4 rounded-sm p-3">
            <div>
              <h3 className="pb-0.5 text-sm font-medium md:text-base">오늘 추천 준비물</h3>
              <div className="text-muted flex gap-1 text-xs md:text-[13px]">
                <GameStatusCheckIcon filled className="text-primary" />
                <span>야간 경기라 얇은 외투를 챙겨주세요.</span>
              </div>
              <div className="text-muted flex gap-1 text-xs md:text-[13px]">
                <GameStatusCheckIcon filled className="text-primary" />
                <span>우천 가능성 20%로 우비를 추천해요.</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">준비 완료</h3>
                <div className="text-sm">
                  <span className="text-primary">4</span>
                  <span>/7 &gt;</span>
                </div>
              </div>
              <div className="bg-border-strong h-2 w-full overflow-hidden rounded-full">
                <div className="bg-primary h-full w-[60%]"></div>
              </div>
            </div>
          </div>
          <div className="flex w-72 flex-wrap gap-2">
            {checklistItems.map((item) => (
              <ChecklistBadge key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center lg:justify-end">
          <Button className="mt-2.5 w-70 py-3">지금 바로 체크하러 가기 &gt;</Button>
        </div>
      </section>
    </div>
  );
};

export default ChecklistSection;
