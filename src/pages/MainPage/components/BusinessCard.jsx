import React from "react";

function BusinessCard({ position }) {
  const businessData = [
    { title: "자동화", description: "공장의 자동화 기술.", bgColor: "#d8eaf7" },
    {
      title: "재활용",
      description: "폐기물 분류 및 처리.",
      bgColor: "#e2f6d8",
    },
    { title: "의료", description: "의료 장비 최적화.", bgColor: "#d8eaf7" },
    { title: "IT", description: "IT 기술 혁신.", bgColor: "#e2f6d8" },
  ];

  return (
    <div className={`business__card ${position}`}>
      <div className="content">
        <h3 className="business__title">자동화</h3>
        <p className="business-description">
          컴퓨터 시스템이나 산업 로봇을 도입하여 공장의 무인화, 생산 관리를
          자동화합니다.
        </p>
        <div className="business-button">더 알아보기</div>
      </div>
    </div>
  );
}

export default BusinessCard;
