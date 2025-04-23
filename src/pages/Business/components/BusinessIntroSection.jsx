import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import businessIntroData from "../../../data/businessIntroData";
import SvgrComponent from "../../../components/icons/svgrComponent";
gsap.registerPlugin(useGSAP);

function BusinessIntroSection({ currentTab }) {
  const data = businessIntroData[currentTab];
  if (!data) return null;

  const gsapContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".quote-text", {
        scrollTrigger: {
          trigger: ".quote-text",
          start: "bottom 86%",
          end: "bottom 48%",
          scrub: 1, // 스크롤에 따라 부드럽게
          markers: true,
        },
        backgroundSize: "100%",
        ease: "none",
      });
    },
    { scope: gsapContainer }
  );

  return (
    <section className="BusinessIntroSection">
      <div className="quote-area" ref={gsapContainer}>
        <strong className="quote-text">{data.title}</strong>
      </div>
      <div className="desc-box">
        {data.description.map((txt, idx) => (
          <p key={idx} className="desc">
            {txt}
          </p>
        ))}
      </div>

      {data.images.map((img, index) => (
        <img
          className={`intro-img ${img}`}
          key={index}
          src={`/images/business/${currentTab}(${index + 1}).jpg`}
          alt=""
        />
      ))}

      {data.extraText && (
        <div className="desc-box">
          <p className="desc">{data.extraText}</p>
        </div>
      )}

      {data.features && (
        <div className="features-list">
          {data.features.map((ft) => (
            <div key={ft.icon} className="features-item">
              <div className="icon-box">
                <SvgrComponent name={ft.icon} />
              </div>
              <p>{ft.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="applications">
        <strong className="sec-title">응용 분야</strong>
        <ul className="app-list">
          {data.applications.map((app, idx) => (
            <li key={idx} className="app-item">
              <div className="img-box">
                <img
                  src={`/images/business/${app.image}`}
                  alt={`응용분야-${app.title}`}
                />
              </div>
              <div className="text-box">
                <strong>{app.title}</strong>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BusinessIntroSection;
