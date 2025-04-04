import React, { useContext } from "react";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import BusinessItem from "./BusinessItem";

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const route = category.find((item) => item.main.label == "사업소개");
  const subRoutes = route.sub;

  return (
    <section className="BusinessSection">
      <div className="container">
        <h2
          id="BusinessSectionTItle"
          className="section_title"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="9000"
        >
          사업소개
        </h2>

        <div
          className={"business__list"}
          data-aos="fade-up"
          data-aos-anchor="#BusinessSectionTItle"
          // data-aos-anchor-placement="top-bottom"
          data-aos-duration="30000"
        >
          {subRoutes.map((sub) => (
            <BusinessItem key={sub.label} sub={sub} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
