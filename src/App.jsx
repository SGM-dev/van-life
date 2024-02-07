import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout.jsx";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans.jsx";

import "./server";
import VanDetail from "./pages/Vans/VanDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/host" element={<Dashboard />}>
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
