import React from "react";

import img0 from "../../../../assets/images/solution/spectral-banner.jpg";
import img1 from "../../../../assets/images/solution/spectral-cnt1.jpg";
import img2 from "../../../../assets/images/solution/spectral-cnt2.jpg";
import img3_1 from "../../../../assets/images/solution/spectral-cnt3-1.jpg";
import img3_2 from "../../../../assets/images/solution/spectral-cnt3-2.jpg";
import img3_3 from "../../../../assets/images/solution/spectral-cnt3-3.jpg";
import img3_4 from "../../../../assets/images/solution/spectral-cnt3-4.jpg";
import SectionBanner from "./SectionBanner";

function HyperspectralSection() {
  return (
    <section className="HyperspectralSection">
      <div className="container">
        <SectionBanner
          sectionName="machine"
          title1="초분광 카메라"
          title2="보이지 않는 것을 시각화 하다. -초분광 이미지 기술의 새로우 기준"
          src={img0}
        />
        {/* <h3 className="sec__title">초분광 비전</h3>
        <img className="sec-img" src={img0} alt="무지개" /> */}
      </div>

      <div className="cnt01 container">
        <div className="container--s" style={{ maxWidth: "1000px" }}>
          <h4 className="sec__title">초분광 이미징이란?</h4>
          <img className="sec-img" src={img1} alt="초분광 이미징이란" />
        </div>
      </div>

      <div className="cnt02 container">
        <div className="container--s" style={{ maxWidth: "1000px" }}>
          <h4 className="sec__title">초분광 이미징 시스템</h4>
          <img className="sec-img" src={img2} alt="이미징 시스템" />
        </div>
      </div>

      <div className="cnt03 container">
        <h4 className="sec__title">초분광 이미징 시스템의 특징</h4>
        <div className="flex-container container--l">
          <img className="sec-img" src={img3_1} alt="시스템의 특징" />
          <img className="sec-img" src={img3_2} alt="시스템의 특징" />
          <img className="sec-img" src={img3_3} alt="시스템의 특징" />
        </div>
      </div>
      <div className="container--s" style={{ maxWidth: "1000px" }}>
        <img className="sec-img" src={img3_4} alt="시스템의 특징" />
      </div>
    </section>
  );
}

export default HyperspectralSection;
