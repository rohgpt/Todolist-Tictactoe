
import React, { Component, Fragment } from 'react';
import './index.css';

class TicTac extends Component {
  state = {
    cellArr: [],
    turn: true
  }

  handleCellClick = (index) => {
    const { cellArr, turn } = this.state;

    if (!cellArr[index]) {
      cellArr[index] = turn ? 'O' : 'X';
      this.setState({ cellArr, turn: !turn })
    }
  }

  render() {
    const { cellArr } = this.state;

    return (
      <Fragment>
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
        <button onClick={() => this.setState({ cellArr: [] })} >Reset</button>
      </Fragment>
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