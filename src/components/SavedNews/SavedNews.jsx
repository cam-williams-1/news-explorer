import "./SavedNews.css";

import NewsCard from "../NewsCard/NewsCard";

function SavedNews({ savedArticles, onRemoveArticle }) {
  // Collect unique keywords from saved articles
  const keywords = Array.from(
    new Set(savedArticles.map((article) => article.keyword).filter(Boolean)),
  ).slice(0, 3);

  return (
    <section className="saved__news">
      <div className="saved__news_text">
        <p className="saved__news_subtitle">Saved articles</p>
        <h2 className="saved__news_greeting">
          Cam, you have {savedArticles.length} saved articles
        </h2>
        <p className="saved__news_keywords">
          By keywords: {keywords.length > 0 ? keywords.join(", ") : "..."}
        </p>
      </div>
      <div className="saved__news_articles">
        <div className="saved__news_container">
          {savedArticles.length === 0 ? (
            <p className="saved__news_articles-empty">No saved articles yet.</p>
          ) : (
            <div className="cards__list">
              {savedArticles.map((article, idx) => (
                <div key={article.url || idx} className="results__item">
                  <NewsCard
                    article={article}
                    isSavedNews={true}
                    onRemove={() => onRemoveArticle(article)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
