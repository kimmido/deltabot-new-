import React from "react";
import Home from "./pages/Home/Home";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import About from "./pages/About/About";
import CategoryRoutesProvider from "./contexts/CategoryRoutesContext";

function App() {
  return (
    <CategoryRoutesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="automation">
              <Route index element={<Navigate to="deltarobot" replace />} />
              <Route path="deltarobot" element={<BusinessLayout />} />
              <Route path="scara" element={<BusinessLayout />} />
              <Route path="collaborative" element={<BusinessLayout />} />
              <Route path="cobot" element={<BusinessLayout />} />
              <Route path="machine-vision" element={<BusinessLayout />} />
              <Route path="thermal-camera" element={<BusinessLayout />} />
            </Route>

            <Route path="recycling">
              <Route index element={<Navigate to="system" replace />} />
              <Route path="system" element={<BusinessLayout />} />
              <Route path="spectral-camera" element={<BusinessLayout />} />
              <Route path="lighting" element={<BusinessLayout />} />
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
