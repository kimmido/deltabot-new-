import React from "react";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";

import ScrollToPosition from "../../../components/common/ScrollToPosition";
import SolutionHeading from "../components/SolutionHeading";
import IntroSection from "./IntroSection";
import EndSection from "./EndSection";

export default function SmartFactory() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="SmartFactory solution-wrapper" data-theme="petrol-blue">
      <ScrollToPosition />
      <SolutionHeading
        title="Smart Factory Solution"
        text="미래를 만드는 힘, 델타봇이 만드는 스마트팩토리로!"
        currentPath="smart-factory-solution"
      />
      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <IntroSection />
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <EndSection />
      </div>
    </div>
  );
}

const tabs = [
  { id: "intro", label: "스마트 팩토리" },
  { id: "end", label: "정부 지원 방법" },
];
