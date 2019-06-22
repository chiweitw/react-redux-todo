import React, { Component } from "react";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "todo task1"
      },
      {
        id: 2,
        content: "todo task2"
      }
    ]
  };

  handleDelete = id => {
    console.log(this.state);
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoList todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;
