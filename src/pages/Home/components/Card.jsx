import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import Button from "./Button";

const Card = ({
  title,
  description,
  image,
  buttonText,
  onButtonClick,
  className = "",
  style = {},
}) => {
  return (
    <div className={`card ${className}`} style={style}>
      {image && <img src={image} alt={title} className="card__image" />}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        {buttonText && (
          <Button label={buttonText} onClick={onButtonClick} size="small" />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired, // 카드 제목
  description: PropTypes.string, // 카드 설명
  image: PropTypes.string, // 이미지 URL
  buttonText: PropTypes.string, // 버튼 텍스트
  onButtonClick: PropTypes.func, // 버튼 클릭 이벤트
  className: PropTypes.string, // 추가 클래스
  style: PropTypes.object, // 인라인 스타일
};

export default Card;
