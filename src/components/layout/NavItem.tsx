"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  label: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  variant: "side" | "bottom";
};

const NavItem = ({ href, label, icon: Icon, variant }: NavItemProps) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl p-3 ${isActive ? "bg-primary hover:bg-primary" : "hover:bg-primary-hover/50 bg-none"}`}
    >
      <Icon size={26} className="text-inverse" />
      <span className="text-inverse text-xl">{label}</span>
    </Link>
  );
};

export default NavItem;
