import React from "react";
import MachineVisionSection from "./MachineVisionSection";
import IntroSection from "./IntroSection";
import ThermalImagingSection from "./ThermalImagingSection";
import HyperspectralSection from "./HyperspectralSection";
import SolutionHeading from "../components/SolutionHeading";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";
import ProductLines from "../components/ProductLines";
import ContenttBlock from "../components/ContenttBlock";
import ScrollToPosition from "../../../components/common/ScrollToPosition";

import img_products1 from "../../../assets/images/solution/vision-products(1).jpg";
import img_products2 from "../../../assets/images/solution/vision-products(2).jpg";
import img_products3 from "../../../assets/images/solution/vision-products(3).jpg";

export default function Vision() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="Vision solution-wrapper">
      <ScrollToPosition />
      <SolutionHeading
        title="Vision Solution"
        text="스마트 자동화를 위한 AI 기반 비전 시스템"
        currentPath="vision-solution"
      />
      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <IntroSection />
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
        <ContenttBlock className="products">
          <ProductLines data={products} category="vision-system" />
        </ContenttBlock>
      </div>
    </div>
  );
}

const tabs = [
  { id: "intro", label: "비전 시스템이란?" },
  { id: "machine", label: "머신비전" },
  { id: "thermal", label: "열화상" },
  { id: "spectral", label: "초분광" },
  { id: "products", label: "제품 보기" },
];

const products = [
  {
    label: "머신비전 카메라",
    img: img_products1,
    path: `machine-vision`,
    texts: [
      "다양한 산업 환경에서 발생하는 시각 처리 문제를 해결하기 위해  설계된 AI 기반 머신 비전 시스템.",
      "딥러닝과 2D/3D 비전 알고리즘을 기반으로 다양한 작업을 정밀하고 안정적으로 수행하며, 사용자의 편의성과 확장성을 모두 고려한 시스템.",
    ],
  },
  {
    label: "열화상 카메라",
    img: img_products2,
    path: `thermal-camera`,
    texts: [
      "열화상카메라는 적외선 기반의 비접촉식 온도 감지 기술을 활용하여 사람이나 설비의 온도를 실시간으로 측정하고 모니터링 가능.",
      "AI 비전 기술과 결합되어 자동으로 고온 이상 징후를 탐지하고, 위험 요인을 신속하게 경고함으로써 안전성과 효율성을 동시에 향상",
    ],
  },
  {
    label: "초분광 카메라",
    img: img_products3,
    path: `spectral-camera`,
    texts: [
      "초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행",
      "AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능",
    ],
  },
];
