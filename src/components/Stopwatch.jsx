import { useRef, useState } from 'react';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    // ? Clears the interval and resets the start and now times to null
    clearInterval(intervalRef.current);
    setStartTime(null);
    setNow(null);
  };

  let elapsedSeconds = 0;

  if (startTime !== null && now !== null) {
    elapsedSeconds = (now - startTime) / 1000;
  }

  return (
    <>
      <div className="space-y-3">
        <SectionHeading>Example: building a stopwatch</SectionHeading>

        <p>Time passed: {elapsedSeconds.toFixed(2)}</p>

        <div className="flex items-center gap-3">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleStop}>Stop</Button>
        </div>
      </div>
    </>
  );
}
