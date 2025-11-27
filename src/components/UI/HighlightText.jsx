export const HighlightText = ({ text, keyChar }) => {
  const parts = text.split(keyChar);

  return (
    <>
      {parts.map((part, index) =>
        index % 2 !== 0 ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

// example usage:
// {texts.map((text, idx) => (
//   <p key={idx}>
//     <HighlightText text={text} keyChar="#" />
//   </p>
// ))}
