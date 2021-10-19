import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    const {
      isFlipped,
      handleCardClick,
      isMatched,
      name,
      profileDescription,
      img,
    } = this.props;

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
}

export default Card;
