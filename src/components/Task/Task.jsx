import { useState } from 'react';
import DisplayTask from './DisplayTask';

let nextId = 0;

export default function Task() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTask] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask((existedTasks) => [
      ...existedTasks,
      { id: nextId++, task: taskName, completed: false },
    ]);
    setTaskName('');
  };

  const handleDelete = (id) => {
    setTask((existedTasks) => existedTasks.filter((task) => task.id !== id));
  };

  return (
    <div className=" flex flex-col gap-6 justify-center items-center bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4 text-center">Task List</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Task Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={taskName}
            onChange={handleChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Add Task
        </button>
      </form>
      <DisplayTask tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
}
