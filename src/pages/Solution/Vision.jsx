import React from "react";
import PageHeading from "../../components/UI/PageHeading";

import MachineVisionSection from "./components/Vision/MachineVisionSection";
import VisionIntro from "./components/Vision/VisionIntro";
import ThermalImagingSection from "./components/Vision/ThermalImagingSection";
import HyperspectralSection from "./components/Vision/HyperspectralSection";
import TabMenu from "../../components/UI/TabMenu";
import SolutionHeading from "./components/SolutionHeading";

function Vision() {
  return (
    <div className="Vision solution-wrapper">
      <div className="heading">
        <SolutionHeading
          title="Vision"
          text="스마트 자동화를 위한 AI 기반 비전 시스템"
          currentPath="vision-solution"
        />
      </div>
      <div className="container">
        <VisionIntro />
      </div>

      <MachineVisionSection />
      <ThermalImagingSection />
      <HyperspectralSection />
      <section>
        <h3 className="sec__title"></h3>
        {/* <img className="sec-img" src={img3} alt="로봇 자동화의 이점" /> */}
      </section>
    </div>
  );
}

export default Vision;
