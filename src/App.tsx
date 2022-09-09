import { useState } from "react"
import Header from "./components/Header"
import { Input } from "./components/Input"
import "./global.css"
import styles from "./App.module.css"
import { Container } from "./components/Container"
import Todo from "../src/components/Todo"
import empty from "./assets/empty.svg"
import TodoType from "./Types/TodoType"
import { uid } from "uid"

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])

  function addTodo(text: string) {
    // console.log({ todo })

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
    <div className={styles.app}>
      <Header />
      <Input addTodo={addTodo} />

      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <span className={styles.to}>Tarefas criadas</span>
            <span className={styles.number}>{todos.length}</span>
          </div>
          <div>
            <span className={styles.do}>Concluídas</span>
            <span className={styles.number}>{calcChecked() > 0 ? `${calcChecked()} de ${todos.length}` : 0}</span>
          </div>
        </div>

        {todos.length > 0 ? (
          <div className={styles.todos}>
            {todos.map(todo => {
              return <Todo key={todo.id} deleteTodo={deleteTodo} checkTodo={checkTodo} todo={todo} />
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

export default App
