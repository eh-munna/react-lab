import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#">Home</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
