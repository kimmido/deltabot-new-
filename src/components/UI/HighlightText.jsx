export const HighlightText = ({ text, keyChar }) => {
  const parts = text.split(keyChar);
  console.log(parts);

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
