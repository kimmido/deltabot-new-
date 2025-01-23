import React from "react";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryRoutesProvider from "./contexts/CategoryRoutesContext";

import DefaultLayout from "./layouts/DefaultLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <CategoryRoutesProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="automation">
              <Route index element={<Navigate to="collaborative" replace />} />
              <Route path="collaborative" element={<BusinessLayout />} />
              <Route path="scara" element={<BusinessLayout />} />
              <Route path="cobot" element={<BusinessLayout />} />
              <Route path="deltarobot" element={<BusinessLayout />} />
              <Route path="machine-vision" element={<BusinessLayout />} />
              <Route path="thermal-camera" element={<BusinessLayout />} />
            </Route>

            <Route path="recycling">
              <Route index element={<Navigate to="system" replace />} />
              <Route path="system" element={<BusinessLayout />} />
              <Route path="spectral-camera" element={<BusinessLayout />} />
              <Route path="illumination" element={<BusinessLayout />} />
            </Route>

            <Route path="medical">
              <Route index element={<Navigate to="pcr" replace />} />
              <Route path="pcr" element={<BusinessLayout />} />
              <Route path="uv" element={<BusinessLayout />} />
            </Route>

            <Route path="it">
              <Route index element={<Navigate to="gpu-server" replace />} />
              <Route path="gpu-server" element={<BusinessLayout />} />
              <Route path="workstations" element={<BusinessLayout />} />
              <Route path="rack-mount" element={<BusinessLayout />} />
              <Route path="military" element={<BusinessLayout />} />
              <Route path="transportation" element={<BusinessLayout />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CategoryRoutesProvider>
  );
}

export default App;
