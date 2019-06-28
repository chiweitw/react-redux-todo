import { ActionTypes } from "../constants/actionTypes";

export interface deleteTodoAction {
  type: ActionTypes.DELETE_TODO;
  id: number;
}

export interface addTodoAction {
  type: ActionTypes.ADD_TODO;
  todo: string;
}

export interface toggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  id: number;
}

export interface completeAllTodoAction {
  type: ActionTypes.COMPLETE_ALL_TODO;
}

export interface uncompleteAllTodoAction {
  type: ActionTypes.UNCOMPLETE_ALL_TODO;
}

export interface deleteAllTodoAction {
  type: ActionTypes.DELETE_ALL_TODO;
}

export type TodoAction =
  | deleteTodoAction
  | addTodoAction
  | toggleTodoAction
  | completeAllTodoAction
  | uncompleteAllTodoAction
  | deleteAllTodoAction;

export const deleteTodo = (id: number): deleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODO,
    id
  };
};

export const addTodo = (todo: string): addTodoAction => {
  return {
    type: ActionTypes.ADD_TODO,
    todo
  };
};

export const toggleTodo = (id: number): toggleTodoAction => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
};

export const completeAllTodo = (): completeAllTodoAction => {
  return {
    type: ActionTypes.COMPLETE_ALL_TODO
  };
};

export const uncompleteAllTodo = (): uncompleteAllTodoAction => {
  return {
    type: ActionTypes.UNCOMPLETE_ALL_TODO
  };
};

export const deleteAllTodo = (): deleteAllTodoAction => {
  return {
    type: ActionTypes.DELETE_ALL_TODO
  };
};
