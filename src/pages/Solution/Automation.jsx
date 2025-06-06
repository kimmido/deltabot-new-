import React from "react";
import PageHeading from "../../components/UI/PageHeading";
import AutomationVideos from "./components/AutomationVideos";
import StepFlow from "./components/StepFlow";
import Applications from "./components/Applications";

import img1 from "../../assets/images/solution/automation(1).svg";
import img2 from "../../assets/images/solution/automation(2).svg";
import img3 from "../../assets/images/solution/automation(3).jpg";
import SolutionHeading from "./components/SolutionHeading";
import ContenttBlock from "./components/ContenttBlock";

function Automation() {
  return (
    <div className="Automation solution-wrapper">
      <SolutionHeading
        title="Automation Solution"
        text="공정에 최적화된 로봇 자동화 솔루션"
        currentPath="automation-solution"
      />
      <ContenttBlock className="cnt01">
        <p className="cnt-desc">
          정확한 진단부터 최적 설계, 정밀 제작·설치, 철저한 테스트, 전문 교육,
          그리고 체계적인 유지보수까지, 검증된 기술력으로 신뢰할 수 있는 자동화
          솔루션을 제공합니다.
        </p>
      </ContenttBlock>

      <ContenttBlock
        className="cnt02"
        size={900}
        title={"공장 자동화 라인 구축 절차"}
      >
        <img src={img1} alt="공장 자동화 라인 구축 절차" />
      </ContenttBlock>

      <ContenttBlock
        className="cnt03"
        size={1100}
        title={"로봇 자동화 프로세스"}
      >
        <img src={img2} alt="로봇 자동화 프로세스" />
        <p className="cnt-desc">
          뎉타봇은 로봇, 비전, 컨베이어, AI 제어 등 첨단 기술 기반의 자동화 라인
          구축 및, 정밀한 분석과 검증된 설계로 공장의 스마트 팩토리를
          완성합니다.
        </p>
      </ContenttBlock>

      <ContenttBlock className="cnt03" size={900} title={"로봇 자동화의 이점"}>
        <img src={img3} alt="로봇 자동화의 이점" />
      </ContenttBlock>

      <ContenttBlock className="cnt05" title={"자동화 공정"}>
        <StepFlow steps={cnt05.steps} />
      </ContenttBlock>

      <div className="cnt06">
        <div className="container">
          <Applications />
        </div>
      </div>
    </div>
  );
}

const cnt05 = {
  steps: [
    {
      iconName: "icon_conveyor",
      title: "원자재 투입",
      text: "컨베어 이송",
    },
    {
      iconName: "icon_robot_face",
      title: "AMR / AGV",
      text: "바퀴 달린 로봇 이송",
    },
    {
      iconName: "icon_robot_arm",
      title: "로봇작업",
      text: "협동 로봇 Pick & Place",
    },
    {
      iconName: "icon_gears_two",
      title: "조립 / 작업",
      text: "다관절 및 협동 로봇",
    },
    {
      iconName: "icon_eye_solid",
      title: "비전 검사",
      text: "제품 상태 판정",
    },
    {
      iconName: "icon_industry",
      title: "출고",
      text: "팔레타이징 다관절 로봇",
    },
  ],
};
export default Automation;
