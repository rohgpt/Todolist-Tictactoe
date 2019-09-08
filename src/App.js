import React, { Component } from 'react';
import Todo from './components/Todo';

class App extends Component {
  render() {
    const showTodo = false;

    return (
      <div>
        {showTodo && <Todo />}
      </div>
    )
  }
}
export default App;