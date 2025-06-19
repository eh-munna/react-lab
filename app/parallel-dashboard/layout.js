export default function DashboardLayout({ leftBottom, leftTop, right }) {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        {leftTop}
        {right}
        {leftBottom}
      </div>
    </>
  );
}
