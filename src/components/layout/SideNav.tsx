"use client";

import Logo from "@/src/components/common/Logo";
import NavItem from "@/src/components/layout/NavItem";
import { MAIN_NAV_ITEMS } from "@/src/constants/navigation";

// 좌측고정바
const SideNav = () => {
  return (
    <aside className="bg-sidebar fixed top-0 left-0 hidden h-screen w-64 px-5.5 py-10 lg:block">
      <Logo />
      <div className="text-inverse text-xl font-semibold">야구 직관 도우미</div>
      <nav aria-label="주요 메뉴">
        <ul className="text-inverse mt-7.75 flex flex-col gap-2.5 text-base">
          {MAIN_NAV_ITEMS.map((item) => {
            return (
              <li key={item.href}>
                <NavItem href={item.href} label={item.label} icon={item.icon} variant="side" />
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
