import { useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/ui/Button';

export default function Form() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <SectionHeading>
        Example: Focusing a text input using useRef
      </SectionHeading>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          className="border border-gray-400 px-1"
          type="text"
        />
        <Button onClick={handleFocus}>Click to focus</Button>
      </div>
    </>
  );
}
