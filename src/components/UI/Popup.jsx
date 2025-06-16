import { Link } from "react-router-dom";
import SvgrComponent from "../icons/SvgrComponent";

const Popup = ({ id, image, link, onClose }) => {
  const hasLink = !!link;

  return (
    <div className="popup-box">
      {hasLink ? (
        <Link to={link} target="_self" className="popup-image">
          <img src={image} alt="팝업 이미지" />
        </Link>
      ) : (
        <div className="popup-image">
          <img src={image} alt="팝업 이미지" />
        </div>
      )}
      <div className="popup-buttons">
        <button onClick={() => onClose(id, true)}>
          <SvgrComponent name="icon_check_circle" />
          오늘 하루 열지 않기
        </button>
        <button onClick={() => onClose(id, false)}>닫기</button>
      </div>
    </div>
  );
};

export default Popup;
