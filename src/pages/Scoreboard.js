import ScoreEntry from "../components/ScoreEntry";
import Button from "../components/Button";

function Scoreboard({scores}) {
  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>

      <div className="score-list">
        {scores.length > 0 ? (scores.map((score, i) =>
          (<ScoreEntry key={i} name={score.user} program="D" time={score.time_taken} guesses={score.total_tries} /> ) 
        )): ""}
      </div>

      <Button link="/">Tillbaka!</Button>
    </div>
  );
}

export default Scoreboard;
