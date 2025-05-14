import React from "react";
import VideoDefault from "../../../components/UI/VideoDefault";

function AutomationVideos() {
  return (
    <section className="AutomationVideos">
      {videos.map((item) => (
        <article className="short" key={item.title}>
          <div className="short_l i1">
            <VideoDefault src={item.videoSrc} />
            {/* <iframe
              className="video"
              src={item.videoSrc}
              title="YouTube video player"
              allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe> */}
          </div>
          <div className="short_r">
            <div className="texts">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <ul className="effect-list">
              {item.effects.map((effect) => (
                <li key={effect.title}>
                  <div className="icon-box">
                    <img
                      src={`/images/icon/${effect.iconName}.png`}
                      alt={`${effect.iconName}`}
                    />
                  </div>
                  <h5>{effect.title}</h5>
                </li>
              ))}
            </ul>
            <ul className="step-list">
              {item.steps.map((step, idx) => (
                <li key={step.title}>
                  <div className="step__icon-box">
                    <img
                      src={`/images/icon/${step.iconName}.png`}
                      alt={`${step.iconName}`}
                    />
                    <p>0{idx + 1}</p>
                  </div>
                  <p className="step__title">{step.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

const videos = [
  {
    title: "분말 포대 케이스 포장",
    text: "충전 기계에서 배출된 후, 포장된 분말은 산업용 카메라로 전달됩니다. 시각 시스템은 들어오는 재료를 찾고, 식별하고, 감지하고, 로봇은 고정된 지점에서 추적하고 집어서 상자가 가득찰 때까지 상자에 넣습니다. 자동화된 프로세스가 완료됩니다.",
    videoSrc: "/videos/sub/solution-automation(2).mp4",
    effects: [
      {
        title: "분당 110포대 처리 (2대 기준)",
        iconName: "icon_timer-bright-blue",
      },
      {
        title: "로봇 1대당 인력 2명 절감 효과",
        iconName: "icon_labors-bright-blue",
      },
      {
        title: "생산 효율성 120% 증가",
        iconName: "icon_chart-bright-blue",
      },
      {
        title: "투자금 회수기간(ROI) 11개월",
        iconName: "icon_hourglass-bright-blue",
      },
    ],
    steps: [
      {
        title: "Packaging machine",
        iconName: "icon_machine-bright-blue",
      },
      {
        title: "Vision System",
        iconName: "icon_position-bright-blue",
      },
      {
        title: "Robot picking",
        iconName: "icon_robot_picking-bright-blue",
      },
      {
        title: "Case loading",
        iconName: "icon_packing-bright-blue",
      },
    ],
  },
  {
    title: "컵 우유 트레이 적재",
    text: "흩어진 컵 제품들이 스파이럴 장치를 통해 정렬된 후, 트레이 정렬 기계로 이송됩니다. 센서가 제품의 위치를 파악하고 식별 및 검사를 수행한 뒤, 로봇이 고정된 위치에서 트레이를 추적하여 집고 자동으로 튜브를 삽입한 후 트레이에 정렬합니다. 이로써 자동화 공정이 완료됩니다.",
    videoSrc: "/videos/sub/solution-automation(2).mp4",
    effects: [
      {
        title: "시간당 240,000 컵 처리",
        iconName: "icon_timer-bright-blue",
      },
      {
        title: "정밀도 ±0.5mm",
        iconName: "icon_compasses-bright-blue",
      },
      {
        title: "로봇 1대당 인력 7명 절감 효과",
        iconName: "icon_labors-bright-blue",
      },
      {
        title: "생산 효율성 100% 증가",
        iconName: "icon_chart-bright-blue",
      },
      {
        title: "투자금 회수기간(ROI) 18개월",
        iconName: "icon_hourglass-bright-blue",
      },
    ],
    steps: [
      {
        title: "Filling machine",
        iconName: "icon_machine-bright-blue",
      },
      {
        title: "Sensor Detection",
        iconName: "icon_sensor-bright-blue",
      },
      {
        title: "Lane Division",
        iconName: "icon_lane-bright-blue",
      },
      {
        title: "Cups positioning",
        iconName: "icon_position-bright-blue",
      },
      {
        title: "Robot picking",
        iconName: "icon_robot_picking-bright-blue",
      },
    ],
  },
  {
    title: "원형 배터리 분류 스테이션",
    text: "완성된 원형 배터리 트레이는 분류 워크스테이션에서 산업용 카메라 하단으로 이송됩니다. 비전 시스템을 통해 위치 확인, 식별 및 감지가 이루어지며, 로봇이 이를 추적하여 집습니다. 각기 다른 배터리는 해당 워크스테이션에 배치되고, 나사 컨베이어를 통해 출력됩니다. 이후 수동 박스 포장 단계로 들어가며, 자동화된 과정이 완료됩니다.  ",
    videoSrc: "/videos/sub/solution-automation(2).mp4",
    effects: [
      {
        title: "분당 160개 처리",
        iconName: "icon_timer-bright-blue",
      },
      {
        title: "정밀도 ±0.5mm",
        iconName: "icon_compasses-bright-blue",
      },
      {
        title: "최대 하중 15kg",
        iconName: "icon_scale-bright-blue",
      },
      {
        title: "로봇 1대당 인력 4명 절감 효과",
        iconName: "icon_labors-bright-blue",
      },
      {
        title: "생산 효율성 200% 증가",
        iconName: "icon_chart-bright-blue",
      },
      {
        title: "투자금 회수기간(ROI) 15개월",
        iconName: "icon_hourglass-bright-blue",
      },
    ],
    steps: [
      {
        title: "Auto feeding",
        iconName: "icon_machine-bright-blue",
      },
      {
        title: "Extreme pressure testing",
        iconName: "icon_computer_rising-bright-blue",
      },
      {
        title: "Hierarchical placement",
        iconName: "icon_robot_picking-bright-blue",
      },
      {
        title: "Auto output",
        iconName: "icon_lane-bright-blue",
      },
      {
        title: "Cartoning",
        iconName: "icon_packing-bright-blue",
      },
    ],
  },
];

export default AutomationVideos;
