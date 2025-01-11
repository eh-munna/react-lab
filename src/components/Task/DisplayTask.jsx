const DisplayTask = ({ tasks, handleDelete }) => {
  return (
    <ul className="list-disc list-inside flex items-center text-lg">
      {tasks.map((task) => (
        <li className="list-inside" key={task.task}>
          {task.task}
          <button
            className="ml-2 text-red-500 hover:text-red-600"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTask;
