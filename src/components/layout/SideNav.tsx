import Link from "next/link";

import Logo from "../common/Logo";

// 좌측고정바
const SideNav = () => {
  return (
    <aside className="bg-sidebar w-64 px-5.5 py-10">
      <Logo />
      <div className="text-inverse text-xl font-semibold">야구 직관 도우미</div>
      <nav aria-label="주요 메뉴">
        <ul className="text-inverse mt-7.75 text-base">
          <li>
            <Link href="/">홈</Link>
          </li>

          <li>
            <Link href="/games">오늘경기</Link>
          </li>

          <li>
            <Link href="/stadiums">구장정보</Link>
          </li>

          <li>
            <Link href="/food">음식부스</Link>
          </li>

          <li>
            <Link href="/checklist">준비물</Link>
          </li>

          <li>
            <Link href="/mypage">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
