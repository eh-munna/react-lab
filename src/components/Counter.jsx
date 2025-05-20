import { useRef } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useTheme } from '../contexts';
import { Button } from './ui/Button';
import { SectionHeading } from './ui/SectionHeading';

export default function Counter() {
  let ref = useRef(0);
  const { darkMode } = useTheme();

  return (
    <>
      <div className="space-y-4">
        <SectionHeading>Adding a ref to a component</SectionHeading>

        <Button
          onClick={() => {
            ref.current = ref.current + 1;
            toast.info(`You clicked ${ref.current} times`, {
              position: 'top-center',
              autoClose: 2000,
              transition: Bounce,
              theme: darkMode ? 'dark' : 'light',
            });
          }}
        >
          Click to see result
        </Button>
      </div>
    </>
  );
}
