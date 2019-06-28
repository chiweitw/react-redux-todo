import React, { Component } from "react";
import { connect } from "react-redux";

import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import {
  deleteTodo,
  addTodo,
  toggleTodo,
  completeAllTodo,
  uncompleteAllTodo,
  deleteAllTodo
} from "../../actions/todoActions";
import Todo from "../../model/todo";

interface Props {
  addTodo: (todo: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  completeAllTodo: () => void;
  uncompleteAllTodo: () => void;
  deleteAllTodo: () => void;
  todos: Todo[];
}

class Todos extends Component<Props> {
  render() {
    return (
      <div>
        <h2>Todos</h2>
        <TodoForm addTodo={(todo: string) => this.props.addTodo(todo)} />
        <TodoList
          todos={this.props.todos}
          deleteTodo={id => this.props.deleteTodo(id)}
          toggleTodo={id => this.props.toggleTodo(id)}
        />
        <TodoFilter
          completeAllTodo={() => this.props.completeAllTodo()}
          uncompleteAllTodo={() => this.props.uncompleteAllTodo()}
          deleteAllTodo={() => this.props.deleteAllTodo()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: state.todos
  };
};

// each property of the object is expected to be an action creator function (in other words, a function that returns an action).
const mapDispatchToProps = {
  deleteTodo,
  addTodo,
  toggleTodo,
  completeAllTodo,
  uncompleteAllTodo,
  deleteAllTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
