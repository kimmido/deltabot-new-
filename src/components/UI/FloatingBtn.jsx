import React, { useRef } from "react";
import { IconArrow, IconTriangle } from "../icons";
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

  function Btn({ children, onClick, text, className }) {
    return (
      <button className={`btn ${className}`} onClick={onClick}>
        <div className="icon-box">
          {children}
          <span className="effect"></span>
        </div>
        <span className="text">{text}</span>
      </button>
    );
  }

  return (
    <div className="FloatingBtn" ref={btnRef}>
      <Btn
        text="Youtube"
        className="btn-youtube"
        onClick={() => window.open("https://www.youtube.com/@델타봇", "_blank")}
      >
        <IconTriangle className="player" />
      </Btn>

      <Btn text="Back" className="btn-back" onClick={() => navigate(-1)}>
        <SvgrComponent name="icon_arrow_rotate_left_solid" />
      </Btn>

      <Btn text="Top" className="btn-top" onClick={onClick}>
        <IconArrow weight="1" />
      </Btn>
    </div>
  );
}

export default FloatingBtn;
