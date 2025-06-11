import React from "react";
import CircleIconList from "../../Business/components/CircleIconList";
import SectionBanner from "./components/SectionBanner";
import FadeUpTextSlider from "./components/FadeUpTextSlider";
import ContenttBlock from "../components/ContenttBlock";

import img0 from "../../../assets/images/solution/thermal-banner.jpg";
import img1 from "../../../assets/images/solution/thermal-cnt1.jpg";
import img2 from "../../../assets/images/solution/thermal-cnt2.jpg";
import img3_1 from "../../../assets/images/solution/thermal-cnt3-1.svg";
import img3_2 from "../../../assets/images/solution/thermal-cnt3-2.svg";
import img4 from "../../../assets/images/solution/thermal-cnt4.svg";
import img5_2 from "../../../assets/images/solution/thermal-cnt5-2.svg";
import img6_1 from "../../../assets/images/solution/thermal-cnt6-1.jpg";
import img6_2 from "../../../assets/images/solution/thermal-cnt6-2.jpg";
import img6_3 from "../../../assets/images/solution/thermal-cnt6-3.jpg";
import img6_4 from "../../../assets/images/solution/thermal-cnt6-4.jpg";
import img6_5 from "../../../assets/images/solution/thermal-cnt6-5.jpg";
import img6_6 from "../../../assets/images/solution/thermal-cnt6-6.jpg";
import img6_7 from "../../../assets/images/solution/thermal-cnt6-7.jpg";
import img6_8 from "../../../assets/images/solution/thermal-cnt6-8.jpg";
import img7_1 from "../../../assets/images/solution/thermal-cnt7-1.jpg";
import img7_2 from "../../../assets/images/solution/thermal-cnt7-2.jpg";
import img7_3 from "../../../assets/images/solution/thermal-cnt7-3.jpg";
import img7_4 from "../../../assets/images/solution/thermal-cnt7-4.jpg";
import img7_5 from "../../../assets/images/solution/thermal-cnt7-5.jpg";
import img7_6 from "../../../assets/images/solution/thermal-cnt7-6.jpg";

function ThermalImagingSection() {
  return (
    <section className="ThermalImagingSection section">
      <div className="container">
        <SectionBanner
          sectionName="machine"
          title1="열화상 카메라"
          title2="설비 과열부터 체온 이상까지 실시간으로 감지하는 스마트 감시 기술"
          src={img0}
        />
      </div>

      <section className="cnt01 container container--s">
        {/* <h3 className="cnt-title">열화상 비전</h3> */}
        <p className="cnt-desc">
          <span className="break-point">
            눈에 보이지 않는
            <span className="highlight">적외선(IR) 열 에너지</span>를 감지하여
            화면에{" "}
            <span className="highlight">온도 분포를 색상 이미지로 표현</span>
            해주는 장치
          </span>
          <span className="break-point">
            사람이나 사물의 온도 차이를
            <span className="highlight">비접촉식으로 감지</span>할 수 있어
            안전하고 효율적인 진단과 감시에 사용
          </span>
        </p>

        <img className="sec-img card" src={img1} alt="머신비전" />
      </section>
      <div className="cnt01 container">
        <CircleIconList features={cnt01} />
      </div>

      <ContenttBlock
        className={"cnt02"}
        size={900}
        title={`"모든 파장을 아우르는 열화상 솔루션 산업, 연구, 방위 분야까지 최적의
          선택을 제공합니다."`}
      >
        <img src={img2} alt="열화상 카메라 종류" />
      </ContenttBlock>

      <ContenttBlock className={"cnt03"} title={"1.중파 및 단파 열화상카메라"}>
        <div className="flex-box">
          <img src={img3_1} alt="열화상 카메라 종류" />
          <img src={img3_2} alt="열화상 카메라 종류" />
        </div>
      </ContenttBlock>

      <ContenttBlock
        className={"cnt04"}
        size={1100}
        title={"2.레이저 열화상카메라"}
      >
        <img src={img4} alt="열화상 카메라 종류" />
      </ContenttBlock>

      <ContenttBlock
        className={"cnt05"}
        size={1100}
        title={"3.가스 이미징 열화상카메라"}
      >
        <h4 className="cnt-title"></h4>
        <table
          role="table"
          aria-label="적외선 감지를 통한 가스 감지 가능성 비교 표"
        >
          <caption>적외선 감지를 통한 가스 감지 가능성 비교</caption>
          <thead>
            <tr>
              <th scope="col">특성</th>
              <th scope="col">메탄 (CH₄)</th>
              <th scope="col">프로판 (C₃H₈)</th>
              <th scope="col">육불화황 (SF₆)</th>
              <th scope="col">휘발성 유기 화합물 (VOCs)</th>
              <th scope="col">기타 탄화 수소류</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">파장</th>
              <td colSpan="5">
                중파장 적외선 (MWIR) 또는 장파장 적외선 (LWIR)
              </td>
            </tr>
            <tr scope="row">
              <th>감지 가능성</th>
              <td colSpan="5">카메라 의존적</td>
            </tr>
          </tbody>
        </table>
        <img src={img5_2} alt="열화상 카메라 종류" />
      </ContenttBlock>

      <div className="cnt06-wrapper">
        <ContenttBlock
          className={"cnt06"}
          size={1100}
          title={"열화상 카메라 산업 응용 분야"}
        >
          <p className="title">
            <font>
              <font>
                적외선 열화상 카메라, 근적외선 분광기, 중파 및 단파 적외선
                카메라, 가스 이미징, 레이저 빔 분석
              </font>
            </font>
          </p>
          <div className="list">
            {cnt06.map((item) => (
              <div
                key={item.text}
                className="item"
                data-swiper-column="0"
                data-swiper-row="0"
              >
                <img className="card" src={item.img} />
                <p className="ch">
                  <font>
                    <font>{item.text}</font>
                  </font>
                </p>
              </div>
            ))}
          </div>
        </ContenttBlock>
      </div>

      <ContenttBlock className={"cnt07"} title={"열화상 비전 특징"}>
        <FadeUpTextSlider slideData={cnt07} />
      </ContenttBlock>
    </section>
  );
}
const cnt01 = [
  {
    icon: "icon_thermometer",
    text: "온도감지 기능",
  },
  {
    icon: "icon_sunglasses",
    text: "어두운곳 시야확보",
  },
  {
    icon: "icon_lightning",
    text: "설비 고장 예측 및 예방",
  },
  {
    icon: "icon_extinguisher",
    text: "화재 전조 파악",
  },
  {
    icon: "icon_camera_solid",
    text: "실시간 모니터링",
  },
];

