import { useState } from 'react';
import { sculptureList } from '../../data/data';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;
  const handleNextSculpture = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handlePreviousSculpture = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  const sculpture = sculptureList[index];
  const { name, artist, url, description, alt } = sculpture;

  return (
    <>
      <div className="border border-indigo-600 rounded-md p-4 flex flex-col space-y-3 items-start">
        <p>
          {index + 1} of {sculptureList.length}
        </p>
        <h1 className="text-3xl text-sky-800">
          "{name}" by {artist}
        </h1>
        <img className="w-[250px]" src={url} alt={alt} />

        <div className="flex space-x-2">
          {hasPrev && (
            <button
              className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
              onClick={handlePreviousSculpture}
            >
              Previous Sculpture
            </button>
          )}

          {hasNext && (
            <button
              className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
              onClick={handleNextSculpture}
            >
              Next Sculpture
            </button>
          )}
        </div>

        <div>
          {showMore ? (
            <button
              className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
              onClick={handleToggleMore}
            >
              Hide Description
            </button>
          ) : (
            <button
              className="border border-indigo-500 p-1 rounded-md bg-sky-950 text-white"
              onClick={handleToggleMore}
            >
              Show Description
            </button>
          )}
        </div>

        <p>{showMore && description}</p>
      </div>
    </>
  );
}
