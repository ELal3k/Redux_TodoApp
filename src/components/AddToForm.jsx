export default function AddToForm() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <form className="flex mb-4">
        <input
          type="text"
          className="rounded-lg p-4 mr-12 w-full border-t border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Add a task..."
        />
        <button
          type="submit"
          className="px-8 rounded-lg bg-green-500 text-gray-200 font-bold p-4 uppercases active:bg-green-400"
        >
          Add
        </button>
      </form>
    </>
  )
}
