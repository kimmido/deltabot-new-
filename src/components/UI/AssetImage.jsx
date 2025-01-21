import React from "react";

function AssetImage({ className = "img", fileName }) {
  const imagePath = `/src/assets/images/${fileName}`;
  const image = new URL(imagePath, import.meta.url).href;

  return <img className={className} src={image} alt={fileName} />;
}

export default AssetImage;
