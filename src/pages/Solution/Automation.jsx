import React from "react";
import PageHeading from "../../components/UI/PageHeading";
import AutomationVideos from "./components/AutomationVideos";

import img1 from "../../assets/images/solution/automation(1).svg";
import img2 from "../../assets/images/solution/automation(2).svg";
import img3 from "../../assets/images/solution/automation(3).jpg";
import StepFlow from "./components/StepFlow";
import Applications from "./components/Applications";

function Automation() {
  return (
    <div className="Automation">
      <div className="container">
        <PageHeading title="automation" currentPath="automation" />
        <strong>공정에 최적화된 로봇 자동화 솔루션</strong>
        <p>
          정확한 진단부터 최적 설계, 정밀 제작·설치, 철저한 테스트, 전문 교육,
          그리고 체계적인 유지보수까지, 검증된 기술력으로 신뢰할 수 있는 자동화
          솔루션을 제공합니다.
        </p>
        <div>
          <h3>공장 자동화 라인 구축 절차</h3>
          <img
            className="cnt--img"
            src={img1}
            alt="공장 자동화 라인 구축 절차"
          />
        </div>
        <div>
          <h3>로봇 자동화 프로세스</h3>
          <img className="cnt--img" src={img2} alt="로봇 자동화 프로세스" />
        </div>
        <p>
          뎉타봇은 로봇, 비전, 컨베이어, AI 제어 등 첨단 기술 기반의 자동화 라인
          구축 및, 정밀한 분석과 검증된 설계로 공장의 스마트 팩토리를
          완성합니다.
        </p>
        <div>
          <h3>로봇 자동화 프로세스</h3>
          <img className="cnt--img" src={img3} alt="로봇 자동화의 이점" />
        </div>
        <div>
          <StepFlow />
        </div>
        <AutomationVideos />
        <Applications />
      </div>
    </div>
  );
}

export default Automation;
