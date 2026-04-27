import Link from "next/link";

export default function Logo() {
  return (
    <div className="font-vitro text-[40px]">
      <Link href="/">
        <span className="text-inverse">직관</span>
        <span className="text-brand">GO</span>
      </Link>
    </div>
  );
}
