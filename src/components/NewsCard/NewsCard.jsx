import "./NewsCard.css";

import { useState } from "react";

import natureImg from "../../assets/nature.svg";
import trashIcon from "../../assets/trash.svg";


function NewsCard({ article }) {
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const {
    urlToImage,
    title,
    description,
    publishedAt,
    source,
    url,
  } = article || {};

  return (
    <div className="card">
      <div className="card__header">
        <img src={urlToImage || natureImg} alt="image" className="card__header_img" />
        <p className="card__header_genre">{source?.name || "News"}</p>
        <div className="card__header_close-btn-wrapper">
          <button className="card__header_close-btn">
            <img
              src={trashIcon}
              alt="close"
              className="card__header_trash-icon"
              onMouseEnter={() => setIsTrashHovered(true)}
              onMouseLeave={() => setIsTrashHovered(false)}
            />
          </button>
          {isTrashHovered && (
            <div className="card__header_remove-popup">Remove article?</div>
          )}
        </div>
      </div>
      <div className="card__info">
        <p className="card__info_date">{publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}</p>
        <h3 className="card__info_title">
          <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
        </h3>
        <p className="card__info_descript">{description}</p>
        <p className="card__info_publisher">{source?.name || "Publisher"}</p>
      </div>
    </div>
  );
}

export default NewsCard;
