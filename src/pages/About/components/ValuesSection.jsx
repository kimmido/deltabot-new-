import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import AOS from "aos";
import {
  IconSafety,
  IconLightBulb,
  IconReport,
} from "../../../components/icons";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ValuesSection() {
  const gsapContainer = useRef();

  const color = ["#246beb", "#d3e1fb"];
  const values = [
    {
      title: "혁신",
      icon: <IconLightBulb color={color[0]} color2={color[1]} />,
      text: "최첨단 자동화 기술과 IT 솔루션을 결합하여 생산성과 효율성을 극대화합니다.",
    },
    {
      title: "안전 및 품질",
      icon: <IconSafety color={color[0]} color2={color[1]} />,
      text: "당사와 고객을 위해 최고 수준의 안전과 품질을 보증합니다.",
    },
    {
      title: "고객 중심",
      icon: <IconReport color={color[0]} color2={color[1]} />,
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
                scrub: 1,
                onEnter: () => {
                  AOS.refresh();
                },
              },
            },
            { defaults: { ease: "linear", duration: 3 } }
          )
          .from(".circle--0", {
            top: "0",
          })
          .from(".circle--0 .circle__inner", {
            opacity: 0,
            duration: 1,
          })
          .from(".circle--1", {
            opacity: 0,
            top: "70%",
          })
          .from(".circle--1 .circle__inner", {
            opacity: 0,
            duration: 1,
          })
          .from(".circle--2", {
            opacity: 0,
            top: "155%",
          })
          .from(".circle--2 .circle__inner", {
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
              end: "+=1300",
              pin: true,
              scrub: 1,
              onEnter: () => {
                AOS.refresh();
              },
            },
          })
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
          .from(".circle .circle__inner", {
            opacity: 0,
          });
      });
    },
    { scope: gsapContainer }
  );

  return (
    <section className="ValuesSection" ref={gsapContainer}>
      <div className="ValuesSection__inner">
        <h3>델타봇의 핵심가치</h3>
        {values.map((value, index) => (
          <div key={value.title} className={`circle circle--${index}`}>
            <div className="circle__inner">
              <div className="icon">{value.icon}</div>
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
