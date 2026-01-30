import React from "react";
import SvgrComponent from "../icons/SvgrComponent";

// 아이콘+화살표 흐름도
function StepFlow({ steps }) {
  return (
    <div className="StepFlow">
      <div className="flow-wrapper">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <div className="step">
              <SvgrComponent name={step.iconName} />
              <div className="step-title">{step.title}</div>
              <div className="step-sub">{step.text}</div>
            </div>
            {idx + 1 < steps.length && <div className="arrow-right">→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default StepFlow;
