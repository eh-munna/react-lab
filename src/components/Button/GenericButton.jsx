export default function GenericButton({ onSmash, buttonMessage }) {
  return (
    <>
      <button
        className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
        onClick={() => onSmash()}
      >
        {buttonMessage}
      </button>
    </>
  );
}
