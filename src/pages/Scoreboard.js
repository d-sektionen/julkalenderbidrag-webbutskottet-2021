import ScoreEntry from "../components/ScoreEntry";
import Button from "../components/Button";

function Scoreboard() {
  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>

      <div className="score-list">
        {/*Get from some file and insert into score component*/}
        <ScoreEntry name="Ada Lovelace" program="D" time="2" guesses="16" />
        <ScoreEntry name="Ada Lovelace" program="D" time="2" guesses="16" />
        <ScoreEntry name="Ada Lovelace" program="D" time="2" guesses="16" />
        <ScoreEntry name="Ada Lovelace" program="D" time="2" guesses="16" />
        <ScoreEntry name="Ada Lovelace" program="D" time="2" guesses="16" />
      </div>

      <Button link="/">Tillbaka!</Button>
    </div>
  );
}

export default Scoreboard;
