import React, { createContext } from "react";

export const category = [
  {
    main: {
      label: "사업소개",
      path: "automation",
    },
    sub: [
      {
        label: "자동화",
        path: "automation",
        items: [
          { path: "collaborative", label: "협업로봇" },
          { path: "scara", label: "스카라" },
          { path: "cobot", label: "코봇" },
          { path: "deltarobot", label: "델타로봇" },
          { path: "machine-vision", label: "머신비전" },
          { path: "thermal-camera", label: "열화상 카메라" },
        ],
      },
      {
        label: "재활용",
        path: "recycling",
        items: [
          { path: "system", label: "재활용시스템" },
          { path: "spectral-camera", label: "분광카메라" },
          { path: "lighting", label: "조명" },
        ],
      },
      {
        label: "의료",
        path: "medical",
        items: [
          { path: "pcr", label: "PCR장비" },
          { path: "uv", label: "UV장비" },
        ],
      },
      {
        label: "IT",
        path: "it",
        items: [
          { path: "gpu-server", label: "GPU서버" },
          { path: "workstations", label: "Workstations" },
          { path: "rack-mount", label: "Rack Mount Systems" },
          { path: "military", label: "Military Systems" },
          { path: "transportation", label: "Transportation Computers" },
        ],
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
