import "./NewsCard.css";

import { useState } from "react";

import trashIcon from "../../assets/trash.svg";
import bookmarkIcon from "../../assets/bookmark.svg";
import bookmarkBlueIcon from "../../assets/bookmark-blue.svg";

function NewsCard({
  article,
  isSavedNews,
  isLoggedIn,
  onSave,
  onRemove,
  isBookmarked,
}) {
  const [isTrashHovered, setIsTrashHovered] = useState(false);
  const { urlToImage, title, description, publishedAt, source, url } =
    article || {};

  return (
    <div className="card">
      <div className="card__header">
        <img
          src={urlToImage}
          alt="article image"
          className="card__header_img"
        />
        {isSavedNews && (
          <p className="card__header_genre">{source?.name || "News"}</p>
        )}
        <div className="card__header_close-btn-wrapper">
          {isSavedNews ? (
            <button className="card__header_close-btn" onClick={onRemove}>
              <img
                src={trashIcon}
                alt="delete"
                className="card__header_trash-icon"
                onMouseEnter={() => setIsTrashHovered(true)}
                onMouseLeave={() => setIsTrashHovered(false)}
              />
            </button>
          ) : (
            <>
              <button
                className="card__header_close-btn card__header_save-btn"
                onClick={isLoggedIn ? onSave : undefined}
                aria-label="Save article"
              >
                <img
                  src={isBookmarked ? bookmarkBlueIcon : bookmarkIcon}
                  alt="save"
                  className="card__header_bookmark-icon"
                />
              </button>
              {!isLoggedIn && (
                <div className="card__header_save-popup">
                  Sign in to save articles
                </div>
              )}
            </>
          )}
          {isSavedNews && isTrashHovered && (
            <div className="card__header_remove-popup">Remove article?</div>
          )}
        </div>
      </div>
      <div className="card__info">
        <p className="card__info_date">
          {publishedAt
            ? new Date(publishedAt).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : ""}
        </p>
        <h3 className="card__info_title">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="card__info_title-link"
          >
            {title}
          </a>
        </h3>
        <p className="card__info_descript">{description}</p>
        <p className="card__info_publisher">{source?.name || "Publisher"}</p>
      </div>
    </div>
  );
}

export default NewsCard;
