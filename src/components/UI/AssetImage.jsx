import React from "react";

function AssetImage({ className = "img", filePath, alt }) {
  const imagePath = `/src/assets/images/${filePath}`;
  const image = new URL(imagePath, import.meta.url).href;

  return <img className={className} src={image} alt={alt} />;
}

export default AssetImage;
