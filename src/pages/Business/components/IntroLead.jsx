import { HighlightText } from "../../../components/UI/HighlightText";

function IntroLead({ data = [] }) {
  return (
    <div className="IntroLead">
      <div className="desc-box">
        {data.map((txt, idx) => (
          <p key={idx} className="desc">
            <HighlightText text={txt} keyChar="#" />
          </p>
        ))}
      </div>
    </div>
  );
}

export default IntroLead;
