import React from "react";
import SvgrComponent from "../../../components/icons/svgrComponent";

function FeatureCards({ data }) {
  return (
    <div className="FeatureCards">
      {data.features &&
        data.features.map((ft) => (
          <div key={ft.icon} className="features-item card">
            <div className="icon-box card">
              <img src={`/images/icon/${ft.icon}`} alt="" />
              <p>{ft.title}</p>
            </div>
            <ul className="txt-list bullets">
              {ft.texts.map((txt) => (
                <li>{txt}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default FeatureCards;
