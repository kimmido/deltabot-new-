import React from "react";
import SectionBanner from "./components/SectionBanner";
import { HighlightText } from "@components/UI/HighlightText";
import VideoDefault from "@components/UI/VideoDefault";
import CalloutBox from "./components/CalloutBox";

import img0 from "@assets/images/solution/logistics/warehouse-banner.jpg";
import img2_1 from "@assets/images/solution/logistics/warehouse-cnt(2-1).svg";
import img2_2 from "@assets/images/solution/logistics/warehouse-cnt(2-2).svg";
import img2_3 from "@assets/images/solution/logistics/warehouse-cnt(2-3).svg";

export default function WarehouseSection() {
  return (
    <section className="WarehouseSection section">
      <div className="container">
        <SectionBanner
          sectionName="warehouse"
          title1="스마트 창고"
          title2="정교하고 지능적인 창고 시스템 구축"
          src={img0}
        />
      </div>

      <section className="cnt01 container">
        <p className="cnt-desc">
          <HighlightText
            text="#창고 압박#과 #복잡한 반송 화물 처리# 등 난제들을 전문적으로 해결하며, 인력부터 공간까지 모든 자원을 최적으로 활용하는 #고도화된 물류 운영 솔루션#을 제공합니다."
            keyChar="#"
          />
        </p>
      </section>

      <section className="cnt02 bg-section-light bg-section--py-lg">
        <div className="container">
          <h3 className="cnt-title">
            재고, 공간, 인력 효율을 위한스마트 창고 시스템 구축
          </h3>
          <p className="cnt-desc">효율적인 창고 관리를 위한 3단계 솔루션</p>
          <ul className="list grid-block grid-block--three-col">
            {cnt02.img.map((src, i) => (
              <li key={i} className="grid-block__item card ">
                <img src={src} alt={"솔루션" + (i + 1)} />
              </li>
            ))}
          </ul>
          <CalloutBox
            title="데이터 기반 스마트 물류 솔루션: 공정 최적화부터 선제적 대응까지"
            description="WMS(창고 관리 시스템) 도입을 통해 재고 데이터와 작업 프로세스를 표준화하고, 인력 배치의 유연성을 확보하여 운영의 복잡성을 해소합니다. 수요 예측 기반의 선제적 대응 체계를 구축함으로써 창고 공간 활용을 극대화하고 물류 운영의 효율을 완성합니다."
            actions={[
              "공정 최적화 및 검토",
              "유형별 프로세스 의사결정",
              "운영 복잡성 해소 및 대안",
            ]}
          />
        </div>
      </section>

      <section className="cnt3">
        <div className="container">
          <h3 className="cnt-title">스마트 창고 프로세스</h3>
          <VideoDefault
            src="/videos/page/solution-logistics(2).mp4"
            controls={false}
            loop={true}
            autoPlay={true}
            muted={true}
          />
        </div>
      </section>
    </section>
  );
}

const cnt02 = {
  img: [img2_1, img2_2, img2_3],
};
