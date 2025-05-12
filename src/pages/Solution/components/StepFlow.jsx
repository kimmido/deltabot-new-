import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StepFlow() {
  return (
    <section className="StepFlow">
      <h3>자동화 공정</h3>
      <div className="flow-wrapper">
        <div className="step">
          <i className="fas fa-box-open"></i>
          <div className="step-title">원자재 투입</div>
          <div className="step-sub">컨베어 이송</div>
        </div>
        <div className="arrow-right">→</div>

        <div className="step">
          <FontAwesomeIcon icon="fa-solid fa-robot" />
          <div className="step-title">AMR / AGV</div>
          <div className="step-sub">바퀴 달린 로봇 이송</div>
        </div>
        <div className="arrow-right">→</div>

        <div className="step">
          {/* <FontAwesomeIcon icon="fa-solid fa-handshake" /> */}
          <div className="step-title">로봇작업</div>
          <div className="step-sub">협동 로봇 Pick & Place</div>
        </div>
        <div className="arrow-right">→</div>

        <div className="step">
          <FontAwesomeIcon icon="fa-solid fa-cogs" />
          <div className="step-title">조립 / 작업</div>
          <div className="step-sub">다관절 및 협동 로봇</div>
        </div>
        <div className="arrow-right">→</div>

        <div className="step">
          <FontAwesomeIcon icon="fa-solid fa-eye" />
          <div className="step-title">비전 검사</div>
          <div className="step-sub">제품 상태 판정</div>
        </div>
        <div className="arrow-right">→</div>

        <div className="step">
          <FontAwesomeIcon icon="fa-solid fa-industry" />
          <div className="step-title">출고</div>
          <div className="step-sub">팔레타이징 다관절 로봇</div>
        </div>
      </div>
    </section>
  );
}

export default StepFlow;
