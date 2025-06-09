import React from "react";
import { NavLink } from "react-router-dom";

function ProductLines({ data, category }) {
  return (
    <section className="ProductLines">
      <h3 className="cnt-title">PRODUCT LINES</h3>
      <ul>
        {data.map((data) => (
          <li key={data.label}>
            <NavLink
              to={`/${category}/${data.path}`}
              className="flex-container"
            >
              <div className="img-box">
                <img src={data.img} alt="" />
              </div>
              <dl className="desc">
                <dt>{data.label}</dt>
                <div className="bullets">
                  {data.texts.map((txt) => (
                    <dd key={txt}>{txt}</dd>
                  ))}
                </div>
                <span className="link-more">more</span>
              </dl>
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductLines;
