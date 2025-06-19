import React from "react";
import StepFlow from "../components/StepFlow";
import AutomationVideos from "./components/AutomationVideos";
import ContenttBlock from "../components/ContenttBlock";

import img1 from "../../../assets/images/solution/automation(1).svg";
import img2 from "../../../assets/images/solution/automation(2).svg";
import img3 from "../../../assets/images/solution/automation(3).jpg";

function IntroSection() {
  return (
    <div className="IntroSection">
      <ContenttBlock className="cnt01">
        <p className="intro-desc">
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

      <ContenttBlock className="cnt04" size={900} title={"로봇 자동화의 이점"}>
        <img src={img3} alt="로봇 자동화의 이점" />
      </ContenttBlock>

      <ContenttBlock className="cnt05" title={"자동화 공정"}>
        <StepFlow steps={cnt05.steps} />
        <AutomationVideos videos={cnt05.videos} />
      </ContenttBlock>
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
  videos: [
    {
      title: "수액 패킹",
      text: "본 설비는 수직다관절로봇을 활용하여 수액봉지 6개를 동시에 집어서 박스에 적재 및 이송하는  자동화 라인입니다. 로봇은 고정밀 집게(그리퍼)를 통해 수액봉지를 안정적으로 파지하고, 지정된 위치로 박스에  적재 작업을 수행합니다. 이를 통해 생산 효율을 향상시키고 작업자의 수작업 부담을 최소화할 수 있습니다.",
      videoSrc: "/videos/page/solution-automation(1).mp4",
      poster: "/images/video_poster/solution-automation(1).jpg",
      effects: [
        {
          text: "분당 72개 처리",
          iconName: "icon_timer",
        },
        {
          text: "로봇 1대당 인력 2명 절감 효과",
          iconName: "icon_labors",
        },
        {
          text: "생산 효율성 120% 증가",
          iconName: "icon_chart",
        },
        {
          text: "투자금 회수기간(ROI) 11개월",
          iconName: "icon_hourglass",
        },
      ],
    },
    {
      title: "쉴드캔",
      text: "본 설비는 델타로봇을 이용하여 흘러나오는 제품을  3Picker를 통해서  3개씩 집어 적재하는 자동화 시스템입니다. 델타로봇의 고속·고정밀 특성을 활용하여, 지정된 위치에 신속하고 정확하게 적재합니다. 이를 통해 전체 라인의 처리 속도를 극대화하고 작업 효율을 극대화할 수 있습니다.",
      videoSrc: "/videos/page/solution-automation(2).mp4",
      poster: "/images/video_poster/solution-automation(2).jpg",
      effects: [
        {
          text: "분당 80개 처리",
          iconName: "icon_timer",
        },
        {
          text: "로봇 1대당 인력 4명 절감 효과",
          iconName: "icon_labors",
        },
        {
          text: "생산 효율성 100% 증가",
          iconName: "icon_chart",
        },
        {
          text: "투자금 회수기간(ROI) 12개월",
          iconName: "icon_hourglass",
        },
      ],
    },
    {
      title: "커피 파우치",
      text: "본 설비는 2대의 델타로봇을 이용하여 커피스틱을 각각 1개씩 집어 이송 및 적재하는 자동화 라인입니다. 델타로봇의 고속·정밀한 동작 특성을 활용하여 커피스틱을 빠르고 안정적으로 집어 처리할 수 있습니다. 두 대의 로봇이 동시에 작동하여 생산성을 높이며, 인력을 최소화해 효율적인 생산라인을 구현합니다.",
      videoSrc: "/videos/page/solution-automation(3).mp4",
      poster: "/images/video_poster/solution-automation(3).jpg",
      effects: [
        {
          text: "분당 85개 처리",
          iconName: "icon_timer",
        },
        {
          text: "로봇 1대당 인력 2명 절감 효과",
          iconName: "icon_labors",
        },
        {
          text: "생산 효율성 100% 증가",
          iconName: "icon_chart",
        },
        {
          text: "투자금 회수기간(ROI) 11개월",
          iconName: "icon_hourglass",
        },
      ],
    },
  ],
};

export default IntroSection;
