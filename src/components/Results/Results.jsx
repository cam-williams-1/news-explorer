import "./Results.css";
import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import emptyIcon from "../../assets/empty-results.svg";

function Results({
  articles,
  hasSearched,
  isLoggedIn,
  onSaveArticle,
  savedArticles,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  if (hasSearched && (!articles || articles.length === 0)) {
    return (
      <div className="results results__empty">
        <img src={emptyIcon} alt="" className="results__empty-icon" />
        <p className="results__empty-text">Nothing Found</p>
        <p className="results__empty-descript">
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    );
  }

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="results">
      <div className="results__container">
        <h3 className="results__title">Search Results</h3>
        <ul className="results__list">
          {articles.slice(0, visibleCount).map((article, idx) => (
            <li key={article.url || idx} className="results__item">
              <NewsCard
                article={article}
                isSavedNews={false}
                isLoggedIn={isLoggedIn}
                onSave={() => onSaveArticle(article)} // keyword is now attached in App
                isBookmarked={savedArticles.some((a) => a.url === article.url)}
              />
            </li>
          ))}
        </ul>
        {visibleCount < articles.length && (
          <button className="results__show-more" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
}

export default Results;
