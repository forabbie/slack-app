/* eslint-disable react/prop-types */
const List = (props) => {
  const { className, list } = props;
  const localClass = "menu " + className;
  return (
    <>
      <ul tabIndex={0} className={localClass}>
        {list.map((item, i) => (
          <li key={i}>
            <a
              key={item.name}
              href={item.href}
              className=""
              onClick={item.onClick}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
