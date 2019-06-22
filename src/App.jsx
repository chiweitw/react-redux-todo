import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "a dummy task",
        completed: false
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

  addTodo = todo => {
    todo.id = 1 + Math.max(...this.state.todos.map(todo => todo.id));
    todo.completed = false;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
  };

  toggleTodo = todo => {
    const todoId = todo.id;
    const todos = this.state.todos.map(todo => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
          toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }
}

export default App;
