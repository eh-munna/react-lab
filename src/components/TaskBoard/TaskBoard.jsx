import { useState } from 'react';
import NoTaskFound from './NoTaskFound/NoTaskFound';
import SearchBox from './SearchBox/SearchBox';
import TaskActions from './TaskActions/TaskActions';
import TaskLists from './TaskLists/TaskLists';
import TaskModal from './TaskModal/TaskModal';

export default function TaskBoard() {
  const initialTasks = {
    id: crypto.randomUUID(),
    title: 'Study React && German',
    description: 'Complete the JavaScript homework assignment by tomorrow.',
    tags: ['homework', 'urgent'],
    priority: 'High',
    isFavorite: false,
    isDeleted: false,
  };
  const [tasks, setTasks] = useState([initialTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    // const newTask = [...tasks, task];
    // setTasks(newTask);

    if (isAdd) {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } else {
      const updatedTasks = tasks.map((task) => {
        if (task.id === newTask.id) {
          return { ...newTask };
        }
        return task;
      });
      setTasks(updatedTasks);
    }
    setShowAddModal(false);
    setTaskToEdit(null);
  };

  const handleEditTask = (editTask) => {
    setTaskToEdit(editTask);
    setShowAddModal(true);
  };

  const handleDeleteTask = (id) => {
    // const updatedTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, isDeleted: true };
    //   }
    //   return task;
    // });
    // setTasks(updatedTasks);

    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleDeleteAll = () => {
    // const deletedTasks = tasks.map((task) => ({ ...task, isDeleted: true }));
    // setTasks(deletedTasks);
    const emptyTasks = [...tasks];
    emptyTasks.length = 0;
    setTasks(emptyTasks);
  };

  const handleSearchQuery = (searchTerm) => {
    if (searchTerm === '') {
      setTasks(tasks);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setTasks(filteredTasks);
    }
  };

  const handleFavorite = (id) => {
    // const updatedTasks = tasks.map((task) => {
    //   if (task.id === id) {
    //     return { ...task, isFavorite: !task.isFavorite };
    //   }
    //   return task;
    // });
    // setTasks(updatedTasks);

    const taskIndex = tasks.findIndex((task) => task.id === id);
    const updatedTasks = [...tasks];
    // newTasks[taskIndex] = {...tasks[taskIndex], isFavorite:!tasks[taskIndex].isFavorite };
    updatedTasks[taskIndex].isFavorite = !updatedTasks[taskIndex].isFavorite;
    setTasks(updatedTasks);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <TaskModal
            onAddTask={handleAddTask}
            onModalClose={() => {
              setShowAddModal(false);
              setTaskToEdit(null);
            }}
            taskToEdit={taskToEdit}
          />
        )}
        <div className="container">
          <SearchBox onSearchQuery={handleSearchQuery} />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddClick={() => setShowAddModal(true)}
              onDeleteAll={handleDeleteAll}
            />
            {tasks.length === 0 ? (
              <NoTaskFound onModalShow={() => setShowAddModal(true)} />
            ) : (
              <TaskLists
                tasks={tasks}
                onFavoriteClick={handleFavorite}
                handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
