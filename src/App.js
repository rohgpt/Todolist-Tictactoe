import React from 'react';
import Todo from './components/Todo';
import TicTac from './components/TicTac2';
import Todo2 from './components/todo stylist'
import './App.css';


class App extends React.Component {
  state = {
    isTodoVisible: false,
    isTicTacVisible: false,
    todostylist: false,
    bgcolor: "orange"
  }
  handleClick = (e) => {
    if (e === "orange")
      this.setState({ bgcolor: "yellow" })
    else
      this.setState({ bgcolor: "orange" })
  }

  toggleValue = (item) => this.setState(prevState => ({ [item]: !prevState[item] }))

  render() {
    return (
      <div>
        <button className="button" onClick={() => this.toggleValue("isTodoVisible")} > Todo List </button>
        <button className="button" onClick={() => this.toggleValue("isTicTacVisible")}>TicTac Toe</button>
        <button className="button" onClick={() => this.toggleValue("todostylist")}>Todolist stylist</button>
        {this.state.isTodoVisible && <Todo />}
        {this.state.isTicTacVisible && <TicTac />}
        {this.state.todostylist && <Todo2 />}
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