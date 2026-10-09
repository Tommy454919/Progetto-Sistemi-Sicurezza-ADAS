import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";
import PageTransition from "@/components/common/PageTransition";

export const Layout = () => {
  return (
    <div className="relative min-h-screen text-brand-white">
      <AnimatedBackground />
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </div>
  );
};

export default Layout;
