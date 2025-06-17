import React, { useEffect, lazy, Suspense } from "react";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";

import DefaultLayout from "./layouts/DefaultLayout";
import ScrollToTop from "./utils/scrollToTop";
import ComingSoon from "./pages/Business/ComingSoon";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Business = lazy(() => import("./pages/Business/Business"));
const BusinessLayout = lazy(() => import("./layouts/BusinessLayout"));
const SolutionAutomation = lazy(() =>
  import("./pages/Solution/Automation/Automation")
);
const SolutionEcoAI = lazy(() => import("./pages/Solution/EcoAI/EcoAI"));
const SolutionVision = lazy(() => import("./pages/Solution/Vision/Vision"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Home />} />

              <Route path="robot-automation">
                <Route element={<BusinessLayout />}>
                  <Route
                    index
                    element={<Navigate to="collaboration" replace />}
                  />
                  <Route path="collaboration" element={<Business />} />
                  <Route path="serial-robot" element={<Business />} />
                  <Route path="deltarobot" element={<Business />} />
                  <Route path="amr" element={<Business />} />
                </Route>
              </Route>

              <Route path="vision-system">
                <Route element={<BusinessLayout />}>
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
              </Route>

              <Route path="eco-friendly-robot">
                <Route element={<BusinessLayout />}>
                  <Route
                    index
                    element={<Navigate to="recycling-robot" replace />}
                  />
                  <Route path="recycling-robot" element={<Business />} />
                  <Route path="cleaning-robot" element={<Business />} />
                </Route>
              </Route>

              <Route path="medical">
                <Route element={<BusinessLayout />}>
                  <Route index element={<Navigate to="pcr" replace />} />
                  <Route path="pcr" element={<Business />} />
                  <Route path="uv" element={<Business />} />
                </Route>
              </Route>

              <Route path="information-technology">
                <Route element={<BusinessLayout />}>
                  <Route index element={<Navigate to="gpu-server" replace />} />
                  <Route path="gpu-server" element={<Business />} />
                  <Route path="workstations" element={<Business />} />
                  <Route path="rack-mount" element={<ComingSoon />} />
                  <Route path="military" element={<Business />} />
                  <Route path="vehicle" element={<Business />} />
                  <Route path="edge-ai" element={<Business />} />
                </Route>
              </Route>

              <Route path="humanoid">
                <Route element={<BusinessLayout />}>
                  <Route index element={<Navigate to="humanoid1" replace />} />
                  <Route path="humanoid1" element={<ComingSoon />} />
                </Route>
              </Route>

              <Route
                path="automation-solution"
                element={<SolutionAutomation />}
              />
              <Route path="eco-ai-solution" element={<SolutionEcoAI />} />
              <Route path="vision-solution" element={<SolutionVision />} />
              <Route path="uv-solution" element={<SolutionAutomation />} />

              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
