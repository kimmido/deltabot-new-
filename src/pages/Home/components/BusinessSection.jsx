import React, { useState } from "react";
import BusinessItem from "./BusinessItem";
import { category } from "../../../data/category";

function BusinessSection({ aosProps }) {
  const route = category.find((item) => item.main.label == "사업소개");
  const subRoutes = route.sub;
  const [isExpanded, setExpanded] = useState(1000);

  return (
    <section className="BusinessSection">
      <div className="container">
        <h2
          id="BusinessSectionTItle"
          className="section_title"
          data-aos="fade-up"
          {...aosProps}
        >
          사업소개
        </h2>

        <div className={"business__list"}>
          <div className="flex-box">
            {subRoutes.map(
              (sub, idx) =>
                idx < 3 && ( // 3개씩 flex-box로 묶음
                  <BusinessItem
                    key={sub.label}
                    sub={sub}
                    idx={idx}
                    isExpanded={isExpanded}
                    setExpanded={setExpanded}
                  />
                )
            )}
          </div>
          <div className="flex-box">
            {subRoutes.map(
              (sub, idx) =>
                idx >= 3 && ( // 3개씩 flex-box로 묶음
                  <BusinessItem
                    key={sub.label}
                    sub={sub}
                    idx={idx}
                    aosProps={aosProps}
                    isExpanded={isExpanded}
                    setExpanded={setExpanded}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
