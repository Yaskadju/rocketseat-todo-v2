import React, { ChangeEvent, useEffect, useState } from "react"
import styles from "./Todo.module.css"
import { Circle, Trash, CheckCircle, Check } from "phosphor-react"
import TodoType from "../Types/TodoType"

interface Todo {
  todo: TodoType
  deleteTodo: (id: string) => void
  checkTodo: (arg1: boolean, arg2: string) => void
}

const Todo = ({ todo, deleteTodo, checkTodo }: Todo) => {
  const [isChecked, setIsCheck] = useState<Boolean>(false)

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    let newValue = !isChecked
    setIsCheck(newValue)
    checkTodo(newValue, todo.id)
  }

  function handleDelete(id: string) {
    deleteTodo(id)
  }

  return (
    <div className={styles.container}>
      <label>
        <input type="checkbox" onChange={event => handleCheck(event)} />
        {isChecked ? <CheckCircle size={24} weight="fill" className={styles.checked} /> : <Circle size={24} className={styles.unchecked} />}
      </label>
      <p className={isChecked ? styles.textChecked : styles.text}>{todo.text}</p>
      <Trash size={24} className={styles.trash} onClick={() => handleDelete(todo.id!)} />
    </div>
  )
}

export default Todo
