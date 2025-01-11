import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <div className="flex flex-col space-y-6">
        <h1 className="text-amber-800 text-2xl">State over time</h1>

        <div className="flex gap-3">
          <p>{number}</p>
          <button
            className="w-7 text-center border border-[#767676] bg-gray-100 text-black rounded-sm"
            onClick={() => {
              setNumber(number + 5);
              alert(number);
            }}
          >
            +5
          </button>
        </div>

        <>
          <p>
            The state in React might have changed by the time the alert is
            triggered, but the alert was scheduled using a snapshot of the state
            at the moment the user interacted with it.
          </p>
          <p>
            A state variable's value remains the same during a render, even if
            its event handler code is asynchronous or synchronous.
          </p>
          <p>
            Inside the{' '}
            <code className="text-white bg-slate-500 rounded-md p-1">
              onClick
            </code>{' '}
            of that render, the value of number stays{' '}
            <code className="text-white bg-slate-500 rounded-md p-1">0</code>,
            even after calling{' '}
            {
              <code className="text-white bg-slate-500 rounded-md p-1">
                setNumber(number + 5)
              </code>
            }
            . This is because React captures the state snapshot when rendering
            the component
          </p>
        </>
      </div>
    </>
  );
}
