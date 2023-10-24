const Square = (props) => {
    
    const [status, setStatus] = React.useState(2);
    const xo= ["O", "X", "+"];

    return (
        <button 
            className={status == 0 ? 'red' : 'white'}
            onClick={()=>
            {
                let nextPlayer = props.newState(props.id);
                setStatus(nextPlayer);
            }}>
            <h1>{xo[status]}</h1>
        </button>
    )
};

const Board = () => {
    
    const [player, setPlayer] = React.useState(1);
    const [state, setState] = React.useState(Array(9).fill(null));

    let status = `Player ${player}`;
  
    let proxPlayer =''
    if (player == 0) {
        proxPlayer = 'The Next Player is: Player O';
    } else {   
        proxPlayer = 'The Next Player is: Player X';
     }

    let winner = checkWinner(state);

    let winnerXO = ["O", "X"];
    if (winner != null) {

        status = `The Winner is Player ${winnerXO[winner]} !`;
    }
    else {
        status = `NO Winner Yet!`;
    }
    
    const newState = (idOfSquare) => {
        let thePlayer = player;
        state[idOfSquare] = player;
        setState(state);
        let nextplayer = (player +1) % 2;
        setPlayer(nextplayer);
        return thePlayer;
    };

    const renderSquare = (i) => {
        return <Square id={i} player={player} newState={newState}></Square>;
    };

    return (
        <div className="game-board">
            <div className="grid-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="grid-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="grid-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
                
            <div id="info">
                <h1>{proxPlayer}</h1>
                <h1>{status}</h1>
            </div>
        </div>
    );
};

//======================================================================================================================================================================


ReactDOM.render(<Board />, document.getElementById('root'));

