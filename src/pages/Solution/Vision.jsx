import React from "react";
import PageHeading from "../../components/UI/PageHeading";
import StepFlow from "./components/StepFlow";
import Applications from "./components/Applications";

import MachineVisionSection from "./components/Vision/MachineVisionSection";
import VisionIntro from "./components/Vision/VisionIntro";
import ThermalImagingSection from "./components/Vision/ThermalImagingSection";

function Recycling() {
  const data = {
    steps: [
      {
        iconName: "icon_lightbulb_solid",
        title: "조명",
        text: "제품 인식 정확도 향상을 위한 광원",
      },
      {
        iconName: "icon_camera_solid",
        title: "카메라 + 렌즈",
        text: "제품 이미지 촬영 및 초점 조정",
      },
      {
        iconName: "icon_microchip_solid",
        title: "영상처리기",
        text: "이미지 분석 및 특징 인식",
      },
      {
        iconName: "icon_brain_solid",
        title: "판단 결과",
        text: "OK/NG 판정 또는 정보 추출",
      },
      {
        iconName: "icon_robot_face",
        title: "로봇 / PLC 제어",
        text: "로봇이 피킹, 리젝트 등 수행",
      },
    ],
  };

  return (
    <div className="Vision solution-wrapper">
      <div className="container">
        <PageHeading title="vision" currentPath="vision-solution" />
        <VisionIntro />
        <StepFlow title="비전시스템 흐름 구성도" steps={data.steps} />
      </div>

      <MachineVisionSection />
      <ThermalImagingSection />
      <section>
        <h3 className="sec__title"></h3>
        {/* <img className="sec-img" src={img3} alt="로봇 자동화의 이점" /> */}
      </section>
    </div>
  );
}

export default Recycling;
