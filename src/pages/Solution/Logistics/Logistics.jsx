import React from "react";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";

import ScrollToPosition from "../../../components/common/ScrollToPosition";
import SolutionHeading from "../components/SolutionHeading";
import IntroSection from "./IntroSection";
import FactorySection from "./FactorySection";
import WarehouseSection from "./WarehouseSection";

function Logistics() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="Logistics solution-wrapper" data-theme="trust-sky-blue">
      <ScrollToPosition />
      <SolutionHeading
        title="로지스틱스 혁신 솔루션"
        text="데이터, 자동화, 그리고 AI를 통합하여 고객의 공급망을 디지털 전환합니다."
        currentPath="logistics-solution"
      />
      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <IntroSection />
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <FactorySection />
      </div>

      <div id={tabs[2].id} ref={getRef(tabs[2].id)}>
        <WarehouseSection />
      </div>
    </div>
  );
}

const tabs = [
  { id: "intro", label: "로지스틱 솔루션" },
  { id: "production", label: "스마트 공장" },
  { id: "warehouse", label: "스마트 창고" },
  { id: "logistics", label: "스마트 물류" },
  { id: "product", label: "제품 소개" },
];

export default Logistics;
