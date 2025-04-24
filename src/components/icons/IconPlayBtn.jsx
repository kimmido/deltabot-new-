const IconPlayBtn = ({
  size = "100%",
  color = "currentColor",
  className = "",
  weight = "2",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 280 280"
      xmlSpace="preserve"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M183.028 43.028H96.972C43.501 43.028 0 86.529 0 140s43.501 96.972 96.972 96.972h86.057c53.47 0 96.971-43.501 96.971-96.972s-43.501-96.972-96.972-96.972m0 175.944H96.972C53.427 218.972 18 183.545 18 140s35.427-78.972 78.972-78.972h86.057C226.573 61.028 262 96.455 262 140s-35.427 78.972-78.972 78.972"
        fill={color}
      />
      <path
        d="m177.029 129.326-42.208-35.29c-9.058-7.573-22.838-1.133-22.838 10.674v70.58c0 11.807 13.78 18.248 22.838 10.674l42.208-35.29c6.652-5.561 6.652-15.787 0-21.348"
        fill={color}
      />
    </svg>
  );
};

export default IconPlayBtn;
