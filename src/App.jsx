import React, { useEffect, lazy, Suspense } from "react";
import "@styles/main.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CategoryRoutesProvider from "./contexts/CategoryRoutesContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { HelmetProvider } from "react-helmet-async";

import DefaultLayout from "./layouts/DefaultLayout";
import BusinessLayout from "./layouts/BusinessLayout";
import ScrollToTop from "./utils/scrollToTop";
// import { ProductDataProvider } from "./contexts/ProductDataContext";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Business = lazy(() => import("./pages/Business/Business"));
const AutomationPage = lazy(() => import("./pages/Business/AutomationPage"));
const CompactProductPage = lazy(() =>
  import("./pages/Business/CompactProductPage")
);
const SolutionLayout = lazy(() => import("./layouts/SolutionLayout"));

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <HelmetProvider>
      <CategoryRoutesProvider>
        {/* <ProductDataProvider> */}
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
                    <Route path="collaboration" element={<AutomationPage />} />
                    <Route path="serial-robot" element={<AutomationPage />} />
                    <Route path="scara" element={<AutomationPage />} />
                    <Route path="cobot" element={<AutomationPage />} />
                    <Route path="deltarobot" element={<AutomationPage />} />
                    <Route path="case-packer" element={<AutomationPage />} />
                    <Route path="amr" element={<AutomationPage />} />
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

                <Route path="recycling-system">
                  <Route element={<BusinessLayout />}>
                    <Route
                      index
                      element={<Navigate to="single-robot" replace />}
                    />
                    <Route
                      path="single-robot"
                      element={<CompactProductPage />}
                    />
                    <Route
                      path="tandem-robot"
                      element={<CompactProductPage />}
                    />
                  </Route>
                </Route>

                <Route path="medical">
                  <Route element={<BusinessLayout />}>
                    <Route index element={<Navigate to="pcr" replace />} />
                    <Route path="pcr" element={<CompactProductPage />} />
                    <Route path="uv" element={<CompactProductPage />} />
                  </Route>
                </Route>

                <Route path="information-technology">
                  <Route element={<BusinessLayout />}>
                    <Route
                      index
                      element={<Navigate to="gpu-server" replace />}
                    />
                    <Route path="gpu-server" element={<Business />} />
                    <Route path="workstations" element={<Business />} />
                    <Route path="rack-mount" element={<Business />} />
                    <Route path="military" element={<Business />} />
                    <Route path="vehicle" element={<Business />} />
                  </Route>
                </Route>

                <Route path="humanoid">
                  <Route element={<BusinessLayout />}>
                    <Route
                      index
                      element={<Navigate to="humanoid1" replace />}
                    />
                    <Route path="humanoid1" element={<Business />} />
                    <Route path="humanoid2" element={<Business />} />
                  </Route>
                </Route>

                <Route
                  path="automation-solution"
                  element={<SolutionLayout />}
                />
                <Route path="recycling-solution" element={<SolutionLayout />} />
                <Route path="pcr-solution" element={<SolutionLayout />} />
                <Route path="uv-solution" element={<SolutionLayout />} />
                <Route path="about" element={<About />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        {/* </ProductDataProvider> */}
      </CategoryRoutesProvider>
    </HelmetProvider>
  );
}

export default App;
