import React from "react";
import SectionBanner from "./components/SectionBanner";
import { HighlightText } from "@components/UI/HighlightText";
import VideoDefault from "@components/UI/VideoDefault";
import CalloutBox from "./components/CalloutBox";

import img0 from "@assets/images/solution/logistics/fulfillment-banner.jpg";
import img2_1 from "@assets/images/solution/logistics/fulfillment-cnt(2-1).svg";
import img2_2 from "@assets/images/solution/logistics/fulfillment-cnt(2-2).svg";
import img2_3 from "@assets/images/solution/logistics/fulfillment-cnt(2-3).svg";

export default function FulfillmentSection() {
  return (
    <section className="FulfillmentSection section">
      <div className="container">
        <SectionBanner
          sectionName="fulfillment"
          title1="스마트 물류"
          title2="물류의 디지털 전환 강화"
          src={img0}
        />
      </div>

      <section className="cnt01 container">
        <p className="cnt-desc">
          <HighlightText
            text="#스마트 물류 시스템 구축#을 통해 #최고 수준의 안전성#과 #운영 효율성#을 달성합니다. 스마트 물류 시스템 도입의 필요성은 기존 시스템이 안고 있는 #고비용 구조, 수익 마진 압박#, 그리고 #시장의 유연성 요구 증대#라는 세 가지 핵심 문제점에서 비롯됩니다. 우리는 혁신적인 솔루션으로 이 난제를 해결하고 물류의 새로운 기준을 제시합니다."
            keyChar="#"
          />
        </p>
      </section>

      <section className="cnt02 bg-section-light bg-section--py-lg">
        <div className="container">
          <h3 className="cnt-title">
            스마트 물류 시스템 도입의 배경 및 필요성
          </h3>
          <p className="cnt-desc">
            현대 물류 산업이 직면한 핵심 과제와 스마트 물류 시스템을 통한 혁신적
            해결 방안
          </p>
          <ul className="list grid-block grid-block--three-col">
            {cnt02.img.map((src, i) => (
              <li key={i} className="grid-block__item card ">
                <img src={src} alt={"솔루션" + (i + 1)} />
              </li>
            ))}
          </ul>
          <CalloutBox
            title="스마트 물류 시스템으로의 전환이 필요합니다"
            description="데이터 기반 의사결정, 자동화 기술, 그리고 유연한 프로세스 설계를 통해 물류 운영의 효율성을 극대화하고 지속 가능한 경쟁력을 확보할 수 있습니다."
            actions={["비용 절감", "수익성 개선", "유연성 향상"]}
          />
        </div>
      </section>

      <section className="cnt3">
        <div className="container">
          <h3 className="cnt-title">스마트 물류 프로세스</h3>
          <VideoDefault
            src="/videos/page/solution-logistics(3).mp4"
            controls={false}
            loop={true}
            autoPlay={true}
            muted={true}
          />
        </div>
      </section>
    </section>
  );
}

const cnt02 = {
  img: [img2_1, img2_2, img2_3],
};
