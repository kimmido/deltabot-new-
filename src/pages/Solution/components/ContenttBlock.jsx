import React from "react";

function ContenttBlock({ className, size = 1440, title, children }) {
  const style = {
    maxWidth: `${size}px`,
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div className={`ContenttBlock ${className ? className : ""} container`}>
      <div style={style}>
        {title && <h4 className="cnt-title">{title}</h4>}
        {children}
      </div>
    </div>
  );
}

export default ContenttBlock;
