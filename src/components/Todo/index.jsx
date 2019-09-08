import React, { Component } from 'react';

class App extends Component {
  state = { todoarr: [] }
  addToDat = text => this.setState({ todoarr: [...this.state.todoarr, text] });

  deleteTodo = (index) => {
    let newTodoList = [...this.state.todoarr]
    newTodoList.splice(index, 1)
    this.setState({ todoarr: newTodoList });
  }

  render() {
    return (
      <div>
        <ToDoInput addToDoitem={this.addToDat} />
        <ToDoList todoItems={this.state.todoarr} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
class ToDoInput extends Component {
  state = { inputVal: "" }
  handleChange = (event) => this.setState({ inputVal: event.target.value });

  handleSubmit = () => {
    this.props.addToDoitem(this.state.inputVal);
    this.setState({ inputVal: "" })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.inputVal}
          type="text"
          onChange={this.handleChange}
          placeholder={"enter your text"}
        />
        <button onClick={this.handleSubmit}>add</button>
      </div>
    );
  }
}

class ToDoList extends Component {
  render() {
    const todoItems = this.props.todoItems.map((todo, index) => (
      <li>
        {todo}
        <button onClick={() => this.props.deleteTodo(index)} type="button">
          Delete
        </button>
      </li>)
    );

    return (
      <div class="butt">
        <ol>
          {todoItems}
        </ol>
      </div>
    );
  }
}

export default App;