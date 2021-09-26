import React from "react"
import logo from "../logo.svg"

import "./Card.css"

class Card extends React.Component {
  render() {
    const { isFlipped, handleCardClick, isMatched } = this.props;

    return (
      <div
        className={`card ${isFlipped() ? "card-show" : ""} ${isMatched() ? "card-show card-matched" : ""} `}
        onClick={() => handleCardClick()}
      >
        <div className='card-content'>
          <h3>yo</h3>
          <img src={logo} />
          <p>Front</p>
        </div>
      </div>
    )
  }
}

export default Card
