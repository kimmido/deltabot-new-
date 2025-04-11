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
import Business from "./pages/ProductCatalog/Business";
import CompactProductPage from "./pages/ProductCatalog/CompactProductPage";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HelmetProvider>
      <CategoryRoutesProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />

              <Route path="robot-automation" element={<BusinessLayout />}>
                <Route
                  index
                  element={<Navigate to="collaboration" replace />}
                />
                <Route path="collaboration" element={<Business />} />
                <Route path="serial-robot" element={<Business />} />
                <Route path="scara" element={<Business />} />
                <Route path="cobot" element={<Business />} />
                <Route path="deltarobot" element={<Business />} />
                <Route path="case-packer" element={<Business />} />
                <Route path="amr" element={<Business />} />
              </Route>

              <Route path="vision-system" element={<BusinessLayout />}>
                <Route
                  index
                  element={<Navigate to="machine-vision" replace />}
                />
                <Route path="machine-vision" element={<Business />} />
                <Route path="thermal-camera" element={<Business />} />
                <Route path="spectral-camera" element={<Business />} />
                <Route path="illumination" element={<Business />} />
                <Route path="vision-controller" element={<Business />} />
              </Route>

              <Route path="recycling-system" element={<BusinessLayout />}>
                <Route index element={<Navigate to="single-robot" replace />} />
                <Route path="single-robot" element={<CompactProductPage />} />
                <Route path="tandem-robot" element={<CompactProductPage />} />
              </Route>

              <Route path="medical" element={<BusinessLayout />}>
                <Route index element={<Navigate to="pcr" replace />} />
                <Route path="pcr" element={<CompactProductPage />} />
                <Route path="uv" element={<CompactProductPage />} />
              </Route>

              <Route path="information-technology" element={<BusinessLayout />}>
                <Route index element={<Navigate to="gpu-server" replace />} />
                <Route path="gpu-server" element={<Business />} />
                <Route path="workstations" element={<Business />} />
                <Route path="rack-mount" element={<Business />} />
                <Route path="military" element={<Business />} />
                <Route path="vehicle" element={<Business />} />
              </Route>

              <Route path="humanoid" element={<BusinessLayout />}>
                <Route index element={<Navigate to="humanoid1" replace />} />
                <Route path="humanoid1" element={<Business />} />
                <Route path="humanoid2" element={<Business />} />
              </Route>

              <Route path="automation-solution" element={<SolutionLayout />} />
              <Route path="recycling-solution" element={<SolutionLayout />} />
              <Route path="pcr-solution" element={<SolutionLayout />} />
              <Route path="uv-solution" element={<SolutionLayout />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryRoutesProvider>
    </HelmetProvider>
  );
}

export default App;