const cnt06 = [
  {
    img: img6_1,
    text: "전기 | 새로운 에너지",
  },
  {
    img: img6_2,
    text: "광석 | 야금학 | 가마",
  },
  {
    img: img6_3,
    text: "섬유 | 석유화학 | 환경 보호",
  },
  {
    img: img6_4,
    text: "철도 교통 | 자동차",
  },
  {
    img: img6_5,
    text: "레이저 | 반도체",
  },
  {
    img: img6_6,
    text: "곡물과 기름 | 의학 | 번식",
  },
  {
    img: img6_7,
    text: "과학적 연구 | 생물학 | 재료",
  },
  {
    img: img6_8,
    text: "온라인 테스트 | 정렬 | 오토메이션",
  },
];

const cnt07 = [
  {
    img: img7_1,
    title: "제철소 소결기 모니터링",
    text: "소결공정은 1000~1300도 이며, 고온열화상 카메라는 재료의 표면 온도를 모니터링 할수 있고, 소격의 연소과정을 모니터링 하여다양한 품질을 확인할수 있다.",
  },
  {
    img: img7_2,
    title: "코크스화로 모니터링",
    text: "코크스를 만드는 화로(코크스화로)의 벽 온도는 보통 600~800℃ 정도입니다. 특수 열화상 카메라를 사용하면 화로 안의 배관과 벽 온도를 실시간으로 볼 수 있어, 코크스가 얼마나 잘 만들어지고 있는지, 열이 잘 전달되고 있는지를 알 수 있습니다. 이를 통해 화로가 제대로 작동하고 있는지 쉽게 확인할 수 있습니다.",
  },
  {
    img: img7_3,
    title: "듀얼 라이트 자동 검사",
    text: "주 변압기 회로 본체, 전압변압기, 부싱, 와이어클램프 등 핵심 부품에 대해 고해상도 열화상 카메라로 자동검사. 실시간으로 모니터링을 하며 구성요소의 온도를 감시하여 위험발생시 알람을 발생.",
  },
  {
    img: img7_4,
    title: "증기 파이프라인 및 용관로 단열츨 상태 관찰",
    text: "석유화학 생산공정에서는 많은 수의 파이프라인과 열장비를 단열해야함. 단열효과는 운영비용과 직접적 연관이 있고, 사용기간이 길수록 노후화 되고 단열효과는 감소됨.",
  },
  {
    img: img7_5,
    title: "엔진 작동 온도 및 탱크 내 유체 수준",
    text: "열화상 카메라로 관찰하면 단열츨의 상태와 효과를 정확하게 파악할수 있어 적절한 시기에 수리작업이 용이함. 또한 저장탱크의 액체 수위를 관찰하는 돗에도 사용되어 생산작업에 중요한 시점을 제공",
  },
  {
    img: img7_6,
    title: "가축 체온 측정 및 전염병 예방",
    text: "가축의 의 체표면 온도 분포를 활용하여 질병을 미리 확인 할수 있는 지표를 만들수 있다. 이상행동식별과 발달상태를 평가, 염증을 감지하고, 돼지열병, 광견병, 청색귀병,돼지 패스트, 구제역등 발영증상을 동반한 주요 전염병를 미리 감지를 할수 있다. 또한, 젖소에게 흔한 질병인 유방염을 유방의 온도를 확인하여 조기에 진단할수 있다",
  },
];

export default ThermalImagingSection;
