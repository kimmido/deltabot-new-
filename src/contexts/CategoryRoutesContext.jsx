import React, { createContext } from "react";

export const category = [
  {
    main: {
      label: "사업소개",
      path: "robot-automation",
    },
    sub: [
      {
        label: "Robot automation",
        path: "robot-automation",
        items: [
          { path: "collaborative", label: "협업로봇" },
          { path: "vertical-articulated-robot", label: "수직다관절 로봇" },
          { path: "scara", label: "스카라" },
          { path: "cobot", label: "코봇" },
          { path: "deltarobot", label: "델타로봇" },
          { path: "case-paker", label: "Case Paker" },
        ],
      },
      {
        label: "Vision system",
        path: "vision-system",
        items: [
          { path: "machine-vision", label: "머신비전 카메라" },
          { path: "thermal-camera", label: "열화상 카메라" },
          { path: "spectral-camera", label: "분광카메라" },
          { path: "illumination", label: "조명" },
          { path: "vision-controller", label: "비전 컨트롤러" },
        ],
      },
      {
        label: "Recycling system",
        path: "recycling-system",
        items: [
          { path: "single-robot", label: "Single Robot System" },
          { path: "tandem-Robot", label: "Tandem Robot System" },
        ],
      },
      {
        label: "Medical",
        path: "medical",
        items: [
          { path: "pcr", label: "PCR장비" },
          { path: "uv", label: "UV장비" },
        ],
      },
      {
        label: "IT-서비스",
        path: "it",
        items: [
          { path: "gpu-server", label: "GPU서버" },
          { path: "workstations", label: "워크스테이션" },
          { path: "rack-mount", label: "랙 마운트 시스템" },
          { path: "military", label: "군사 시스템" },
          { path: "transportation", label: "운송 컴퓨터" },
        ],
      },
    ],
  },
  {
    main: {
      label: "솔루션",
      path: "automation-solution",
    },
    sub: [
      {
        label: "Automation",
        path: "automation-solution",
      },
      {
        label: "Recycling",
        path: "recycling-solution",
      },
    ],
  },
  {
    main: {
      label: "회사소개",
      path: "about",
    },
  },
];

// Context 생성
export const CategoryRoutesContext = createContext(category);

function CategoryRoutesProvider({ children }) {
  return (
    <CategoryRoutesContext.Provider value={category}>
      {children}
    </CategoryRoutesContext.Provider>
  );
}

export default CategoryRoutesProvider;
