import TodoItem from "./TodoItem"

export default function TodoList() {
  const todos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ]
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
