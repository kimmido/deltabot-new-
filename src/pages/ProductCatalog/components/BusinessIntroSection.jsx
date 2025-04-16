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
      gsap.to(".title", {
        scrollTrigger: {
          trigger: ".title",
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
      <div className="title-area" ref={gsapContainer}>
        <strong className="title">&ldquo;{data.title}&rdquo;</strong>
      </div>
      {/* <strong className="title">{data.title}</strong> */}
      <p className="desc">{data.description}</p>

      {data.images.map((img, index) => (
        <img
          className={`intro-img ${img}`}
          key={index}
          src={`/images/business/${currentTab}(${index + 1}).jpg`}
          alt=""
        />
      ))}

      {data.extraText && <p className="desc">{data.extraText}</p>}

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
        <strong>응용분야</strong>
        <ul className="applications-list">
          {data.applications.map((app, idx) => (
            <li key={idx} className="appItem">
              <div className="img-box">
                <img src={`/images/business/${app.image}`} alt="응용분야" />
              </div>
              <div className="text-box">
                <strong>{app.title}</strong>
                <p>{app.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BusinessIntroSection;
