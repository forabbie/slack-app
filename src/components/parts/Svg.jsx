const Svg = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, className } = props;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={className}
      >
        {children}
      </svg>
    </>
  );
};

export default Svg;
