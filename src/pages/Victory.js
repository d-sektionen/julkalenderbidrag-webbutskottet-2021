import Button from "../components/Button";



function Victory({ onRestart, intervalId,_sendScore, time, guesses }) {
  const seconds = Math.round(time / 1000);

  clearInterval(intervalId)
  

  return (
    <div className="Victory">
      <h1>U did it!</h1>
      <h2>Time: {seconds}</h2>
      <h2>Guesses: {guesses}</h2>

      <div  className="button-column">
        <Button link="/victory" onClick={_sendScore}>
          Spara i scoreboarden!
        </Button>
        <Button link="/game" onClick={onRestart}>
          Starta om!
        </Button>
      </div>
    </div>
  );
}

export default Victory;
