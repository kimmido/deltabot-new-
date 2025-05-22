import React, { useRef } from "react";
import MachineVisionSection from "./components/Vision/MachineVisionSection";
import VisionIntro from "./components/Vision/VisionIntro";
import ThermalImagingSection from "./components/Vision/ThermalImagingSection";
import HyperspectralSection from "./components/Vision/HyperspectralSection";
import TabMenu from "../../components/UI/TabMenu";
import SolutionHeading from "./components/SolutionHeading";
import ScrollTabs, { useScrollTabsRefs } from "./components/ScrollTabs";

const tabs = [
  { id: "intro", label: "비전 시스템이란?" },
  { id: "section1", label: "머신비전" },
  { id: "section2", label: "열화상" },
  { id: "section3", label: "초분광" },
  { id: "products", label: "제품 보러가기" },
];

function Vision() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="Vision solution-wrapper">
      <SolutionHeading
        title="Vision Solution"
        text="스마트 자동화를 위한 AI 기반 비전 시스템"
        currentPath="vision-solution"
      />
      <ScrollTabs tabs={tabs} offset="88" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <VisionIntro />
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <MachineVisionSection />
      </div>

      <div id={tabs[2].id} ref={getRef(tabs[2].id)}>
        <ThermalImagingSection />
      </div>

      <div id={tabs[3].id} ref={getRef(tabs[3].id)}>
        <HyperspectralSection />
      </div>

      <div id={tabs[4].id} ref={getRef(tabs[4].id)}>
        <section>
          <h3 className="sec__title">제품</h3>
        </section>
      </div>
    </div>
  );
}

export default Vision;
