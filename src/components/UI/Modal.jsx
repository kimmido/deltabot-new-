import React, { useRef, useEffect } from "react";
import useScrollLock from "../../hooks/useScrollLock";

function Modal({ children, setModalOpen }) {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useScrollLock(true); // 스크롤 잠금

  // keydown 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }

      if (e.key === "Tab") {
        e.preventDefault(); // 기본 Tab 동작 막고
        // 닫기 버튼에 포커스 토글
        const btn = closeBtnRef.current;
        if (document.activeElement !== btn) {
          btn?.focus();
        } else {
          btn?.blur(); // 포커스 풀기
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setModalOpen]);

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
          ref={closeBtnRef}
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
