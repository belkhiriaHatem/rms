import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="relative flex h-screen flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="relative z-10 flex-grow p-5">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
