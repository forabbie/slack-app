const DropDown = (props) => {
  // eslint-disable-next-line react/prop-types
  let { children, className } = props;
  const localClass = "dropdown dropdown-end " + className;
  return <div className={localClass}>{children}</div>;
};

export default DropDown;
