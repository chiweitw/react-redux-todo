import React, { Component } from "react";

export default class TodoList extends Component {
  render() {
    return (
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
    );
  }
}
