import React, { Component } from 'react';

import Todo from './components/Todo';
import TicTac from './components/TicTac2';
import Todo2 from './components/todo stylist';
import TemperatureConvertor from './components/tempconve';
import ProductList from './components/display'

import { TODO, TODO_V2, TIC_TAC, TEMPERATUR_CONVERTER, PRODUCT_LIST } from './constant';
import './App.css';

class App extends Component {
  state = { visibleItem: null };
  toggleValue = value => this.setState(prevState => ({ visibleItem: value }));

  render() {
    const { visibleItem } = this.state;

    return (
      <div>
        <div className="control-button">
          <button className="button" onClick={() => this.toggleValue(TIC_TAC)}>Tic Tac</button>
          <button className="button" onClick={() => this.toggleValue(TEMPERATUR_CONVERTER)}>Temperature Convertor</button>
          <button className="button" onClick={() => this.toggleValue(PRODUCT_LIST)}>Product</button>
        </div>
        <div>
          {visibleItem === TODO && <Todo />}
          {visibleItem === TODO_V2 && <Todo2 />}
          {visibleItem === TIC_TAC && <TicTac />}
          {visibleItem === TEMPERATUR_CONVERTER && <TemperatureConvertor />}
          {visibleItem === PRODUCT_LIST && <ProductList />}
        </div>
      </div>
    )
  }
}

/*
const App = () => {
  const isTodoVisible = false;
  const isTicTacVisible = true;

  return (
    <div>
      {isTodoVisible && <Todo />}
      {isTicTacVisible && <TicTac />}
    </div>
  )
}*/
export default App;