import React from "react";

function PageHeading({ title, backgroundImage }) {
  return (
    <div
      className="PageHeading"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>{title}</h2>
      {/* <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p> */}
    </div>
  );
}

export default PageHeading;
