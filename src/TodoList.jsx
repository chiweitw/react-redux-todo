import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    const todoList = this.props.todos.length ? (
      <div>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <li id={todo.id} key={todo.id}>
                {todo.content}
                <button onClick={() => this.props.handleDelete(todo.id)}>
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
