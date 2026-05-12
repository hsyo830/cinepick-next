import BaseballIcon from "@/src/components/icons/BaseballIcon";
import ChecklistIcon from "@/src/components/icons/ChecklistIcon";
import FoodIcon from "@/src/components/icons/FoodIcon";
import HomeIcon from "@/src/components/icons/HomeIcon";
import StadiumIcon from "@/src/components/icons/StadiumIcon";
import UserIcon from "@/src/components/icons/UserIcon";

export const MAIN_NAV_ITEMS = [
  {
    label: "홈",
    href: "/",
    icon: HomeIcon,
  },
  {
    label: "오늘경기",
    href: "/games",
    icon: BaseballIcon,
  },
  {
    label: "구장",
    href: "/stadiums",
    icon: StadiumIcon,
  },
  {
    label: "음식부스",
    href: "/food",
    icon: FoodIcon,
  },
  {
    label: "준비물",
    href: "/checklist",
    icon: ChecklistIcon,
  },
  /* {
    label: "마이페이지",
    href: "/mypage",
    icon: UserIcon,
  }, */
] as const;
