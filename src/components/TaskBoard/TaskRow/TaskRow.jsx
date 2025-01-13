import { FaStar } from 'react-icons/fa';
export default function TaskRow({
  task,
  onFavoriteClick,
  handleDeleteTask,
  handleEditTask,
}) {
  const { id, title, description, tags, priority, isFavorite } = task;

  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <span className="cursor-pointer" onClick={() => onFavoriteClick(id)}>
            <FaStar
              className={`${isFavorite ? 'text-yellow-500' : 'text-gray-500'}`}
            />
          </span>
        </td>
        <td>{title}</td>
        <td>
          <div>{description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {tags.map((tag, i) => (
              <li key={i}>
                <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">{priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={() => handleDeleteTask(id)}
              className="text-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditTask(task)}
              className="text-blue-500"
            >
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
