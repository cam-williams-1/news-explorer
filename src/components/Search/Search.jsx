import "./Search.css";

function Search() {
  return (
    <div className="search__container">
      <input type="text" className="search__input" placeholder="Enter topic" />
      <button className="search__button">Search</button>
    </div>
  );
}

export default Search;
