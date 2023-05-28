/* eslint-disable react/prop-types */
const DropDownLabel = (props) => {
  let { children, labelClass } = props;
  const localLabelClass = "btn " + labelClass;
  return (
    <label tabIndex={0} className={localLabelClass}>
      {children}
    </label>
  );
};
export default DropDownLabel;
