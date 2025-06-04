'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from '../utils/cn';
export default function CustomLink({ path, children, ...props }) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <>
      <Link
        {...props}
        className={cn('', {
          'text-blue-500 underline': isActive,
        })}
        href={path}
      >
        {children}
      </Link>
    </>
  );
}
