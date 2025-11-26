import React from "react";

export default function SectionTitle({ text, emph }) {
  return (
    <h3 className="sec-title">
      {text}
      <b>{emph}</b>
    </h3>
  );
}
