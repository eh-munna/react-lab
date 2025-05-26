import Link from 'next/link';

export default function DashboardNavbar() {
  return (
    <>
      <nav className="p-4 bg-purple-100 shadow-md border-b border-amber-100 min-h-screen">
        <ul className="flex flex-col gap-3 space-x-4 text-lg">
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
