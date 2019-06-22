import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";

let nexId = 1;

class Todo extends Component {
  state = {
    todos: []
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
    todo.id = nexId++;
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

  completeAllTodo = () => {
    const todos = this.state.todos.map(todo => {
      return { ...todo, completed: true };
    });
    this.setState({
      todos: todos
    });
  };

  unCompleteAllTodo = () => {
    const todos = this.state.todos.map(todo => {
      return { ...todo, completed: false };
    });
    this.setState({
      todos: todos
    });
  };

  deleteAllTodo = () => {
    this.setState({
      todos: []
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
        <TodoFilter
          completeAllTodo={this.completeAllTodo}
          unCompleteAllTodo={this.unCompleteAllTodo}
          deleteAllTodo={this.deleteAllTodo}
        />
      </div>
    );
  }
}

export default Todo;
