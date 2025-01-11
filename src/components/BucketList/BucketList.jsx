import { useState } from 'react';
import ItemList from '../ItemList/ItemList';
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleList = (lists, checked, id) => {
    const nextSeen = lists.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          seen: checked,
          // seen: !list.seen,
        };
      }
      return list;
    });
    return nextSeen;
  };

  const handleToggleMyList = (checked, id) => {
    const nextSeen = handleToggleList(myList, checked, id);
    setMyList(nextSeen);

    /*
    const nextSeen = myList.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          seen: checked,
          // seen: !list.seen,
        };
      }
      return list;
    });
    setMyList(nextSeen);
  */
  };

  const handleToggleYourList = (checked, id) => {
    const nextSeen = handleToggleList(yourList, checked, id);
    setYourList(nextSeen);

    /*
    const nextSeen = yourList.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          seen: checked,
          // seen: !list.seen,
        };
      }
      return list;
    });
    setYourList(nextSeen);
  */
  };
  return (
    <>
      <h1 className="text-gray-950 font-bold text-2xl">Art Bucket List</h1>
      <h2 className="text-gray-950 font-bold text-xl">
        My list of art to see:
      </h2>
      <ItemList lists={myList} onToggle={handleToggleMyList} />
      <h2 className="text-gray-950 font-bold text-xl">
        Your list of art to see:
      </h2>
      <ItemList lists={yourList} onToggle={handleToggleYourList} />
    </>
  );
}
