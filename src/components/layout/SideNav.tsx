import Image from "next/image";
import Link from "next/link";

import MainLogo from "@/public/image/jiguango_logo.svg";

// 좌측고정바
const SideNav = () => {
  return (
    <aside className="bg-sidebar w-64 px-5.5 py-10">
      <Image src={MainLogo} alt="main logo" fill />
      <div className="h-[39px] w-[134px] border border-solid border-red-500">로고</div>
      <div className="text-inverse mt-4.5 text-sm">야구 직관 도우미</div>
      <nav aria-label="주요 메뉴">
        <ul className="text-inverse text-base">
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
