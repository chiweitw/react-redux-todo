import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

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

  deleteTodo = id => {
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
        <TodoForm />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
