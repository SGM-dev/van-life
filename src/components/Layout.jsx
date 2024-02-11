import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex h-screen min-w-full flex-col bg-orange-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
