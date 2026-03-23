import "./NewsCard.css";

import { useState } from "react";

import natureImg from "../../assets/nature.svg";
import trashIcon from "../../assets/trash.svg";

function NewsCard() {
  const [isTrashHovered, setIsTrashHovered] = useState(false);

  return (
    <li className="card">
      <div className="card__header">
        <img src={natureImg} alt="image" className="card__header_img" />
        <p className="card__header_genre">Nature</p>
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
        <p className="card__info_date">Jan 1, 2026</p>
        <h3 className="card__info_title">News Title</h3>
        <p className="card__info_descript">description</p>
        <p className="card__info_publisher">Publisher</p>
      </div>
    </li>
  );
}

export default NewsCard;
