import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";

import "./server";
import VanDetail from "./pages/VanDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
