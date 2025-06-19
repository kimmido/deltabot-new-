import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

function ScrollToPosition({ offset = 150 }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  const posId = location.state?.posId;
  const POP = navigationType !== "POP"; // POP = 뒤로가기, 앞으로가기, 새로고침

  useEffect(() => {
    if (POP && posId) {
      const element = document.getElementById(posId);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: y - offset,
            behavior: "auto",
          });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

export default ScrollToPosition;
