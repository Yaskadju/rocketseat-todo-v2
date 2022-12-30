import { createContext, ReactNode, useReducer, useState } from "react"
import TodoType from "../Types/TodoType"
import { uid } from "uid"

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
  const [todos, setTodos] = useState<TodoType[]>([])

  function addTodo(text: string) {
    const todo = { id: uid(), text, completed: false }

    setTodos([...todos, todo])
  }

  function deleteTodo(id: string) {
    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  function checkTodo(checked: boolean, id: string) {
    const completedTodos = todos.map(todo => {
      if (todo.id == id) {
        todo.completed = checked
      }

      return todo
    })
    setTodos(completedTodos)
  }

  function calcChecked() {
    const completedTodos = todos.filter(todo => todo.completed).length

    return completedTodos
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, deleteTodo, checkTodo, calcChecked }}>
      {children}
    </TodosContext.Provider>
  )
}
