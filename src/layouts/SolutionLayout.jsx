import React from "react";
import PageHeading from "../components/UI/PageHeading";

function SolutionLayout() {
  return (
    <div className="SolutionLayout">
      <div className="container">
        <PageHeading title="PCR" currentPath="pcr" />
        <img src="/images/solution/pcr.jpg" />
      </div>
    </div>
  );
}

export default SolutionLayout;
