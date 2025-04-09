import React, { useRef } from "react";
import useScrollLock from "../../hooks/useScrollLock";

function Modal({ children, setModalOpen }) {
  const overlayRef = useRef(null);

  useScrollLock(true);

  return (
    <div
      ref={overlayRef}
      className="Modal modal-overlay"
      onClick={(e) => {
        if (e.target == overlayRef.current) {
          setModalOpen(false);
        }
      }}
    >
      <div className="Modal__content-wrap">
        <div className="Modal__content">{children}</div>
        <button
          className="Modal__close btn-point"
          onClick={(e) => {
            setModalOpen(false);
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default Modal;
