import React from "react";
import SvgrComponent from "../../../components/icons/svgrComponent";

function CircleIconList({ data }) {
  return (
    data.features && (
      <div className="CircleIconList">
        {data.features.map((ft) => (
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
