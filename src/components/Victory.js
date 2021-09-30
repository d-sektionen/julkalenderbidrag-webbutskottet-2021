import './Victory.css'

function Victory(props) {
    return (
        <div className="victory">
            <h1>U did it!</h1>
            <button onClick={props.onRestart}>Restart</button>
        </div>
    );
}

export default Victory;