import React from "react";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";

import ScrollToPosition from "@components/common/ScrollToPosition";
import SolutionHeading from "../components/SolutionHeading";
import IntroSection from "./IntroSection";
import FactorySection from "./FactorySection";
import WarehouseSection from "./WarehouseSection";
import FulfillmentSection from "./FulfillmentSection";
import ProductLines from "../components/ProductLines";

import img_products1 from "@assets/images/solution/logistics/logistics-products(1).jpg";
import img_products2 from "@assets/images/solution/logistics/logistics-products(2).jpg";
import img_products3 from "@assets/images/solution/logistics/logistics-products(3).jpg";
import img_products4 from "@assets/images/solution/logistics/logistics-products(4).jpg";

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
    label: "i-ROBOT",
    img: img_products1,
    path: "i-robot",
    texts: [
      "첨단 4D 비전 및 레이더 기반의 자율 구동",
      "초정밀 지능형 코봇은 신속성, 고정밀, 청결 등의 강점을 바탕으로 물류 및 재고 관리 분야에서 높은 수요를 보입니다.",
      "다양한 산업 적용: 물류, 제조, 의료 등 폭넓은 분야에서 자동화를 증진합니다.",
    ],
  },
  {
    label: "자동분류시스템",
    img: img_products4,
    path: "automated-sorting-system",
    texts: [
      "융합된 첨단 머신 비전 기술로 바코드/계량/부피를 동시 측정합니다.",
      "뛰어난 처리 속도 및 데이터 수집 성능으로 시간당 7,200개 이상 처리하여 데이터 수집의 효율성을 높입니다.",
      "고성능 바코드 판독 시스템으로 Code 128, EAN 등을 포함한 광범위한 바코드 유형을 판독합니다.",
    ],
  },
];
