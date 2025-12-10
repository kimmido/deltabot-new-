
import { useEffect, useRef } from "react";

export default function useScrollReveal(
  targetSelector,
  {
    trigger = null,        // 트리거 셀렉터 (null이면 각 요소가 트리거)
    threshold = 0.2,
    once = true,           // 기본값 true (한번만 실행)
    stagger = 0,           // ms 단위 (0이면 동시 실행)
    rootMargin = "0px",
  } = {}
) {
  const animatingRef = useRef(false);

  useEffect(() => {
    const elements = document.querySelectorAll(targetSelector);
    if (!elements.length) return;

    const triggerEl = trigger 
      ? document.querySelector(trigger) 
      : null;

    // 모든 요소에 애니메이션 적용
    const animate = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;

      if (stagger > 0) {
        // 순차 실행
        const totalDuration = (elements.length - 1) * stagger;
        elements.forEach((el, i) => {
          setTimeout(() => {
            el.classList.add("in-view");
          }, i * stagger);
        });
        // 모든 애니메이션이 끝난 후 플래그 해제
        setTimeout(() => {
          animatingRef.current = false;
        }, totalDuration + 100); // 여유 시간 추가
      } else {
        // 동시 실행
        elements.forEach(el => el.classList.add("in-view"));
        animatingRef.current = false;
      }
    };

    // 요소 초기화 함수
    const reset = () => {
      if (animatingRef.current) return; // 애니메이션 중에는 초기화 불가
      elements.forEach(el => el.classList.remove("in-view"));
    };

    let lastCall = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        const now = Date.now();
        // 스마트 스로틀: 100ms 이내 중복 호출 방지
        if (now - lastCall < 100) return;
        lastCall = now;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            if (once) observer.disconnect();
          } else if (!once) {
            // once=false일 때만 초기화
            reset();
          }
        });
      },
      { threshold, rootMargin }
    );

    // 트리거 설정
    if (triggerEl) {
      observer.observe(triggerEl);
    } else {
      // 트리거가 없으면 첫 번째 요소를 트리거로
      observer.observe(elements[0]);
    }

    return () => observer.disconnect();
  }, [targetSelector, trigger, threshold, once, stagger, rootMargin]);
}