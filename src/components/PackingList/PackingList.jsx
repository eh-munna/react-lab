function Item({ name, isPacked }) {
  let itemContent = name;
  if (isPacked) {
    itemContent = name + ' ✅';
  }
  return <li>{itemContent}</li>;
}

export default function PackingList() {
  return (
    <>
      <div className="py-[150px]">
        <h1 className="text-2xl my-2 font-bold">Sally Ride's Packing List</h1>
        <h3>
          If packing done then will display tick ✅ otherwise just the item name
        </h3>

        <ul className="my-6 space-y-1 list-disc list-inside">
          <Item isPacked={true} name="Space suit" />
          <Item isPacked={true} name="Helmet with a golden leaf" />
          <Item isPacked={false} name="Photo of Tam" />
        </ul>
      </div>
    </>
  );
}
