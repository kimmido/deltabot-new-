import React, { useContext } from "react";
// import styles from "./BusinessSection.module.scss";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import BusinessItem from "./BusinessItem";

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const route = category.find((item) => item.main.label == "사업소개");
  const subRoutes = route.sub;

  return (
    <section
      className="BusinessSection"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="9000"
    >
      <div className="container">
        <h2 className="section_title">사업소개</h2>

        <div className={"business__list"}>
          {subRoutes.map((sub) => (
            <BusinessItem key={sub.label} sub={sub} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
