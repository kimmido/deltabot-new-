import { useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
import styles from "./VideoModal.module.scss";

export default function VideoModal({ isOpen, setIsOpen, src }) {
  const videoRef = useRef(null);
  const modalRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              videoRef.current?.play();
            }, 100);
          },
        }
      );
    }
  }, [isOpen]);

  const closeModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
        setIsOpen(false);
      },
    });
  };

  return (
    <div className="video-modal-container">
      {isOpen &&
        createPortal(
          <div className="modal-overlay">
            <div className={styles.modal_content} ref={modalRef}>
              <video ref={videoRef} controls className={styles.video_player}>
                <source src={src} type="video/mp4" />
                브라우저가 비디오 태그를 지원하지 않습니다.
              </video>
              <button onClick={closeModal} className={styles.close_btn}>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.293 3.293a1 1 0 1 1 1.414 1.414L9.414 8l3.293 3.293a1 1 0 0 1-1.414 1.414L8 9.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L6.586 8 3.293 4.707a1 1 0 0 1 1.414-1.414L8 6.586z"
                  />
                </svg>
              </button>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
