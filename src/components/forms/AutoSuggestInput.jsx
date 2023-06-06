/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const AutoSuggestInput = (props) => {
  const { users, setUsers, members, setMembers } = props;
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredusers] = useState([]);

  useEffect(() => {
    const handleSearch = debounce((value) => {
      const query = value.toLowerCase().trim();
      const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(query)
      );
      setFilteredusers(filteredUsers);
    }, 500);

    handleSearch(inputValue);
  }, [inputValue, users]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const selectedMembers = (user) => {
    if (members.some((member) => member.id === user.id)) {
      return; // Member already exists, do not add again
    }

    setMembers((prevMembers) => [...prevMembers, user]);
    setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
    console.log(members);
  };

  useEffect(() => {
    setUsers(users);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered w-full"
      />
      {filteredUsers.length > 0 && inputValue && (
        <div className="menu shadow border bg-base-100 mt-2 rounded-lg dropdown-content overflow-y-scroll max-h-40">
          <ul className="">
            {filteredUsers.map((user, index) => (
              <li
                key={index}
                onClick={() => selectedMembers(user)}
                className="border-b"
              >
                <a>{user.email}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AutoSuggestInput;
