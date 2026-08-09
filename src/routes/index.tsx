import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Services from "../pages/Services";
import ServiceDetail from "../pages/ServiceDetail";
import Projects from "../pages/Projects";
import CaseStudies from "../pages/CaseStudies";
import ClientSuccessStories from "../pages/ClientSuccessStories";
import About from "../pages/About";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId" element={<ServiceDetail />} />

      <Route path="/projects" element={<Projects />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route
        path="/client-success-stories"
        element={<ClientSuccessStories />}
      />

      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;