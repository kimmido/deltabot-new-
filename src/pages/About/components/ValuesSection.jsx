import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ValuesSection() {
  const gsapContainer = useRef();
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

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(max-width: 768px", () => {
        gsap
          .timeline(
            {
              scrollTrigger: {
                trigger: gsapContainer.current,
                start: "top 20%",
                end: "bottom 70%",
                markers: true,
                scrub: 1,
              },
            },
            { defaults: { ease: "linear", duration: 2 } }
          )
          .from(".circle--0", {
            top: "0",
          })
          .from(".circle--0 .text", {
            opacity: 0,
            duration: 1,
          })
          .from(".circle--1", {
            opacity: 0,
            top: "70%",
          })
          .from(".circle--1 .text", {
            opacity: 0,
            duration: 1,
          })
          .from(".circle--2", {
            opacity: 0,
            top: "155%",
          })
          .from(".circle--2 .text", {
            opacity: 0,
            duration: 1,
          });
      });
      mm.add("(min-width: 769px", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: gsapContainer.current,
              start: "top 88",
              end: "+=1800",
              pin: true,
              // markers: true,
              scrub: 1,
              snap: {
                snapTo: "labels",
                duration: { min: 0.2, max: 1 },
                delay: 0.2,
                ease: "linear",
              },
            },
          })
          .addLabel("down")
          .from(".circle", {
            top: "0",
          })
          .to(
            "h3",
            {
              yPercent: "-400",
            },
            "<"
          )
          .addLabel("side")
          .from(".circle--1", {
            opacity: 0,
            left: "0",
          })
          .from(
            ".circle--2",
            {
              opacity: 0,
              left: "0%",
            },
            "<"
          )
          .addLabel("text")
          .from(".circle .text", {
            opacity: 0,
          });
      });

      // return () => mm.revert();
    },
    { scope: gsapContainer }
  );

  return (
    <section className="ValuesSection" ref={gsapContainer}>
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
