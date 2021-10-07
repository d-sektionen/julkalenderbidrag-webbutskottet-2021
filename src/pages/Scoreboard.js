import { Link } from 'react-router-dom';
import Player from '../components/Player';

function Scoreboard() {

  return (
    <div className="Scoreboard">

        <h1>Scoreboard</h1>

        <div className="playerlist">

            {/*Get from some file and insert into player component*/}
            
            <Player name="Ada Lovelace" program="D" time="2" />
            <Link to="/">Tillbaka!</Link>
            
        </div>

    </div>
  );
}

export default Scoreboard;