import React from "react";
import SvgrComponent from "../../../components/icons/svgrComponent";

function StepFlow({ steps }) {
  return (
    <section className="StepFlow">
      <h3 className="sec__title">자동화 공정</h3>
      <div className="flow-wrapper">
        {steps.map((step, idx) => (
          <>
            <div className="step">
              <SvgrComponent name={step.iconName} />
              <div className="step-title">{step.title}</div>
              <div className="step-sub">{step.text}</div>
            </div>
            {idx + 1 < steps.length && <div className="arrow-right">→</div>}
          </>
        ))}
      </div>
    </section>
  );
}

export default StepFlow;
