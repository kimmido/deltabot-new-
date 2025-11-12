import React from "react";
import ApplicationsSection from "./ApplicationsSection";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";
import SolutionHeading from "../components/SolutionHeading";
import ContenttBlock from "../components/ContenttBlock";
import ProductLines from "../components/ProductLines";
import ScrollToPosition from "../../../components/common/ScrollToPosition";
import IntroSection from "./IntroSection";

import img_products1 from "../../../assets/images/solution/automation-products(1).jpg";
import img_products2 from "../../../assets/images/solution/automation-products(2).jpg";
import img_products3 from "../../../assets/images/solution/automation-products(3).jpg";
import img_products4 from "../../../assets/images/solution/automation-products(4).jpg";
import img_products5 from "../../../assets/images/solution/automation-products(5).jpg";

export default function Automation() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="Automation solution-wrapper">
      <ScrollToPosition />
      <SolutionHeading
        title="Automation Solution"
        text="검증된 기술력으로 완성하는 신뢰의 자동화 솔루션"
        currentPath="automation-solution"
      />

      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <IntroSection />
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <div className="app-section-wrap">
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

const tabs = [
  { id: "intro", label: "자동화 솔루션" },
  { id: "section1", label: "활용분야" },
  { id: "products", label: "PRODUCT LINES" },
];

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
    label: "코봇 팔레타이징",
    img: img_products3,
    path: `palletizing`,
    texts: [
      "고급 센서를 갖춘 코봇으로 인간 작업자와 안전하게 협력하며 팔레트 적재 작업을 수행합니다",
      "모듈식 유연한 설치와 빠른 재배치를 통해 물류 라인의 적재 효율을 극대화합니다.",
    ],
  },
  {
    label: "델타로봇",
    img: img_products4,
    path: `deltarobot`,
    texts: [
      "델타 로봇은 삼각 구조의 링크를 가진 병렬 메커니즘 기반 로봇",
      "주로 고속 피킹/패킹 공정에 사용되며, 분당 60~90 개의 제품을 분류하거나 집을 수 있는 고속 자동화 로봇",
      "고정밀 트레이 배치, 분류 및 부착 작업을 수행합니다. 전자, 하드웨어, 의료, 자동차, 반도체 등 다양한 산업 분야에서 널리 사용",
    ],
  },
  {
    label: "AMR",
    img: img_products5,
    path: `amr`,
    texts: [
      "스스로 주변 환경을 인식하고, 경로를 계획해서 목적지까지 이동할 수 있는 자율주행 이동 로봇",
      "공장, 창고, 병원, 사무실 등 다양한 환경에서 물건을 운반하거나 특정 작업을 수행할 수 있도록 설계된 로봇",
    ],
  },
];
