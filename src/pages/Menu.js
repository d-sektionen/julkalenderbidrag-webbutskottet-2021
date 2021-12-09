import Button from "../components/Button";

function Menu({ onStart, liuid }) {
  return (
    <div className="Menu">
      <h1>Varmt välkommen till Webbutskottets julkalenderlucka!</h1>

      <div className="button-column">
        <Button link="/game" onClick={onStart}>
          Spela!
        </Button>
        <Button link="/scoreboard">Scoreboard!</Button>
        {!liuid && (
          <Button href="https://backend.d-sektionen.se/account/token/?redirect=https://d-sektionen.github.io/julkalenderbidrag-webbutskottet-2021/">
            Login
          </Button>
        )}
      </div>
    </div>
  );
}
export default Menu;
