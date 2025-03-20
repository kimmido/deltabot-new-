import React from "react";
import { useNavigate } from "react-router-dom";

function TabMenu({ routes, currentCategory, currentPath }) {
  const navigate = useNavigate();

  const handleTabChange = (currentCategory, path) => {
    navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div className="TabMenu overflow_hidden">
      {console.log("탭메뉴")}
      <div className="TabMenu__box" data-aos="fade-up" data-aos-duration="1000">
        {routes.items.map((route) => (
          <button
            key={route.path}
            className={`TabMenu__item ${
              currentPath === route.path ? "active" : ""
            }`}
            onClick={() => handleTabChange(currentCategory, route.path)}
          >
            <span className="TabMenu__label">{route.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabMenu;
