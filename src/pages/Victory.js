import { Link } from 'react-router-dom'

function Victory(props) {
    return (
        <div className="Victory">

            <h1>U did it!</h1>

            <div className="button-column">
                <Link to="/game" onClick={props.onRestart}>Starta om!</Link>
            </div>

        </div>
    );
}

export default Victory;