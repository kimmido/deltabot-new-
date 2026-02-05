import React, { useEffect, lazy, Suspense } from "react";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import DefaultLayout from "./layouts/DefaultLayout";
import ScrollToTop from "./components/common/scrollToTop.jsx";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));

const BusinessLayout = lazy(() => import("./layouts/BusinessLayout"));
const Business = lazy(() => import("./pages/Business/Business"));
const RobotAutomation = lazy(
  () => import("./pages/Business/RobotAutomation.jsx"),
);
const Vision = lazy(() => import("./pages/Business/Vision.jsx"));
const Logistics = lazy(() => import("./pages/Business/Logistics.jsx"));
const It = lazy(() => import("./pages/Business/It.jsx"));
const ComingSoon = lazy(() => import("./pages/Business/ComingSoon"));

const SolutionAutomation = lazy(
  () => import("./pages/Solution/Automation/Automation"),
);
const SolutionEcoAI = lazy(() => import("./pages/Solution/EcoAI/EcoAI"));
const SolutionSmartFactory = lazy(
  () => import("./pages/Solution/SmartFactory/SmartFactory"),
);
const SolutionSmartLogistics = lazy(
  () => import("./pages/Solution/Logistics/Logistics"),
);
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 50,
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />

            {/* ========= 사업소개 카테고리 ========= */}
            {/* 로봇 자동화 */}
            <Route path="robot-automation">
              <Route element={<BusinessLayout />}>
                <Route
                  index
                  element={<Navigate to="collaboration" replace />}
                />
                <Route path="collaboration" element={<RobotAutomation />} />
                <Route path="serial-robot" element={<RobotAutomation />} />
                <Route path="palletizing" element={<RobotAutomation />} />
                <Route path="deltarobot" element={<RobotAutomation />} />
              </Route>
            </Route>

            {/* 비전 */}
            <Route path="vision-system">
              <Route element={<BusinessLayout />}>
                <Route
                  index
                  element={<Navigate to="machine-vision" replace />}
                />
                <Route path="machine-vision" element={<Vision />} />
                <Route path="thermal-camera" element={<Vision />} />
                <Route path="spectral-camera" element={<Vision />} />
                <Route path="illumination" element={<Business />} />
                <Route path="vision-controller" element={<Business />} />
              </Route>
            </Route>

            {/* 로지스틱 */}
            <Route path="logistics">
              <Route element={<BusinessLayout />}>
                <Route index element={<Navigate to="i-robot" replace />} />
                <Route path="i-robot" element={<Logistics />} />
                <Route
                  path="automated-sorting-system"
                  element={<Logistics />}
                />
              </Route>
            </Route>

            {/* 에코 프렌들리 */}
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

            {/* IT */}
            <Route path="it">
              <Route element={<BusinessLayout />}>
                <Route index element={<Navigate to="gpu-server" replace />} />
                <Route path="gpu-server" element={<It />} />
                <Route path="workstations" element={<It />} />
                <Route path="military" element={<It />} />
                <Route path="vehicle" element={<It />} />
                <Route path="edge-ai" element={<Business />} />
              </Route>
            </Route>

            {/* ========= 솔루션 카테고리 ========= */}
            <Route
              path="automation-solution"
              element={<SolutionAutomation />}
            />
            <Route path="eco-ai-solution" element={<SolutionEcoAI />} />
            <Route
              path="smart-factory-solution"
              element={<SolutionSmartFactory />}
            />
            <Route
              path="logistics-solution"
              element={<SolutionSmartLogistics />}
            />

            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
