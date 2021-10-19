import React from "react";

function Player({ name, program, time }) {
  return (
    <div className="player" style={{}}>
      <p>{name}</p> {/*Namn och liu-id, token från liu api typ*/}
      <p>{program}</p>{" "}
      {/*Skriv in självmant i meny? Ha bild på programloggan vid sidan av namnet?*/}
      <p>{time}</p>
    </div>
  );
}

export default Player;
