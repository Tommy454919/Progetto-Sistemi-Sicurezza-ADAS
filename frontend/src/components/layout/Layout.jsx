import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageTransition from "@/components/common/PageTransition";

export const Layout = () => {
  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white">
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
