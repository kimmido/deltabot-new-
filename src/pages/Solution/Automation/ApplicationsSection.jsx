import React from "react";
import img1 from "../../../assets/images/solution/automation/automation-app(1).jpg";
import img2 from "../../../assets/images/solution/automation/automation-app(2).jpg";
import img3 from "../../../assets/images/solution/automation/automation-app(3).jpg";
import img4 from "../../../assets/images/solution/automation/automation-app(4).jpg";
import img5 from "../../../assets/images/solution/automation/automation-app(5).jpg";
import img6 from "../../../assets/images/solution/automation/automation-app(6).jpg";
import img7 from "../../../assets/images/solution/automation/automation-app(7).jpg";
import img8 from "../../../assets/images/solution/automation/automation-app(8).jpg";
import img9 from "../../../assets/images/solution/automation/automation-app(9).jpg";
import useScrollReveal from "../../../hooks/useScrollReveal";

function ApplicationsSection() {
  useScrollReveal(".cnt-title", {
    threshold: 0,
    rootMargin: "-100px",
    once: false,
    duration: 300,
    timingFunction: "linear",
  });
  useScrollReveal(".con-box", {
    threshold: 0,
    rootMargin: "-80px",
    once: false,
    duration: 600,
    timingFunction: "linear",
  });
  useScrollReveal(".img-box > img", {
    threshold: 0.2,
    rootMargin: "-80px",
    once: false,
    duration: 600,
    timingFunction: "linear",
  });

  return (
    <section className="ApplicationsSection">
      <h3 className="cnt-title" data-usr="fade-up">
        APPLICATIONS
      </h3>
      <ul>
        {data.map((data) => (
          <li key={data.title} className="app__item">
            <div className="img-box">
              <img src={data.img} alt={data.title} data-usr="zoom-out" />
            </div>
            <div className="con-box" data-usr="fade-up">
              <h4>
                <span>{data.title}</span>
                <span>{data.subTitle}</span>
              </h4>
              <ul className="bullets">
                {data.texts.map((text, idx) => (
                  <li key={text} className="bullet">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const data = [
  {
    title: "제조업",
    subTitle: "(Manufacturing)",
    img: img1,
    texts: [
      "빠른 속도로 반복작업 수행",
      "고품질 일관성 유지",
      "24시간 생산 가능",
      "위험 작업 회피",
      "생산정보 자동 저장 가능",
      "공정 유연성",
      "생산 데이터 수집 및 분석 용이",
    ],
  },
  {
    title: "물류 및 창고 자동화",
    subTitle: "(Logistics & Warehousing)",
    img: img2,
    texts: [
      "물류 자동 라우팅",
      "AGV/AMR 이동",
      "고밀도 적재 가능",
      "위치/수량 자동 추적",
      "인력 최소화",
      "공간 효율성 극대화",
      "재고 실시간 추적 및 자동화된 재고 관리",
      "시스템 통합 용이성 (IoT, MES, WMS 등과 연동)",
    ],
  },
  {
    title: "식음료 / 식품 산업",
    subTitle: "(F&B Automation)",
    img: img3,
    texts: [
      "높은 위생 기준 충족",
      "정확한 포장, 계량, 정렬 작업 가능",
      "생산 속도 향상 및 반복 작업",
      "냉장/고온 환경에서 안정 작동",
      "다품종 소량 생산 대응",
      "인력난 해소 및 위생 불안 해소",
    ],
  },
  {
    title: "전자/반도체 산업",
    subTitle: "(Electronics & Semiconductors)",
    img: img4,
    texts: [
      "고정밀 미세 작업",
      "고속 반복 작업",
      "불량률 최소화 및 생산 증가",
      "Clean Room 사용",
      "비전 시스템 + AI 연동",
      "무인화 라인 구축",
    ],
  },
  {
    title: "제약·바이오 산업",
    subTitle: "(Pharmaceutical / Bio)",
    img: img5,
    texts: [
      "무균·청정 환경 대응",
      "고정밀 액체 핸들링 및 이송",
      "자동 계수, 정렬, 포장 자동화",
      "GMP 기반 추적 시스템 자동화",
      "FDA/식약처 기준에 맞춘 설계",
      "고위험 약품, 멸균 환경 작업 자동화",
      "비전 시스템으로 불량 자동 판별",
    ],
  },
  {
    title: "자동차 산업",
    subTitle: "(Automotive)",
    img: img6,
    texts: [
      "용접, 조립, 도장 등 고중량·고위험 공정 자동화",
      "고속·고정밀 반복 작업",
      "대형 부품 핸들링",
      "조립, 체결 공정에서 정밀도 유지",
      "다양한 차종 공정 전환",
      "위치 보정, 불량 검사 자동화",
      "AGV/AMR과 부품 연동 이송",
      "MES 연동으로 실적·이력 자동 기록",
    ],
  },
  {
    title: "금속/목재 가공 산업",
    subTitle: "",
    img: img7,
    texts: [
      "무거운 철재, 목재 정밀하게 이동",
      "위치 지정, CNC 연동 로딩 가능",
      "동일한 작업 고속 반복",
      "절삭기, 톱 등 위험 장비 대응",
      "다단계 절단~조립 자동화",
      "균일한 조립·절단·고정 품질",
    ],
  },
  {
    title: "화장품 및 소비재 포장",
    subTitle: "",
    img: img8,
    texts: [
      "정밀하고 섬세한 포장 작업",
      "정위치 부착, 고속 작업",
      "다품종 소량생산",
      "불량 자동 감지 및 배출",
      "생산 속도 향상 + 균일 품질 유지",
      "소형 공간 로봇 활용",
    ],
  },
  {
    title: "하드웨어 /의료",
    subTitle: "",
    img: img9,
    texts: [
      "고정밀 델타 로봇 탑재",
      "비전/공급 모듈 통합",
      "다양한 정밀 작업 수행",
      "다분야 산업 광범위 적용",
      "모듈식 표준화 설계 채택",
      "비용 절감 및 효율 증대",
    ],
  },
];

export default ApplicationsSection;
