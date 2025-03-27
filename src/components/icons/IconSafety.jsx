const IconSafety = ({
  size = "100%",
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 31 30"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 18c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1m0-7c-1.7 0-3 1.3-3 3v1h6v-1c0-1.7-1.3-3-3-3" />
      <path d="m29.7 16.3-4-4-9-9c-.4-.4-1-.4-1.4 0l-9 9-4 4c-.4.4-.4 1 0 1.4s1 .4 1.4 0L6 15.4V27c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V15.4l2.3 2.3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4M22 22c0 1.7-1.3 3-3 3h-6c-1.7 0-3-1.3-3-3v-4c0-.9.4-1.7 1-2.2V14c0-2.8 2.2-5 5-5s5 2.2 5 5v1.8c.6.5 1 1.3 1 2.2z" />
    </svg>
  );
};

export default IconSafety;
