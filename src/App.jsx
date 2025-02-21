import React, { useEffect } from "react";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryRoutesProvider from "./contexts/CategoryRoutesContext";
import AOS from "aos";
import "aos/dist/aos.css";

import DefaultLayout from "./layouts/DefaultLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ScrollToTop from "./utils/scrollToTop";
import SolutionLayout from "./layouts/SolutionLayout";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <CategoryRoutesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />

            <Route path="robot-automation">
              <Route index element={<Navigate to="collaboration" replace />} />
              <Route path="collaboration" element={<BusinessLayout />} />
              <Route path="serial-robot" element={<BusinessLayout />} />
              <Route path="scara" element={<BusinessLayout />} />
              <Route path="cobot" element={<BusinessLayout />} />
              <Route path="deltarobot" element={<BusinessLayout />} />
              <Route path="case-packer" element={<BusinessLayout />} />
            </Route>

            <Route path="vision-system">
              <Route index element={<Navigate to="machine-vision" replace />} />
              <Route path="machine-vision" element={<BusinessLayout />} />
              <Route path="thermal-camera" element={<BusinessLayout />} />
              <Route path="spectral-camera" element={<BusinessLayout />} />
              <Route path="illumination" element={<BusinessLayout />} />
              <Route path="vision-controller" element={<BusinessLayout />} />
            </Route>

            <Route path="recycling-system">
              <Route index element={<Navigate to="single-robot" replace />} />
              <Route path="single-robot" element={<BusinessLayout />} />
              <Route path="tandem-robot" element={<BusinessLayout />} />
            </Route>

            <Route path="medical">
              <Route index element={<Navigate to="pcr" replace />} />
              <Route path="pcr" element={<BusinessLayout />} />
              <Route path="uv" element={<BusinessLayout />} />
            </Route>

            <Route path="information-technology">
              <Route index element={<Navigate to="gpu-server" replace />} />
              <Route path="gpu-server" element={<BusinessLayout />} />
              <Route path="workstations" element={<BusinessLayout />} />
              <Route path="rack-mount" element={<BusinessLayout />} />
              <Route path="military" element={<BusinessLayout />} />
              <Route path="vehicle" element={<BusinessLayout />} />
            </Route>

            <Route index element={<Navigate to="automation" replace />} />
            <Route path="automation-solution" element={<SolutionLayout />} />
            <Route path="recycling-solution" element={<SolutionLayout />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CategoryRoutesProvider>
  );
}

export default App;
