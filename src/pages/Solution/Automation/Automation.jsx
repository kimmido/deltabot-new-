import React from "react";
import AutomationVideos from "./components/AutomationVideos";
import StepFlow from "../components/StepFlow";
import ApplicationsSection from "./ApplicationsSection";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";
import SolutionHeading from "../components/SolutionHeading";
import ContenttBlock from "../components/ContenttBlock";
import ProductLines from "../components/ProductLines";

import img1 from "../../../assets/images/solution/automation(1).svg";
import img2 from "../../../assets/images/solution/automation(2).svg";
import img3 from "../../../assets/images/solution/automation(3).jpg";
import img_products1 from "../../../assets/images/solution/automation-products(1).jpg";
import img_products2 from "../../../assets/images/solution/automation-products(2).jpg";
import img_products3 from "../../../assets/images/solution/automation-products(3).jpg";
import img_products4 from "../../../assets/images/solution/automation-products(4).jpg";

const tabs = [
  { id: "intro", label: "자동화 솔루션" },
  { id: "section1", label: "활용분야" },
  { id: "products", label: "제품 보러가기" },
];

function Automation() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="Automation solution-wrapper">
      <SolutionHeading
        title="Automation Solution"
        text="공정에 최적화된 로봇 자동화 솔루션"
        currentPath="automation-solution"
      />

      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <ContenttBlock className="cnt01">
          <p className="intro-desc">
            정확한 진단부터 최적 설계, 정밀 제작·설치, 철저한 테스트, 전문 교육,
            그리고 체계적인 유지보수까지, 검증된 기술력으로 신뢰할 수 있는
            자동화 솔루션을 제공합니다.
          </p>
        </ContenttBlock>

        <ContenttBlock
          className="cnt02"
          size={900}
          title={"공장 자동화 라인 구축 절차"}
        >
          <img src={img1} alt="공장 자동화 라인 구축 절차" />
        </ContenttBlock>

        <ContenttBlock
          className="cnt03"
          size={1100}
          title={"로봇 자동화 프로세스"}
        >
          <img src={img2} alt="로봇 자동화 프로세스" />
          <p className="cnt-desc">
            뎉타봇은 로봇, 비전, 컨베이어, AI 제어 등 첨단 기술 기반의 자동화
            라인 구축 및, 정밀한 분석과 검증된 설계로 공장의 스마트 팩토리를
            완성합니다.
          </p>
        </ContenttBlock>

        <ContenttBlock
          className="cnt03"
          size={900}
          title={"로봇 자동화의 이점"}
        >
          <img src={img3} alt="로봇 자동화의 이점" />
        </ContenttBlock>

        <ContenttBlock className="cnt05" title={"자동화 공정"}>
          <StepFlow steps={cnt05.steps} />
        </ContenttBlock>
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <div className="cnt06">
          <div className="container">
            <ApplicationsSection />
          </div>
        </div>
      </div>

      <div id={tabs[2].id} ref={getRef(tabs[2].id)}>
        <ContenttBlock className="products">
          <ProductLines data={products} category="robot-automation" />
        </ContenttBlock>
      </div>
    </div>
  );
}

const products = [
  {
    label: "협동로봇",
    img: img_products1,
    path: `collaboration`,
    texts: [
      "협동로봇은 사람과 직접 협업이 가능하도록 설계된 산업용 로봇",
      "펜스 없이 설치 가능하며, 충돌 감지, 속도 제어 등 안전 기능이 내장된 것이 특징",
    ],
  },
  {
    label: "수직다관절 로봇",
    img: img_products2,
    path: `serial-robot`,
    texts: [
      "6축 다관절 로봇은 사람의 팔처럼 6개의 회전 축(Joint)을 가진 로봇",
      "복잡한 궤적이나 다양한 각도의 움직임을 구현할 수 있는 가장 범용적인 산업용 로봇",
    ],
  },
  {
    label: "델타로봇",
    img: img_products3,
    path: `deltarobot`,
    texts: [
      "델타 로봇은 삼각 구조의 링크를 가진 병렬 메커니즘 기반 로봇",
      "주로 고속 피킹/패킹 공정에 사용되며, 분당 60~90 개의 제품을 분류하거나 집을 수 있는 고속 자동화 로봇",
    ],
  },
  {
    label: "AMR",
    img: img_products4,
    path: `amr`,
    texts: [
      "스스로 주변 환경을 인식하고, 경로를 계획해서 목적지까지 이동할 수 있는 자율주행 이동 로봇",
      "공장, 창고, 병원, 사무실 등 다양한 환경에서 물건을 운반하거나 특정 작업을 수행할 수 있도록 설계된 로봇",
    ],
  },
];

const cnt05 = {
  steps: [
    {
      iconName: "icon_conveyor",
      title: "원자재 투입",
      text: "컨베어 이송",
    },
    {
      iconName: "icon_robot_face",
      title: "AMR / AGV",
      text: "바퀴 달린 로봇 이송",
    },
    {
      iconName: "icon_robot_arm",
      title: "로봇작업",
      text: "협동 로봇 Pick & Place",
    },
    {
      iconName: "icon_gears_two",
      title: "조립 / 작업",
      text: "다관절 및 협동 로봇",
    },
    {
      iconName: "icon_eye_solid",
      title: "비전 검사",
      text: "제품 상태 판정",
    },
    {
      iconName: "icon_industry",
      title: "출고",
      text: "팔레타이징 다관절 로봇",
    },
  ],
};

export default Automation;
