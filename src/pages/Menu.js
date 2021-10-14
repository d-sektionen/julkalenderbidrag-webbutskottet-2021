import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="Menu">

        <h1>Varmt välkommen till Webbutskottets julkalenderlucka!</h1>

        <div className="button-column">
          <Link to="/game" onClick={props.onStart}>Spela!</Link>
          <Link to="/scoreboard">Scoreboard!</Link>
        </div>
        
    </div>
  );
}

export default Menu;