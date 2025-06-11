import React from "react";
import SolutionHeading from "../components/SolutionHeading";
import CleaningRobotSection from "./CleaningRobotSection";
import RecyclingRobotSection from "./RecyclingRobotSection";
import ScrollTabs, { useScrollTabsRefs } from "../components/ScrollTabs";
import ProductLines from "../components/ProductLines";
import ContenttBlock from "../components/ContenttBlock";

import img_cnt02 from "../../../assets/images/solution/eco-ai(1).svg";
import img_products1 from "../../../assets/images/solution/ecoai-products(1).jpg";
import img_products2 from "../../../assets/images/solution/ecoai-products(2).jpg";

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
          <p className="intro-desc">
            자원은 단순히 한 번 사용되고 버려지는 것이 아니라, 순환을 통해 다시
            활용될 수 있는 소중한 자산입니다. 자원의 채취부터 생산, 소비, 폐기,
            재활용, 에너지 회수, 최종 처리에 이르기까지의 전 과정을 고려해
            자원을 효율적으로 관리합니다. 이를 통해 폐기물을 최소화하고, 환경에
            미치는 영향을 줄이며, 지속 가능한 미래를 실현할 수 있습니다. 기업과
            개인 모두가 순환 구조를 실천함으로써 친환경적이고 책임 있는 소비와
            생산에 기여할 수 있습니다.
          </p>
        </div>

        <ContenttBlock
          className="cnt02"
          size={1100}
          title="지속 가능한 미래를 위한 7단계 순환 프로세스"
        >
          <img
            className="container--m"
            src={img_cnt02}
            alt="지속 가능한 미래를 위한 7단계 순환 프로세스"
          />
          <p>
            자원의 선순환은 단순한 환경 보호를 넘어, 경제적 지속 가능성을
            실현하는 핵심 전략입니다. 생산부터 소비, 폐기, 재활용까지 전 과정을
            유기적으로 연결함으로써 자원의 낭비를 줄이고, 에너지 효율을 높이며
            환경 오염을 최소화할 수 있습니다. 이러한 구조는 기업의 사회적 책임을
            실현함과 동시에 장기적인 비용 절감과 경쟁력 향상에도 기여합니다.
          </p>
          <dl className="bullets">
            <div class="dl-item">
              <dt>친환경 수면 정화 로봇</dt>
              <dd>
                도심 하천, 저수지, 수변 공원 등 다양한 수상 환경에서 부유 쓰레기
                수거, 수초 제거, 수질 모니터링을 자동으로 수행하여 수생 생태계를
                효과적으로 보호합니다.
              </dd>
            </div>
            <div class="dl-item">
              <dt>재활용 로봇 시스템</dt>
              <dd>
                인공지능과 로봇 자동화 기술을 융합하여 폐기물의 자동 분류와
                재자원화 과정을 고도화합니다. 이를 통해 기존 수작업 방식의
                한계를 극복하고, 자원의 효율적 순환을 실현합니다.
              </dd>
            </div>
          </dl>
          <p>
            이 두 솔루션은 독립적으로도 강력한 성능을 발휘하지만, 함께 운영될
            경우 도시 및 산업 환경 전반에 걸쳐 통합적이고 지속 가능한 자원관리
            체계를 구축할 수 있습니다. 이는 생태계 보전은 물론, ESG 경영 실현과
            운영 효율성 향상이라는 미래 지향적 가치를 제공합니다.
          </p>
        </ContenttBlock>
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
    label: "Recycling Robot",
    img: img_products2,
    path: `recycling-robot`,
    texts: [
      "자원순환형 재활용 로봇 시스템은 로봇 자동화 기술과 인공지능(AI)을 융합하여, 폐기물의 자동 선별, 처리, 재자원화 과정을 지능적으로 수행하는 차세대 자원 순환 솔루션",
    ],
  },
];

export default EcoAI;
