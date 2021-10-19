import React from "react";

import "./Card.css";

function Card({
  isFlipped,
  handleCardClick,
  isMatched,
  name,
  profileDescription,
  img,
}) {
  return (
    <div
      className={`card ${isFlipped() ? "card-show" : ""} ${
        isMatched() ? "card-show card-matched" : ""
      } `}
      onClick={() => handleCardClick()}
      draggable="false"
    >
      <div className="card-content">
        <h3>{name}</h3>
        <p>{profileDescription}</p>
        <img src={img} alt={name} className="card-img" draggable="false" />
      </div>
    </div>
  );
}

export default Card;
