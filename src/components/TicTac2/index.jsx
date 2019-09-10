import React, { Component, Fragment } from 'react';
import { checkWinner } from '../../helper/tictac';
import './index.css';

class TicTac extends Component {
  state = {
    cellArr: [],
    turn: true,
    winner: null
  }

  handleWinnerCheck = () => {
    const winner = checkWinner(this.state.cellArr)
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
        <div className="tictac">
          <div>{winner}</div>
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
        <button onClick={() => this.setState({ cellArr: [], winner: null })} >Reset</button>
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