import { useLayoutEffect } from "react";

export default function useScrollLock(lock = true) {
  useLayoutEffect(() => {
    if (!lock) return;

    const scrollY = window.scrollY;
    const body = document.body;
    console.log(scrollY);

    // 스크롤 위치 고정
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      // 스타일 초기화 + 스크롤 위치 복구
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [lock]);
}
