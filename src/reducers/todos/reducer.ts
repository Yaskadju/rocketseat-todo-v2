import TodoType from "../../Types/TodoType"
import { ActionTypes } from "./actions"

interface TodosState {
  todos: TodoType[]
}

export function todosReducer(state: TodosState, action: any) {
  console.log(state)
  console.log(action)

  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload.todo]
      }
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        todos: action.payload.updatedTodos
      }
    case ActionTypes.CHECK_TODO:
      return {
        ...state,
        todos: action.payload.completedTodos
      }
    default:
      return state
  }
}
