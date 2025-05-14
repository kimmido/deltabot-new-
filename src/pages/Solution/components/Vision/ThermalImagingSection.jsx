import React from "react";
import img1 from "../../../../assets/images/solution/thermal-cnt1.jpg";
import img2 from "../../../../assets/images/solution/thermal-cnt2.jpg";
import img3_1 from "../../../../assets/images/solution/thermal-cnt3-1.svg";
import img3_2 from "../../../../assets/images/solution/thermal-cnt3-2.svg";
import img4 from "../../../../assets/images/solution/thermal-cnt4.svg";

function ThermalImagingSection() {
  return (
    <div className="ThermalImagingSection">
      <section className="container-s">
        <h3 className="sec__title">열화상 비전</h3>
        <img className="sec-img" src={img1} alt="머신비전" />

        <p className="cnt-desc">
          <span className="break-point">
            눈에 보이지 않는
            <span className="highlight">적외선(IR) 열 에너지</span>를 감지하여
            화면에{" "}
            <span className="highlight">온도 분포를 색상 이미지로 표현</span>
            해주는 장치
          </span>
          <span className="break-point">
            사람이나 사물의 온도 차이를
            <span className="highlight">비접촉식으로 감지</span>할 수 있어
            안전하고 효율적인 진단과 감시에 사용
          </span>
        </p>
      </section>

      <section className="container-s">
        <h3 className="sec__title">
          "모든 파장을 아우르는 열화상 솔루션 산업, 연구, 방위 분야까지 최적의
          선택을 제공합니다."
        </h3>
        <img className="sec-img" src={img2} alt="열화상 카메라 종류" />
      </section>

      <h3>열화상카메라의 종류</h3>

      <section>
        <h4 className="sec__title">중파 및 단파 열화상카메라</h4>
        <div className="flex-box">
          <img className="sec-img" src={img3_1} alt="열화상 카메라 종류" />
          <img className="sec-img" src={img3_2} alt="열화상 카메라 종류" />
        </div>
      </section>

      <section>
        <h4 className="sec__title">중파 및 단파 열화상카메라</h4>
        <img className="sec-img" src={img4} alt="열화상 카메라 종류" />
      </section>
    </div>
  );
}

export default ThermalImagingSection;
