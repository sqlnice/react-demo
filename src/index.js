import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  getCurRow(row) {
    return row * 3;
  }
  render() {
    const rows = [0, 1, 2];
    const columns = [0, 1, 2];
    return (
      <div>
        {rows.map((row) => {
          return (
            <div className="board-row" key={row}>
              {columns.map((column) => {
                return this.renderSquare(this.getCurRow(row) + column);
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), coordinate: { x: null, y: null }, active: false }],
      xIsNext: true,
      stepNumber: 0,
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1).map((_, index) => {
      _.active = false;
      return _;
    });
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const active = true;
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const coordinate = { x: Math.floor(i / 3) + 1, y: (i % 3) + 1 };
    this.setState({
      history: history.concat([{ squares, coordinate, active }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo(step) {
    const history = this.state.history.slice().map((_, index) => {
      _.active = step === index;
      return _;
    });
    this.setState({
      history,
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const rowColumn = move ? `行：${history[move].coordinate.x} 列：${history[move].coordinate.y}` : '';
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button
            style={{ fontWeight: history[move].active ? 'bold' : '' }}
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc} {rowColumn}
          </button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
