import React from "react";

function Modal({ children, setModalOpen }) {
  return (
    <div className="Modal modal-overlay">
      <div className="Modal__content-wrap">
        <div className="Modal__content">{children}</div>
        <button
          className="Modal__close btn-point"
          onClick={() => setModalOpen(false)}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
