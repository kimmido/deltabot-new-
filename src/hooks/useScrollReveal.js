
import { useEffect, useRef } from "react";

export default function useScrollReveal(
  targetSelector,
  {
    trigger = null,           // 트리거 셀렉터 (null이면 각 요소가 스스로 트리거)
    threshold = 0.2,          // 요소 기준 - 요소가 화면에 얼마나 보이냐
    once = true,              // 한번만 실행
    stagger = 0,              // ms 단위 순차 간격
    rootMargin = "0px",       // 화면 기준 - 음수면 늦게, 양수면 미리(px, %)
    duration = 600,           // 애니메이션 지속 시간 (ms)
    timingFunction = "ease",  // CSS timing function
  } = {}
) {
  const animatingRef = useRef(false);

  useEffect(() => {
    const elements = document.querySelectorAll(targetSelector);
    if (!elements.length) return;

    const triggerEl = trigger ? document.querySelector(trigger) : null;

    // 초기 스타일 설정 (한 번만)
    elements.forEach((el, i) => {
      el.style.transitionDuration = `${duration}ms`;
      el.style.transitionTimingFunction = timingFunction;
    });


    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerEl) {
              // 트리거 모드
              if (animatingRef.current) return;
              animatingRef.current = true;

              if (stagger > 0) {
                // 순차 실행
                elements.forEach((el, i) => {
                  setTimeout(() => {
                    el.classList.add("in-view");

                    // 마지막 애니메이션 적용 후 플래그 해체
                    if(i == (elements.length - 1)) {
                      animatingRef.current = false;
                    }
                  }, i * stagger);
                });
              } else {
                // 동시 실행
                elements.forEach(el => el.classList.add("in-view"));
                animatingRef.current = false;
              }

              if (once) observer.disconnect();
            } else {
              // 개별 모드: 각 요소 독립 실행
              requestAnimationFrame(() => {
                entry.target.classList.add("in-view");
              });

              if (once) {
                observer.unobserve(entry.target);
              }
            }
          } else if (!once) {
            // 초기화
            if (triggerEl) {
              if (!animatingRef.current) {
                elements.forEach(el => el.classList.remove("in-view"));
              }
            } else {
              entry.target.classList.remove("in-view");
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    // 관찰 시작
    if (triggerEl) {
      observer.observe(triggerEl);
    } else {
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [targetSelector, trigger, threshold, once, stagger, rootMargin, duration, timingFunction]);
}