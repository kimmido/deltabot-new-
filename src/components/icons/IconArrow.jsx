const IconArrow = ({
  size = "100%",
  color = "currentColor",
  className = "",
  weight = "2",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="m19.71 9.29-7-7a1 1 0 0 0-1.42 0l-7 7a1 1 0 0 0 1.42 1.42L11 5.41V21a1 1 0 0 0 2 0V5.41l5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42"
        stroke={color}
        strokeWidth={weight}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconArrow;
