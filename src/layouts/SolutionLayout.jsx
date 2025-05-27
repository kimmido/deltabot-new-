import React, { useEffect } from "react";
import PageHeading from "../components/UI/PageHeading";
import { useLocation } from "react-router-dom";

function SolutionLayout() {
  const { pathname } = useLocation();
  useEffect(() => {});
  return (
    <div className="SolutionLayout">
      <div className="container">
        <PageHeading title="PCR" currentPath="pcr" />
      </div>
    </div>
  );
}

export default SolutionLayout;
