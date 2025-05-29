import React from "react";
import SvgrComponent from "../../../../components/icons/SvgrComponent";
import StepFlow from "../StepFlow";
import ContenttBlock from "../ContenttBlock";

function VisionIntro() {
  return (
    <section className="VisionIntro">
      <ContenttBlock className="cnt01" size={1100}>
        <p className="cnt-desc">
          <span className="break-point">
            비전 시스템이란, 카메라(이미지 센서)와{" "}
            <span className="highlight">광원</span>, 영상 처리 알고리즘(AI
            포함)을 이용하여 사람의 눈처럼{" "}
            <span className="highlight">
              사물을 보고 인식하고 판단하는 자동화 시스템 기계에게 눈을 달아주는
              기술
            </span>
            로, 공정의 눈이자 두뇌 역할을 수행하는 스마트 자동화 핵심 시스템
          </span>
          <span className="break-point">
            당사의 로봇 시스템은{" "}
            <span className="highlight">
              비전시스템을 기반으로하여 제품을 인식하는 통합 자동화 솔루션
            </span>
            입니다. 컨베이어, 비전, 로봇이 완벽하게 연동되어{" "}
            <span className="highlight">
              정확한 분류와 빠른 생산성을 동시에 확보
            </span>
            하며, 다양한 산업 분야에서{" "}
            <span className="highlight">품질 안정과 인건비 절감</span>
            효과를 입증하고 있습니다.
          </span>
        </p>
      </ContenttBlock>

      <ContenttBlock className="cnt02" title={"비전 시스템 구성 요소"}>
        <div className="flex-container">
          {cnt02.map((item) => (
            <div className="item" key={item.title}>
              <div className="img-box">
                <SvgrComponent name="icon_cycle_arrow" />
              </div>
              <p>{item.title}</p>
              <ul className="bullets">
                <li>{item.features[0]}</li>
                <li>{item.features[1]}</li>
              </ul>
            </div>
          ))}
        </div>
      </ContenttBlock>

      <ContenttBlock className="cnt03" title="비전시스템 흐름 구성도">
        <StepFlow steps={cnt03} />
      </ContenttBlock>
    </section>
  );
}

const cnt02 = [
  {
    title: "카메라",
    img: "vision-cnt3-1.png",
    features: [
      "특징 : 물체의 이미지를 촬영하여 데이터를 수집하는 센서 장치.",
      "종류 : 산업용 머신 비전 카메라, 분광카메라, 열화상카메라",
    ],
  },
  {
    title: "알고리즘",
    img: "vision-cnt3-2.png",
    features: [
      "특징 : 영상 분석 알고리즘을 구동시키는 핵심 두뇌.",
      "기능: 치수 측정, 패턴 매칭, OCR(문자 인식), 불량 판정, 재질분석, 등 수행",
    ],
  },
  {
    title: "광원",
    img: "vision-cnt3-5.png",
    features: [
      "특징 : 인식 정확도를 높이기 위해 제품을 명확히 비추는 광원.",
      "종류 : LED 바 조명, 도너츠 조명, 할로겐 조명 등 다양한 형태",
    ],
  },
  {
    title: "통신 인터페이스",
    img: "vision-cnt3-5.png",
    features: [
      "특징 : 로봇, PLC, 컨베이어 등 외부 장비와 신호 주고받기 위한 연결부",
      "기능 : EtherCAT, TCP/IP, 디지털 I/O 등",
    ],
  },
  {
    title: "비전 컨트롤러",
    img: "vision-cnt3-5.png",
    features: [
      "특징 : 카메라로부터 받은 이미지를 처리하고 분석하는 핵심 장치",
      "종류 : PC 기반 또는 임베디드형 비전 컨트롤러",
    ],
  },
];

const cnt03 = [
  {
    iconName: "icon_lightbulb_solid",
    title: "조명",
    text: "제품 인식 정확도 향상을 위한 광원",
  },
  {
    iconName: "icon_camera_solid",
    title: "카메라 + 렌즈",
    text: "제품 이미지 촬영 및 초점 조정",
  },
  {
    iconName: "icon_microchip_solid",
    title: "영상처리기",
    text: "이미지 분석 및 특징 인식",
  },
  {
    iconName: "icon_brain_solid",
    title: "판단 결과",
    text: "OK/NG 판정 또는 정보 추출",
  },
  {
    iconName: "icon_robot_face",
    title: "로봇 / PLC 제어",
    text: "로봇이 피킹, 리젝트 등 수행",
  },
];

export default VisionIntro;
