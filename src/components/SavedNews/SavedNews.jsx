import "./SavedNews.css";

import NewsCard from "../NewsCard/NewsCard";

function SavedNews() {
  return (
    <section className="saved__news">
      <div className="saved__news_text">
        <p className="saved__news_subtitle">Saved articles</p>
        <h2 className="saved__news_greeting">Cam, you have 5 saved articles</h2>
        <p className="saved__news_keywords">By keywords: ...</p>
      </div>
      <div className="saved__news_articles">
        <NewsCard />
      </div>
      {/* <NewsCard /> */}
    </section>

    // HOW IT CAN BE DONE
    // <ul className="cards__list">
    //       {clothingItems
    //         .filter((item) => {
    //           return item.weather === weatherData.type;
    //         })
    //         .map((item) => {
    //           return (
    //             <ItemCard
    //               key={item._id}
    //               item={item}
    //               handleCardClick={handleCardClick}
    //               onCardLike={onCardLike}
    //             />
    //           );
    //         })}
    //     </ul>
  );
}

export default SavedNews;
