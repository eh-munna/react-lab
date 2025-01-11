import { useState } from 'react';
import Report from '../Report/Report';

export default function From() {
  const [isSent, setIsSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <>
      <Report isSent={isSent} />

      {!isSent && (
        <>
          <form className="w-1/3 flex flex-col gap-3" onSubmit={handleSubmit}>
            <textarea
              className="border border-gray-500 p-2"
              name=""
              id=""
              cols="10"
              rows="4"
            />
            <button className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white">
              Send
            </button>
          </form>
        </>
      )}
    </>
  );
}
