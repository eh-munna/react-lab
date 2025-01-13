import { useState } from 'react';

export default function TaskModal({ onAddTask, onModalClose, taskToEdit }) {
  const initialTask = {
    id: crypto.randomUUID(),
    title: '',
    description: '',
    tags: [],
    priority: '',
    isFavorite: false,
    isDeleted: false,
  };

  const [task, setTask] = useState(taskToEdit || initialTask);
  const [isAdd, setIsAdd] = useState(Object.is(taskToEdit, null));

  const { title, description, tags, priority } = task;

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    if (name === 'tags') {
      value = value.split(',');
    }
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onAddTask(task);
  //   setTask(initialTask);
  // };
  return (
    <>
      <div className="bg-black opacity-70 min-h-screen w-full z-10 absolute top-0 left-0"></div>
      <form
        // onSubmit={handleSubmit}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/3 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? 'Add New Task' : 'Edit Task'}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              value={title}
              onChange={handleInputChange}
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              value={description}
              onChange={handleInputChange}
              id="description"
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                value={tags}
                onChange={handleInputChange}
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                value={priority}
                onChange={handleInputChange}
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex space-x-5 justify-center lg:mt-20">
          <>
            <button
              type="submit"
              onClick={() => onAddTask(task, isAdd)}
              className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              {isAdd ? 'Create new Task' : 'Save Task'}
            </button>
            <button
              onClick={onModalClose}
              className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            >
              Cancel
            </button>
          </>
        </div>
      </form>
    </>
  );
}
