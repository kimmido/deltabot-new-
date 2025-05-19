import React from "react";
import img1 from "../../../../assets/images/solution/thermal-cnt1.jpg";
import img2 from "../../../../assets/images/solution/thermal-cnt2.jpg";
import img3_1 from "../../../../assets/images/solution/thermal-cnt3-1.svg";
import img3_2 from "../../../../assets/images/solution/thermal-cnt3-2.svg";
import img5_2 from "../../../../assets/images/solution/thermal-cnt5-2.svg";
import img4 from "../../../../assets/images/solution/thermal-cnt4.svg";
import CircleIconList from "../../../Business/components/CircleIconList";

function ThermalImagingSection() {
  const features = [
    {
      icon: "icon_thermometer",
      text: "온도감지 기능",
    },
    {
      icon: "icon_sunglasses",
      text: "어두운곳 시야확보",
    },
    {
      icon: "icon_lightning",
      text: "설비 고장 예측 및 예방",
    },
    {
      icon: "icon_extinguisher",
      text: "화재 전조 파악",
    },
    {
      icon: "icon_camera_solid",
      text: "실시간 모니터링",
    },
  ];

  return (
    <div className="ThermalImagingSection">
      <section className="cnt01 container-s">
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
      <div className="container">
        <CircleIconList features={features} />
      </div>

      <section className="cnt02 container-s">
        <h3 className="sec__title">
          "모든 파장을 아우르는 열화상 솔루션 산업, 연구, 방위 분야까지 최적의
          선택을 제공합니다."
        </h3>
        <img className="sec-img" src={img2} alt="열화상 카메라 종류" />
      </section>

      <h3>열화상카메라의 종류</h3>

      <section className="cnt03 container">
        <h4 className="sec__title">1.중파 및 단파 열화상카메라</h4>
        <div className="flex-box">
          <img className="sec-img" src={img3_1} alt="열화상 카메라 종류" />
          <img className="sec-img" src={img3_2} alt="열화상 카메라 종류" />
        </div>
      </section>

      <section className="cnt04 container-m">
        <h4 className="sec__title">2.레이저 열화상카메라</h4>
        <img className="sec-img" src={img4} alt="열화상 카메라 종류" />
      </section>

      <section className="cnt05 container-m">
        <h4 className="sec__title">3.가스 이미징 열화상카메라</h4>
        <table
          role="table"
          aria-label="적외선 감지를 통한 가스 감지 가능성 비교 표"
        >
          <caption>적외선 감지를 통한 가스 감지 가능성 비교</caption>
          <thead>
            <tr>
              <th scope="col">특성</th>
              <th scope="col">메탄 (CH₄)</th>
              <th scope="col">프로판 (C₃H₈)</th>
              <th scope="col">육불화황 (SF₆)</th>
              <th scope="col">휘발성 유기 화합물 (VOCs)</th>
              <th scope="col">기타 탄화수소류</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">파장</th>
              <td colspan="5">
                중파장 적외선 (MWIR) 또는 장파장 적외선 (LWIR)
              </td>
            </tr>
            <tr scope="row">
              <th>감지 가능성</th>
              <td colspan="5">카메라 의존적</td>
            </tr>
          </tbody>
        </table>
        <img className="sec-img" src={img5_2} alt="열화상 카메라 종류" />
      </section>
    </div>
  );
}

export default ThermalImagingSection;
