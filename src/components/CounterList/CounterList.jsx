import { useState } from 'react';

const initialCounters = [0, 0, 0];
export default function CounterList() {
  const [counters, setCounters] = useState(initialCounters);

  const handleIncrement = (idx) => {
    const nextCounters = counters.map((counter, i) => {
      if (idx === i) {
        return counter + 1;
      }
      return counter;
    });
    setCounters(nextCounters);
  };

  const listItem = counters.map((counter, idx) => (
    <li className="flex gap-2 items-center" key={idx}>
      {counter}
      <button
        onClick={() => handleIncrement(idx)}
        className="bg-gray-200 border border-gray-500 text-gray-900 px-1"
      >
        +1
      </button>
    </li>
  ));

  return (
    <>
      <ul className="list-inside flex flex-col gap-3">{listItem}</ul>
    </>
  );
}
