// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import RoomDetail from "./pages/RoomDetail";

import AOS from "aos";
import "aos/dist/aos.css"; // CSS của AOS

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian animation
      once: true, // animation chỉ chạy 1 lần
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="phong/:folder" element={<RoomDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="ve-chung-toi" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
