import React from "react";
import Home from "./pages/Home/Home";
// import GlobalStyles from "./assets/styles/GlobalStyle";
import "@styles/main.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import BusinessLayout from "./layouts/BusinessLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="automation" element={<AutomationOverview />} />
          <Route path="recycling" element={<RecyclingOverview />} />
          <Route path="medical" element={<MedicalOverview />} />
          <Route path="it" element={<ITOverview />} />
          <Route path="about" element={<CompanyIntroduction />} /> */}
          {/* <Route
            path="/automation"
            element={<Navigate to="/automation/deltarobot" />}

          /> */}
          <Route path="/automation" element={<BusinessLayout />} />
          {/* <Route
            path="/recycling"
            element={<Navigate to="/recycling/system" />}
          />
          <Route path="/medical" element={<Navigate to="/medical/pcr" />} />
          <Route path="/it" element={<Navigate to="/it/gpu" />} /> */}
        </Route>

        {/* <GlobalStyles /> */}
        {/* 상세 레이아웃 적용 */}
        {/* <Route path="automation/detail/:id" element={<DetailLayout />}>
          <Route path=":id" element={<div>상세 페이지</div>} />
          </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
