import { useState } from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      <div className="relative w-screen h-screen" onPointerMove={handleMove}>
        <h1 className="text-2xl text-gray-950 font-bold">
          Treat state as read-only
        </h1>
        <p className="text-lg text-gray-700">
          In React, state is a single source of truth. Any change to state
          should be done through the setState function.
          <br />
          If we need to change the state object then we have to send a new
          object to the state.
          <br />
          We cannot modify the state object. State act as read only.
          <br />
        </p>

        <div
          className={`absolute w-6 h-6 rounded-full bg-indigo-700`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        ></div>
      </div>
    </>
  );
}
