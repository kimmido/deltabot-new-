import React from "react";
import { useNavigate } from "react-router-dom";

function TabMenu({ routes, currentCategory, currentPath }) {
  const navigate = useNavigate();

  const handleTabChange = (currentCategory, path) => {
    navigate(`/${currentCategory}/${path}`);
  };

  return (
    <>
      {routes.items.length > 1 && (
        <div className="TabMenu overflow_hidden">
          <div
            className="TabMenu__box"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-once="true"
          >
            {routes.items.map((route) => (
              <button
                key={route.path}
                className={`TabMenu__item ${
                  currentPath === route.path ? "active" : ""
                }`}
                onClick={() => handleTabChange(currentCategory, route.path)}
              >
                <strong className="TabMenu__label">{route.label}</strong>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TabMenu;
