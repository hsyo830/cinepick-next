import BottomNav from "@/src/components/layout/BottomNav";
import Footer from "@/src/components/layout/Footer";
import Header from "@/src/components/layout/Header";
import SideNav from "@/src/components/layout/SideNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SideNav />
      <main className="relative flex min-h-screen w-full flex-col pb-17.25 lg:ml-64 lg:pb-0">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
      <BottomNav />
    </div>
  );
}
