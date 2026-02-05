import React from "react";
import { useNavigate } from "react-router-dom";
import usePathSegments from "../../hooks/usePathSegments";

function TabMenu({ routes }) {
  const navigate = useNavigate();
  const { rootSegment, subSegment } = usePathSegments();

  const handleTabChange = (rootSegment, subSegment) => {
    navigate(`/${rootSegment}/${subSegment}`);
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
                  subSegment === route.path ? "active" : ""
                }`}
                onClick={() => handleTabChange(rootSegment, route.path)}
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
