import React from "react";
import img05_1 from "../../../assets/images/solution/smart_factory/smart_factory(5-1).svg";
import { IconArrow } from "../../../components/icons";

export default function EndSection() {
  return (
    <section className="EndSection">
      <section className="section cnt01">
        <div className="container">
          <h3 className="sec-title">
            <b>스마트팩토리</b> 정부 지원을 받아 구축하세요.
          </h3>
          <p className="cnt-desc">
            스마트 팩토리 정부 지원 제도는 기업이 현재 공장 스마트화
            수준(미적용, 기초, 중간1, 중간2)을 정확하게 진단받은 뒤, 그 결과에
            따라 다음 단계로 한 걸음 더 성장할 수 있도록 단계별로 맞춤형
            지원금을 제공합니다. 이 제도 덕분에 많은 기업이 체계적으로 스마트
            공장으로 전환하며 한 단계씩 성장하는 데 큰 힘이 되고 있습니다.
          </p>
          <div className="sub-box">
            <h4 className="sub-box__title">
              스마트공장 수준 확인 제도 (필수 절차)
            </h4>
            <p className="cnt-desc">
              <p>
                정부 지원 사업 신청 전, 기업의 스마트화 수준을 공식적으로
                진단받아 적합한 지원 단계와 규모를 결정하는 필수 제도입니다.
              </p>
              <p>
                기업의 현황을 정량적으로 평가하여 적합한 지원 단계와 규모를
                결정합니다.
              </p>
            </p>

            <ul className="step-box">
              <li className="step-item">
                <p>스마트제조혁신추진단</p> <p>홈페이지를 통해 신청</p>
              </li>
              <IconArrow size="24" weight="1" />
              <li className="step-item">
                <p>전문기관의 현장 진단</p>
              </li>
              <IconArrow size="24" weight="1" />
              <li className="step-item">
                <p>수준 확인서 발급</p>
              </li>
            </ul>

            <p>
              "공장 진단 결과를 기반으로 정부 승인률을 높이는 로봇 시스템
              제안서를 마련하여, 단계별 성장을 확실하게 지원합니다."
            </p>
            <img className="card" src={img05_1} alt="스마트팩토리 공정도" />
          </div>
        </div>
      </section>
    </section>
  );
}
