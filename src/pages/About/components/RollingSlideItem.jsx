import React from "react";

function LoopItem({ src, alt, caption }) {
  return (
    <figure>
      <div className="img-box">
        <img src={src} alt={alt} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default LoopItem;
