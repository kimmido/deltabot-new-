import React from "react";

function ProductIntro({ item }) {
  return (
    <>
      <h5 className="prod_name">{item.name}</h5>
      <div className="prod_desc">
        {item.features.map((feature, idx) => (
          <div key={idx} className="prod_desc__inner">
            {feature.title == "null" || (
              <h6 className="prod_desc__title">{feature.title}</h6>
            )}
            {feature.texts?.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            {feature.bullets && (
              <ul className="bullets">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductIntro;
