import DashboardNavbar from '../components/DashboardNavbar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex gap-12">
        <div className="border-r">
          <DashboardNavbar />
        </div>
        <div className="p-4 mt-6">{children}</div>
      </div>
    </>
  );
}
