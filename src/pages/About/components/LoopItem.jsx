import React from "react";

function LoopItem({ src, alt, caption }) {
  return (
    <li>
      <figure>
        <div className="img-box">
          <img src={src} alt={alt} />
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </li>
  );
}

export default LoopItem;
