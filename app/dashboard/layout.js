export default function DashboardLayout({ navigation, content, activity }) {
  return (
    <>
      <div className="flex min-h-[85vh] bg-gray-100 p-4 space-x-4">
        <aside className="w-1/5 bg-blue-950 rounded-xl shadow p-4">
          {navigation}
        </aside>
        <main className="flex-1 bg-blue-950 rounded-xl shadow p-4">
          {content}
        </main>
        <section className="w-1/4 bg-blue-950 rounded-xl shadow p-4">
          {activity}
        </section>
      </div>
    </>
  );
}
