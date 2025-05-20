import React from "react";

function HyperspectralSection() {
  return (
    <div className="HyperspectralSection">
      <section className="container container--s">
        <h3 className="sec__title">초분광 비전</h3>
        {/* <img className="sec-img" src={img1} alt="머신비전" /> */}

        <p className="cnt-desc">
          <span className="break-point">
            초분광 이미지는 수십에서 수백 개의 연속된 파장 대역을 동시에
            촬영하여, 각 픽셀마다 고유한 스펙트럼 정보를 포함하는 고정밀 영상
            데이터입니다.
          </span>
          <span className="break-point">
            기존 RGB 영상이 단 3개의 채널(Red, Green, Blue)만을 사용하는 반면,
            초분광 영상은 100개 이상의 스펙트럼 채널을 제공하여, 육안으로 구분할
            수 없는 물질 특성까지 정밀하게 분석할 수 있습니다.
          </span>
        </p>
      </section>
    </div>
  );
}

export default HyperspectralSection;
