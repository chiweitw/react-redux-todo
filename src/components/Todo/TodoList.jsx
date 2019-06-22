import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const unCompleted = {
      color: "blue"
    };
    const completed = {
      color: "grey",
      textDecoration: "line-through"
    };

    const todoList = this.props.todos.length ? (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li id={todo.id} key={todo.id}>
                <input
                  checked={todo.completed ? true : false}
                  onChange={() => this.props.toggleTodo(todo.id)}
                  type="checkbox"
                />
                <span style={todo.completed ? completed : unCompleted}>
                  {todo.content}
                </span>
                <button onClick={() => this.props.deleteTodo(todo.id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    ) : (
      <p>No task</p>
    );
    return todoList;
  }
}

export default TodoList;
