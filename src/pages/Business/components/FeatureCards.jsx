import React from "react";
import style from "./FeatureCards.module.scss";

function FeatureCards({ data }) {
  return (
    <div className={style.FeatureCards}>
      {data.map((ft) => (
        <div key={ft.icon} className={style["features-item"] + " card"}>
          <div className={style["icon-box"] + " card"}>
            <img src={`/images/icon/${ft.icon}`} alt={ft.title} />
            <p>{ft.title}</p>
          </div>
          <ul className={style["txt-list"] + " bullets"}>
            {ft.texts &&
              ft.texts.map((txt, i) => <li key={ft.title + i}>{txt}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
