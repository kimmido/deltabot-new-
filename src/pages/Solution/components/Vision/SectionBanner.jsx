import React from "react";

function SectionBanner({ sectionName, title1, title2, src }) {
  return (
    <div className="SectionBanner" style={{ backgroundImage: `url(${src})` }}>
      <div className="text-box">
        <h3 className="title1">{title1}</h3>
        <p className="title2">{title2}</p>
      </div>
    </div>
  );
}

export default SectionBanner;
