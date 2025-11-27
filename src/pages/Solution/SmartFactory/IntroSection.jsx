import React from "react";
import { HighlightText } from "../../../components/UI/HighlightText";
import img01 from "../../../assets/images/solution/smart_factory/smart_factory(1).svg";
import img02 from "../../../assets/images/solution/smart_factory/smart_factory(2).svg";
import img03 from "../../../assets/images/solution/smart_factory/smart_factory(3).svg";
import img04_1 from "../../../assets/images/solution/smart_factory/smart_factory(4-1).svg";
import img04_2 from "../../../assets/images/solution/smart_factory/smart_factory(4-2).svg";

export default function IntroSection() {
  return (
    <section className="IntroSection">
      <section className="cnt01 container">
        <p className="intro-desc">
          {cnt01.texts.map((text, idx) => (
            <p key={idx}>
              <HighlightText text={text} keyChar="#" />
            </p>
          ))}
        </p>
      </section>

      <section className="section cnt02 container">
        <h3 className="sec-title">
          1. 스마트 공장 <b>정의 & 비전</b>
        </h3>
        <p className="cnt-desc">
          {cnt02.texts.map((text, idx) => (
            <p key={idx}>
              <HighlightText text={text} keyChar="#" />
            </p>
          ))}
        </p>
        <img src={img01} alt="스마트팩토리 기술, 방식, 목표" />
      </section>

      <section className="section cnt03 container">
        <h3 className="sec-title">
          2. 스마트공장 <b>도입효과</b>
        </h3>
        <img src={img02} alt="스마트팩토리 도입효과 4가지" />
      </section>

      <section className="section cnt04 container">
        <h3 className="sec-title">
          3. <b>시스템 구성</b> 및 구현 방안
        </h3>
        <div className="sub-box ">
          <h4 className="sub-box__title">주요 시스템의 역할과 구성</h4>
          <img className="card" src={img03} alt="스마트팩토리 공정도" />
        </div>
        <p className="cnt-desc">
          {cnt04.texts.map((text, idx) => (
            <p key={idx}>
              <HighlightText text={text} keyChar="#" />
            </p>
          ))}
        </p>
      </section>

      <section className="section cnt05">
        <div className="container">
          <h3 className="sec-title">
            4. 스마트 공장 <b>도입 발전 방향</b> 및 <b>혁신 전략</b>
          </h3>
          <div className="sub-box background-light">
            <h4 className="sub-box__title">도입 단계별 로드맵</h4>
            <img className="card" src={img04_1} alt="도입 단계별 로드맵" />
          </div>
          <div className="sub-box">
            <h4 className="sub-box__title">
              스마트 공장 전환 후, 현장에서 일어나는 5가지 혁신
            </h4>
            <img
              className="card"
              src={img04_2}
              alt="스마트 공장의 5가지 혁신"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

const cnt01 = {
  texts: [
    "델타봇이 만들어가는 스마트 팩토리는 #제조 데이터의 투명성과 실시간 공유 체계를 구축#하여 #현장 이슈에 골든 타임 내 민첩하게 대응#하고,",
    "이를 통해 #생산성 향상, 비용 절감, 품질 혁신, 그리고 지속 가능한 성장#을 이끄는 #스마트팩토리의 굳건한 미래를 위한 초석#이 됩니다!",
  ],
};

const cnt02 = {
  texts: [
    " 스마트 공장은 AI, 빅데이터, IoT와 같은 첨단 ICT 기술을 활용하여 제품 기획부터 판매에 이르는 모든 생산 과정을 통합하고 지능화한 첨단 지능형 공장을 의미합니다.",
    "이러한 시스템은 산업용 로봇을 지능적으로 운영하며, #최소 비용과 시간으로 고객 맞춤형 제품을 유연하게 생산하는 것#을 목표로 합니다.",
  ],
};

const cnt04 = {
  texts: [
    "로봇 데이터를 가장 효율적으로 #수집·가공하는 저희만의 독자적인 솔루션#을 제공하여, #반복 작업을 자동화#하고, 로봇 프로그램 설계부터 현장 적용까지 걸리는 #시간을 크게 줄여드립니다.#",
    "#스마트 팩토리 환경에 꼭 맞는 생산 로봇 시스템#을 제공하여, 로봇 운영과 센서에서 나오는 다양한 데이터를 #엣지/클라우드 환경에서 실시간 통합 분석#하고 있습니다. 이러한 데이터 분석을 토대로, #AI 기반 지능형 최적화 및 제어 알고리즘#을 적용해 #예지 정비 및 불량 예측 기능#을 체계적으로 구축하고 있습니다. 더불어, 스마트 팩토리의 #핵심 시스템들과도 자연스럽게 연결#되어 #생산 공정의 자율성과 품질의 일관성을 높이고# 있습니다.",
  ],
};
