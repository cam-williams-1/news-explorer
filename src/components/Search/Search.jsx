import "./Search.css";

function Search({ handleSearch }) {
  return (
    <div className="search__container">
      <input type="text" className="search__input" placeholder="Enter topic" />
      <button className="search__button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
