import { useDispatch } from "react-redux"
import { toggleComplete } from "../redux/todoSlice"

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }))
  }

  return (
    <>
      <li className=" flex items-center justify-between p-4">
        <div>
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            checked={completed}
            onChange={handleCompleteClick}
          />
          <span className="text-gray-800">{title}</span>
        </div>
        <button className="bg-red-600 text-gray-200 px-4 py-2 rounded-lg active:bg-red-400">
          Delete
        </button>
      </li>
    </>
  )
}
