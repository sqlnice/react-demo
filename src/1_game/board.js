import React from 'react';
function Square(props) {
  return (
    <button className={`square ${props.active ? 'active-square' : ''}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        active={this.props.winnerLine.includes(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
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
