export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-3">{children}</div>
    </>
  );
}
