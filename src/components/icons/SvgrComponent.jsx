import * as Icons from "./index";

const SvgrComponent = ({ name, ...props }) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent {...props} />;
};

export default SvgrComponent;
