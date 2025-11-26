import React from "react";
import StepFlow from "../components/StepFlow";
import AutomationVideos from "./components/AutomationVideos";
import ContenttBlock from "../components/ContenttBlock";

import img2 from "../../../assets/images/solution/automation(2).svg";
import img2_2 from "../../../assets/images/solution/automation(2-2).png";
import img3 from "../../../assets/images/solution/automation(3).svg";
import img4 from "../../../assets/images/solution/automation(4).jpg";
import img5 from "../../../assets/images/solution/automation(5).svg";

function IntroSection() {
  return (
    <div className="IntroSection">
      <div className="cnt01 container">
        <p className="intro-desc">
          <p>
            정확한 진단과 최적의 설계를 기반으로, 정밀한 제작·설치부터 철저한
            테스트, 전문 교육, 그리고 체계적인 유지보수에 이르기까지 당사는 전
            과정을 아우르는 토털 자동화 솔루션을 제공합니다.
          </p>
          <p>
            축적된 기술력과 풍부한 경험을 바탕으로, 로봇 자동화 시스템은 기계
            산업의 자동화 발전에 새로운 패러다임을 제시하고 있습니다. 효율성과
            안정성, 그리고 지속 가능한 생산 환경을 실현하는 당사의 솔루션은
            고객의 경쟁력을 한층 높이는 신뢰받는 산업 파트너로 자리매김하고
            있습니다.
          </p>
        </p>
      </div>

      <div className={`cnt02 ContenttBlock container`}>
        <div style={{ maxWidth: `900px` }}>
          <h4 className="cnt-title">공장 자동화 라인 구축 절차</h4>
          <img src={img2} alt="공장 자동화 라인 구축 절차" />
        </div>
        <img src={img2_2} alt="공장 자동화 라인" />
      </div>

      <ContenttBlock
        className="cnt03"
        size={1100}
        title={"로봇 자동화 프로세스"}
      >
        <svg src={img3}></svg>
        <img src={img3} alt="로봇 자동화 프로세스" />
        <p className="cnt-desc">
          뎉타봇은 로봇, 비전, 컨베이어, AI 제어 등 첨단 기술 기반의 자동화 라인
          구축 및, 정밀한 분석과 검증된 설계로 공장의 스마트 팩토리를
          완성합니다.
        </p>
      </ContenttBlock>

      <ContenttBlock className="cnt04" size={900} title={"로봇 자동화의 이점"}>
        <img src={img4} alt="로봇 자동화의 이점" />
      </ContenttBlock>

      <ContenttBlock
        className="cnt05"
        size={1200}
        title={"완전 자동화 생산/포장 설비"}
      >
        <img src={img5} alt="자동와 생산/포장 설비" />
      </ContenttBlock>

      <ContenttBlock className="cnt06" title={"자동화 공정"}>
        <StepFlow steps={cnt06.steps} />
        <AutomationVideos videos={cnt06.videos} />
      </ContenttBlock>
    </div>
  );
}

const cnt06 = {
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
      iconName: "icon_palletizing",
      title: "포장 팔레타이징",
      text: "자동 포장",
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
      text: "본 설비는 2대의 델타로봇을 이용하여 커피 파우치를 각각 1개씩 집어 이송 및 적재하는 자동화 라인입니다. 델타로봇의 고속·정밀한 동작 특성을 활용하여 커피스틱을 빠르고 안정적으로 집어 처리할 수 있습니다. 두 대의 로봇이 동시에 작동하여 생산성을 높이며, 인력을 최소화해 효율적인 생산라인을 구현합니다.",
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
    {
      title: "제조, 물류, 의료 등  산업 전반 활용",
      text: "반복적인 작업이나 무거운 하중 처리, 정밀 작업 수행, 또는 서비스 산업에서 고객과의 상호작용에도 사용할 수 있습니다. 코봇의 유연성과 적응력은 현대의 작업 환경에서 매우 가치 있는 자산으로, 효율성을 높이고, 안전성을 강화하며, 새로운 수준의 자동화를 실현할 수 있게 합니다.",
      videoSrc: "/videos/page/solution-automation(4).mp4",
      poster: "/images/video_poster/solution-automation(4).jpg",
      effects: [
        {
          text: "분당 85개 처리",
          iconName: "icon_timer",
        },
        {
          text: "로봇 1대당 인력 3명 절감 효과",
          iconName: "icon_labors",
        },
        {
          text: "생산 효율성 100% 증가",
          iconName: "icon_chart",
        },
        {
          text: "투자금 회수기간(ROI) 6개월",
          iconName: "icon_hourglass",
        },
      ],
    },
    {
      title: "소형 델타로봇",
      text: "전자 제조, 하드웨어 제조, 자동차, 의료 등의 산업에서 대량 재료 트레이에 널리 사용됩니다. 소형 델타 로봇은 고속 픽 앤 플레이스 작업에 이상적이며, 작은 부품을 신속하고 정확하게 처리할 수 있습니다. 이 로봇은 생산 라인의 효율성을 크게 향상시키고, 인건비를 절감하며, 제품 품질을 높이는 데 기여합니다.",
      videoSrc: "/videos/page/solution-automation(5).mp4",
      poster: "/images/video_poster/solution-automation(5).jpg",
      effects: [
        {
          text: "분당 75개 처리",
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
          text: "투자금 회수기간(ROI) 6개월",
          iconName: "icon_hourglass",
        },
      ],
    },
  ],
};

export default IntroSection;
