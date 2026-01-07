import React from "react";
import SectionBanner from "./components/SectionBanner";
import { HighlightText } from "@components/UI/HighlightText";
import ResponsiveImage from "@components/UI/ResponsiveImage";
import VideoDefault from "@components/UI/VideoDefault";

import img0 from "@assets/images/solution/logistics/factory-banner.jpg";
import img_pc_2_1 from "@assets/images/solution/logistics/factory-pc-cnt(2-1).jpg";
import img_pc_2_2 from "@assets/images/solution/logistics/factory-pc-cnt(2-2).jpg";
import img_pc_2_3 from "@assets/images/solution/logistics/factory-pc-cnt(2-3).jpg";
import img_m_2_1 from "@assets/images/solution/logistics/factory-m-cnt(2-1).png";
import img_m_2_2 from "@assets/images/solution/logistics/factory-m-cnt(2-2).png";
import img_m_2_3 from "@assets/images/solution/logistics/factory-m-cnt(2-3).png";

export default function FactorySection() {
  return (
    <section className="FactorySection section">
      <div className="container">
        <SectionBanner
          sectionName="factory"
          title1="스마트 공장"
          title2="효율적이고 안전한 유연한 스마트 팩토리 구축"
          src={img0}
        />
      </div>

      <section className="cnt01 container">
        <p className="cnt-desc">
          <HighlightText
            text="#자동화, 공정 최적화#, 그리고 #스마트 안전 시스템 구축#을 통해 #최고 수준의 안전성#과 운영 효율성을 달성하는 #스마트 생산 환경을 실현#하겠습니다."
            keyChar="#"
          />
        </p>
      </section>

      <section className="cnt02 bg-section-light bg-section--py-lg">
        <div className="container container--m">
          <h3 className="cnt-title">스마트 공장 구축을 위한 핵심 전략</h3>
          <p className="cnt-desc">
            "데이터 기반의 실시간 관제와 지능형 자동화가 만드는 완벽한 생산
            최적화"
          </p>
          <ul className="list grid-block grid-block--three-col">
            {cnt02.map(({ img, title, texts }, i) => (
              <li key={title} className="grid-block__item card">
                <div className="media-box grid-block__thumb">
                  <ResponsiveImage
                    srcMobile={img.srcMobile}
                    srcDesktop={img.srcDesktop}
                    alt={`핵심전략-${title}`}
                  />
                </div>
                <div className="grid-block__text-box">
                  <strong className="grid-block__title">{`0${
                    i + 1
                  }. ${title}`}</strong>
                  <ul className="grid-block__list bullets">
                    {texts.map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cnt3">
        <div className="container">
          <h3 className="cnt-title">스마트 공장 프로세스</h3>
          <VideoDefault
            src="/videos/page/solution-logistics(1).mp4"
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

const cnt02 = [
  {
    img: { srcMobile: img_m_2_1, srcDesktop: img_pc_2_1 },
    title: "데이터 기반의 실시간 통합 관제 시스템",
    texts: [
      "생산 프로세스의 안정성 확보",
      "고위험 환경에서의 안전성 강화",
      "초정밀·고속 생산 구현",
      "데이터 기반의 실시간 최적화",
    ],
  },
  {
    img: { srcMobile: img_m_2_2, srcDesktop: img_pc_2_2 },
    title: "지능형 자동화를 통한 생산 공정 최적화",
    texts: [
      "선제적 리스크 제거",
      "표준화된 고효율 시스템",
      "공정 데이터의 가시화",
      "지속 가능한 생산성 향상",
    ],
  },
  {
    img: { srcMobile: img_m_2_3, srcDesktop: img_pc_2_3 },
    title: "유연한 대응을 위한 맞춤형 스마트 솔루션",
    texts: [
      "자율 안전 관리 체계를 구축",
      "AI 기반 실시간 지능형 관제",
      "선제적 데이터 예방 시스템",
      "현장 중심의 즉각적 피드백",
    ],
  },
];
