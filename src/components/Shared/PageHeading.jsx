import React from "react";

function PageHeading({ title, img }) {
  return (
    <div
      className="PageHeading"
      // style={{backgroundImage: backgroundImage}}
    >
      <h2 style={{ fontSize: 66 }}>{title}</h2>
      <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p>
    </div>
  );
}

export default PageHeading;
