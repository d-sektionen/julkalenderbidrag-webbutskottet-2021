
import './App.css';
import Player from './components/Player';

function Scoreboard() {

  return (
    <div className="Scoreboard">

        <h1>Scoreboard</h1>

        <div className="playerlist">

            {/*Get from some file and insert into player component*/}
            
            <Player name="Ada Lovelace" program="D" time="2" />
            
            
        </div>

    </div>
  );
}

export default Scoreboard;