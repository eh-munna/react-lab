import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="flex items-center space-x-2">
      <span className="text-xl font-bold">Documentation</span>
    </Link>
  );
}
