import React from "react";
import SolutionHeading from "./components/SolutionHeading";
import CleaningRobotSection from "./components/EcoAI/CleaningRobotSection";

function EcoAI() {
  return (
    <div className="EcoAI solution-wrapper">
      <div className="heading">
        <SolutionHeading
          title="Eco-AI Solution"
          text="친환경 로봇과 재활용 시스템이 만드는 순환의 미래"
          currentPath="eco-ai-solution"
        />
      </div>
      <div className="container">
        <p className="cnt-desc">
          자원순환은 폐기물 발생을 최대한 억제하고, 발생한 폐기물은 가능한 한
          재사용하거나 재생이용하며, 불가피하게 남는 폐기물에 대해서는 환경에
          미치는 영향을 최소화하여 처리하는 개념이다. 자원과 에너지의 흐름이
          단순 소비로 끝나는 것이 아니라, 생산–소비–재활용–열회수–처리로
          이어지는 순환 구조로 전환되어야 한다. 기존에는 폐기물의 ‘처리’에
          초점을 맞췄다면, 자원순환은 폐기물의 ‘발생 자체를 줄이는 것’에 중점을
          둔다.
        </p>
      </div>
      <CleaningRobotSection />
    </div>
  );
}

export default EcoAI;
