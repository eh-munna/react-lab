import Link from 'next/link';
import CustomLink from './CustomLink';

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-purple-100 shadow-md border-b border-amber-100">
        <div>
          <h1 className="cursor-pointer text-3xl font-bold text-cyan-400">
            <Link href={`/`}>ReactLab</Link>
          </h1>
        </div>

        <ul className="flex space-x-4 text-lg">
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            <CustomLink path="/">Home</CustomLink>
          </li>
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            <CustomLink path="/dashboard">Dashboard</CustomLink>
          </li>
          <li className="font-bold text-amber-900 hover:text-red-950 transition-all duration-300">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}
