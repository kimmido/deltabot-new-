import React from "react";

const ResponsiveImage = ({
  src,
  alt,
  className = "",
  style = {},
  aspectRatio = "16:9",
}) => {
  const [width, height] = aspectRatio.split(":").map(Number);
  const paddingTop = (height / width) * 100;

  return (
    <div
      className={`responsive-image ${className}`}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: `${paddingTop}%`,
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default ResponsiveImage;
