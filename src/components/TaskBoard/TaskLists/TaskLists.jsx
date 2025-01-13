import TaskHeading from '../TaskHeading/TaskHeading';
import TaskRow from '../TaskRow/TaskRow';
export default function TaskLists({
  tasks,
  onFavoriteClick,
  handleDeleteTask,
  handleEditTask,
}) {
  return (
    <>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <TaskHeading />
          <tbody>
            {tasks
              .filter((task) => task.isDeleted === false)
              .map((task) => (
                <TaskRow
                  key={task.id}
                  task={task}
                  onFavoriteClick={onFavoriteClick}
                  handleDeleteTask={handleDeleteTask}
                  handleEditTask={handleEditTask}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
