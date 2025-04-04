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
import ProductCatalog from "./pages/ProductCatalog/ProductCatalog";
import ProductShowcase from "./pages/ProductShowcase/ProductShowcase";
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
                <Route path="collaboration" element={<ProductCatalog />} />
                <Route path="serial-robot" element={<ProductCatalog />} />
                <Route path="scara" element={<ProductCatalog />} />
                <Route path="cobot" element={<ProductCatalog />} />
                <Route path="deltarobot" element={<ProductCatalog />} />
                <Route path="case-packer" element={<ProductCatalog />} />
                <Route path="amr" element={<ProductCatalog />} />
              </Route>

              <Route path="vision-system" element={<BusinessLayout />}>
                <Route
                  index
                  element={<Navigate to="machine-vision" replace />}
                />
                <Route path="machine-vision" element={<ProductCatalog />} />
                <Route path="thermal-camera" element={<ProductCatalog />} />
                <Route path="spectral-camera" element={<ProductCatalog />} />
                <Route path="illumination" element={<ProductCatalog />} />
                <Route path="vision-controller" element={<ProductCatalog />} />
              </Route>

              <Route path="recycling-system" element={<BusinessLayout />}>
                <Route index element={<Navigate to="single-robot" replace />} />
                <Route path="single-robot" element={<ProductShowcase />} />
                <Route path="tandem-robot" element={<ProductShowcase />} />
              </Route>

              <Route path="medical" element={<BusinessLayout />}>
                <Route index element={<Navigate to="pcr" replace />} />
                <Route path="pcr" element={<ProductShowcase />} />
                <Route path="uv" element={<ProductShowcase />} />
              </Route>

              <Route path="information-technology" element={<BusinessLayout />}>
                <Route index element={<Navigate to="gpu-server" replace />} />
                <Route path="gpu-server" element={<ProductCatalog />} />
                <Route path="workstations" element={<ProductCatalog />} />
                <Route path="rack-mount" element={<ProductCatalog />} />
                <Route path="military" element={<ProductCatalog />} />
                <Route path="vehicle" element={<ProductCatalog />} />
              </Route>

              <Route path="humanoid" element={<BusinessLayout />}>
                <Route index element={<Navigate to="humanoid1" replace />} />
                <Route path="humanoid1" element={<ProductCatalog />} />
                <Route path="humanoid2" element={<ProductCatalog />} />
              </Route>

              <Route path="automation-solution" element={<SolutionLayout />} />
              <Route path="recycling-solution" element={<SolutionLayout />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryRoutesProvider>
    </HelmetProvider>
  );
}

export default App;
