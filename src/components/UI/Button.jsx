import React from "react";

function Button({ children, onClick, types = [] }) {
  let className = "btn";
  types.map((type) => (className += ` btn-${type}`));

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
