/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const AutoSuggestInput = (props) => {
  const { users } = props;
  const [inputValue, setInputValue] = useState("");
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    const handleSearch = debounce((value) => {
      const query = value.toLowerCase().trim();
      const filteredCompanies = companies.filter((company) =>
        company.name.toLowerCase().includes(query)
      );
      setFilteredCompanies(filteredCompanies);
      console.log(filteredCompanies);
    }, 500);

    handleSearch(inputValue);
  }, [inputValue, companies]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  // Mock data for demonstration
  const prev_companies = [
    { name: "Company 1" },
    { name: "Company 2" },
    { name: "Company 3" },
  ];

  useEffect(() => {
    setCompanies(prev_companies);
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="input input-bordered w-full"
      />
      {filteredCompanies.length > 0 && (
        <ul>
          {filteredCompanies.map((company, index) => (
            <li key={index}>{company.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestInput;
