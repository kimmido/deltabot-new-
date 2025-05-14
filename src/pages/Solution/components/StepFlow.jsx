import React from "react";
import SvgrComponent from "../../../components/icons/SvgrComponent";

function StepFlow({ title, steps }) {
  return (
    <section className="StepFlow">
      <h3 className="sec__title">{title}</h3>
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
    </section>
  );
}

export default StepFlow;
