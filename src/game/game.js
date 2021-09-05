import React from 'react';
import Board from './board';
import { calculateWinner } from './util';
import './index.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null), coordinate: { x: null, y: null }, active: false }],
      xIsNext: true,
      stepNumber: 0,
      winnerLine: [],
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
    const { winner } = calculateWinner(squares);
    if (winner || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    const coordinate = { x: Math.floor(i / 3) + 1, y: (i % 3) + 1 };
    const { winnerLine = [] } = calculateWinner(squares);
    this.setState({
      history: history.concat([{ squares, coordinate, active }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
      winnerLine,
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
      winnerLine: [],
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const { winner, winnerLine } = calculateWinner(current.squares);
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
    if (!current.squares.some((item) => item === null) && winnerLine.length === 0) {
      status = 'a dead heat ~~';
    } else if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} winnerLine={this.state.winnerLine} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
