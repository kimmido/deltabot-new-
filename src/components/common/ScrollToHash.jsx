import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash({ offset = 150 }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
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

export default ScrollToHash;
