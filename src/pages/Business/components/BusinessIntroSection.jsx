import React from "react";
import { HighlightText } from "../../../components/UI/HighlightText";
import CircleIconList from "./CircleIconList";
import FeatureCards from "./FeatureCards";

function BusinessIntroSection({ data, currentTab }) {
  const featureEl = {
    card: <FeatureCards data={data} />,
    circle: <CircleIconList features={data.features} />,
  };
  return (
    <section className="BusinessIntroSection">
      <div className="desc-box">
        {data.description.map((txt, idx) => (
          <p key={idx} className="desc">
            <HighlightText text={txt} keyChar="#" />
          </p>
        ))}
      </div>

      {data.images.map((img, index) => (
        <img
          className={`intro-img ${img}`}
          key={index}
          src={`/images/business/${currentTab}(${index + 1}).jpg`}
          alt={currentTab}
        />
      ))}

      {data.extraText && (
        <div className="desc-box">
          <p className="desc">{data.extraText}</p>
        </div>
      )}

      {featureEl[data.featureType]}
    </section>
  );
}

export default BusinessIntroSection;
