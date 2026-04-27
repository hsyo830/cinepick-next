import Link from "next/link";

import Logo from "@/src/components/common/Logo";
import { MAIN_NAV_ITEMS } from "@/src/constants/navigation";

// 좌측고정바
const SideNav = () => {
  return (
    <aside className="bg-sidebar w-64 px-5.5 py-10">
      <Logo />
      <div className="text-inverse text-xl font-semibold">야구 직관 도우미</div>
      <nav aria-label="주요 메뉴">
        <ul className="text-inverse mt-7.75 flex flex-col gap-2.5 text-base">
          {MAIN_NAV_ITEMS.map(({ label, href, icon: Icon }) => {
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:bg-primary-hover flex items-center gap-3 rounded-xl p-3"
                >
                  <Icon size={26} className="text-inverse" />
                  <span className="text-inverse text-xl">{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
