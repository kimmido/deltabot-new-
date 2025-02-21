import React, { createContext } from "react";

export const category = [
  {
    main: {
      label: "사업소개",
      path: "robot-automation",
    },
    sub: [
      {
        label: "Robot Automation",
        path: "robot-automation",
        items: [
          { path: "collaboration", label: "협동로봇" },
          { path: "serial-robot", label: "수직다관절 로봇" },
          { path: "scara", label: "스카라" },
          { path: "cobot", label: "코봇" },
          { path: "deltarobot", label: "델타로봇" },
          { path: "case-packer", label: "Case Packer" },
        ],
      },
      {
        label: "Vision System",
        path: "vision-system",
        items: [
          { path: "machine-vision", label: "머신비전 카메라" },
          { path: "thermal-camera", label: "열화상 카메라" },
          { path: "spectral-camera", label: "초분광카메라" },
          { path: "illumination", label: "조명" },
          { path: "vision-controller", label: "비전 컨트롤러" },
        ],
      },
      {
        label: "Recycling System",
        path: "recycling-system",
        items: [
          { path: "single-robot", label: "Single Robot System" },
          { path: "tandem-robot", label: "Tandem Robot System" },
        ],
      },
      {
        label: "Medical",
        path: "medical",
        items: [
          { path: "pcr", label: "PCR" },
          { path: "uv", label: "UV" },
        ],
      },
      {
        label: "Information Technology",
        path: "information-technology",
        items: [
          { path: "gpu-server", label: "GPU server" },
          { path: "workstations", label: "Workstations" },
          { path: "rack-mount", label: "Rack mount" },
          { path: "military", label: "Military" },
          { path: "vehicle", label: "Vehicle" },
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
