import React from "react";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";

import ScrollToPosition from "@components/common/ScrollToPosition";
import SolutionHeading from "../components/SolutionHeading";
import IntroSection from "./IntroSection";
import FactorySection from "./FactorySection";
import WarehouseSection from "./WarehouseSection";
import FulfillmentSection from "./FulfillmentSection";
import ProductLines from "../components/ProductLines";

import img_products1 from "@assets/images/solution/vision-products(1).jpg";
import img_products2 from "@assets/images/solution/vision-products(2).jpg";
import img_products3 from "@assets/images/solution/vision-products(3).jpg";

export default function Logistics() {
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

      <div id={tabs[3].id} ref={getRef(tabs[3].id)}>
        <FulfillmentSection />
      </div>

      <div id={tabs[4].id} ref={getRef(tabs[4].id)}>
        <div className="container section">
          <ProductLines data={products} category="logistics" />
        </div>
      </div>
    </div>
  );
}

const tabs = [
  { id: "intro", label: "로지스틱 솔루션" },
  { id: "production", label: "스마트 공장" },
  { id: "warehouse", label: "스마트 창고" },
  { id: "fulfillment", label: "스마트 물류" },
  { id: "product", label: "제품 소개" },
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
