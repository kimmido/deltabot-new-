import React from "react";

export default function CalloutBox({ title, description, actions }) {
  return (
    <div className="CalloutBox">
      <p className="CalloutBox__title">{title}</p>
      <p className="CalloutBox__desc">{description}</p>
      <ul className="CalloutBox__actions">
        {actions.map((action, index) => (
          <li key={index}>{action}</li>
        ))}
      </ul>
    </div>
  );
}
