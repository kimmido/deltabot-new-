import React from "react";
import { HighlightText } from "../../../components/UI/HighlightText";
import img01_1 from "../../../assets/images/solution/logistics/logistics(1-1).svg";
import img01_2 from "../../../assets/images/solution/logistics/logistics(1-2).svg";
import img01_3 from "../../../assets/images/solution/logistics/logistics(1-3).svg";
import img01_4 from "../../../assets/images/solution/logistics/logistics(1-4).svg";
import img02 from "../../../assets/images/solution/smart_factory/smart_factory(2).svg";
import img03 from "../../../assets/images/solution/smart_factory/smart_factory(3).svg";
import img04_1 from "../../../assets/images/solution/smart_factory/smart_factory(4-1).svg";
import img04_2 from "../../../assets/images/solution/smart_factory/smart_factory(4-2).svg";

export default function IntroSection() {
  return (
    <section className="IntroSection">
      <section className="cnt01 container">
        <div className="intro-desc">
          {cnt01.texts.map((text, idx) => (
            <p key={idx}>
              <HighlightText text={text} keyChar="#" />
            </p>
          ))}
        </div>
      </section>

      <section className="section cnt02 bg-section--py-lg">
        <div className="container">
          <h3 className="cnt-title">솔루션 도입효과</h3>
          <div className="cnt-desc">
            <p>
              효율, 안전, 유연 — 물류의 새로운 기준을 제시하는 차세대 솔루션
            </p>
          </div>
          <div className="grid-block grid-block--four-col">
            <img src={img01_1} alt="운영 효율성 극대화" />
            <img src={img01_2} alt="안전성 최고 수준 확보" />
            <img src={img01_3} alt="유연성 및 대응력 강화" />
            <img src={img01_4} alt="새로운 물류 표준 제시" />
          </div>
        </div>
      </section>
    </section>
  );
}

const cnt01 = {
  texts: [
    "로지스틱스 혁신 솔루션은 산업 현장의 고질적인 문제였던 고비용 구조와 낮은 운영 효율성을 극복하기 위해 설계되었습니다.",
    "#스마트 생산 환경#에서는 로봇 및 자동화 기술을 도입하여 수작업을 최소화하고, 위험성 평가 기반의 표준 공정으로 안전성을 극대화합니다. 동시에 #고도화된 스마트 창고 및 물류 시스템#은 WMS와 수요 예측 데이터를 활용하여 재고, 공간, 인력 자원을 최적으로 배치하고 유연성을 확보합니다.",
    "이처럼 생산부터 물류까지 전 공급망(Supply Chain)을 통합 관리함으로써, 숨겨진 낭비 요소를 제거하고 프로세스를 최적화하여 최고 수준의 신뢰성, 안전성, 그리고 운영 효율성을 달성하는 새로운 로지스틱스 표준을 제시합니다.",
  ],
};
