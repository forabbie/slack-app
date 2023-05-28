const Button = (props) => {
  // eslint-disable-next-line react/prop-types
  const { type, label, children, labelClass, className, onClick } = props;
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
      <span className={labelClass}>{label}</span>
    </button>
  );
};

export default Button;
