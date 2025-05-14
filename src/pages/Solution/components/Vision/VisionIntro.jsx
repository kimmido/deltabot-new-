import React from "react";

function VisionIntro() {
  return (
    <section className="VisionIntro">
      <strong className="cnt-emph">
        스마트 자동화를 위한 AI 기반 비전 시스템
      </strong>
      <p className="cnt-desc">
        <span className="break-point">
          비전 시스템이란, 카메라(이미지 센서)와{" "}
          <span className="highlight">광원</span>, 영상 처리 알고리즘(AI 포함)을
          이용하여 사람의 눈처럼{" "}
          <span className="highlight">
            사물을 보고 인식하고 판단하는 자동화 시스템 기계에게 눈을 달아주는
            기술
          </span>
          로, 공정의 눈이자 두뇌 역할을 수행하는 스마트 자동화 핵심 시스템
        </span>
        <span className="break-point">
          당사의 로봇 시스템은{" "}
          <span className="highlight">
            비전시스템을 기반으로하여 제품을 인식하는 통합 자동화 솔루션
          </span>
          입니다. 컨베이어, 비전, 로봇이 완벽하게 연동되어{" "}
          <span className="highlight">
            정확한 분류와 빠른 생산성을 동시에 확보
          </span>
          하며, 다양한 산업 분야에서{" "}
          <span className="highlight">품질 안정과 인건비 절감</span>
          효과를 입증하고 있습니다.
        </span>
      </p>

      <section>
        <h3 className="sec__title">머신 비전 시스템 구성 요소</h3>
      </section>
    </section>
  );
}

export default VisionIntro;
