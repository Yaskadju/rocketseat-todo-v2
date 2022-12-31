import { createContext, ReactNode, useReducer, useState } from "react"
import TodoType from "../Types/TodoType"
import { uid } from "uid"
import { todosReducer } from "../reducers/todos/reducer"
import {
  ActionTypes,
  addTodoAction,
  checkTodoAction,
  deleteTodoAction
} from "../reducers/todos/actions"

interface TodosContextType {
  todos: TodoType[] | undefined
  addTodo: (text: string) => void
  deleteTodo: (id: string) => void
  checkTodo: (checked: boolean, id: string) => void
  calcChecked: () => number
}

interface TodosContextProviderProps {
  children: ReactNode
}

export const TodosContext = createContext({} as TodosContextType)

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todosState, dispatch] = useReducer(todosReducer, {
    todos: []
  })

  const { todos } = todosState

  function addTodo(text: string) {
    const todo = { id: uid(), text, completed: false }

    dispatch(addTodoAction(todo))
  }

  function deleteTodo(id: string) {
    const updatedTodos = todos.filter((todo: TodoType) => todo.id !== id)

    dispatch(deleteTodoAction(updatedTodos))
  }

  function checkTodo(checked: boolean, id: string) {
    const completedTodos = todos.map((todo: TodoType) => {
      if (todo.id == id) {
        todo.completed = checked
      }

      return todo
    })

    dispatch(checkTodoAction(completedTodos))
  }

  function calcChecked() {
    const completedTodos = todos.filter((todo: TodoType) => todo.completed).length

    return completedTodos
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, checkTodo, calcChecked }}>
      {children}
    </TodosContext.Provider>
  )
}
