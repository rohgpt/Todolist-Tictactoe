import React, { Component, Fragment } from 'react';

import './index.css';

class TicTac extends Component {
  state = {
    cellArr: [],
    turn: true,
    winner: null
  }

  checkWinnerHorizontally = (arr) => {
    let i;

    for (i = 0; i < 9; i += 3) {
      if (arr[i] && arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
        return arr[i]
      }
    }

    return 0;
  }

  checkWinnerVertically = (arr) => {
    let i;

    for (i = 0; i < 3; i++) {
      if (arr[i] && arr[i] === arr[i + 3] && arr[i] === arr[i + 6]) {
        return arr[i]
      }
    }

    return 0;
  }

  checkWinnerDiagonally = (arr) => {
    if (arr[0] && arr[0] === arr[4] && arr[0] === arr[8]) {
      return arr[0];
    }

    if (arr[2] && arr[2] === arr[4] && arr[2] === arr[6]) {
      return arr[2];
    }

    return 0;
  };

  checkWinner = (cellArr) => {
    let winner = this.checkWinnerHorizontally(cellArr);
    if (!winner) { winner = this.checkWinnerVertically(cellArr); }
    if (!winner) { winner = this.checkWinnerDiagonally(cellArr); }

    return winner;
  }

  handleWinnerCheck = () => {
    const winner = this.checkWinner(this.state.cellArr)
    if (winner) {
      this.setState({ winner });
    }
  }

  handleCellClick = (index) => {
    if (this.state.winner) return;
    const { cellArr, turn } = this.state;

    if (!cellArr[index]) {
      cellArr[index] = turn ? 'O' : 'X';
      this.setState({ cellArr, turn: !turn }, () => this.handleWinnerCheck());
    }
  }

  render() {
    const { cellArr, winner } = this.state;

    return (
      <Fragment>
        {<h1 >Tic Tac Toe ---Rohit Kumar Gupta</h1>}
        <div className="tictac">
          <div>
            <Cell value={cellArr[0]} onCellClick={() => this.handleCellClick(0)} />
            <Cell value={cellArr[1]} onCellClick={() => this.handleCellClick(1)} />
            <Cell value={cellArr[2]} onCellClick={() => this.handleCellClick(2)} />
          </div>
          <div>
            <Cell value={cellArr[3]} onCellClick={() => this.handleCellClick(3)} />
            <Cell value={cellArr[4]} onCellClick={() => this.handleCellClick(4)} />
            <Cell value={cellArr[5]} onCellClick={() => this.handleCellClick(5)} />
          </div>
          <div >
            <Cell value={cellArr[6]} onCellClick={() => this.handleCellClick(6)} />
            <Cell value={cellArr[7]} onCellClick={() => this.handleCellClick(7)} />
            <Cell value={cellArr[8]} onCellClick={() => this.handleCellClick(8)} />
          </div>
        </div>
        <button className="reset" onClick={() => this.setState({ cellArr: [], winner: null })} >Reset</button>
        {winner && <div className="winner-msg">Winner is {winner} &#128512;&#128512;&#128526;&#128526;&#128526;</div>}

      </Fragment >
    );
  }
}

const Cell = props => {
  return (
    <div className="cell" onClick={props.onCellClick}>
      <div className="cell__value">{props.value}</div>
    </div>
  );
}

export default TicTac;