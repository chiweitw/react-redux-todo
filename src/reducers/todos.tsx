import { TodoAction } from "../actions/todoActions";
import Todo from "../model/todo";

let nextId = 0;

const todo = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case "DELETE_TODO":
      var todos = state.filter(todo => {
        return action.id !== todo.id;
      });
      return todos;
    case "ADD_TODO":
      var todo = {
        id: nextId++,
        content: action.todo,
        completed: false
      };
      return [...state, todo];

    case "TOGGLE_TODO":
      todos = state.map(todo => {
        return action.id === todo.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo;
      });
      return todos;
    case "COMPLETE_ALL_TODO":
      todos = state.map(todo => {
        return {
          ...todo,
          completed: true
        };
      });
      return todos;
    case "UNCOMPLETE_ALL_TODO":
      todos = state.map(todo => {
        return {
          ...todo,
          completed: false
        };
      });
      return todos;
    case "DELETE_ALL_TODO":
      return [];
    default:
      return state;
  }
};

export default todo;
