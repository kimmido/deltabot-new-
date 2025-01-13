import React from "react";

function BusinessCard({ position }) {
  return (
    <div className={`business__card ${position}`}>
      <div className="content">
        <h3 className="business__title">자동화</h3>
        <div className="business-button">더 알아보기</div>
      </div>
    </div>
  );
}

export default BusinessCard;
