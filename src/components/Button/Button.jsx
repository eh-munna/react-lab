const handleClick = () => {
  alert('Button is clicked');
};

export default function Button() {
  return (
    <>
      <h2 className="text-2xl text-sky-800">Adding event handlers</h2>
      <button
        className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
        onClick={handleClick}
      >
        Click me to see result
      </button>
    </>
  );
}
