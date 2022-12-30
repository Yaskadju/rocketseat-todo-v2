import styles from "./Container.module.css"

import Header from "./Header"
import { Input } from "./Input"

import Todo from "./Todo"
import empty from "../assets/empty.svg"
import { TodosContext } from "../contexts/TodosContext"
import { useContext } from "react"

export function Container() {
  const { todos, addTodo, deleteTodo, calcChecked, checkTodo } = useContext(TodosContext)

  return (
    <div className={styles.app}>
      <Header />
      <Input addTodo={addTodo} />

      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <span className={styles.to}>Tarefas criadas</span>
            <span className={styles.number}>{todos?.length}</span>
          </div>
          <div>
            <span className={styles.do}>Concluídas</span>
            <span className={styles.number}>
              {calcChecked() > 0 ? `${calcChecked()} de ${todos?.length}` : 0}
            </span>
          </div>
        </div>

        {todos && todos.length > 0 ? (
          <div className={styles.todos}>
            {todos.map(todo => {
              return (
                <Todo key={todo.id} deleteTodo={deleteTodo} checkTodo={checkTodo} todo={todo} />
              )
            })}
          </div>
        ) : (
          <div className={styles.empty}>
            <img src={empty} alt="" />
            <p className={styles.first}>Você ainda não tem tarefas cadastradas</p>
            <p className={styles.second}>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </div>
  )
}
