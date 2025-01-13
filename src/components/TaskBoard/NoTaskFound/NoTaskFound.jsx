export default function NoTaskFound({ onModalShow }) {
  return (
    <>
      <div className="text-center text-gray-500">
        <p>No tasks available. Please add some tasks.</p>
        <button
          onClick={onModalShow}
          className="my-3 rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
