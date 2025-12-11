import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { Link, useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import BusinessApplications from "./components/BusinessApplications";
import QuoteArea from "./components/QuoteArea";
import { IconArrow } from "../../components/icons";
import RollingSwiper from "../../components/UI/RollingSwiper";
import { SwiperSlide } from "swiper/react";
import { HighlightText } from "../../components/UI/HighlightText";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="Logistics Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* <BusinessIntroSection data={data} currentTab={currentTab} /> */}

      <section className="BusinessIntroSection">
        <div className="desc-box">
          {data.description.map((txt, idx) => (
            <p key={idx} className="desc">
              <HighlightText text={txt} keyChar="#" />
            </p>
          ))}
        </div>

        {data.images.map((img, index) => (
          <img
            className={`intro-img ${img}`}
            key={index}
            src={`/images/business/${currentTab}(${index + 1}).jpg`}
            alt={currentTab}
          />
        ))}

        {data.extraText && (
          <div className="desc-box">
            <p className="desc">{data.extraText}</p>
          </div>
        )}
      </section>

      <RollingSwiper>
        {data.slides.map((item, i) => (
          <SwiperSlide key={"도입의 이점" + (i + 1)}>
            <img src={item} alt={"도입의 이점" + (i + 1)} />
          </SwiperSlide>
        ))}
      </RollingSwiper>

      <div className="app-wrap">
        <BusinessApplications data={data} />

        {data.link && (
          <div className="link-area">
            <Link
              to={data.link.path}
              state={{ posId: data.link.posId }}
              className="link-solution btn-pill"
            >
              <span>{data.link.label}</span>
              <IconArrow size="20" weight="1" />
            </Link>
          </div>
        )}
      </div>

      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Business;
