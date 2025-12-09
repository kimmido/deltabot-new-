import React from "react";
import BasicSlider from "../EcoAI/components/BasicSlider";
import { IconArrow } from "../../../components/icons";

import img05_1 from "../../../assets/images/solution/smart_factory/smart_factory(5-1).svg";
import img03_1 from "../../../assets/images/solution/smart_factory/end-cnt(3-1).jpg";
import img03_2 from "../../../assets/images/solution/smart_factory/end-cnt(3-2).jpg";
import img03_3 from "../../../assets/images/solution/smart_factory/end-cnt(3-3).jpg";
import img3_slide1 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(1).png";
import img3_slide2 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(2).png";
import img3_slide3 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(3).png";
import img3_slide4 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(4).png";
import img3_slide5 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(5).png";
import img3_slide6 from "../../../assets/images/solution/smart_factory/end-cnt(3)-slide(6).png";
import img4_1 from "../../../assets/images/solution/smart_factory/end-cnt(4-1).svg";
import img4_2 from "../../../assets/images/solution/smart_factory/end-cnt(4-2).svg";
import img4_3 from "../../../assets/images/solution/smart_factory/end-cnt(4-3).svg";
import img4_4 from "../../../assets/images/solution/smart_factory/end-cnt(4-4).svg";
import img4_5 from "../../../assets/images/solution/smart_factory/end-cnt(4-5).svg";
import img4_6 from "../../../assets/images/solution/smart_factory/end-cnt(4-6).svg";

export default function EndSection() {
  return (
    <section className="EndSection">
      <section className="section">
        <div className="container">
          <h3 className="sec-title">
            <b>스마트팩토리</b> 정부 지원을 받아 구축하세요.
          </h3>
          <div className="cnt01">
            <p className="cnt-desc">
              스마트 팩토리 정부 지원 제도는 기업이 현재 공장 스마트화
              수준(미적용, 기초, 중간1, 중간2)을 정확하게 진단받은 뒤, 그 결과에
              따라 다음 단계로 한 걸음 더 성장할 수 있도록 단계별로 맞춤형
              지원금을 제공합니다. 이 제도 덕분에 많은 기업이 체계적으로 스마트
              공장으로 전환하며 한 단계씩 성장하는 데 큰 힘이 되고 있습니다.
            </p>
          </div>

          <div className="sub-box cnt02">
            <h4 className="sub-box__title">
              스마트공장 수준 확인 제도 (필수 절차)
            </h4>
            <p className="cnt-desc">
              <p>
                정부 지원 사업 신청 전, 기업의 스마트화 수준을 공식적으로
                진단받아 적합한 지원 단계와 규모를 결정하는 필수 제도입니다.
              </p>
              <p>
                기업의 현황을 정량적으로 평가하여 적합한 지원 단계와 규모를
                결정합니다.
              </p>
            </p>

            <ul className="step-box">
              <li className="step-item">
                <p>스마트제조혁신추진단</p> <p>홈페이지를 통해 신청</p>
              </li>
              <IconArrow size="24" weight="1" />
              <li className="step-item">
                <p>전문기관의 현장 진단</p>
              </li>
              <IconArrow size="24" weight="1" />
              <li className="step-item">
                <p>수준 확인서 발급</p>
              </li>
            </ul>

            <p>
              "공장 진단 결과를 기반으로 정부 승인률을 높이는 로봇 시스템
              제안서를 마련하여, 단계별 성장을 확실하게 지원합니다."
            </p>
            <img className="card" src={img05_1} alt="스마트팩토리 공정도" />
          </div>

          <div className="sub-box background-light cnt03">
            <h4 className="sub-box__title">
              스마트팩토리 지원사업 델타봇과 함께라면 문제 없어요!
            </h4>
            <p className="cnt-desc">
              스마트공장 정부 지원 사업의 성공은 단순히 솔루션을 도입하는 것을
              넘어, 로봇 자동화와 사업 성과의 명확한 제시가 핵심입니다. 델타
              봇은 로봇 자동화 공장 정부 지원 사업의 성공률을 높이는 든든한
              파트너가 되어 드립니다
            </p>
            <ul className="grid-block grid-block--three-col">
              {cnt03.gridList.map((item) => (
                <li key={item.title} className="grid-block__item">
                  <div className="grid-block__thumb card">
                    <img src={item.imgSrc} alt={item.title[0]} />
                  </div>
                  <div className="grid-block__text-box">
                    <strong className="grid-block__title">
                      {item.title[0]}
                      <br />
                      {item.title[1]}
                    </strong>
                    <ul className="grid-block__list bullets">
                      {item.bullets &&
                        item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            <div className="example-box">
              <h5 className="example-box__title">
                정부지원 사업을 통한 스마트공장 성공 사례
              </h5>
              <div className="slide-box container--l">
                <BasicSlider
                  slides={cnt03.slides}
                  loop={true}
                  autoplay={{
                    delay: 2600,
                    disableOnInteraction: true,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="sub-box cnt04" id="anchor">
            <ul className="grid-block grid-block--three-col">
              {cnt04.map((item, idx) => (
                <li
                  key={idx}
                  className="grid-block__item"
                  data-aos="fade-up-custom"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-delay={400 * idx}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

const cnt03 = {
  gridList: [
    {
      imgSrc: img03_1,
      title: ["중소 제조기업 스마트화 지원", "(스마트 로봇 공장 구축)"],
      bullets: [
        "로봇 및 DAQ 구축",
        "센서 데이터 수집 H/W",
        "데이터 연동 키오스크",
        "MES/ERP 시스템 공급",
      ],
    },
    {
      imgSrc: img03_2,
      title: ["현행 프로세스 맞춤형 솔루션 제공", "(AI Solution 공급)"],
      bullets: [
        "로봇 데이터 수집",
        "데이터 전처리",
        "품질 불량 예측 AI",
        "공정 로봇 최적화 AI",
      ],
    },
    {
      imgSrc: img03_3,
      title: ["AI 분야 확장 기술 개발 및 Upgrade", "(국가 연구 개발 사업)"],
      bullets: [
        "로봇 기반 제조 분야",
        "로봇 콘텐츠 분야",
        "로봇 활용 식음료 분야",
        "로봇 활용 농업 분야",
      ],
    },
  ],
  slides: [
    <img src={img3_slide1} alt="성공사례1" />,
    <img src={img3_slide2} alt="성공사례2" />,
    <img src={img3_slide3} alt="성공사례3" />,
    <img src={img3_slide4} alt="성공사례4" />,
    <img src={img3_slide5} alt="성공사례5" />,
    <img src={img3_slide6} alt="성공사례6" />,
  ],
};

const cnt04 = [
  <img src={img4_1} alt="지원 절차1" />,
  <img src={img4_2} alt="지원 절차" />,
  <img src={img4_3} alt="지원 절차3" />,
  <img src={img4_4} alt="지원 절차4" />,
  <img src={img4_5} alt="지원 절차5" />,
  <img src={img4_6} alt="지원 절차6" />,
];
