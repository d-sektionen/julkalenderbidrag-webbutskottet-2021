import { Link } from "react-router-dom";

function Victory({ onRestart, time, guesses }) {
  const seconds = Math.round(time / 1000);

  return (
    <div className="Victory">
      <h1>U did it!</h1>
      <h2>Time: {seconds}</h2>
      <h2>Guesses: {guesses}</h2>

      <div className="button-column">
        <Link to="/game" onClick={onRestart}>
          Starta om!
        </Link>
      </div>
    </div>
  );
}

export default Victory;
