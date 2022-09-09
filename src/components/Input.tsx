import React, { ChangeEvent, FormEvent, useEffect, useState } from "react"
import styles from "./Input.module.css"
import { uid } from "uid"
import { PlusCircle } from "phosphor-react"
import TodoType from "../Types/TodoType"
import { add } from "date-fns"

interface InputProps {
  addTodo: (text: string) => void
}

export const Input = ({ addTodo }: InputProps) => {
  const [text, setText] = useState<string>("")

  function handleCreateNewTodo(e: any) {
    e.preventDefault()

    if (text) {
      addTodo(text)
    }

    setText("")
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewTodo}>
      <input type="text" value={text} placeholder="Adicione uma nova tarefa" onChange={e => setText(e.target.value)} />
      <button className={styles.button}>
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
