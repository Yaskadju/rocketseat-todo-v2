import TodoType from "../../Types/TodoType"

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO",
  CHECK_TODO = "CHECK_TODO"
}

export function addTodoAction(todo: TodoType) {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo
    }
  }
}

export function deleteTodoAction(updatedTodos: TodoType[]) {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {
      updatedTodos
    }
  }
}

export function checkTodoAction(completedTodos: TodoType[]) {
  return {
    type: ActionTypes.CHECK_TODO,
    payload: {
      completedTodos
    }
  }
}
