import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./Results.css";

function Results({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="results">
      <ul className="results__list">
        {articles.slice(0, 3).map((article, idx) => (
          <li key={article.url || idx} className="results__item">
            <NewsCard article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
