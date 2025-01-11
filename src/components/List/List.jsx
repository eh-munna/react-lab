import { useState } from 'react';

let nextId = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
];

export default function List() {
  const insertAt = 1;
  const [artists, setArtists] = useState(initialArtists);
  const [name, setName] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleClick = () => {
    const nextArtists = [
      ...artists.slice(0, insertAt),
      { id: nextId++, name: name },
      ...artists.slice(insertAt),
    ];
    setArtists(nextArtists);
    setName('');
  };

  const handleReverse = () => {
    const reversedArtists = [...artists].reverse();
    setArtists(reversedArtists);
    // const reversedArtists = [...artists];
    // reversedArtists.reverse()
    // setArtists(reversedArtists);
  };

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <div className="w-4/12 flex flex-col gap-2">
        <input
          className="border border-gray-500 px-1"
          value={name}
          onChange={handleChange}
        />
        <button
          className="bg-gray-200 border border-gray-500"
          onClick={handleClick}
        >
          Insert
        </button>
      </div>

      <div>
        <button
          className="bg-gray-200 border border-gray-500 p-1 font-sm"
          onClick={handleReverse}
        >
          Reverse
        </button>
      </div>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
