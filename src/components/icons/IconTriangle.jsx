const IconTriangle = ({
  size = "100%",
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.539 2c-.295 0-.489.177-.616.385l-5.846 9.538C1 12 1 12.153 1 12.308c0 .538.385.692.692.692h11.616c.384 0 .692-.154.692-.692 0-.154 0-.231-.077-.385l-5.77-9.538C8.029 2.177 7.789 2 7.539 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTriangle;
