import React from "react";

import "./Header.css";

function Header({ liuid, guesses, time, correct, left, name }) {
  const seconds = Math.round(time / 1000);

  return (
    <div className="header">
      <div className="title-bar">
        <h1>Webutskottets julkalenderbidrag 2021</h1>
      </div>

      <div className="stats">
        <p>
          {name} ({liuid})
        </p>
        <p>Time passed: {seconds}</p>
        <p>Total guesses: {guesses}</p>
        <p>Correct guesses: {correct}</p>
        <p>Pairs left: {left}</p>
      </div>
    </div>
  );
}

export default Header;
