import React from "react";
import ContenttBlock from "../ContenttBlock";

function RecyclingRobotSection() {
  return (
    <section className="RecyclingRobotSection section">
      <ContenttBlock title={"폐플라스틱을 자원으로 순환"}>
        <p className="cnt-desc">
          기존 사회는 폐기물의 ‘처리’에 초점을 맞췄습니다. 대부분 소각하거나
          매립하는 방식이었고, 환경 영향은 부차적인 문제로 취급됐습니다. 그러나
          이제는 폐기물 발생을 줄이고, 발생한 자원은 재사용(reuse)하거나
          재생이용(recovery)하는 방향으로 자원순환 시스템이 전환되고 있습니다.
        </p>
      </ContenttBlock>
    </section>
  );
}

export default RecyclingRobotSection;
