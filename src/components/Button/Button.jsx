export default function Button({ alertMessage, children }) {
  return (
    <>
      <button
        className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
        onClick={() => alert(alertMessage)}
      >
        {children}
      </button>
    </>
  );
}
