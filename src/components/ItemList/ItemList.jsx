export default function ItemList({ lists, onToggle }) {
  return (
    <>
      <ul>
        {lists.map((list) => {
          const { id, seen, title } = list;
          return (
            <li key={id}>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={seen}
                  onChange={(e) => {
                    onToggle(e.target.checked, id);
                  }}
                />
                {title}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
