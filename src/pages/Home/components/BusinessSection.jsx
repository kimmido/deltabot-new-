import React, { useState } from "react";
import BusinessItem from "./BusinessItem";
import { category } from "../../../data/category";

function BusinessSection() {
  const route = category.find((item) => item.main.label == "사업소개");
  const subRoutes = route.sub;
  const [isExpanded, setExpanded] = useState(1000);
  console.log(subRoutes.length);
  console.log(subRoutes.length % 3);
  console.log(subRoutes.length / 3);
  console.log(Math.floor(subRoutes.length / 3));

  const grid = [
    ["col", "col", "col"],
    ["col", "col"],
  ];

  // flex-box 생성
  let routeIndex = -1;

  return (
    <section className="BusinessSection">
      <div className="container">
        <h2
          id="BusinessSectionTItle"
          className="section_title"
          data-aos="fade-up"
        >
          사업소개
        </h2>

        <div className="business__list">
          {grid.map((row, i) => (
            <div className="flex-box" key={i}>
              {row.map((col, j) => {
                routeIndex++;
                const item = subRoutes[routeIndex];

                return (
                  <BusinessItem
                    key={item.label}
                    sub={item}
                    idx={routeIndex}
                    isExpanded={isExpanded}
                    setExpanded={setExpanded}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
