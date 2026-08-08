import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;