import React, { Component } from "react";

export default class TodoFilter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.completeAllTodo()}>
          Complete All
        </button>
        <button>Uncomplete All</button>
        <button onClick={() => this.props.deleteAllTodo()}>Delete All</button>
      </div>
    );
  }
}
