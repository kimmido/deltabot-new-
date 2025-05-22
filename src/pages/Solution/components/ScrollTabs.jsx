import React, { useEffect, useRef, useState } from "react";

const ScrollTabs = ({ tabs, offset = 0, sectionRefs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");

  // 탭 클릭 시 해당 섹션으로 부드럽게 이동
  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const y = el.offsetTop - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: null, // 뷰포트 기준
        rootMargin: `-${offset}px 0px 0px 0px`, // 고정된 헤더 고려
        threshold: 0.05, // 요소가 30% 이상 보일 때
      }
    );

    // 섹션들을 옵저버에 등록
    tabs.forEach((tab) => {
      const el = sectionRefs.current[tab.id];
      if (el) observer.observe(el);
    });

    // 언마운트 시 옵저버 해제
    return () => {
      observer.disconnect();
    };
  }, [tabs, offset]);

  // const observer = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let current = tabs[0].id;
  //     for (let tab of tabs) {
  //       const el = sectionRefs.current[tab.id];
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         if (rect.top - offset <= 0) {
  //           current = tab.id;
  //         }
  //       }
  //     }
  //     setActiveTab(current);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // 초기화

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [tabs, offset]);

  return (
    <div className="ScrollTabs">
      <div className="container">
        <nav className="tab-menu">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default ScrollTabs;
export const useScrollTabsRefs = (tabs) => {
  const sectionRefs = useRef({});
  const getRef = (id) => (el) => {
    if (el) sectionRefs.current[id] = el;
  };
  return { sectionRefs, getRef };
};
