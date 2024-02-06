import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function PageLayout() {
  return (
    <div className="flex min-h-svh min-w-full flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
