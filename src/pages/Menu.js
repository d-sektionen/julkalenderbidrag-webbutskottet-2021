import { Link } from "react-router-dom";

function Menu() {

  return (
    <div className="Menu">

        <h1>Varmt välkommen till Webbutskottets julkalenderlucka!</h1>

        <Link to="/game">Spela!</Link>
        <Link to="/scoreboard">Scoreboard!</Link>
        
    </div>
  );
}

export default Menu;