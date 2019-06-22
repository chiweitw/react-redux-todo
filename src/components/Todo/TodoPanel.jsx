import React, { Component } from "react";

export default class TodoPanel extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.completeAllTodo()}>
          Complete All
        </button>
        <button onClick={() => this.props.uncompleteAllTodo()}>
          Uncomplete All
        </button>
        <button onClick={() => this.props.deleteAllTodo()}>Delete All</button>
      </div>
    );
  }
}