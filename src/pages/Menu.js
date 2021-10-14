import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="Menu">

        <h1>Varmt välkommen till Webbutskottets julkalenderlucka!</h1>

        <div className="button-column">
          <Link to="/game" onClick={props.onStart}>Spela!</Link>
          <Link to="/scoreboard">Scoreboard!</Link>
          <a href="https://backend.d-sektionen.se/account/token/?redirect=http://localhost:3000">Login</a>
        </div>
        
    </div>
  );
}
export default Menu;