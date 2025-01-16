import React from "react";
import styles from "./PageHeading.module.scss";

function PageHeading({ title, img }) {
  return (
    <div className={styles.PageHeading}>
      <h2>{title}</h2>
      <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p>
    </div>
  );
}

export default PageHeading;
