import React from 'react';
import './index.css';
class App extends React.Component {
  state = { todoarr: [] }
  addToDat = (text) => {
    this.setState({ todoarr: [...this.state.todoarr, text] })
  }
  deleteTodo = (index) => {
    let newTodoList = [...this.state.todoarr]
    newTodoList.splice(index, 1)
    this.setState({ todoarr: newTodoList });
  }
  render() {
    return (
      <div>
        <ToDoInput addToDoitem={this.addToDat} />
        <ToDoList todoitems={this.state.todoarr}
          deleteTodo={this.deleteTodo} f />

      </div>)
  }
}



class ToDoInput extends React.Component {

  state = { inputVal: "" }
  handleChange = (event) => {
    this.setState({ inputVal: event.target.value });
  }
  handleSubmit = () => {
    this.props.addToDoitem(this.state.inputVal);
    this.setState({ inputVal: "" })
  }
  onfocus = (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.textColor = "white";
  }
  render() {
    return (<div>

      <input value={this.state.inputVal} type="number" onChange={this.handleChange} placeholder={"enter your text"} onFocus={this.onfocus}
        style={{ color: "white", backgroundColor: "red" }} />

      <button onClick={this.handleSubmit}>add</button>
    </div>);
  }

}
class ToDoList extends React.Component {
  render() {
    let todoitems = this.props.todoitems.map((item, index) => <li>{item} <button onClick={() => this.props.deleteTodo(index)} type="button" style={{ float: "right" }}>                                                          Delete</button></li>);
    return (<div class="butt"><ol>{todoitems}
    </ol></div>)
  }
}
export default App;