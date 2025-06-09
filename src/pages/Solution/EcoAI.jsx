import React from "react";
import SolutionHeading from "./components/SolutionHeading";
import CleaningRobotSection from "./components/EcoAI/CleaningRobotSection";
import RecyclingRobotSection from "./components/EcoAI/RecyclingRobotSection";
import ScrollTabs, { useScrollTabsRefs } from "./components/ScrollTabs";
import ProductLines from "./components/ProductLines";
import ContenttBlock from "./components/ContenttBlock";

import img_products1 from "../../assets/images/solution/ecoai-products(1).jpg";
import img_products2 from "../../assets/images/solution/ecoai-products(2).jpg";

const tabs = [
  { id: "intro", label: "Eco AI 솔루션" },
  { id: "section1", label: "수면 정화 로봇" },
  { id: "section2", label: "재활용 로봇" },
  { id: "products", label: "제품 보러가기" },
];

function EcoAI() {
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
        <div className="container">
          <p className="cnt-desc">
            자원순환은 폐기물 발생을 최대한 억제하고, 발생한 폐기물은 가능한 한
            재사용하거나 재생이용하며, 불가피하게 남는 폐기물에 대해서는 환경에
            미치는 영향을 최소화하여 처리하는 개념이다. 자원과 에너지의 흐름이
            단순 소비로 끝나는 것이 아니라, 생산–소비–재활용–열회수–처리로
            이어지는 순환 구조로 전환되어야 한다. 기존에는 폐기물의 ‘처리’에
            초점을 맞췄다면, 자원순환은 폐기물의 ‘발생 자체를 줄이는 것’에
            중점을 둔다.
          </p>
        </div>
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
    label: "Recycling Robo",
    img: img_products2,
    path: `recycling-robot`,
    texts: [
      "자원순환형 재활용 로봇 시스템은 로봇 자동화 기술과 인공지능(AI)을 융합하여, 폐기물의 자동 선별, 처리, 재자원화 과정을 지능적으로 수행하는 차세대 자원 순환 솔루션",
    ],
  },
];

export default EcoAI;
