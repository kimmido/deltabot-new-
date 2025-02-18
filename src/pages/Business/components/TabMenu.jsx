import React from "react";
import { useNavigate } from "react-router-dom";

function TabMenu({ routes, currentCategory, currentPath }) {
  const navigate = useNavigate();

  const handleTabChange = (currentCategory, path) => {
    navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div className="TabMenu overflow_hidden">
      <div className="parent-tab" data-aos="fade-up" data-aos-duration="1000">
        {routes.items.map((route) => (
          <button
            key={route.path}
            className={`parent-tab__item ${
              currentPath === route.path ? "active" : ""
            }`}
            onClick={() => handleTabChange(currentCategory, route.path)}
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabMenu;
