export default function MediaButton({ alertMessage, children }) {
  return (
    <button
      className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
      onClick={(e) => {
        e.stopPropagation();
        alert(alertMessage);
      }}
    >
      {children}
    </button>
  );
}
