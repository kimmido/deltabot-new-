import React, { useRef } from "react";
import IconArrow from "../icons/IconArrow";
import { useNavigate } from "react-router-dom";
import SvgrComponent from "../icons/SvgrComponent";

function FloatingBtn() {
  const btnRef = useRef(null);
  const navigate = useNavigate();

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="FloatingBtn" ref={btnRef}>
      <button
        className={`btn btn-back radius-pill `}
        onClick={() => navigate(-1)}
      >
        <div className="icon-box">
          <SvgrComponent name="icon_arrow_rotate_left_solid" />
          <span className="effect"></span>
        </div>
        <span className="text">Back</span>
      </button>

      <button className={`btn btn-top radius-pill`} onClick={onClick}>
        <div className="icon-box">
          <IconArrow size="24" weight="1" />
          <span className="effect"></span>
        </div>
        <span className="text">Top</span>
      </button>
    </div>
  );
}

export default FloatingBtn;
