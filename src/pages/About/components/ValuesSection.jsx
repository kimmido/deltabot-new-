import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ValuesSection() {
  const values = [
    {
      title: "혁신",
      text: "최첨단 자동화 기술과 IT 솔루션을 결합하여 생산성과 효율성을 극대화합니다.",
    },
    {
      title: "안전 및 품질",
      text: "당사와 고객을 위해 최고 수준의 안전과 품질을 보증합니다.",
    },
    {
      title: "고객 중심",
      text: "고객의 의견을 경청하여, 고객의 요구 사항을 진심으로 이해하고 성공을 보장하는 고유한 솔루션을 제공합니다.",
    },
  ];

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".ValuesSection__inner", // 대상 요소
          start: "top 20%", // 시작 위치 (요소의 상단이 뷰포트 상단과 만날 때)
          end: "center 20%", // 500px 스크롤 후 sticky 해제
          //   pin: true, // 요소를 고정
          markers: true, // 테스트용 마커 표시 (실제 적용시 제거 가능)
          scrub: 1, // 스크롤과 애니메이션 싱크 (부드러운 전환)
          ease: "linear",
        },
      })
      .to(".circle", {
        top: "70%",
      });
    //   .to(".circle--1", {
    //     top: "142%",
    //   })
    //   .to(".circle--2", {
    //     top: "218%",
    //   })
    //   .to(".text", {
    //     opacity: 1,
    //   });
  });

  return (
    <section className="ValuesSection">
      <div className="ValuesSection__inner">
        <h3>델타봇의 핵심가치</h3>
        {values.map((value, index) => (
          <div key={value.title} className={`circle circle--${index}`}>
            <div className="text">
              <h4>{value.title}</h4>
              <p>{value.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuesSection;
