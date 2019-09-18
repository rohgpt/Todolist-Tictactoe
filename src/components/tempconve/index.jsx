import React, { Component } from 'react';
import './temp.css';
class Temp extends Component {
  state = {
    inputVal: "",
    f: ""
  }
  handleChange = (event) => this.setState({ inputVal: event.target.value });
  changeTemp = (value) => {
    let f = (value * 9 / 5) + 32;
    this.setState({ f: f })
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inputVal}
          type="number"
          onChange={this.handleChange}

        />
        <button onClick={() => this.changeTemp(this.state.inputVal)}>convert</button><br />
        <div className="box">{this.state.f}</div>
      </div>
    )
  }
}
export default Temp;