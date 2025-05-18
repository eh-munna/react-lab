import { useState } from 'react';
import SizeProvider from '../contexts/SizeContext';
import List from './List';

export default function Gallery() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <div className="my-6">
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <SizeProvider value={imageSize}>
        <List />
      </SizeProvider>
    </div>
  );
}
