import React from "react";

import './ScoreEntry.css'

function ScoreEntry({ name, program, time, guesses }) {
  return (
    <div className="score-entry" style={{}}>
      <h3 className="header">{name} {/*({program})*/}</h3>
      <p className="section">Tid: {time}</p>
      <p className="section">Gissningar: {guesses}</p>
    </div>
  );
}

export default ScoreEntry;
