import React from "react";

function FeatureCards({ data }) {
  if (!data.features || data.features[0].title === "") return;
  return (
    <div className="FeatureCards">
      {data.features.map((ft) => (
        <div key={ft.icon} className="features-item card">
          <div className="icon-box card">
            <img src={`/images/icon/${ft.icon}`} alt={ft.title} />
            <p>{ft.title}</p>
          </div>
          <ul className="txt-list bullets">
            {ft.texts && ft.texts.map((txt) => <li>{txt}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
