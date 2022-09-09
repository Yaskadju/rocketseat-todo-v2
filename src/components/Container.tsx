import React, { useEffect } from "react"
import styles from "./Container.module.css"
import empty from "../assets/empty.svg"
import TodoType from "../Types/TodoType"
import Todo from "./Todo"

interface Todos {
  todos: TodoType[]
}

export const Container = ({ todos }: Todos) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>
          <span className={styles.to}>Tarefas criadas</span>
          <span className={styles.number}>0</span>
        </div>
        <div>
          <span className={styles.do}>Concluídas</span>
          <span className={styles.number}>0</span>
        </div>
      </div>

      {todos.length > 0 ? (
        <div className={styles.todos}>
          {todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })}
        </div>
      ) : (
        <div className={styles.empty}>
          <img src={empty} alt="" />
          <p className={styles.first}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.second}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

      {/* <div className={styles.empty}>
        <img src={empty} alt="" />
        <p className={styles.first}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.second}>Crie tarefas e organize seus itens a fazer</p>
      </div> */}
    </div>
  )
}
