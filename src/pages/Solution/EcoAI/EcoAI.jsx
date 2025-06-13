import React from "react";
import SolutionHeading from "../components/SolutionHeading";
import CleaningRobotSection from "./CleaningRobotSection";
import RecyclingRobotSection from "./RecyclingRobotSection";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";
import ProductLines from "../components/ProductLines";
import ContenttBlock from "../components/ContenttBlock";

import img_products1 from "../../../assets/images/solution/ecoai-products(1).jpg";
import img_products2 from "../../../assets/images/solution/ecoai-products(2).jpg";
import IntroSection from "./IntroSection";

export default function EcoAI() {
  const { sectionRefs, getRef } = useScrollTabsRefs(tabs);

  return (
    <div className="EcoAI solution-wrapper">
      <div className="heading">
        <SolutionHeading
          title="Eco-AI Solution"
          text="친환경 로봇과 재활용 시스템이 만드는 순환의 미래"
          currentPath="eco-ai-solution"
        />
      </div>
      <ScrollTabs tabs={tabs} offset="138" sectionRefs={sectionRefs} />

      <div id={tabs[0].id} ref={getRef(tabs[0].id)}>
        <IntroSection />
      </div>

      <div id={tabs[1].id} ref={getRef(tabs[1].id)}>
        <CleaningRobotSection />
      </div>

      <div id={tabs[2].id} ref={getRef(tabs[2].id)}>
        <RecyclingRobotSection />
      </div>

      <div id={tabs[3].id} ref={getRef(tabs[3].id)}>
        <ContenttBlock>
          <ProductLines data={products} category="eco-friendly-robot" />
        </ContenttBlock>
      </div>
    </div>
  );
}

const tabs = [
  { id: "intro", label: "Eco AI 솔루션" },
  { id: "section1", label: "수면 정화 로봇" },
  { id: "section2", label: "재활용 로봇" },
  { id: "products", label: "제품 보러가기" },
];

const products = [
  {
    label: "Cleaning Robot",
    img: img_products1,
    path: `cleaning-robot`,
    texts: [
      "도심 하천, 저수지, 인공 수로, 공원 수변 공간 등 다양한 수상 환경에서의 수질 개선과 생태계 보호를 위한 차세대 수면 관리 로봇 솔루션",
      "수면 위의 부유 쓰레기 수거와 수중 수초 제거를 위한 각기 다른 기능의 첨단 로봇들은, 작업 효율성과 운용 안전성을 극대화하도록 설계함.",
    ],
  },
  {
    label: "Recycling Robot",
    img: img_products2,
    path: `recycling-robot`,
    texts: [
      "자원순환형 재활용 로봇 시스템은 로봇 자동화 기술과 인공지능(AI)을 융합하여, 폐기물의 자동 선별, 처리, 재자원화 과정을 지능적으로 수행하는 차세대 자원 순환 솔루션",
    ],
  },
];
