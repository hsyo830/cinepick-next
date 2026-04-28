import BottomNav from "@/src/components/layout/BottomNav";
import Header from "@/src/components/layout/Header";
import SideNav from "@/src/components/layout/SideNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="relative min-h-screen w-full pb-17.25 lg:ml-64 lg:pb-0">
        <Header />
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
