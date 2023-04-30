import AddToForm from "./components/AddToForm"
import TodoList from "./components/TodoList"
import TotalItems from "./components/TotalItems"

function App() {
  return (
    <>
      <body className="bg-gray-100 min-h-screen flex items-center">
        <div className="max-w-xl w-full mx-auto p-8">
          <AddToForm />
          <TodoList />
          <TotalItems />
        </div>
      </body>
    </>
  )
}

export default App
