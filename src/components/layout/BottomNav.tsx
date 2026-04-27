"use client";

import { MAIN_NAV_ITEMS } from "@/src/constants/navigation";

import NavItem from "./NavItem";

// 하단고정바
const BottomNav = () => {
  return (
    <nav
      aria-label="모바일 주요 메뉴"
      className="bg-surface justify- fixed right-0 bottom-0 left-0 z-50 h-17.25 w-full px-4.75 py-3 lg:hidden"
    >
      <ul className="flex h-full justify-between">
        {MAIN_NAV_ITEMS.map((item) => {
          return (
            <li key={item.href} className="flex">
              <NavItem href={item.href} label={item.label} icon={item.icon} variant="bottom" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
