import React from "react";

function Modal({ children, setModalOpen }) {
  return (
    <div className="Modal modal-overlay">
      <div className="Modal__content-container">
        <div className="Modal__content">{children}</div>
        <button
          className="Modal__close btn-pill btn-point"
          onClick={() => setModalOpen(false)}
        >
          다른 제품 보러가기
        </button>
      </div>
    </div>
  );
}

export default Modal;
