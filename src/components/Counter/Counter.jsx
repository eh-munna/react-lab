import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="text-gray-900 space-y-2">
        <h1 className="text-3xl font-bold">React batches state updates</h1>

        <p>
          React waits until all code in the event handlers has run before
          processing your state updates.
        </p>
        <p>
          Here count start from{' '}
          <code className="bg-slate-700 text-white rounded-[3.5px] px-1">
            0
          </code>{' '}
          and it is called{' '}
          <code className="bg-slate-700 text-white rounded-[3.5px] px-1">
            3
          </code>{' '}
          times inside the{' '}
          <code className="bg-slate-700 text-white rounded-[3.5px] px-1">
            eventHandler
          </code>
        </p>
        <p>
          React batches state updates to optimize performance. Even though the
          count is incremented 3 times, it only updates once with final result.
        </p>
      </div>

      <div className="text-gray-900 flex gap-3 items-center mt-6">
        <p>{number}</p>
        <button
          className="w-7 text-center border border-[#767676] bg-gray-100 text-black rounded-sm"
          onClick={() => {
            setNumber((n) => n + 1);
            setNumber((n) => n + 1);
            setNumber((n) => n + 1);
          }}
        >
          +3
        </button>
      </div>
    </>
  );
}
