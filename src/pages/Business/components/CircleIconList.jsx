import React from "react";
import SvgrComponent from "../../../components/icons/SvgrComponent";

function CircleIconList({ features }) {
  return (
    features && (
      <div className="CircleIconList">
        {features.map((ft) => (
          <div key={ft.icon} className="features-item">
            <div className="icon-box">
              <SvgrComponent name={ft.icon} />
            </div>
            <p>{ft.text}</p>
          </div>
        ))}
      </div>
    )
  );
}

export default CircleIconList;
