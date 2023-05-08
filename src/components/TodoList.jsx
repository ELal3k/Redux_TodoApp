import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

export default function TodoList() {
  const todos = useSelector((state) => state.todos)

  return (
    <>
      <ul className=" bg-white rounded-lg shadow divide-y divide-gray-200">
        {todos.map((todo) => (
          <TodoItem
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            key={todo.id}
          />
        ))}
      </ul>
    </>
  )
}
