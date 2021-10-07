import './Victory.css'
import { Link } from 'react-router-dom'

function Victory(props) {
    return (
        <div className="victory">
            <h1>U did it!</h1>
            <Link to="/game" onClick={props.onRestart}>Restart</Link>
        </div>
    );
}

export default Victory;