import "./global.css"
import { TodosContextProvider } from "./contexts/TodosContext"
import { Container } from "./components/Container"

function App() {
  return (
    <TodosContextProvider>
      <Container />
    </TodosContextProvider>
  )
}

export default App
