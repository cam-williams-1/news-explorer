import "./Search.css";
import { useState } from "react";

function Search({ handleSearch }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const onInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() !== "") {
      setError("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    handleSearch(input);
  };

  return (
    <form className="search__container" onSubmit={onSubmit}>
      <input
        type="text"
        className="search__input"
        placeholder="Enter topic"
        value={input}
        onChange={onInputChange}
      />
      <button className="search__button" type="submit">
        Search
      </button>
      {error && <div className="search__error">{error}</div>}
    </form>
  );
}

export default Search;
