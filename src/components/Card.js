import React from "react"
import logo from "../logo.svg"

import "./Card.css"

class Card extends React.Component {
  render() {
    const { isFlipped, handleCardClick, isMatched, name, img } = this.props;

    return (
      <div
        className={`card ${isFlipped() ? "card-show" : ""} ${isMatched() ? "card-show card-matched" : ""} `}
        onClick={() => handleCardClick()}
      >
        <div className='card-content'>
          {/* <h3>{name}</h3> */}
          <img src={img} alt={name} />
        </div>
      </div>
    )
  }
}

export default Card
